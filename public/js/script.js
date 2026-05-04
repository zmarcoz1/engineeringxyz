const SITE_URL = "https://zmarcoz1.github.io/engineeringxyz"
const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/assets/hero-benchtop-cad-exploded-v3.png`
const GA_MEASUREMENT_ID = "G-46QJH4C15V"

const PAGE_META = {
  "index.html": {
    title: "EngineeringXYZ | Prototype Design, Fixture Design, and Machine Prototypes",
    description:
      "EngineeringXYZ helps hardware startups, small manufacturers, R&D teams, and production teams with prototype design, fixture design, machine prototypes, inspection systems, engineering drawings, and production support.",
    canonicalPath: "",
    image: DEFAULT_SOCIAL_IMAGE
  },
  "about.html": {
    title: "About EngineeringXYZ | Manufacturing Engineering Support for Hardware Teams",
    description:
      "Learn how EngineeringXYZ supports hardware startups, R&D teams, small manufacturers, and production teams with machine prototypes, fixture design, engineering drawings, and production hardware support.",
    canonicalPath: "about.html",
    image: DEFAULT_SOCIAL_IMAGE
  },
  "services.html": {
    title: "Services | Prototype Design, Fixture Design, Engineering Drawings, and Production Support",
    description:
      "Explore EngineeringXYZ services in prototype design, fixture design, machine prototypes, inspection systems, engineering drawings, production support, and manufacturing engineering support.",
    canonicalPath: "services.html",
    image: DEFAULT_SOCIAL_IMAGE
  },
  "portfolio.html": {
    title: "Projects | Machine Prototypes, Inspection Systems, and Fixture Design Work",
    description:
      "Browse EngineeringXYZ project examples covering machine prototypes, inspection systems, fixture design, engineering drawings, and production hardware support.",
    canonicalPath: "portfolio.html",
    image: `${SITE_URL}/assets/inspection-dental-staging-processed.png`
  },
  "case-study.html": {
    title: "Case Study | Inspection Staging System for Dental Impression Fixtures",
    description:
      "See how EngineeringXYZ reduced one dental impression scanning workflow from 2 days to 40 seconds through fixture handling, inspection staging, and machine flow design.",
    canonicalPath: "case-study.html",
    image: `${SITE_URL}/assets/inspection-dental-staging-processed.png`
  },
  "insights.html": {
    title: "Engineering Notes | Fixture Design, Machine Prototypes, and Production Support",
    description:
      "Read direct engineering notes from EngineeringXYZ on fixture design, prototype stations, inspection flow, guarding, and manufacturing engineering support.",
    canonicalPath: "insights.html",
    image: DEFAULT_SOCIAL_IMAGE
  },
  "contact.html": {
    title: "Contact EngineeringXYZ | Prototype Design and Fixture Design Support",
    description:
      "Contact EngineeringXYZ about prototype design, fixture design, machine prototypes, inspection systems, engineering drawings, and production support.",
    canonicalPath: "contact.html",
    image: DEFAULT_SOCIAL_IMAGE
  },
  "testimonials.html": {
    title: "Testimonials | EngineeringXYZ Prototype and Fixture Design Feedback",
    description:
      "Read feedback on EngineeringXYZ work in machine prototypes, fixture design, engineering drawings, inspection systems, and production support.",
    canonicalPath: "testimonials.html",
    image: DEFAULT_SOCIAL_IMAGE
  },
  "fixture-checklist.html": {
    title: "Fixture Design Checklist | Build-Ready Review for Manufacturing Teams",
    description:
      "Use this fixture design checklist from EngineeringXYZ to review loading, access, variation, engineering drawings, and build readiness before release.",
    canonicalPath: "fixture-checklist.html",
    image: DEFAULT_SOCIAL_IMAGE
  },
  "privacy.html": {
    title: "Privacy Policy | EngineeringXYZ",
    description: "Read the EngineeringXYZ privacy policy for website inquiries, project discussions, and information handling.",
    canonicalPath: "privacy.html",
    image: DEFAULT_SOCIAL_IMAGE
  },
  "thankyou.html": {
    title: "Thank You | EngineeringXYZ Inquiry Received",
    description: "Your inquiry has been received by EngineeringXYZ.",
    canonicalPath: "thankyou.html",
    image: DEFAULT_SOCIAL_IMAGE,
    robots: "noindex, follow"
  },
  "resume.html": {
    title: "Partner Intake | EngineeringXYZ Contractor and Specialist Form",
    description:
      "Share contractor or specialist information related to prototype design, fixture design, machine prototypes, and production support with EngineeringXYZ.",
    canonicalPath: "resume.html",
    image: DEFAULT_SOCIAL_IMAGE,
    robots: "noindex, follow"
  },
  "404.html": {
    title: "Page Not Found | EngineeringXYZ",
    description: "The requested EngineeringXYZ page could not be found.",
    canonicalPath: "404.html",
    image: DEFAULT_SOCIAL_IMAGE,
    robots: "noindex, nofollow"
  }
}

const getPageKey = () => {
  const { pathname } = window.location

  if (!pathname || pathname.endsWith("/")) {
    return "index.html"
  }

  const fileName = pathname.split("/").pop()

  return fileName || "index.html"
}

const pageKey = getPageKey()
const activeMeta = PAGE_META[pageKey] || PAGE_META["index.html"]

const upsertMeta = (attribute, key, value) => {
  if (!value) {
    return
  }

  let metaTag = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!metaTag) {
    metaTag = document.createElement("meta")
    metaTag.setAttribute(attribute, key)
    document.head.appendChild(metaTag)
  }

  metaTag.setAttribute("content", value)
}

const upsertLink = (rel, href) => {
  if (!href) {
    return
  }

  let linkTag = document.head.querySelector(`link[rel="${rel}"]`)

  if (!linkTag) {
    linkTag = document.createElement("link")
    linkTag.setAttribute("rel", rel)
    document.head.appendChild(linkTag)
  }

  linkTag.setAttribute("href", href)
}

const upsertStructuredData = (id, data) => {
  if (!data) {
    return
  }

  let scriptTag = document.head.querySelector(`script[data-schema-id="${id}"]`)

  if (!scriptTag) {
    scriptTag = document.createElement("script")
    scriptTag.type = "application/ld+json"
    scriptTag.setAttribute("data-schema-id", id)
    document.head.appendChild(scriptTag)
  }

  scriptTag.textContent = JSON.stringify(data)
}

const ensureAnalytics = () => {
  const gaSrc = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`

  if (!document.head.querySelector(`script[src="${gaSrc}"]`)) {
    const gaScript = document.createElement("script")
    gaScript.async = true
    gaScript.src = gaSrc
    document.head.appendChild(gaScript)
  }

  window.dataLayer = window.dataLayer || []

  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
  }

  if (!window.__engineeringxyzGaConfigured) {
    window.gtag("js", new Date())
    window.gtag("config", GA_MEASUREMENT_ID)
    window.__engineeringxyzGaConfigured = true
  }
}

