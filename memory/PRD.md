# Hitech Concrete Product — PRD

## Original Problem Statement
Build a professional business website for Hitech Concrete Products: Home,
About Us, Contact form, WhatsApp integration, and a Product Catalog
covering 7 precast concrete products.

**Updated requirement** (current focus): Convert the entire React project
to a pure HTML/CSS static project for **GoDaddy** hosting. **No data loss**
— tables, descriptions, features and specs from the React site must be
exactly mirrored in the HTML/CSS structure.

User preferred language: English.

## Tech Stack
- **Original (kept)**: React 19 + Tailwind + FastAPI + MongoDB → `/app/frontend`, `/app/backend`
- **Static deliverable**: Pure HTML5 + CSS3 + vanilla JS → `/app/html-website`
- **Form delivery (static)**: Web3Forms (free, no backend) — `SETUP_FORM.md`

## Site Information
- Phone: +91 9839001970 / +91 6390164990
- Email: hitecht09@gmail.com
- Address: Village Mohammadpur Chowki, Post Safedabad, Barabanki -225003
- LinkedIn: https://www.linkedin.com/company/hitech-concrete-product/
- WhatsApp: https://wa.me/916390164990

## 7 Products Covered
1. Automatic Paver Blocks ⭐ (featured)
2. RCC Pipes / Hume Pipes ⭐ (featured)
3. Rubbermold Paver Blocks (Interlocking Pavers)
4. Kerb Stones (Taper / Round / Moulding) — 9-row specs table
5. Manhole Covers — 12-row specs table with LD/MD/HD grade badges
6. Saucer & Drain Covers — Saucer Drains (7 rows) + Slabs (4 rows) tables
7. Precast Boundary Walls (2"/3" thickness, 5 sub-types)

---

## What's Been Implemented

### React + FastAPI app (earlier work)
- Full React site live in `/app/frontend` with all 7 product pages
- About Us hero, Our Journey timeline (2004-2026), onsite photos
- Phone, address, LinkedIn, Google Maps integrations
- All earlier code-review fixes applied (hook deps, index-as-key, type hints)

### Static HTML/CSS site — Feb 2026 (current session)
- **All 11 static pages rebuilt with 100% data fidelity**:
  - `index.html`, `about.html`, `products.html`, `contact.html`
  - 7 product detail pages under `products/`
- Product-page CSS suite added: hero, specs table, applications pills,
  galleries (square tiles, type cards, product-photo with object-contain),
  CTA block, grade badges (LD/MD/HD), color swatches
- Complete spec tables ported verbatim from React:
  - Kerb Stones (9 rows: Type / H / RL / TH / Wt.)
  - Manhole Covers (12 rows with grade color-coding)
  - Saucer Drains (7 rows) + Slabs (4 rows)
- Photo galleries fully populated (9 images for Auto Paver, RCC, Rubbermold)
- Color options (Black / Red) on Kerb Stones, Featured-product badges on
  Auto Paver Blocks and RCC Pipes
- All broken image references fixed in `products.html` and `index.html`
- Contact form wired to Web3Forms with full client-side AJAX submission,
  loading state, success / error toast banners, honeypot anti-spam
- `SETUP_FORM.md` written so the user can paste their own access key in ~2 min
- `README.md` and `DEPLOYMENT_CHECKLIST.md` updated to reflect the new state
- Verified locally: all pages return 200, no broken image references
- Visual screenshots confirmed for product page hero, spec tables, galleries,
  and contact form

---

## Roadmap

### P0 — Done
- [x] Convert all 11 React pages to static HTML/CSS with full data fidelity
- [x] Add Web3Forms contact form (no backend needed for GoDaddy)
- [x] Fix broken image refs

### P1 — Pending User Action
- [ ] User signs up at https://web3forms.com and pastes access key in
  `contact.html` (line ~95) so the form goes live
- [ ] User downloads `/app/html-website/` and uploads to GoDaddy
  `public_html` (full guide: `DEPLOYMENT_CHECKLIST.md`)

### P2 — Future enhancements (post-launch)
- [ ] Add Google Analytics / Facebook Pixel tracking
- [ ] Generate a sitemap.xml + robots.txt for SEO
- [ ] Add JSON-LD structured data (LocalBusiness schema) for Google Maps
  rich snippets
- [ ] Compress images further (WebP conversion) for faster GoDaddy load
- [ ] Add a "Download Brochure" PDF action on product pages
- [ ] Multi-language (Hindi) support
