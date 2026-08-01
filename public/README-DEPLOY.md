# Drop-in update for zmarcoz1/engineeringxyz

Copy this whole `public/` folder over the repo's `public/` folder, commit, push.
GitHub Actions redeploys `./public` automatically. Page names are unchanged —
`index.html` is still the homepage.

## What is in here

```
public/
├── index.html                    ← EDITED, ready to commit
├── projects.html                 ← EDITED, ready to commit
├── assets/
│   ├── card-stalled-prototype.jpg / .webp      ← replaces the warehouse-racking render
│   ├── card-unreliable-fixture.jpg / .webp     ← replaces the black-machine render
│   ├── card-engineering-capacity.jpg / .webp   ← replaces the exploded-CAD render
│   ├── filing-safe-architecture.svg            ← new: 49→4 motors, XYZ gantry
│   ├── filing-safe-gantry.svg                  ← new: station-to-station transfer
│   ├── filing-safe-inspection.svg              ← new: datum positioning
│   └── diagram-repeatability.svg               ← new: scatter vs located positions
└── css/
    └── mobile-patch.css          ← new, already linked from both edited pages
```

## Changes already applied to the HTML

**index.html**
- Three problem-card images now use the real photographs (same filenames, so the
  swap happens automatically) with accurate alt text describing each scene.
- Removed the three "Illustrative render — project photography pending" captions.
- Selected Work: the two empty slots now show `filing-safe-architecture.svg` and
  `filing-safe-inspection.svg`, matching the Projects page.
- Linked `css/mobile-patch.css`.

**projects.html**
- All four case studies now use filing-safe diagrams instead of stock renders:
  architecture → `filing-safe-architecture.svg`, gantry → `filing-safe-gantry.svg`,
  inspection → `filing-safe-inspection.svg`, benchtop → `diagram-repeatability.svg`.
- Captions changed to "Filing-safe abstract view — protected geometry is not shown."
- Linked `css/mobile-patch.css`.

## One CSS line you should add

The diagrams are 800×500 SVGs on a navy field. `.case__media img` has no
`object-fit`, so they will letterbox slightly inside a differently-proportioned
frame. Add to `css/style.css` (or leave it — it is cosmetic):

```css
.case__media img[src$=".svg"] { aspect-ratio: 16 / 10; object-fit: contain; background: #0a304e; }
```

## Not done here — still needs a decision

- **Footer postal address.** CAN-SPAM requires a full physical address for a
  domain sending cold email; "Irvine, CA" alone does not qualify. A PO box or
  registered-agent address is fine.
- `services.html`, `about.html`, `contact.html` also need the
  `<link rel="stylesheet" href="css/mobile-patch.css" />` line added after
  `style.css`, or append the patch file's contents to `style.css` once and skip
  the per-page links entirely (simpler).

## Verify after deploying

```bash
grep -rn "mwu@" public/                                   # → nothing
grep -rn "photography pending" public/index.html          # → nothing
ls public/assets/card-*.webp                              # → three files
```
Then load at 375px: no horizontal scroll, hamburger works, focusing a form field
does not zoom. Test on a real iPhone — Chrome DevTools does not reproduce iOS
input-zoom behaviour.
