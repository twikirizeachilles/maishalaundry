# 🧺 Maisha Laundry & Dry Cleaners Ltd — Website

**Live URL:** Deploy to Netlify (see setup below)  
**Email:** maishadrycleaners@gmail.com  
**WhatsApp:** +256 780 603561

---

## 📁 File Structure

```
maisha-laundry/
├── index.html        ← Home page
├── about.html        ← About Us
├── services.html     ← All Services & Pricing
├── contact.html      ← Contact + Booking Form
├── css/
│   └── style.css     ← All styles, dark mode, animations
├── js/
│   ├── layout.js     ← Injects shared nav + footer on every page
│   └── main.js       ← Dark mode, carousel, FAQ, forms, counters
├── netlify.toml      ← Netlify config (pretty URLs, cache headers)
└── README.md         ← This file
```

---

## 🚀 Deploying to Netlify (Step-by-Step)

### Option A — Drag & Drop (Fastest, no account needed)
1. Zip the entire `maisha-laundry` folder
2. Go to **https://app.netlify.com/drop**
3. Drag and drop the zip file
4. Your site is live in seconds! ✅

### Option B — GitHub + Netlify (Recommended for updates)
1. Create a free account at **https://github.com**
2. Create a new repository called `maisha-laundry`
3. Upload all files to the repository
4. Go to **https://app.netlify.com** → "Add new site" → "Import from Git"
5. Connect your GitHub account and select the repo
6. Build settings: **leave blank** (no build command, publish directory = `.`)
7. Click **Deploy site** ✅
8. Every time you push changes to GitHub, Netlify auto-redeploys

---

## 📧 Setting Up Form Submissions to Your Email

All booking and contact forms send to **maishadrycleaners@gmail.com** via Formspree.

### Setup (5 minutes, FREE):
1. Go to **https://formspree.io** and sign up with `maishadrycleaners@gmail.com`
2. Click **"New Form"** → name it "Maisha Laundry Bookings"
3. Set notification email to `maishadrycleaners@gmail.com`
4. Copy your **Form ID** (8 characters, e.g. `xdkopqrz`)
5. Open **`index.html`** and find this line:
   ```html
   <form class="maisha-form" action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   Replace `YOUR_FORM_ID` with your actual ID.
6. Do the same in **`contact.html`**
7. Save and redeploy → bookings now arrive at your Gmail! ✅

> **Free plan:** 50 submissions/month. Upgrade at formspree.io if needed.

---

## 🗺️ Replacing the Google Map

1. Open **https://share.google/aGMcjhkWFHfn9ehJb**
2. Click **Share → Embed a map**
3. Copy the `<iframe ...>` code
4. In `contact.html`, find the `<iframe ... Kyebando ...>` tag and replace it entirely
5. Save and redeploy ✅

---

## 🌙 Dark Mode

Built-in. The toggle button (🌙/☀️) in the top-right corner switches themes.
User preference is saved in `localStorage` so it persists across visits.

---

## 📱 Mobile Responsive

Fully responsive at all breakpoints:
- **Desktop** (>1024px): Full multi-column layout
- **Tablet** (640–1024px): 2-column grids
- **Mobile** (<640px): Single column, hamburger menu

---

## 🎨 Brand Colours

| Name         | Hex       | Usage                     |
|--------------|-----------|---------------------------|
| Vivid Blue   | `#0549aa` | Primary buttons, headings |
| Deep Blue    | `#214a8b` | Footer, hero backgrounds  |
| Pastel Blue  | `#95b4dc` | Borders, accents          |
| Green        | `#89bf42` | Highlights, CTAs, badges  |
| White        | `#fefffe` | Backgrounds, text on dark |

---

## ✏️ Making Changes

| What to change              | Where to edit                    |
|-----------------------------|----------------------------------|
| Phone number / email        | `js/layout.js` (footer) + each HTML page |
| Services & prices           | `services.html`                  |
| Testimonials                | `index.html` (testimonials section) |
| FAQ answers                 | `index.html` (FAQ section)       |
| Hero headline / tagline     | `index.html` (hero section)      |
| Brand colours               | `css/style.css` → `:root { }` variables |
| Add a new page              | Copy any `.html` file, update nav in `js/layout.js` |

---

## 📞 Business Info

- **Phone:** 0780 603561 / 0751 571256
- **WhatsApp:** 0780 603561
- **Email:** maishadrycleaners@gmail.com
- **Location:** Kyebando Central Ring Road, towards PAED Medical, Kampala
- **Hours:** Daily 8:00 AM – 8:00 PM (including public holidays)
- **Instagram:** https://www.instagram.com/maisha_laundry/
- **TikTok:** https://www.tiktok.com/@maisha_laundry2025

