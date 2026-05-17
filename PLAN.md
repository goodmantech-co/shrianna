# Shrianna Federation — Website Plan

## 1. Who they are (research summary)

**Legal name:** Shrianna Protsahan Consortium of Farmer Producer Company Limited
**Also known as:** Shri Ann Federation / Sri Anna Federation
**CIN:** U01611MP2024PTC070230 (incorporated 9 March 2024)
**Registered office:** 36, Beej Bhawan, Mother Teresa Marg, Arera Hills, Shiksha Mandal, Bhopal, MP 462011
**Existing domain:** shriannafederation.com (currently unreachable from our end — needs to be checked)

### What they actually do
A **state-backed millet federation** — a consortium of Farmer Producer Organizations (FPOs) created under the **Rani Durgavati Shri Anna Protsahan Yojana** by the MP government's Farmer Welfare & Agriculture Development Department. Their job is to procure, process, brand and sell millets — primarily **Kodo and Kutki** — sourced from tribal farmers across 11 districts (Mandla, Dindori, Shahdol, Anuppur, Umaria, Chhindwara, etc.).

### The story / mission angles
- **Reviving "Shri Anna"** (the PM's branding for millets) — nutrient-rich ancient grains.
- **Tribal farmer empowerment** — board is 5 women + 1 man (Asha Uikey, Rukmani Bai, Vimala Prajapati, Mankumari, Neelam Pawar, Balram Kumar Vishwakarma). Strong women-led narrative.
- **Fair pricing via DBT** — farmers get ₹3,500/qtl (kutki) + ₹2,500/qtl (kodo) + ₹1,000/qtl incentive direct transfer.
- **Procurement scale** — ~30,000 MT target for Kharif 2025; ₹80 cr interest-free loan from State Price Stabilization Fund.
- **Rooted in Rani Durgavati** — named for the tribal warrior queen whose 500th birth anniversary the cabinet honored. Cultural weight.

### Likely product line (to confirm with client)
- Raw millets: Kodo rice, Kutki rice, Jwakar-Bajra, Ragi
- Millet flour (atta) variants
- Value-added: ready-to-cook millet mixes, biscuits/snacks, breakfast cereal
- Possibly: gift hampers, bulk packs for institutions/PDS

---

## 2. Audiences the site has to serve

| Audience | What they need from the site |
|---|---|
| **Urban retail buyers** (Bhopal/Indore/Tier-1 metros) | A trustworthy shop with clear product info, health benefits, recipes, COD/UPI checkout |
| **Government / scheme stakeholders** | Federation overview, governance, scheme link, press, RTI/transparency |
| **FPO members & farmers** | News, procurement rates, training, contact, member login (later) |
| **Press & policy researchers** | Press releases, downloadable data, leadership info |
| **Bulk / institutional buyers** | Enquiry form, product specs, certifications, MOQ |

---

## 3. Sitemap

```
/                       Home — hero + mission + featured products + impact numbers
/about                  Story, Rani Durgavati Yojana background, women-led leadership
/products  →  /shop     Catalog (kodo, kutki, flours, value-add, gift packs)
/products/[slug]        Single product (images, weight options, benefits, recipes, add to cart)
/cart                   Cart
/checkout               Address + payment (UPI / Razorpay / COD)
/order-confirmation
/farmers                Our FPOs, districts covered, procurement model, fair pricing story
/impact                 Numbers: MT procured, farmers paid, DBT disbursed, districts
/recipes                Millet recipes (SEO + retention)
/news                   Press releases + scheme updates
/bulk-enquiry           B2B / institutional form
/contact                Address, map, phone, email
/track-order            Order tracking
/account                Login / order history (Phase 2)
```

---

## 4. Shop page — structure

**Catalog grid** with filters:
- Category: Whole grains / Flours / Ready-to-cook / Snacks / Gift packs
- Millet type: Kodo / Kutki / Ragi / Jowar / Bajra / Mixed
- Pack size: 500g / 1kg / 5kg
- Price range

**Each product card:**
- Hero image (clean packaging shot)
- Name + millet type tag
- Price + pack size selector
- "Sourced from Dindori farmers" / origin badge
- Add to cart

**Single product page must have:**
- Image gallery
- Nutrition table (millets sell on health)
- "Why this millet" — health benefits in plain language
- Sourcing story (which district, which FPO, photo of farmers if possible)
- 2-3 recipes embedded
- Reviews (Phase 2)
- Cross-sell: "Pairs with…"

---

## 5. Tech stack — recommendation (showcase scope)

This is a **showcase / demo build** — no real payments, no shipping integration, no live customer accounts. Mocked shop UI only.

| Layer | Choice | Why |
|---|---|---|
| Frontend | **Next.js 16 (App Router) + Tailwind v4 + shadcn/ui** | Consistent with your other projects |
| Content | Hardcoded TS/JSON data files for products/news/recipes | Fastest path for a demo; trivial to move to a CMS later |
| Hosting | **Vercel** | Already in your toolchain |
| Images | Direct URLs from `IMAGES.md` (research-sourced) + Freepik mocks for packaging | See [IMAGES.md](./IMAGES.md) |
| Cart | Local state only — "Add to cart" → cart drawer → mock checkout page that ends in a thank-you screen | No Razorpay, no Supabase orders |

Single-language English for showcase; Hindi toggle can be added if asked.

---

## 6. Brand direction (proposal — to validate with client)

The site has two competing pulls: **government legitimacy** (formal, official) vs. **modern D2C food brand** (warm, aspirational, sells well online). Recommend leaning **modern D2C with formal accents** — most successful millet brands (Slurrp Farm, Mille, Two Brothers) do this.

- **Colors:** Earthy palette — warm millet-grain ochre (#C9A961), deep terracotta (#A0432B), forest green (#2D5F3F), cream (#FAF6EE), charcoal (#1A1A1A).
- **Type:** A serif for headlines (Fraunces / Tiempos) + clean sans for body (Inter / Manrope).
- **Photography:** Real farmer portraits + grain close-ups + cooked-dish hero shots. No stock.
- **Voice:** "Grown by the women of Mandla. Milled in Bhopal. On your plate today." Concrete, not corporate.
- **Logo touchpoint:** Incorporate a millet-grain motif + a subtle nod to Rani Durgavati (heritage geometric pattern, not literal).

---

## 7. Build phases (showcase)

**Single sprint — get a polished demo live.** No multi-phase. Order:

1. **Scaffold** — Next.js 16 + Tailwind v4 + shadcn in `/shrianna`
2. **Brand pass** — placeholder logo (millet sprig + wordmark), color tokens, typography, base components
3. **Static pages** — Home / About / Farmers / Impact / News / Contact
4. **Shop UX** — product catalog grid, single product page (mock data), local-state cart drawer, mock checkout → thank-you
5. **Polish** — hero animations, recipe section, mobile pass, copy-edit
6. **Deploy** — Vercel preview link to share with client

---

## 8. Assumptions for the showcase

Since this is a demo, I'm proceeding with these assumptions — flag any that are wrong:

1. **Logo:** Design a placeholder mark (millet sprig + Shrianna wordmark). Replace later if client provides one.
2. **Products:** Mock catalog of ~6 items — Kodo rice 1kg, Kutki rice 1kg, Ragi flour 1kg, Mixed millet atta, Kodo-Kutki bar (snack), Gift hamper. Prices in ₹ but clearly mock.
3. **Photography:** Use direct URLs from research (see [IMAGES.md](./IMAGES.md)) as placeholders. Acceptable for showcase, not for production.
4. **Copy:** Write English copy in a warm-D2C voice. No Hindi for v1.
5. **No payment / no real orders.** Cart flow ends at a "Thank you — this is a showcase site" screen.

---

## 9. Suggested immediate next steps

1. Scaffold the Next.js + Tailwind v4 + shadcn project in this folder.
2. Build the brand layer (tokens, logo SVG, base components).
3. Ship Home + Shop + one product page first — show to client for direction lock.
4. Round out the rest of the pages, polish, deploy preview link.

---

## Sources

- [Shrianna Protsahan Consortium — company registry](https://www.falconebiz.com/company/SHRIANNA-PROTSAHAN-CONSORTIUM-OF-FARMER-PRODUCER-COMPANY-LIMITED-U01611MP2024PTC070230)
- [Existing site (currently unreachable)](https://shriannafederation.com/)
- [MP cabinet — Kodo-Kutki procurement scheme (ANI)](https://aninews.in/news/national/general-news/mp-cabinet-decides-to-procure-kodo-kutki-in-major-millets-producing-districts-for-first-time20251014181617/)
- [Rani Durgavati Shri Anna Protsahan Yojana — scheme overview](https://pmujjwalayojana.in/rani-durgavati-shri-anna-protsahan-yojana/)
- [First-ever MP Kodo/Kutki MSP procurement — Millennium Post](https://www.millenniumpost.in/nation/first-ever-madhya-pradesh-govt-to-procure-kodo-kutki-millets-boost-to-tribal-farmers-631319)
- [Beej Bhawan — MP Rajya Beej Evam Farm Vikas Nigam](http://mpssfdc.mp.gov.in/Modules/Web/who-is-who.aspx)
