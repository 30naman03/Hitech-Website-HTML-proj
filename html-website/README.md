# Hitech Concrete Product — Static HTML/CSS Website

A pure HTML / CSS / vanilla JS static website built for **GoDaddy** (or any
static hosting). No build step, no server-side code, no database — just
upload the contents of this folder to your web host's `public_html`.

---

## 📁 Folder Structure

```
html-website/
├── index.html                              Home page
├── about.html                              About Us
├── products.html                           Product catalog listing (7 products)
├── contact.html                            Contact form + map
├── SETUP_FORM.md                           How to wire up the contact form
├── DEPLOYMENT_CHECKLIST.md                 GoDaddy upload steps
├── README.md                               (this file)
├── css/
│   └── style.css                           All site styles
├── js/
│   └── main.js                             Mobile menu, scroll, form submit
├── images/                                 Logo, hero photos
│   └── products/                           All 45+ product photos
└── products/
    ├── automatic-paver-blocks.html         ⭐ Featured product
    ├── rcc-pipes.html                      ⭐ Featured product
    ├── rubbermold-paver-blocks.html
    ├── kerb-stones.html
    ├── manhole-covers.html
    ├── saucer-drain-covers.html
    └── precast-boundary-walls.html
```

---

## ✅ What's Included

Every page from the original React site has been faithfully converted with
**100% data fidelity**:

- Full descriptions, multi-paragraph product copy
- All specification tables (Kerb Stones, Manhole Covers — color-coded
  LD / MD / HD grades, Saucer Drains, Slabs)
- Complete features lists with checkmark bullets
- Applications pills, color swatches, product-type captions
- Photo galleries (3 to 9 images per product)
- Featured-product badges
- "Request a Quote" + "Call Us Now" CTA blocks
- Header navigation, mobile hamburger menu
- Sticky nav with scroll effects
- Floating WhatsApp button on every page
- LinkedIn icon, Google Maps link to the correct factory location
- Phone numbers: +91 9839001970 and +91 6390164990
- Address: Village Mohammadpur Chowki, Post Safedabad, Barabanki -225003

---

## 🚀 Quick Start (Preview Locally)

```bash
cd html-website
python3 -m http.server 8000
# Open http://localhost:8000 in your browser
```

Or simply double-click `index.html` to open it in your browser. All
relative paths are wired correctly.

---

## ✉️ Contact Form Setup (One-time)

The contact form (`contact.html`) is wired to **Web3Forms** — a free,
no-account-needed form-to-email service perfect for static hosts.

1. Get a free access key at <https://web3forms.com> (takes ~30 seconds)
2. Open `contact.html`, search for `YOUR_ACCESS_KEY` and paste your key
3. Save and re-upload `contact.html`

Submissions arrive in your email inbox (default: `hitecht09@gmail.com`).
Free tier allows 250 submissions/month. Full instructions in
[`SETUP_FORM.md`](./SETUP_FORM.md).

If you'd rather use a different service (Formspree, WPForms etc.), see
the alternative section in `SETUP_FORM.md`.

---

## 🌐 GoDaddy Deployment

See [`DEPLOYMENT_CHECKLIST.md`](./DEPLOYMENT_CHECKLIST.md) for the full
step-by-step upload guide.

**TL;DR**:
1. Zip the **contents** of `html-website/` (not the folder itself)
2. Log in to GoDaddy cPanel → File Manager → `public_html`
3. Upload and extract the zip
4. Done — your site is live

---

## 🔧 Editing Tips

- **Change phone numbers**: search-and-replace `9839001970` / `6390164990`
  across the folder
- **Change colors**: edit the CSS variables at the top of `css/style.css`
- **Add a product image**: drop the file into `images/products/` and
  reference it as `images/products/your-file.jpg` (or `../images/products/...`
  from a product-detail page)
- **Update social links**: search for `linkedin.com/company/hitech-concrete-product`
  in any HTML file

---

## 📞 Support

- Phone: +91 9839001970 / +91 6390164990
- Email: hitecht09@gmail.com
- WhatsApp: <https://wa.me/916390164990>
