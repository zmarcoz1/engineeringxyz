# Changelog

## Version 2.0 – Website upgrade with Firebase lead capture (2025-09-04)

### Added

* **Firebase integration:** Added `js/firebase-init.js` to initialize the Firestore database and expose a global `db` instance. Added `js/utils/utm.js` to capture and store UTM parameters, and `js/lead-form.js` to handle form validation and lead submission.
* **Serverless notifications:** Added Cloud Function `functions/index.js` which publishes new lead data to a Pub/Sub topic (`new-lead`) with a shared secret. Added Apps Script `apps-script/Code.gs` that receives Pub/Sub push messages, verifies the shared secret and sends notification emails to two recipients via Gmail.
* **Analytics and pixels:** Injected Google Analytics (GA4), Meta Pixel and LinkedIn Insight tags into every page. Added conversion tracking on the thank‑you page and in the lead form submission script.
* **SEO enhancements:** Added unique `<title>` and `<meta name="description">` tags to every page, canonical links, Open Graph and Twitter Card metadata, robots directives and JSON‑LD structured data (Organization, WebSite and BreadcrumbList). Added `sitemap.xml` and `robots.txt`.
* **Contact form:** Replaced Formspree form with a custom form capturing name, email, phone, message and consent checkbox. Data is validated client‑side and stored in Firestore; UTM parameters, user agent, page path, IP and timestamp are recorded. Added `components/contact-form.html` as a reusable form component.
* **Telephone update:** Replaced all occurrences of the old phone number with `760‑515‑1517` across pages and structured data.
* **File structure:** Created `css/`, `js/`, `components/`, `functions/` and `apps-script/` directories for better organisation. Copied the existing style and script files into the new structure and updated HTML references accordingly.
* **Miscellaneous:** Added `sitemap.xml` and `robots.txt` pointing to the future domain. Added placeholders for LinkedIn conversion IDs and Firebase configuration values. Updated navigation, translation script references and included UTM storage on every page.

### Changed

* Updated every HTML file to include analytics tags, SEO metadata, structured data and breadcrumbs. Adjusted `meta` tags and `<title>` values for uniqueness and best SEO practices.
* Converted the contact form to use the new lead capture pipeline and added accessibility attributes and validation messages.
* Added event handlers on the thank‑you page to trigger conversion events for GA4, Meta and LinkedIn.

### Removed

* Removed dependency on Formspree for contact submissions.
* No other functionality was removed; existing styles and navigation remain intact.