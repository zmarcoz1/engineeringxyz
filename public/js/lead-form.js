// lead-form.js
// Handles validation and submission of the contact form. On success it writes
// the lead to Firestore, triggers analytics events and redirects to the
// thank‑you page. Requires firebase-init.js and utils/utm.js to be loaded.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Extract values and basic validation
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const phone = form.elements['phone'].value.trim();
    const message = form.elements['message'].value.trim();
    const consent = form.elements['consent'].checked;

    if (!name || !email || !message || !consent) {
      alert('請完整填寫姓名、Email、訊息並勾選同意。');
      return;
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('請輸入有效的電子郵件地址。');
      return;
    }

    // Attempt to fetch the user's IP address for logging. Fails silently if blocked.
    let ip = null;
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      ip = data.ip;
    } catch (err) {
      // ignore network errors
    }

    // Compose lead object
    const lead = {
      name,
      email,
      phone,
      message,
      consent,
      timestamp: new Date().toISOString(),
      page_path: window.location.pathname,
      user_agent: navigator.userAgent,
      ip: ip || null,
      ...window.utmUtils.getStoredUtmParams()
    };

    try {
      // Persist to Firestore
      await db.collection('leads').add(lead);

      // Fire conversion events as redundancy (GA/FB/LinkedIn will also fire on thank you page)
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', { form_name: 'contact', value: 0 });
      }
      if (typeof fbq === 'function') {
        fbq('track', 'Lead');
      }
      if (typeof lintrk === 'function') {
        lintrk('track', { conversion_id: 'REPLACE_WITH_LINKEDIN_CONVERSION_ID' });
      }

      // Redirect to thank you page (updated to new filename)
      window.location.href = 'thankyou.html';
    } catch (error) {
      console.error('Lead submission failed', error);
      alert('提交表單時發生錯誤，請稍後再試。');
    }
  });
});