const applySeoMetadata = () => {
  const canonicalUrl = activeMeta.canonicalPath
    ? `${SITE_URL}/${activeMeta.canonicalPath}`
    : `${SITE_URL}/`

  document.title = activeMeta.title
  upsertMeta("name", "description", activeMeta.description)
  upsertMeta("name", "robots", activeMeta.robots || "index, follow")
  upsertLink("canonical", canonicalUrl)

  upsertMeta("property", "og:site_name", "EngineeringXYZ")
  upsertMeta("property", "og:type", "website")
  upsertMeta("property", "og:title", activeMeta.title)
  upsertMeta("property", "og:description", activeMeta.description)
  upsertMeta("property", "og:url", canonicalUrl)
  upsertMeta("property", "og:image", activeMeta.image || DEFAULT_SOCIAL_IMAGE)

  upsertMeta("name", "twitter:card", "summary_large_image")
  upsertMeta("name", "twitter:title", activeMeta.title)
  upsertMeta("name", "twitter:description", activeMeta.description)
  upsertMeta("name", "twitter:image", activeMeta.image || DEFAULT_SOCIAL_IMAGE)
}

const applyStructuredData = () => {
  const canonicalUrl = activeMeta.canonicalPath
    ? `${SITE_URL}/${activeMeta.canonicalPath}`
    : `${SITE_URL}/`

  upsertStructuredData("organization", {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EngineeringXYZ",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/assets/logo.png`,
    sameAs: [
      "https://www.facebook.com/people/Engineeringxyz/61580466110112/",
      "https://www.linkedin.com/company/engineeringxyz"
    ]
  })

  upsertStructuredData("professional-service", {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "EngineeringXYZ",
    url: canonicalUrl,
    image: activeMeta.image || DEFAULT_SOCIAL_IMAGE,
    description: activeMeta.description,
    telephone: "+1-760-515-1517",
    email: "info@engineeringxyz.com",
    areaServed: "US",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Irvine",
      addressRegion: "CA",
      addressCountry: "US"
    },
    serviceType: [
      "Prototype design",
      "Fixture design",
      "Machine prototypes",
      "Inspection systems",
      "Engineering drawings",
      "Product design",
      "Production support",
      "Manufacturing engineering support"
    ],
    audience: [
      "Hardware startups",
      "Small manufacturers",
      "R&D teams",
      "Production teams"
    ]
  })

  if (pageKey !== "index.html") {
    return
  }

  const faqEntities = [...document.querySelectorAll(".faq-card")]
    .map((card) => {
      const question = card.querySelector("h3")?.textContent.trim()
      const answer = card.querySelector("p")?.textContent.trim()

      if (!question || !answer) {
        return null
      }

      return {
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer
        }
      }
    })
    .filter(Boolean)

  if (!faqEntities.length) {
    return
  }

  upsertStructuredData("faq-page", {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntities
  })
}

const refreshCommonCtas = () => {
  document.querySelectorAll("a.button, button.button").forEach((cta) => {
    const label = cta.textContent.trim()

    if (label !== "Book Free Diagnostic") {
      return
    }

    cta.textContent = "Request a Prototype Review"

    if (cta.tagName === "A") {
      cta.setAttribute("href", "contact.html#diagnostic")
    }
  })
}

ensureAnalytics()
applySeoMetadata()
applyStructuredData()
refreshCommonCtas()

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header")
  const toggle = document.querySelector(".nav-toggle")
  const nav = document.getElementById("mainNav")

  const syncHeaderState = () => {
    if (!header) {
      return
    }

    header.classList.toggle("is-scrolled", window.scrollY > 18)
  }

  syncHeaderState()
  window.addEventListener("scroll", syncHeaderState, { passive: true })

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open")
      toggle.classList.toggle("is-open", isOpen)
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false")
    })

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open")
        toggle.classList.remove("is-open")
        toggle.setAttribute("aria-expanded", "false")
      })
    })
  }

  const revealItems = document.querySelectorAll("[data-reveal]")

  if (!revealItems.length) {
    return
  }

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        }

        entry.target.classList.add("is-visible")
        observer.unobserve(entry.target)
      })
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.15
    }
  )

  revealItems.forEach((item) => observer.observe(item))
})
