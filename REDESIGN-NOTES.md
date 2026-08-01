# EngineeringXYZ redesign — build, go-live, and rollback notes

The redesign is **live at the site root**. `https://www.engineeringxyz.com/`
now serves the new homepage; the previous site is retained in the repo as
`*-old.html` for rollback.

Every push to `main` redeploys `./public` via
`.github/workflows/deploy-pages.yml`.

---

## 1. Current structure of `public/`

### The live site

```
public/
├── index.html          Home  (the landing page)
├── services.html       Six services: #prototypes #fixtures #inspection
│                       #design #production #capacity
├── projects.html       Four case studies: #architecture #gantry
│                       #inspection #benchtop
├── about.html          Consultancy, founder, working style, experience areas
├── resources.html      Gated Fixture Design Checklist + six open guides
├── contact.html        Contact form
├── privacy.html        Privacy policy (legacy styling, see §6)
├── 404.html            Not-found page (legacy styling)
├── css/style.css       The redesign's stylesheet
├── js/script.js        Nav toggle, analytics, both forms
├── llms.txt            Plain-language summary for AI crawlers
├── robots.txt          Crawler allow-list + sitemap pointer
├── sitemap.xml         Seven canonical URLs
└── assets/             WebP + JPEG pairs, logo mark, OG image
```

### Redirect stubs for retired URLs

GitHub Pages serves no server-side redirects, so each retired path is a small
HTML file carrying `<link rel="canonical">` (passes ranking signals),
`<meta http-equiv="refresh">` (moves visitors), and `noindex, follow`.

| Old URL | Now points to |
|---|---|
| `portfolio.html` | `projects.html` |
| `testimonials.html` | `about.html` |
| `case-study.html` | `projects.html` |
| `insights.html` | `resources.html` |
| `fixture-checklist.html` | `resources.html` |

### Rollback copies and legacy assets

`index-old.html`, `about-old.html`, `services-old.html`, `contact-old.html`
are the previous pages, unlinked from anywhere. They — plus `privacy.html`,
`404.html`, `resume.html`, and `thankyou.html` — load `css/legacy.css` and
`js/legacy.js`, which are the previous `style.css` and `script.js` renamed.
That rename is what lets the redesign own the clean `css/style.css` and
`js/script.js` paths without breaking anything that still uses the old markup.

---

## 2. How to edit copy

Every page is plain HTML. Open the file, edit the text, commit, push. There is
no build step, no template engine, no npm.

Shared copy (nav labels, footer, contact details) is duplicated across the six
pages — search and replace across `public/*.html`. The phone number appears as
both display text and a `tel:` href; the email as both display text and a
`mailto:` href.

**The FAQ is the one exception.** The five answers on `index.html` appear
twice: once as visible `<dd>` text, once inside the FAQPage JSON-LD in
`<head>`. Google invalidates the rich result if they differ by a single
character, so edit both and keep the em-dashes (`—`) and the straight
apostrophe in "client's" exactly as they are.

## 3. How to replace images

Each content image is a `<picture>` with a WebP source and a JPEG fallback,
with explicit `width`/`height` to prevent layout shift:

```html
<picture>
  <source srcset="assets/case-gantry.webp" type="image/webp" />
  <img src="assets/case-gantry.jpg" alt="…" width="800" height="600"
       loading="lazy" decoding="async" />
</picture>
```

Export the replacement at the same pixel dimensions in both formats,
overwrite the two files in `public/assets/`, and update the `alt` text. If the
dimensions change, update `width`/`height` too.

Current sizes: hero 1600×900, homepage cards 720×480, case studies 800×600,
About portrait 400×400, About workspace 800×1000, OG image 1200×630.

**The two empty Selected Work slots on the homepage** are
`<div class="placeholder-media">` blocks reading "Project photography
pending". Replace each with a `<picture>` block once real photos exist. Do not
fill them with stock art.

---

## 4. SEO and AI-crawler configuration

**Per page:** unique `<title>` and meta description, `<link rel="canonical">`
on the absolute `https://www.engineeringxyz.com/…` URL, Open Graph
(type, site_name, url, title, description, image 1200×630, image:alt),
`twitter:card`, and `robots: max-image-preview:large` so image thumbnails are
eligible in results.

**Structured data.** Home carries a JSON-LD `@graph` with four nodes:
Organization + ProfessionalService (name, url, logo, telephone, email,
founder, PostalAddress, areaServed, seven `knowsAbout` topics, and a
six-item `hasOfferCatalog`), WebSite, BreadcrumbList, and FAQPage. The other
five pages each carry a BreadcrumbList. All `@id`/`url`/`item` values are
absolute root URLs.

**FAQ rich result.** The five FAQPage answers match the visible `<dd>` text
byte for byte — verified programmatically, not by eye.

