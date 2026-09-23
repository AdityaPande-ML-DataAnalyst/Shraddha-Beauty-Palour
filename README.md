# Shraddha Beauty Parlour — Official Website (Version 1.0)

> **Female-Only Beauty Parlour in Sai Nagar, Amravati, Maharashtra, India**  
> *"Beauty, Style & Confidence"*

A modern, fast, responsive, and multilingual (English, Marathi, Hindi) informational web application engineered with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**. Built with a **pure static export architecture (`output: 'export'`)**, requiring **zero database, zero backend, and zero paid API keys**.

---

## 🌸 Business Information (Verified V1 Baseline)

- **Business Name:** Shraddha Beauty Parlour
- **Business Type:** Female-only Beauty Parlour (Exclusively for women and girls)
- **Tagline:** Beauty, Style & Confidence
- **Location:** Sai Nagar, Amravati, Maharashtra, India
- **Address:** Plot No. 7, House No. 2270, Vrundavan Vasahat, Badnera Road, MH MSH 6, Dande Colony, Guruchhaya Colony, Sai Nagar, Amravati, Maharashtra 444607
- **Email:** `shraddhabeautyparlour.amravati@gmail.com`
- **Phone:** `+91 xxxxxxxxx` (Placeholder until verified contact number is supplied)
- **Working Hours:** 9:00 AM – 9:00 PM (All days, Monday through Sunday)
- **Pricing:** No prices listed; prices are consultation-based.
- **Appointments:** Inquiries sent via formatted WhatsApp message builder. All appointments are subject to confirmation by the parlour.

---

## 🚀 Key Features

1. **100% Static Export (`output: 'export'`):** Compiles to pure HTML, CSS, and client-side JavaScript in the `out/` directory. Zero Node.js runtime required.
2. **Static-Compatible Image Strategy:** Configured with `images: { unoptimized: true }` in `next.config.mjs`. All graphics are pre-optimized static assets served directly from `/public/images/`.
3. **Multi-Platform Deployment Ready:**
   - **GitHub Pages** (via GitHub Actions)
   - **Cloudflare Pages** (Build command: `npm run build`, Output directory: `out`)
   - **Netlify** (Publish directory: `out`)
   - **Standard cPanel / Apache / Nginx Static Hosting** (Direct upload of `out/` contents to `public_html/`)
4. **Trilingual Support (English, मराठी, हिंदी):**
   - Type-safe translation dictionaries (`src/dictionaries/`) with zero third-party i18n overhead.
   - Preserves user language preference in `localStorage`.
   - Native Devanagari typography smoothing to prevent vowel marker clipping.
5. **Interactive WhatsApp Appointment Builder:**
   - Pre-fills customer name, selected service, preferred date, and preferred time slot.
   - Built-in placeholder guard preventing broken WhatsApp links while the phone number is pending.
   - Clear confirmation disclaimer informing clients that inquiries are subject to parlour confirmation.
6. **Zero-API Google Maps Navigation:**
   - Directions link opening Google Maps in a new tab using the verified postal address query.
   - Unauthenticated responsive embed iframe with temporary location notice.
7. **Complete Technical SEO & Accessibility:**
   - `schema.org/BeautySalon` structured data (strictly without `priceRange`).
   - Dynamic `sitemap.xml` and `robots.txt`.
   - Open Graph and Twitter Card metadata.
   - WCAG 2.1 AA accessibility (min 48×48px touch targets, focus rings, skip-to-content link).
8. **Transparent Placeholders & Empty States:**
   - No stock images misrepresented as actual client work.
   - Branded preview placeholders in the Gallery.
   - Professional empty states for Offers and Testimonials.

---

## 🛠️ Project Structure

