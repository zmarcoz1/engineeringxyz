# EngineeringXYZ redesign (v3) — build and go-live notes

The redesign is built as plain static HTML, CSS, and vanilla JavaScript and is
staged at **`public/v3/`**. The current live site is untouched and keeps
serving from `public/`.

Review it at `https://www.engineeringxyz.com/v3/` once this branch is merged
(every push to `main` redeploys `./public` via
`.github/workflows/deploy-pages.yml`).

---

## 1. What changed

### New files

```
public/v3/
├── index.html          Home
├── services.html       Six services, anchored #prototypes #fixtures
│                       #inspection #design #production #capacity
├── projects.html       Four case studies, anchored #architecture #gantry
│                       #inspection #benchtop
├── about.html          Consultancy, founder, working style, experience areas
├── resources.html      Gated Fixture Design Checklist + six open guides
├── contact.html        Contact form
├── css/style.css       One shared stylesheet
├── js/script.js        Nav toggle, analytics, both forms
├── llms.txt            Plain-language summary for AI crawlers
├── favicon.ico
└── assets/             WebP + JPEG pairs, logo mark, OG image
```

### Modified files

- `public/robots.txt` — added the explicit AI/search crawler allow-list,
  `Disallow: /v3/`, `/lab/`, `/thank-you/`, `/*?utm_`, and pointed the sitemap
  at the real domain instead of `zmarcoz1.github.io`.
- `public/sitemap.xml` — same host correction. It still lists the **currently
  live** pages, deliberately: the `/v3/` staging pages are noindexed and must
  not appear. Replace the list at go-live (step 6 below).

Nothing under `public/` other than those two files was touched.

### Design system

Colours, type scale, spacing, radii, and shadows follow the build brief
exactly, with one deliberate exception recorded in §5. Tokens live at the top
of `css/style.css` as custom properties — change them there, not inline.

### Defects from the prior review that are fixed here

| Issue | How it is handled |
|---|---|
| `header`/`footer` nested inside `main` | All three are siblings on every page |
| Multiple `h1`, skipped heading levels | One `h1` per page, no level skips (verified) |
| FAQ JSON-LD drifting from visible text | Both are emitted from one source string; verified byte for byte |
| Category `<option value>` slugs | Values are the full lowercase labels the backend accepts |
| `elapsed` vs `elapsed_ms` | Sends `elapsed_ms` |
| Resource form missing `company`/`category` | Sends both (`category: "other"`) |
| Conversions firing on button click | `contact_form_submit` and `resource_download` fire only after `ok:true` |
| `#7393a7` muted text on navy | `#9fbacd` (6.7:1) |
| Hamburger at 920px while nav wrapped at 1160px | Breakpoint is 1160px |
| `info@engineeringxyz.com` | `mwu@engineeringxyz.com` everywhere |

---

## 2. How to edit copy

Every page is plain HTML — open the file and edit the text. There is no build
step, no template engine, and no npm. Commit and push; Pages redeploys.

Copy that appears on more than one page (nav labels, footer, contact details)
is duplicated in each file. Search-and-replace across `public/v3/*.html` when
changing it. The phone number appears as both display text and a `tel:` href;
the email as both display text and a `mailto:` href.

**The FAQ is the one exception.** The answers on `index.html` appear twice:
once as visible `<dd>` text and once inside the FAQPage JSON-LD in `<head>`.
Google invalidates the rich result if they differ by even one character, so
edit both, and keep the em-dashes (`—`) and the straight apostrophe in
"client's" exactly as they are.

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

To swap one, export the new photo at the same pixel dimensions in both
formats, overwrite the two files in `public/v3/assets/`, and update the `alt`
text. If the dimensions change, update `width`/`height` in the HTML too.

Current sizes: hero 1600×900, homepage cards 720×480, case studies 800×600,
About portrait 400×400, About workspace 800×1000, OG image 1200×630.

**The two empty Selected Work slots on the homepage** are `<div
class="placeholder-media">` blocks reading "Project photography pending".
Replace each with a `<picture>` block in the same shape as above once real
photos exist. Do not fill them with stock art.

---

## 4. Factual claims that still need verification

Nothing below is invented, but these were carried from earlier drafts and
should be confirmed before the site goes live and cold email points at it.

- [ ] **"49 motors to 4"** — confirm the numbers and that citing the project
      is permitted. Used on Home (proof strip and Selected Work) and Projects.
- [ ] **"10+ years of engineering and automation experience"** — confirm.
- [ ] **Peer-reviewed publications: 4** — supplied for this build; confirm it
      is the number you want published (About page).
- [ ] **Two U.S. patent applications in process** — stated as "2" on About,
      from the brief (19/262,799 and 19/264,592, filed July 2025). Confirm the
      count is still current and that the machine geometry stays undescribed.
