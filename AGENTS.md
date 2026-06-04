# AGENTS.md — GuideMePhD Static Site

A reference for AI agents (and humans) working in this repository.

---

## 1. Project Overview

**GuideMePhD** is the public website for Guide Me PhD Ltd (England & Wales, No. 16154190), offering PhD application support and bioinformatics consulting services.

- **Live site:** https://www.guidemephd.com
- **Contact:** contact@guidemephd.com
- **Stack:** React 19 · React Router v7 · Vite 7 · Vanilla CSS · GitHub Pages
- **No backend, no secrets, no environment variables.** The contact form uses the third-party FormSubmit.co service.

---

## 2. Key Commands

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Vite build + cp dist/index.html dist/404.html
npm run lint      # ESLint (eslint.config.js — flat config)
npm run preview   # Preview the production build locally
npm run deploy    # Manual gh-pages deploy (CI normally handles this)
```

Node 20+ required. Use `nvm` if needed.

---

## 3. Directory Map

```
/
├── index.html                    SPA shell; favicon = public/GuideMePhD_logo.png
├── vite.config.js                base: '/' — do not change for custom domain
├── eslint.config.js              ESLint flat config
├── package.json                  scripts + deps
├── AGENTS.md                     this file
│
├── .github/workflows/deploy.yml  CI/CD: push to main → build → GitHub Pages
│
├── public/
│   ├── CNAME                     → www.guidemephd.com (DO NOT DELETE)
│   └── GuideMePhD_logo.png       favicon copy (referenced in index.html)
│
└── src/
    ├── main.jsx                  React root mount; imports index.css
    ├── App.jsx                   BrowserRouter + route table
    ├── index.css                 ★ ALL DESIGN TOKENS + global utilities (start here)
    ├── App.css                   Empty placeholder (kept for App.jsx import)
    │
    ├── assets/                   Images imported by components (Vite hashes filenames)
    │   ├── GuideMePhD_logo.png   used in Header.jsx
    │   ├── GuideMePhD_logo.svg   SVG alternative (not currently used)
    │   ├── gavinfarrell.jpeg     used in About.jsx
    │   ├── elixir_logo.png       used in Consulting.jsx
    │   ├── eosc.png              used in Consulting.jsx
    │   └── gdi_eu_logo.png       used in Consulting.jsx
    │
    ├── components/
    │   ├── Header.jsx + Header.css   top nav + mobile hamburger menu
    │   ├── Footer.jsx + Footer.css   copyright + legal links
    │   ├── Icons.jsx                 SVG icon library (named exports: DataIcon, BioIcon, etc.)
    │   └── ScrollToTop.jsx           scrolls window to top on every route change
    │
    ├── layouts/
    │   └── MainLayout.jsx + MainLayout.css   wraps Outlet with Header + Footer
    │
    └── pages/
        ├── Home.jsx + Home.css
        ├── About.jsx + About.css
        ├── Services.jsx + Services.css   (main consulting services page)
        ├── Contact.jsx + Contact.css
        ├── PrivacyPolicy.jsx + PrivacyPolicy.css
        └── TermsOfService.jsx + TermsOfService.css
            (TermsOfService.css @imports PrivacyPolicy.css for shared legal styles)
```

---

## 4. Routing

React Router v7 with `BrowserRouter`. All pages nest under `<MainLayout>` (which provides the Header and Footer):

```
/                   → Home
/about              → About
/services           → Services (main consulting services page)
/contact            → Contact
/privacy-policy     → PrivacyPolicy
/terms-of-service   → TermsOfService
```

**404 handling:** The build script copies `dist/index.html` → `dist/404.html`. GitHub Pages serves this on unknown URLs, letting React Router handle client-side 404 display.

**ScrollToTop** (`src/components/ScrollToTop.jsx`) calls `window.scrollTo(0, 0)` on every `pathname` change via a `useEffect`.

### How to add a new page

1. Create `src/pages/NewPage.jsx` and `src/pages/NewPage.css`.
2. Import the component and add a route in `App.jsx` inside the existing `<Route path="/" element={<MainLayout />}>` block:
   ```jsx
   <Route path="new-path" element={<NewPage />} />
   ```
3. If it needs top-nav visibility, add a `<Link to="/new-path">` in `src/components/Header.jsx` nav `<ul>`.
4. Use `var(--color-*)` tokens from `index.css` for all colours — no new hardcoded hex values.
5. Use icon components from `src/components/Icons.jsx` for any service-area icons. Add new icons to that file if needed.

---

## 5. Design System

### CSS Design Tokens (`src/index.css`)

All colours are CSS custom properties defined in `:root`. **Never add hardcoded hex values to new CSS.** Extend the token set in `index.css` if a new colour is genuinely needed.

| Token | Value | Usage |
|---|---|---|
| `--color-black` | `#000000` | Header/footer bg, headings |
| `--color-white` | `#ffffff` | Page bg, on-dark text |
| `--color-near-black` | `#1a1a1a` | Consulting hero bg, nav hover |
| `--color-dark-text` | `#222222` | Strong text, section titles |
| `--color-body-text` | `#333333` | Body copy default |
| `--color-mid-text` | `#444444` | Secondary body copy |
| `--color-muted-text` | `#555555` | Subtext, captions |
| `--color-subtle-text` | `#666666` | Labels, icon captions |
| `--color-faint-text` | `#aaaaaa` | Consulting tagline |
| `--color-slate` | `#2c3e50` | Applicant/academic card accent |
| `--color-teal` | `#00695c` | Institution/consulting card accent |
| `--color-teal-dark` | `#004d40` | Gradient stop (tech-visual hero) |
| `--color-bg-page` | `#ffffff` | Default page background |
| `--color-bg-subtle` | `#f8f9fa` | Alternate section background |
| `--color-bg-muted` | `#f9f9f9` | Card backgrounds |
| `--color-bg-faint` | `#f5f5f5` | Project item backgrounds |
| `--color-bg-light` | `#f0f0f0` | Hover states, image placeholders |
| `--color-border-strong` | `#333333` | Nav/footer border |
| `--color-border-mid` | `#dddddd` | Form inputs |
| `--color-border-light` | `#eeeeee` | Card borders, section dividers |
| `--color-border-faint` | `#eaeaea` | Offer/service card borders |
| `--color-on-dark` | `#ffffff` | Text on dark backgrounds |
| `--color-on-dark-muted` | `#cccccc` | Subdued text on dark backgrounds |
| `--color-warning-bg` | `#fff3cd` | TermsOfService placeholder notice |
| `--color-warning-border` | `#ffeeba` | TermsOfService placeholder notice |
| `--color-warning-text` | `#856404` | TermsOfService placeholder notice |

