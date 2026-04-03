# 🦷 Dentist Website Template

A clean, semantic, SEO-friendly dentist landing page built with plain HTML, CSS & JavaScript.
Ready to deploy on **Vercel** with zero build tools.

---

## 📁 Folder Structure

```
dentist-template/
├── index.html          ← Main HTML file (all sections here)
├── css/
│   └── style.css       ← All styles (responsive, variables)
├── js/
│   └── main.js         ← Minimal JS (nav, form, scroll)
├── images/
│   └── favicon.ico     ← Replace with clinic favicon
└── README.md
```

---

## ✏️ How to Customise (Placeholder Reference)

Search and replace the following placeholders in `index.html`:

| Placeholder           | Replace With                          |
|-----------------------|---------------------------------------|
| `{{CLINIC_NAME}}`     | e.g. Sharma Dental Care               |
| `{{DOCTOR_NAME}}`     | e.g. Dr. Anjali Sharma                |
| `{{PHONE_NUMBER}}`    | e.g. +91 98765 43210                  |
| `{{WHATSAPP_NUMBER}}` | e.g. 9876543210 (no +91, no spaces)   |
| `{{EMAIL}}`           | e.g. info@sharmadental.in             |
| `{{ADDRESS}}`         | e.g. Shop 5, Laxmi Complex, MG Road   |
| `{{CITY}}`            | e.g. Ratnagiri                        |
| `{{YEAR}}`            | e.g. 2010                             |

---

## 🎨 Changing Brand Colour

Open `css/style.css` and update the CSS variables at the top:

```css
:root {
  --clr-primary:       #1a6b4a;   /* Main green — change this */
  --clr-primary-dark:  #134f37;   /* Darker shade */
  --clr-primary-light: #e8f5ef;   /* Light tint for backgrounds */
  --clr-accent:        #f0b429;   /* Yellow accent (stars, highlights) */
}
```

---

## 🗺️ Google Maps Embed

1. Go to [maps.google.com](https://maps.google.com)
2. Search for the clinic address
3. Click **Share → Embed a map → Copy HTML**
4. Replace the `<iframe src="...">` inside `#contact` section in `index.html`

---

## 📋 Contact Form

The form currently shows a demo success message.
To make it actually send emails, integrate one of these (all free):

- **[Formspree](https://formspree.io)** — Add `action="https://formspree.io/f/YOUR_ID"` to the `<form>` tag and remove the JS handler.
- **[Netlify Forms](https://netlify.com)** — Add `netlify` attribute to `<form>` tag.
- **[EmailJS](https://emailjs.com)** — Works well with Vercel, no backend needed.

---

## 🚀 Deploy on Vercel

1. Upload this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. No build settings needed — Vercel auto-detects static HTML
4. Click Deploy ✅

---

## ✅ Checklist Before Showing to Client

- [ ] Replace all `{{PLACEHOLDERS}}`
- [ ] Add real doctor photo in `#about`
- [ ] Add real clinic photos in `#gallery`
- [ ] Update Google Maps embed
- [ ] Set up contact form (Formspree etc.)
- [ ] Add real favicon (`images/favicon.ico`)
- [ ] Test on mobile
- [ ] Update stats (years, patients, rating)
- [ ] Update testimonials with real reviews

---

*This is a sample website template created for demonstration purposes.*
