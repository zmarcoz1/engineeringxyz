/* ==========================================================================
   EngineeringXYZ — shared behaviour
   1. Mobile navigation toggle
   2. GA4 loading, UTM persistence, delegated event tracking
   3. Contact form
   4. Resource (checklist) form
   ========================================================================== */

(function () {
  "use strict";

  var GA_MEASUREMENT_ID = "G-46QJH4C15V";

  var FORM_ENDPOINT =
    "https://script.google.com/macros/s/" +
    "AKfycbxEP8hRPrNCvIPtIqf__0DNUTAW_kniPe30e2UwrBinyEtTOkpMsVtzD2cDU3YPrSk0dA/exec";

  /* Apps Script rejects a submission made under three seconds after load. */
  var MIN_ELAPSED_MS = 3000;
  var MIN_MESSAGE_LENGTH = 20;

  var UTM_KEYS = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gclid"
  ];

  var STORAGE_KEY = "exyz_campaign";
  var pageLoadedAt = Date.now();

  /* ======================================================================
     1. Navigation
     ====================================================================== */

  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("main-nav");

    if (!toggle || !nav) {
      return;
    }

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    /* Collapse the panel when a link inside it is followed. */
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a") && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ======================================================================
     2. Analytics
     ====================================================================== */

  /* Production hostnames only, so staging and local traffic stay out of GA4. */
  function isProductionHost() {
    return /(^|\.)engineeringxyz\.com$/.test(location.hostname);
  }

  function readStoredCampaign() {
    try {
      return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || {};
    } catch (error) {
      return {};
    }
  }

  /* Capture campaign parameters on landing and keep them for the session. */
  function captureCampaign() {
    var params = new URLSearchParams(location.search);
    var stored = readStoredCampaign();
    var found = false;

    UTM_KEYS.forEach(function (key) {
      var value = params.get(key);
      if (value) {
        stored[key] = value.slice(0, 250);
        found = true;
      }
    });

    if (found) {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
      } catch (error) {
        /* Private-mode storage failure is not worth surfacing. */
      }
    }

    return stored;
  }

  function loadGtag() {
    if (!isProductionHost()) {
      return;
    }

    var script = document.createElement("script");
    script.async = true;
    script.src =
      "https://www.googletagmanager.com/gtag/js?id=" +
      encodeURIComponent(GA_MEASUREMENT_ID);
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID);
  }

  /* Every event carries the stored campaign parameters. Never personal data. */
  function track(name, params) {
    if (!name || typeof window.gtag !== "function") {
      return;
    }

    var payload = {};
    var campaign = readStoredCampaign();

    Object.keys(campaign).forEach(function (key) {
      payload[key] = campaign[key];
    });

    if (params) {
      Object.keys(params).forEach(function (key) {
        payload[key] = params[key];
      });
    }

    window.gtag("event", name, payload);
  }

  /* One delegated listener for everything carrying data-ga-event. */
  function initEventDelegation() {
    document.addEventListener("click", function (event) {
      var el = event.target.closest("[data-ga-event]");
      if (!el) {
        return;
      }

      track(el.dataset.gaEvent, {
        link_text: (el.textContent || "").trim().slice(0, 100),
        page_path: location.pathname
      });
    });
  }

  /* ======================================================================
     3. Shared form helpers
     ====================================================================== */

  function setFieldError(form, fieldName, message) {
    var errorEl = form.querySelector('[data-error-for="' + fieldName + '"]');
    var input = form.elements[fieldName];
    var wrapper = input ? input.closest(".field") : null;

    if (errorEl) {
      errorEl.textContent = message || "";
    }

    if (wrapper) {
      wrapper.classList.toggle("field--invalid", Boolean(message));
    }

    if (input) {
      if (message) {
        input.setAttribute("aria-invalid", "true");
      } else {
        input.removeAttribute("aria-invalid");
      }
    }
  }

  function clearErrors(form, fieldNames) {
    fieldNames.forEach(function (name) {
      setFieldError(form, name, "");
    });

    var alert = form.querySelector(".form-alert");
    if (alert) {
      alert.innerHTML = "";
    }
  }

  function showAlert(form, message, fieldErrors) {
    var alert = form.querySelector(".form-alert");
    if (!alert) {
      return;
    }

    alert.textContent = message;

    /* Render the backend's per-field messages so misconfiguration is visible. */
    if (fieldErrors && Object.keys(fieldErrors).length) {
      var list = document.createElement("ul");

      Object.keys(fieldErrors).forEach(function (key) {
        var item = document.createElement("li");
        item.textContent = fieldErrors[key];
        list.appendChild(item);
        setFieldError(form, key, fieldErrors[key]);
      });

      alert.appendChild(list);
    }

    alert.scrollIntoView({ block: "nearest" });
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function elapsedMs() {
    return Date.now() - pageLoadedAt;
  }

  /* POSTs with URLSearchParams and no Content-Type header. Adding a JSON
     content type would trigger a preflight OPTIONS, which Apps Script does
     not answer — the request would fail silently. */
  function postToBackend(payload) {
    var body = new URLSearchParams();

    Object.keys(payload).forEach(function (key) {
      if (payload[key] !== undefined && payload[key] !== null) {
        body.append(key, payload[key]);
      }
    });

    return fetch(FORM_ENDPOINT, {
      method: "POST",
      body: body
    }).then(function (response) {
      return response.json();
    });
  }

  function addCampaignFields(payload) {
    var campaign = readStoredCampaign();

    ["utm_source", "utm_medium", "utm_campaign", "utm_content"].forEach(
      function (key) {
        if (campaign[key]) {
          payload[key] = campaign[key];
        }
      }
    );

    return payload;
  }

  /* ======================================================================
     4. Contact form
     ====================================================================== */

  var CONTACT_FIELDS = [
    "name",
    "company",
    "email",
    "phone",
    "category",
    "timeline",
    "message",
    "consent"
  ];

  function validateContact(form) {
    var values = {
      name: form.elements.name.value.trim(),
      company: form.elements.company.value.trim(),
      email: form.elements.email.value.trim(),
      category: form.elements.category.value,
      message: form.elements.message.value.trim(),
      consent: form.elements.consent.checked
    };

    var errors = {};

    if (!values.name) {
      errors.name = "Enter your name.";
    }

    if (!values.company) {
      errors.company = "Enter your company name.";
    }

    if (!values.email) {
      errors.email = "Enter your work email.";
    } else if (!isValidEmail(values.email)) {
      errors.email = "Enter a valid work email address.";
    }

    if (!values.category) {
      errors.category = "Select a project category.";
    }

    if (!values.message) {
      errors.message = "Provide a brief project description.";
    } else if (values.message.length < MIN_MESSAGE_LENGTH) {
      errors.message =
        "Provide a little more detail so the engineering need can be reviewed.";
    }

    if (!values.consent) {
      errors.consent = "Confirm the acknowledgement so we can reply.";
    }

    return errors;
  }

  function showContactSuccess(form, name, hadFile) {
    var panel = form.closest(".form-panel");
    if (!panel) {
      return;
    }

    var safeName = (name || "").trim();

    var wrap = document.createElement("div");
    wrap.className = "form-success";
    wrap.setAttribute("role", "status");

    var heading = document.createElement("h2");
    heading.textContent = "Message received";
    wrap.appendChild(heading);

    var line = document.createElement("p");
    line.textContent = safeName
      ? "Thank you, " + safeName + ". Your project description has been sent."
      : "Thank you. Your project description has been sent.";
    wrap.appendChild(line);

    /* The backend takes form fields only — never imply a file was received. */
    if (hadFile) {
      var fileLine = document.createElement("p");
      fileLine.textContent =
        "Your attachment was not sent with this form. Email it to " +
        "info@engineeringxyz.com and it will be matched to your inquiry.";
      wrap.appendChild(fileLine);
    }

    var reply = document.createElement("p");
    reply.textContent =
      "Expect a reply within one business day. If the project is urgent, " +
      "call 760-515-1517.";
    wrap.appendChild(reply);

    panel.innerHTML = "";
    panel.appendChild(wrap);
    panel.scrollIntoView({ block: "start" });
  }

  function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) {
      return;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      /* Honeypot and time trap: abort silently rather than explaining why. */
      if (form.elements.website.value) {
        return;
      }

      if (elapsedMs() < MIN_ELAPSED_MS) {
        return;
      }

      clearErrors(form, CONTACT_FIELDS);

      var errors = validateContact(form);
      var errorKeys = Object.keys(errors);

      if (errorKeys.length) {
        errorKeys.forEach(function (key) {
          setFieldError(form, key, errors[key]);
        });
        showAlert(form, "Check the highlighted fields and try again.");

        var firstInput = form.elements[errorKeys[0]];
        if (firstInput) {
          firstInput.focus();
        }
        return;
      }

      var button = form.querySelector('button[type="submit"]');
      var originalLabel = button.textContent;
      button.disabled = true;
      button.textContent = "Sending…";

      var fileInput = form.elements.attachment;
      var hadFile = Boolean(fileInput && fileInput.files.length);
      var senderName = form.elements.name.value.trim();

      var payload = addCampaignFields({
        name: senderName,
        company: form.elements.company.value.trim(),
        email: form.elements.email.value.trim(),
        phone: form.elements.phone.value.trim(),
        category: form.elements.category.value,
        timeline: form.elements.timeline.value,
        message: form.elements.message.value.trim(),
        consent: "yes",
        website: "",
        elapsed_ms: elapsedMs()
      });

      postToBackend(payload)
        .then(function (out) {
          if (out && out.ok) {
            /* Key event fires only after the server confirms success. */
            track("contact_form_submit", {
              category: payload.category,
              timeline: payload.timeline || "unspecified"
            });
            showContactSuccess(form, senderName, hadFile);
            return;
          }

          button.disabled = false;
          button.textContent = originalLabel;
          showAlert(
            form,
            (out && out.message) ||
              "The message could not be sent. Email info@engineeringxyz.com " +
                "or call 760-515-1517.",
            out && out.errors
          );
        })
        .catch(function () {
          button.disabled = false;
          button.textContent = originalLabel;
          showAlert(
            form,
            "The message could not be sent. Email info@engineeringxyz.com " +
              "or call 760-515-1517."
          );
        });
    });
  }

  /* ======================================================================
     5. Resource form (Fixture Design Checklist)
     ====================================================================== */

  function showResourceSuccess(form, email) {
    var panel = form.closest(".resource-form");
    if (!panel) {
      return;
    }

    var wrap = document.createElement("div");
    wrap.setAttribute("role", "status");

    var heading = document.createElement("h3");
    heading.textContent = "Request received";
    wrap.appendChild(heading);

    var line = document.createElement("p");
    line.textContent =
      "The Fixture Design Checklist will be sent to " +
      email +
      " within one business day. If it does not arrive, check your spam " +
      "folder or write to info@engineeringxyz.com.";
    wrap.appendChild(line);

    panel.innerHTML = "";
    panel.appendChild(wrap);
  }

  function initResourceForm() {
    var form = document.getElementById("resource-form");
    if (!form) {
      return;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (form.elements.website.value) {
        return;
      }

      if (elapsedMs() < MIN_ELAPSED_MS) {
        return;
      }

      clearErrors(form, ["name", "company", "email"]);

      var name = form.elements.name.value.trim();
      var company = form.elements.company.value.trim();
      var email = form.elements.email.value.trim();
      var errors = {};

      if (!name) {
        errors.name = "Enter your name.";
      }

      if (!company) {
        errors.company = "Enter your company name.";
      }

      if (!email) {
        errors.email = "Enter your work email.";
      } else if (!isValidEmail(email)) {
        errors.email = "Enter a valid work email address.";
      }

      var errorKeys = Object.keys(errors);

      if (errorKeys.length) {
        errorKeys.forEach(function (key) {
          setFieldError(form, key, errors[key]);
        });
        showAlert(form, "Check the highlighted fields and try again.");
        return;
      }

      var button = form.querySelector('button[type="submit"]');
      var originalLabel = button.textContent;
      button.disabled = true;
      button.textContent = "Sending…";

      /* company and category are required by the backend; without them the
         request comes back as VALIDATION_ERROR. */
      var payload = addCampaignFields({
        name: name,
        company: company,
        email: email,
        category: "other",
        message:
          "Fixture Design Checklist requested from the Resources page. " +
          "Send the checklist PDF to " +
          email +
          ".",
        consent: "yes",
        website: "",
        elapsed_ms: elapsedMs()
      });

      postToBackend(payload)
        .then(function (out) {
          if (out && out.ok) {
            track("resource_download", { resource: "fixture_design_checklist" });
            showResourceSuccess(form, email);
            return;
          }

          button.disabled = false;
          button.textContent = originalLabel;
          showAlert(
            form,
            (out && out.message) ||
              "The request could not be sent. Email info@engineeringxyz.com.",
            out && out.errors
          );
        })
        .catch(function () {
          button.disabled = false;
          button.textContent = originalLabel;
          showAlert(
            form,
            "The request could not be sent. Email info@engineeringxyz.com."
          );
        });
    });
  }

  /* ======================================================================
     Boot
     ====================================================================== */

  captureCampaign();
  loadGtag();

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initEventDelegation();
    initContactForm();
    initResourceForm();
  });
})();
