# Changelog

All notable changes to the Shrianna Federation website are recorded here.
Format loosely follows [Keep a Changelog](https://keepachangelog.com/).
Dates are in `YYYY-MM-DD`.

## [2026-07-13] — Official profile content integration

- Home: Vision replaced with the official statement; Mission rebuilt as the
  four official pillars (Market Development, FPO Ecosystem, Value Chain,
  Brand Promotion) in a numbered card grid.
- About: story intro now uses the full legal name with "formerly known as
  'Shrianna Federation'" and credits the establishing department; new
  **Objectives** section (7 numbered cards, `#objectives`); team intro
  expanded with the governance structure (CEO + 5 central professionals,
  5–15 district para-professionals) and management oversight areas.
- About: featured leadership profiles with photos and bios for the CEO
  (Balram Kumar Vishwakarma) and Expert Director (Atul Vikram Singh).
- Activities: added "07 · Research & partnerships" row (ICAR collaboration,
  innovation, digital platforms).
- Impact: "Looking ahead" band now lists the six aspired outcomes.
- Farmers: new "Why millets" background card (nutrition, gluten-free,
  climate resilience, low water) with benefit tags.
- Nav: About dropdown reordered to match page flow (Story → Scheme → Board &
  Team); home "Backed by" logos now full-colour, no grayscale hover.

## [2026-07-11] — Dead-space & layout pass

- Tightened the global section rhythm (`Section` now `py-12/16/20`, was
  `py-16/24/28`) and added `variant="hero"` / `variant="flush"` so page
  titles sit ~48px above their first content instead of ~200px; pre-footer
  voids removed site-wide.
- Photo heroes (headline left, real federation photo right) on Farmers,
  Impact, News and About; compact centred heroes on Gallery, Recipes,
  Activities and Bulk-enquiry.
- Grid holes fixed: About board → 4 columns (4+3); Farmers districts →
  4 columns with a new "Represent an FPO?" CTA tile as the 12th cell.
- Checkout order summary now `self-start` + sticky (no more ~350px of empty
  card); product-detail image column sticky so it tracks the content column.
- Home: news cards use photographic `cardImage`s (newspaper scans cropped to
  blank white before); "Backed by" logos enlarged and centred in a card band.
- Image hygiene: replaced the competitor "NutriMillet" hamper mockup with the
  real Narmada Millets range shot; cropped watermark bands out of
  `millet-poha.jpg` (Alamy), `procurement-volume.jpg` (phone stamp) and
  `winnowing.jpg` (GPS overlay); wide cookie/hamper pack shots now render
  `object-contain` via a new `imageFit` product field; mismatched recipe
  photos replaced with branded millet panels.

## [2026-07-11] — Typography standardisation

- Introduced a single project-wide type scale as Tailwind utilities in
  `globals.css`: `type-display`, `type-h1` … `type-h6`, `type-quote` for
  serif headlines and `type-eyebrow` for uppercase kickers/labels.
- Replaced ~16 ad-hoc headline size combos across all pages/components with
  the scale; body copy standardised to five tiers (`text-lg` ledes,
  `text-base` prose, `text-sm` support/UI, `text-xs` captions, new `text-2xs`
  token for badges/micro-labels).
- Removed all arbitrary pixel sizes (`text-[9px]`/`[10px]`/`[11px]`/`[13px]`)
  and unified page-hero lede paragraphs to `text-lg leading-relaxed`.

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
