# Shrianna Federation — Website

A showcase website for **Shrianna Protsahan Consortium of Farmer Producer Company Limited** — a Madhya Pradesh state-backed millet federation incorporated under the *Rani Durgavati Shri Anna Protsahan Yojana*.

The site presents the federation's mission, farmer stories, impact numbers and a mock shop for their millet products (Kodo, Kutki, Ragi, mixed millet atta, snack bars, gift hampers).

## Stack

- **Next.js 16** (App Router) + React 19
- **Tailwind CSS v4** with custom brand tokens
- **TypeScript** strict mode
- shadcn-style component library (Radix + cva)
- Lucide icons, Inter + Fraunces fonts

## Local development

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Project layout

```
shrianna/
├── app/                — App Router pages + dynamic OG/icons
├── components/         — UI, brand, layout, cart, product
├── lib/                — products, site config, utils
├── public/             — Static assets incl. logo
├── PLAN.md             — Product plan
├── CHANGELOG.md        — Notable changes per build
└── IMAGES.md           — Image source list (research)
```

## Notes

- Showcase site — cart and forms are mocked; no payments, no real order persistence.
- Product imagery is sourced from public/news image URLs as placeholders (see `IMAGES.md`); to be replaced with client-supplied photography before launch.
- Favicon and OG image are generated dynamically from the federation logo using `next/og` (`app/icon.tsx`, `app/opengraph-image.tsx`).