- [ ] **"Replies within one business day"** — this is a public commitment on
      Contact, Home, and in the auto-reply. Confirm you can hold it.
- [ ] **"First scopes typically run two to four weeks"** — FAQ 2. Confirm.
- [ ] **NDA availability** — "Confidential project information can be reviewed
      under NDA" appears on Home, Contact, and in the FAQ. Confirm.
- [ ] **All four case studies** (Projects page) — every situation, constraint,
      and outcome sentence needs your review and a confidentiality check.
      "Substantially reduced manual effort" on the benchtop case is
      deliberately unquantified; replace it with a real figure or leave it.
- [ ] **Service region wording** — "Southern California on-site and remote
      clients nationwide". Confirm.
- [ ] **The three testimonials** are quoted verbatim from LinkedIn
      recommendations. Consider getting explicit permission to display them,
      and to link each name to its LinkedIn profile.

The **"two days → 40 seconds" scheduling metric** from the brief is *not* used
anywhere in this build. The homepage proof strip carries "49 → 4 motors",
"10+ years", and "Concept → build-ready" as the brief's Home section
specifies. Add the scheduling metric if you want it, once verified.

## 5. Deliberate deviations from the brief

1. **Primary button text is navy, not cream.** The brief specifies `#f4f1e8`
   on the gold `#cba65a` button. That measures **2.03:1** and fails WCAG AA,
   which the brief also requires; the earlier review had already flagged gold
   button text as a contrast risk. Navy on gold measures **5.91:1**, and the
   hover state (cream on `#3f5e7b`) measures **6.00:1**. Both pass. The button
   still reads as gold. Revert in `.btn--primary` in `css/style.css` if you
   would rather have the original colour and accept the failure.

2. **No postal address in the footer.** The brief requires a full physical
   postal address for CAN-SPAM, and one was not available at build time. The
   footer carries "Irvine, CA · Serving Southern California and remote clients
   nationwide", which is **not sufficient** on its own.
   **This is a launch blocker if any cold email links to the site.** A
   registered-agent address or PO box qualifies. Add it inside the
   `<address>` element in the footer of all six pages.

3. **The prototype's illustrations are not used.** `machine1-3.png` and
   `robotic_arm.png` are AI-generated clipart (flat-vector robot arms, glowing
   nodes, gear motifs) and fall inside the brief's banned imagery list. The
   case-study and card images use the abstracted technical renders already
   in `public/assets/` instead, each with a neutral caption stating the render
   is illustrative and photography is pending. No factual caption sits under
   illustrative art.

4. **`llms.txt` is at `public/v3/llms.txt`**, matching the file tree in the
   task. It describes the redesigned site, so it should not sit at the live
   root until go-live. Move it to `public/llms.txt` in step 5 below.

5. **The contact form's file input does not upload.** The Apps Script backend
   takes form fields over `URLSearchParams`; it cannot receive a file. The
   field is kept because it is a useful prompt, but the hint text says files
   are not transmitted, and the success message tells anyone who selected one
   to email it. Nothing claims an attachment was received. Wire a real upload
   (Drive picker or a separate endpoint) if you want attachments.

## 6. Assets still needed from the client

- **Real hardware photography** — the single highest-impact item. Three to
  five detail shots (clamp, locator nest, frame weldment, wire routing) would
  fill the two empty homepage slots and replace the four illustrative case
  study renders. Patent filings are complete, so photography is safe.
- **The Fixture Design Checklist PDF.** The Resources form currently emails
  you a request; there is no PDF to send yet. Either produce it or take the
  featured block down before launch.