```
d:\projects\Shraddha-Beauty-Palour\
├── public/
│   ├── favicon.ico
│   ├── site.webmanifest
│   └── images/
│       ├── hero/
│       │   └── hero-illustration.svg
│       └── placeholders/
│           ├── bridal.svg
│           ├── hair.svg
│           ├── makeup.svg
│           ├── nails.svg
│           ├── saree.svg
│           └── certificate.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (LanguageProvider, JsonLd, Nav, Footer)
│   │   ├── page.tsx                # 1. Home page (10 key sections)
│   │   ├── about/page.tsx          # 2. About Us page (Female-only environment)
│   │   ├── services/page.tsx       # 3. Services catalog (5 categories, no prices)
│   │   ├── gallery/page.tsx        # 4. Filterable gallery (honest placeholders)
│   │   ├── offers/page.tsx         # 5. Offers (designed empty state)
│   │   ├── testimonials/page.tsx   # 6. Testimonials (honest empty state)
│   │   ├── faq/page.tsx            # 7. FAQ (interactive accessible accordion)
│   │   ├── contact/page.tsx        # 8. Contact & WhatsApp appointment builder
│   │   ├── icon.svg                # Automatic favicon & app icon
│   │   ├── sitemap.ts              # Dynamic sitemap.xml generator
│   │   ├── robots.ts               # Dynamic robots.txt generator
│   │   ├── not-found.tsx           # Custom 404 page
│   │   └── globals.css             # Tailwind directives & Devanagari line-height
│   ├── components/
│   │   ├── common/                 # JsonLd, SkipToContent
│   │   ├── contact/                # ContactInfoCards, MapSection, WhatsAppForm
│   │   ├── gallery/                # GalleryCard, GalleryFilter, TransparencyNotice
│   │   ├── home/                   # Hero, Intro, Services, Highlights, Gallery, CTA, Location
│   │   ├── layout/                 # Header, Navbar, MobileNav, Footer, FloatingWhatsApp, LanguageSwitcher
│   │   ├── services/               # PricingNotice, ServiceCard, ServiceCategoryTabs
│   │   └── ui/                     # Accordion, Badge, Button, Card, Container, EmptyState, Icons, SectionHeader
│   ├── config/
│   │   ├── salon.config.ts         # Single source of truth for business information
│   │   └── navigation.config.ts    # Centralized navigation routes
│   ├── content/
│   │   ├── services.data.ts        # Categorized treatments list
│   │   ├── gallery.data.ts         # Gallery items & placeholder schema
│   │   └── faq.data.ts             # Verified FAQ items
│   ├── context/
│   │   └── LanguageContext.tsx     # Trilingual state & persistence engine
│   ├── dictionaries/
│   │   ├── en.ts                   # English translations
│   │   ├── mr.ts                   # Marathi (मराठी) translations
│   │   └── hi.ts                   # Hindi (हिंदी) translations
│   └── types/                      # TypeScript definitions (config, services, i18n)
├── next.config.mjs                 # output: 'export', images: { unoptimized: true }, trailingSlash: true
├── tailwind.config.ts              # Design tokens (Rose Wine, Champagne Gold, Warm Cream)
├── package.json
└── tsconfig.json
```

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Test Static Export
```bash
npm run build
```
This compiles the application and outputs pure static files to the `out/` directory.

---

## 🌐 Free Multi-Platform Deployment Guide

### Option 1: Cloudflare Pages (Recommended - 100% Free)
1. Push this repository to GitHub.
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select the `Shraddha-Beauty-Palour` repository.
4. Set Build Settings:
   - **Framework Preset:** Next.js (Static HTML Export)
   - **Build Command:** `npm run build`
   - **Build Output Directory:** `out`
5. Click **Save and Deploy**. Free automated HTTPS and global CDN will be active immediately.

### Option 2: GitHub Pages (100% Free)
1. In repository settings, navigate to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. Create `.github/workflows/deploy.yml` with the standard GitHub Pages deployment action targeting the `out/` folder.

### Option 3: Netlify (100% Free)
1. Connect the GitHub repository in [Netlify](https://www.netlify.com/).
2. Set **Build Command:** `npm run build`
3. Set **Publish Directory:** `out`
4. Deploy site.

### Option 4: Standard cPanel / Apache / Nginx Static Hosting
1. Run `npm run build` locally.
2. Compress or upload the entire contents of the generated `out/` directory into your cPanel host's `public_html/` folder using File Manager or SFTP.
3. No Node.js runtime or `.htaccess` URL rewrite modules required (Next.js `trailingSlash: true` outputs static `index.html` files for every route).

---

## 📝 Updating Salon Information Before Launch

All business details are isolated in a single configuration file:
👉 **[`src/config/salon.config.ts`](file:///d:/projects/Shraddha-Beauty-Palour/src/config/salon.config.ts)**

When the owner provides the final details:
1. **Active Phone Number:** Update `phoneDisplay`, `whatsappDisplay`, and `whatsappNumber` (e.g. `'919876543210'`), and set `isPhonePlaceholder: false`.
2. **Verified Google Business Profile Pin:** Replace `directionsUrl` and `embedUrl` with the official Google Maps link, and set `isExactPin: true`.
3. **Authentic Salon Photos:** Place real photos in `/public/images/gallery/` and update paths in `src/content/gallery.data.ts` setting `isPlaceholder: false`.
4. **Special Offers:** Update `src/app/offers/page.tsx` when the owner introduces festive or seasonal packages.

