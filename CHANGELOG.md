# Changelog

All notable changes to the Shrianna Federation website are recorded here.
Format loosely follows [Keep a Changelog](https://keepachangelog.com/).
Dates are in `YYYY-MM-DD`.

## [Unreleased] — `institutional-realign` branch

Realigns the site's structure and vibe with [mbcfpcl.org](https://mbcfpcl.org/)
(institution-first), while keeping the shop e-commerce experience untouched.
Not yet merged to `main`.

### Added
- **Activities page** (`/activities`) — the federation's six work areas
  (procurement, processing, DBT payments, capacity building, Narmada Millets
  brand, market linkage) as alternating editorial rows.
- **Gallery page** (`/gallery`) — responsive masonry of field/mill/harvest
  photography with hover captions.
- **Reports & downloads** section on the Impact page (`/impact#reports`) —
  document cards (Annual Report, Procurement update, FPO directory, financials),
  "request a copy" via Contact until PDFs are hosted.
- **Institutional home sections** — Vision & Mission, "Backed by" affiliations
  strip, Impact stats, "Our Work" cards, geographic coverage, recent activities,
  and a single prominent **Shop CTA band**.
- **About dropdown** in the header (Our Story / Board & Team / The Scheme) and a
  distinct **Shop** CTA button.
- **Real institutional logos** in the "Backed by" strip — self-hosted marks for
  Govt of MP, the Farmer Welfare & Agriculture dept, ICAR-CIAE and ICAR-IIMR
  (grayscale, colour on hover); the Rani Durgavati scheme stays a text label as
  it has no logo of its own. Files in `public/logos/`.
- `lib/news.ts` — shared news data consumed by both the home feed and `/news`.
- `#leadership` / `#scheme` anchors on the About page.

### Changed
- **Home page rebuilt** from e-commerce-forward to an institutional layout; all
  shop rails removed in favour of one CTA band. **Shop pages unchanged.**
- **Navigation** restructured institution-first
  (`About ▾ · Activities · Impact · Farmers · Gallery · News · Contact` + Shop);
  footer reorganised into Federation / Shop & more columns.
- **About story hero** → two-column (headline left, image right) on desktop.
- `sitemap.ts` now includes `/activities` and `/gallery`.

### Fixed
- Gallery masonry left an empty cell on desktop — resolved with `grid-flow-dense`
  and balanced column spans (clean gapless 4-column grid).

### Verified
- On-page SEO across new/changed pages: unique titles, descriptions, canonicals,
  single `<h1>` each, all images have `alt`, sitemap updated.
- Responsive pass at mobile (390px) and desktop (1440px+): home, About dropdown,
  mobile menu, Activities rows, Gallery grid, Impact/Reports.
- Production build clean; institutional pages statically prerendered.

## [2026-06-18] — Content accuracy & narrative pass

- Removed the women-only narrative site-wide; reframed as **all farmers**
  (men and women) — gender-neutral copy across home, about, farmers, products,
  metadata, OG image, reviews and news.
- Reframed district coverage as **across Madhya Pradesh**; the "16 districts"
  figure kept only where it is a true **FY 2025–26 launch/procurement** fact.
- Added **financial-year labels** to all data/figures.
- Corrected the **Board of Directors** to the seven real directors (with their
  FPO and district) and added the **Team** (CEO, Finance Manager, Marketing
  Manager); fixed farmer-testimonial names accordingly.
- About story hero restyled to a side-by-side headline/image layout.

## [2026-06-15]

- Redesigned the OG / Twitter card to a premium photo-led editorial layout.
- Audit fixes: SEO (sitemap, robots, per-product metadata + JSON-LD,
  Organization JSON-LD, canonicals), content accuracy, self-hosted all images,
  shop refactored to a server component with a client browser island.
- Added Resend order emails (checkout confirmation + sheet-driven stage updates).
- Added a hidden ₹1 test product for live checkout testing (`/shop/test-rupee`).

## [2026-06-14]

- Replaced Shopify checkout with **Razorpay + Google Sheets** order logging.

## [2026-06-07]

- E-commerce shop redesign, Narmada Millets catalogue and initial checkout.