**`robots.txt`** names the search and AI crawlers explicitly — Googlebot,
Googlebot-Image, Bingbot, DuckDuckBot, Applebot, GPTBot, OAI-SearchBot,
ChatGPT-User, ClaudeBot, Claude-User, Claude-SearchBot, PerplexityBot,
Perplexity-User, Google-Extended, Applebot-Extended, CCBot,
Meta-ExternalAgent, Amazonbot — rather than relying on a bare wildcard, so a
future blanket restriction cannot silently cut off AI answer engines. It
disallows `/lab/`, `/thank-you/`, `/thankyou.html`, and `/*?utm_` to prevent
duplicate campaign URLs being indexed, and points at the sitemap.

**`sitemap.xml`** lists the six pages plus `privacy.html`, each with
`lastmod`. Redirect stubs are excluded.

**`llms.txt`** at the root gives AI crawlers a plain-markdown summary:
positioning, the six services, the process, the three documented outcomes,
a page map, and an explicit note that the company publishes no staff-size
claims.

**Why this is AI-legible.** The site is static HTML with real content in the
initial response — no client-side rendering, so a crawler that does not
execute JavaScript still sees every word. Semantics carry meaning: `<article>`
for cards, `<figure>`/`<figcaption>` for images, `<dl>`/`<dt>`/`<dd>` for the
FAQ, `header`/`main`/`footer` as siblings, one `h1` per page with no skipped
levels.

**Still to do in Search Console:** resubmit the sitemap, and request
re-indexing of the five retired URLs so the redirects are picked up quickly.

---

## 5. Factual claims that still need verification

Nothing below is invented, but these were carried from earlier drafts and are
now publicly live.

- [ ] **"49 motors to 4"** — confirm the numbers and that citing the project
      is permitted. Used on Home (proof strip and Selected Work) and Projects.
- [ ] **"10+ years of engineering and automation experience"** — confirm.
- [ ] **Peer-reviewed publications: 4** — confirm this is the number you want
      published (About page).
- [ ] **Two U.S. patent applications in process** — stated as "2" on About
      (19/262,799 and 19/264,592, filed July 2025). Confirm still current, and
      that the machine geometry stays undescribed.
- [ ] **"Replies within one business day"** — a public commitment on Contact,
      Home, and in the auto-reply. Confirm you can hold it.
- [ ] **"First scopes typically run two to four weeks"** — FAQ 2.
- [ ] **NDA availability** — appears on Home, Contact, and in the FAQ.
- [ ] **All four case studies** — every situation, constraint, and outcome
      sentence needs your review and a confidentiality check. "Substantially
      reduced manual effort" on the benchtop case is deliberately
      unquantified; replace with a real figure or leave it.
- [ ] **Service region wording** — "Southern California on-site and remote
      clients nationwide".
- [ ] **The three testimonials** are quoted verbatim from LinkedIn
      recommendations. Consider getting explicit permission to display them.

The **"two days → 40 seconds" scheduling metric** is not used anywhere. The
homepage proof strip carries "49 → 4 motors", "10+ years", and
"Concept → build-ready". Add the scheduling metric if you want it, once
verified.

## 6. Known gaps and deliberate deviations

1. **No postal address in the footer.** CAN-SPAM requires a full physical
   postal address, and one was not available at build time. The footer carries
   "Irvine, CA · Serving Southern California and remote clients nationwide",
   which is **not sufficient on its own**. **This is a blocker before any cold
   email links to the site.** A registered-agent address or PO box qualifies.
   Add it inside the `<address>` element in the footer of all six pages.

2. **Primary button text is navy, not the brief's cream.** Cream on gold
   measures **2.03:1** and fails WCAG AA; navy on gold measures **5.91:1**,
   and the hover state (cream on `#3f5e7b`) measures **6.00:1**. The button
   still reads as gold. Revert in `.btn--primary` in `css/style.css` if you
   prefer the original colour and accept the failure.

3. **`privacy.html` and `404.html` still use the old design.** They load
   `css/legacy.css`, so they work but do not match the new look. Restyling
   them to the new system is a small, contained job worth doing.

4. **The prototype's illustrations were not used.** `machine1-3.png` and
   `robotic_arm.png` are AI-generated clipart (flat-vector robot arms, glowing
   nodes) and fall inside the brief's banned imagery list. Case-study and card
   images use the abstracted technical renders already in `assets/`, each with
   a neutral caption stating the render is illustrative and photography is
   pending. No factual caption sits under illustrative art.

5. **The contact form's file input does not upload.** The Apps Script backend
   receives form fields over `URLSearchParams` and cannot take a file. The
   field is kept as a useful prompt; the hint says files are not transmitted,
   and the success message tells anyone who selected one to email it. Nothing
   claims an attachment was received.

## 7. Assets still needed

- **Real hardware photography** — the highest-impact item. Three to five
  detail shots (clamp, locator nest, frame weldment, wire routing) would fill
  the two empty homepage slots and replace the four illustrative case-study
  renders. Patent filings are complete, so photography is safe.