### Button Classes (`src/index.css`)

All button/link-button utilities are global. Apply `className="btn btn-X"` on `<Link>` or `<button>` elements.

| Class | Appearance |
|---|---|
| `.btn` | Base: padding, border-radius, font, transition |
| `.btn-primary` | Black background · white text |
| `.btn-secondary` | Black background · white text (same as primary) |
| `.btn-outline` | Transparent background · black border/text |

**Hero colour inversion:** `Home.css` overrides `.hero-content .btn-primary` and `.hero-content .btn-secondary` to invert colours for the dark hero background. These are scoped overrides — do not create new classes for this pattern.

### Layout Utility

`.container` (defined in `index.css`) — `max-width: 1200px; margin: 0 auto;`

Pages manage their own section-level padding. Do not add padding to `.container` itself.

### Typography

Base font: `Arial, sans-serif` (set on `:root`). No custom web fonts are loaded.

---

## 6. How to Add a New Component

1. Create `src/components/MyComponent.jsx` and `src/components/MyComponent.css`.
2. Import the CSS file at the top of the JSX file.
3. Use `var(--color-*)` tokens for all colours.
4. Export as `default`; import into the consuming page or layout.

React 19 uses the automatic JSX runtime — `import React from 'react'` is not required at the top of JSX files (though it is currently present in existing files and can be left as-is).

---

## 7. Deployment Pipeline

Trigger: any push to `main`, or manual workflow dispatch.

```
.github/workflows/deploy.yml
  1. Checkout code
  2. Setup Node 20 (npm cache)
  3. npm ci
  4. npm run build          (vite build + cp dist/index.html dist/404.html)
  5. Upload dist/ as artifact
  6. actions/deploy-pages@v4 → GitHub Pages
```

- **Custom domain:** `public/CNAME` contains `www.guidemephd.com`. **Do not delete this file** — it is copied into `dist/` by Vite and tells GitHub Pages about the custom domain.
- **`base: '/'`** in `vite.config.js` — do not change this to a sub-path; the custom domain serves from root.
- There is **no staging environment**. Changes to `main` go directly to production.

---

## 8. Contact Form

- **Provider:** FormSubmit.co (no backend, no API key in this repo).
- **Action URL:** `https://formsubmit.co/contact@guidemephd.com`
- **Hidden configuration fields:**
  - `_captcha: "true"` — enables reCAPTCHA challenge
  - `_subject: "New Enquiry via GuideMePhD Website"` — email subject line
- **Honeypot:** `<input type="text" name="_honey" className="honeypot-field" />` — hidden via CSS (`.honeypot-field { display: none }`). This is a bot trap; do not add a visible label or change the `name` attribute.
- **To change the recipient email:** update the form `action` URL and confirm the new address with FormSubmit.co (they require email confirmation for new addresses).
- No server-side validation; HTML5 `required` attributes provide the only client-side guard.

---

## 9. Gotchas and Conventions

- **`TermsOfService.css` `@imports` `PrivacyPolicy.css`.** Both legal pages share `.legal-page`, `.legal-layout`, `.legal-sidebar`, `.legal-content` classes. Edit `PrivacyPolicy.css` to affect both pages' shared styles.

- **MainLayout padding.** `MainLayout.css` wraps `<Outlet>` in `<main class="content">` with `flex: 1`. Full-bleed sections (e.g. hero banners) must override or compensate for any outer padding in their own CSS.

- **Logo exists in two places.** `src/assets/GuideMePhD_logo.png` is imported by `Header.jsx` (Vite gives it a hashed filename in dist). `public/GuideMePhD_logo.png` is referenced in `index.html` as the favicon and is copied to `dist/` root unchanged. Both are needed for their respective roles.

- **`App.css` is intentionally empty.** The import in `App.jsx` is harmless. Do not add styles to `App.css` — use `index.css` for globals or a component-specific CSS file.

- **ESLint `varsIgnorePattern: '^[A-Z_]'`** — this broad pattern is intentional. Without `eslint-plugin-react`'s `jsx-uses-vars` rule, ESLint's base `no-unused-vars` cannot track JSX element references (e.g. `<BrowserRouter>`) as variable usage, so PascalCase component imports would be falsely reported as unused. To tighten this, add `eslint-plugin-react` as a dev dependency and enable the `react/jsx-uses-vars` rule.

- **No `.env` file, no environment variables.** The site has no secrets. If a future feature requires environment variables, document them here.

- **`public/vite.svg` and `src/assets/react.svg`** are Vite scaffolding leftovers and are safe to delete if they appear again (e.g. after a re-scaffold). They are not referenced anywhere in the source.