- **The six guide articles.** Their cards link to Contact ("Request this
  guide") rather than to dead URLs. Write them, or trim the list.
- **A workspace or CAD photo** for the About page, to replace the illustrative
  exploded-view render.
- **Privacy policy text** — `public/privacy.html` exists on the old site and is
  not part of the v3 set. Carry it over or rewrite it before go-live.
- **A full physical postal address** (see §5.2).
- **The original logo typeface**, if one exists. The wordmark currently uses
  Nunito 900 as a substitute, beside the hexagon mark in
  `assets/logo-mark.svg`.

---

## 7. Wiring reference

**Google Analytics 4** — `G-46QJH4C15V`. `js/script.js` loads gtag **only**
when `/(^|\.)engineeringxyz\.com$/` matches the hostname, so staging, previews,
and localhost never reach reporting. On landing it stores `utm_source`,
`utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, and `gclid` in
`sessionStorage` under `exyz_campaign` and attaches them to every event. One
delegated click listener fires `gtag('event', el.dataset.gaEvent, …)` for any
element carrying `data-ga-event`.

Mark as Key events in the GA4 UI: `contact_form_submit`, `resource_download`,
`phone_click`, `email_click`. The first two fire only after the server returns
`ok: true` — never on button click — so failed validation cannot inflate them.

**Contact form backend** — Google Apps Script web app. Posts
`URLSearchParams` with **no `Content-Type` header**: that keeps it a simple
CORS request, and Apps Script does not answer preflight `OPTIONS`. Adding a
JSON content type breaks it silently. The field contract was verified against
the deployed script's source:

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

The backend returns `{ok:false, code:"VALIDATION_ERROR", errors:{field:msg}}`
on a bad payload; `showAlert()` renders those per-field messages rather than a
generic failure, so a future contract change is diagnosable from the browser.

If you edit the Apps Script, you must **deploy a new version** — saving alone
does not update the live web app. The Gmail send quota is 100 emails/day.

---

## 8. Go-live steps

Do this as a **separate commit** from the build, only when the review at
`/v3/` is signed off.

1. Preserve the old pages for rollback:
   ```bash
   git mv public/index.html public/index-old.html
   git mv public/about.html public/about-old.html
   git mv public/services.html public/services-old.html
   git mv public/contact.html public/contact-old.html
   ```
2. Move the redesign up:
   ```bash
   git mv public/v3/index.html public/v3/services.html public/v3/projects.html \
          public/v3/about.html public/v3/resources.html public/v3/contact.html public/
   git mv public/v3/llms.txt public/
   cp -r public/v3/assets/* public/assets/
   cp public/v3/css/style.css public/css/style.css
   cp public/v3/js/script.js public/js/script.js
   ```
   The old `css/style.css` and `js/script.js` serve the retired pages. If you
   keep `*-old.html` around, copy the new files under different names instead
   and update the six pages' `<link>`/`<script>` paths.
3. Remove every `<meta name="robots" content="noindex" />` from the six pages.
4. Update each `<link rel="canonical">` and `og:url` from
   `https://www.engineeringxyz.com/v3/…` to the real path. Same for the
   `@id`/`url`/`item` values in the JSON-LD on every page.
5. Drop the three `Disallow: /v3/` lines from `public/robots.txt`, and replace
   `public/sitemap.xml` with the six new URLs plus `privacy.html`.
6. Add redirects for retired URLs that have inbound links. GitHub Pages has no
   server-side redirects, so each old path becomes a small HTML file:
   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="utf-8" />
       <title>Moved — EngineeringXYZ</title>
       <link rel="canonical" href="https://www.engineeringxyz.com/projects.html" />
       <meta http-equiv="refresh" content="0; url=/projects.html" />
       <meta name="robots" content="noindex" />
     </head>
     <body>
       <p>This page has moved to <a href="/projects.html">Projects</a>.</p>
     </body>
   </html>
   ```
   Needed at least for `portfolio.html` → `projects.html` and
   `testimonials.html` → `about.html`. Consider `case-study.html`,
   `insights.html`, and `fixture-checklist.html` too.
7. Delete `public/v3/`.
8. Resubmit the sitemap in Search Console.

## 9. Rollback

Before go-live there is nothing to roll back — the live site is untouched.

After go-live, if something is wrong:

```bash
git revert <go-live-commit-sha>
git push
```

Pages redeploys the previous `./public` within a minute or two. The
`*-old.html` files from step 1 are a second safety net: they stay in the repo,
so the previous homepage can be restored by renaming one file even if the
revert is messy.

---

## 10. Verification performed on this build

Run from the repo root against a local server
(`python -m http.server 8765 --directory public`):

- All six pages load with **zero console errors** and no failed requests.
- Every internal link and in-page anchor resolves; no `.dc.html` references.
- `grep -ri "info@engineeringxyz" public/v3/` → no matches.
- No file or directory under `public/v3/` contains a space.
- Each page's JSON-LD parses as valid JSON.
- FAQ JSON-LD matches the visible `<dd>` text **byte for byte**, all five
  entries.
- `header`/`main`/`footer` are siblings on all six pages; one `h1` each; no
  skipped heading levels.
- Every `<img>` has `alt`, `width`, and `height`.
- Contact form posts to the live endpoint and returns `{"ok":true}`.
- Resource form payload (with `company` and `category: "other"`) returns
  `{"ok":true}`.
- A deliberately bad payload returns `VALIDATION_ERROR` with per-field
  `errors`, which the UI renders.
- Honeypot submission makes no network request; the field is off-screen,
  `tabindex="-1"`, `aria-hidden`.
- Client-side validation blocks submission, shows inline messages, and moves
  focus to the first invalid field.
- gtag does not load on localhost.
- Hamburger appears below 1160px and the desktop nav does not wrap above it.
- No horizontal overflow at 375px on any page.

Two test rows were submitted to the live Sheet during this check, both named
**"ZZ TEST DELETE ME"** — delete them and the two notification emails.