- **The Fixture Design Checklist PDF.** The Resources form currently emails
  you a request; there is no PDF to send yet.
- **The six guide articles.** Their cards link to Contact ("Request this
  guide") rather than to dead URLs. Write them, or trim the list.
- **A workspace or CAD photo** for About, replacing the exploded-view render.
- **A full physical postal address** (§6.1).
- **The original logo typeface**, if one exists. The wordmark uses Nunito 900
  beside the hexagon mark in `assets/logo-mark.svg`.

---

## 8. Wiring reference

**Google Analytics 4** — `G-46QJH4C15V`. `js/script.js` loads gtag **only**
when `/(^|\.)engineeringxyz\.com$/` matches the hostname, so previews and
localhost never reach reporting. On landing it stores `utm_source`,
`utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, and `gclid` in
`sessionStorage` under `exyz_campaign` and attaches them to every event. One
delegated click listener fires `gtag('event', el.dataset.gaEvent, …)` for any
element with `data-ga-event`.

Mark as Key events in the GA4 UI: `contact_form_submit`, `resource_download`,
`phone_click`, `email_click`. The first two fire only after the server returns
`ok: true` — never on button click — so failed validation cannot inflate them.

**Contact form backend** — Google Apps Script web app. Posts
`URLSearchParams` with **no `Content-Type` header**: that keeps it a simple
CORS request, and Apps Script does not answer preflight `OPTIONS`. Adding a
JSON content type breaks it silently. Contract verified against the deployed
script's source:

| Field | Required | Accepted values |
|---|---|---|
| `name` | yes | free text |
| `company` | yes | free text |
| `email` | yes | valid address |
| `phone` | no | free text |
| `category` | yes | `machine prototype`, `fixture or workholding`, `inspection or test system`, `production equipment`, `mechanical design or drawings`, `engineering capacity`, `troubleshooting or project recovery`, `other` |
| `timeline` | no | `urgent`, `1-3 months`, `3-6 months`, `exploring`, empty |
| `message` | yes | free text, **20 character minimum** |
| `consent` | yes | `yes` |
| `website` | — | honeypot, must be empty |
| `elapsed_ms` | — | ms since page load, must be ≥ 3000 |

A bad payload returns `{ok:false, code:"VALIDATION_ERROR", errors:{field:msg}}`;
`showAlert()` renders those per-field messages rather than a generic failure,
so a future contract change is diagnosable from the browser.

If you edit the Apps Script you must **deploy a new version** — saving alone
does not update the live web app. The Gmail send quota is 100 emails/day.

---

## 9. Rollback

If the new site needs to come down, revert the go-live commit:

```bash
git revert <go-live-commit-sha>
git push
```

Pages redeploys the previous `./public` within a minute or two.

If a revert is messy, the `*-old.html` files are a second safety net — they
are still in the repo. Restoring the previous homepage by hand is:

```bash
git mv public/index.html public/index-new.html
git mv public/index-old.html public/index.html
git push
```

Note that `index-old.html` references `css/legacy.css` and `js/legacy.js`,
both of which are still present, so it renders correctly on its own.

## 10. Verification performed

Run against a local server
(`python -m http.server 8765 --directory public`):

- All six pages return 200 with **zero console errors** and no failed
  requests; CSS, JS, logo, and hero all load from the new root paths.
- All five redirect stubs return 200, carry `noindex, follow`, and canonical
  to the correct new page.
- `privacy.html` and `404.html` still render on `css/legacy.css`.
- Canonicals are absolute root URLs on all six pages; none carries `noindex`;
  no `/v3/` reference survives anywhere.
- JSON-LD parses on every page; the Home `@graph` has 4 nodes, a 6-service
  catalogue, and 5 FAQ entries.
- FAQ JSON-LD matches the visible `<dd>` text **byte for byte**, all five.
- `header`/`main`/`footer` siblings on all six pages; one `h1` each; no
  skipped heading levels; every `<img>` has `alt`, `width`, `height`.
- `grep -rn "info@engineeringxyz" public/` → no matches (the legacy pages and
  `translations.js` were corrected to `mwu@` during go-live).
- No `.dc.html` reference anywhere; no path contains a space.
- Contact form posts to the live endpoint and returns `{"ok":true}`; the
  resource payload (`company` + `category: "other"`) also returns
  `{"ok":true}`; a bad payload returns `VALIDATION_ERROR` with per-field
  errors, which the UI renders.
- Honeypot submission makes no network request; the field is off-screen,
  `tabindex="-1"`, `aria-hidden`.
- Client-side validation blocks submission, shows inline messages, and moves
  focus to the first invalid field.
- gtag does not load on localhost.
- Hamburger appears below 1160px; the desktop nav does not wrap above it.
- No horizontal overflow at 375px on any page.

Two test rows were submitted to the live Sheet during earlier checks, both
named **"ZZ TEST DELETE ME"** — delete them and the two notification emails.
