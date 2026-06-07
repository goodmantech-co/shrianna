export type ProductCategory =
  | "whole-grain"
  | "ready-to-cook"
  | "snack"
  | "gift";

export type ProductBadge = "bestseller" | "new" | "limited" | "sale";

export interface PackSize {
  weight: string;
  price: number;
  mrp?: number;
}

export interface Product {
  slug: string;
  name: string;
  millet: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  hero: string;
  gallery: string[];
  packSizes: PackSize[];
  origin: string;
  district: string;
  benefits: string[];
  nutrition: { label: string; value: string }[];
  recipes: string[];
  dietary: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
  badges?: ProductBadge[];
  releasedAt: string;
}

// Real Narmada Millets (by Shrianna Federation) catalogue.
// Retail pack prices are derived from the federation's April 2026 wholesale
// rate list (₹/kg) plus a modest D2C markup; MRP shown for the saving.
export const products: Product[] = [
  // ----- Rice & grains -----------------------------------------------------
  {
    slug: "kodo-millet-rice",
    name: "Kodo Millet Rice",
    millet: "Kodo",
    category: "whole-grain",
    tagline: "Polished Kodo that cooks just like rice.",
    description:
      "Kodo (Paspalum scrobiculatum) is one of the oldest cultivated grains of central India. Our Kodo is rain-fed and grown by smallholder women farmers across Mandla and Dindori, then de-husked and polished at the federation's Bhopal mill. Cooks like rice in 15 minutes — use it anywhere you'd use white rice.",
    hero: "/products/kodo-rice.jpeg",
    gallery: ["/products/kodo-rice.jpeg"],
    packSizes: [
      { weight: "500g", price: 65, mrp: 80 },
      { weight: "1kg", price: 120, mrp: 150 },
      { weight: "5kg", price: 560, mrp: 700 },
    ],
    origin: "Mandla district",
    district: "Mandla",
    benefits: [
      "Naturally gluten-free",
      "Low glycemic index — gentle on blood sugar",
      "High in dietary fibre and antioxidants",
      "Cooks like rice in ~15 minutes",
    ],
    nutrition: [
      { label: "Energy", value: "353 kcal" },
      { label: "Protein", value: "8.3 g" },
      { label: "Carbs", value: "65.9 g" },
      { label: "Fibre", value: "9.0 g" },
      { label: "Fat", value: "1.4 g" },
      { label: "Iron", value: "0.5 mg" },
    ],
    recipes: ["Kodo Pulao", "Kodo Khichdi", "Lemon Kodo Rice"],
    dietary: ["Gluten-free", "Low-GI", "Protein-rich"],
    rating: 4.8,
    reviews: 312,
    inStock: true,
    featured: true,
    badges: ["bestseller"],
    releasedAt: "2025-11-01",
  },
  {
    slug: "little-millet-rice",
    name: "Little Millet (Kutki) Rice",
    millet: "Kutki",
    category: "whole-grain",
    tagline: "Polished Kutki — the staple grain of the Gond and Baiga.",
    description:
      "Little millet, known locally as Kutki, is the staple grain of the tribal communities of central India — the saying goes that kutki gets ready just with dew. Polished and ready to cook like rice, with a delicate, nutty flavour. Sourced from FPO members across Dindori.",
    hero: "/products/little-millet-rice.jpeg",
    gallery: ["/products/little-millet-rice.jpeg"],
    packSizes: [
      { weight: "500g", price: 85, mrp: 105 },
      { weight: "1kg", price: 160, mrp: 200 },
      { weight: "5kg", price: 750, mrp: 925 },
    ],
    origin: "Dindori district",
    district: "Dindori",
    benefits: [
      "Easy to digest — ideal for daily eating",
      "Drought-resilient, climate-smart grain",
      "High in iron and calcium",
      "Naturally gluten-free",
    ],
    nutrition: [
      { label: "Energy", value: "346 kcal" },
      { label: "Protein", value: "7.7 g" },
      { label: "Carbs", value: "67.0 g" },
      { label: "Fibre", value: "7.6 g" },
      { label: "Fat", value: "4.7 g" },
      { label: "Iron", value: "9.3 mg" },
    ],
    recipes: ["Kutki Pulao", "Kutki Khichdi", "Kutki Kheer"],
    dietary: ["Gluten-free", "Low-GI", "High-iron"],
    rating: 4.9,
    reviews: 247,
    inStock: true,
    featured: true,
    badges: ["bestseller"],
    releasedAt: "2025-11-01",
  },
  {
    slug: "barnyard-millet-rice",
    name: "Barnyard Millet (Sawa) Rice",
    millet: "Barnyard",
    category: "whole-grain",
    tagline: "Unpolished Sawa — the fasting-day favourite.",
    description:
      "Barnyard millet, called Sawa or Sanwa, is the lightest of the millets and a traditional vrat (fasting) grain. Left unpolished to keep its fibre and minerals intact. Cooks quickly into a fluffy, rice-like grain.",
    hero: "https://thumbs.dreamstime.com/b/millet-ancient-african-grain-wooden-bowl-white-background-overhead-flat-lay-shot-healthy-vegan-side-dish-402820873.jpg",
    gallery: [
      "https://thumbs.dreamstime.com/b/millet-ancient-african-grain-wooden-bowl-white-background-overhead-flat-lay-shot-healthy-vegan-side-dish-402820873.jpg",
    ],
    packSizes: [
      { weight: "500g", price: 80, mrp: 100 },
      { weight: "1kg", price: 145, mrp: 180 },
    ],
    origin: "Shahdol district",
    district: "Shahdol",
    benefits: [
      "Lowest-calorie millet — light on the stomach",
      "Traditional fasting (vrat) grain",
      "High in fibre and iron",
      "Naturally gluten-free",
    ],
    nutrition: [
      { label: "Energy", value: "307 kcal" },
      { label: "Protein", value: "6.2 g" },
      { label: "Carbs", value: "65.5 g" },
      { label: "Fibre", value: "9.8 g" },
      { label: "Iron", value: "5.0 mg" },
    ],
    recipes: ["Sama ke Chawal", "Barnyard Pulao", "Vrat Khichdi"],
    dietary: ["Gluten-free", "Low-GI", "Vegan"],
    rating: 4.7,
    reviews: 96,
    inStock: true,
    releasedAt: "2025-12-01",
  },
  {
    slug: "kodo-poha",
    name: "Kodo Millet Poha",
    millet: "Kodo",
    category: "whole-grain",
    tagline: "Flattened Kodo flakes for a 10-minute breakfast.",
    description:
      "Kodo millet, par-boiled and flattened into light poha flakes. A faster, higher-fibre take on the classic Indori breakfast — just soak, temper and serve. No rice, all millet.",
    hero: "https://c8.alamy.com/comp/MJK4M4/millet-flakes-in-wooden-bowl-light-yellow-rolled-millet-used-for-porridge-muesli-and-baking-wheat-and-gluten-free-grain-isolated-macro-photo-MJK4M4.jpg",
    gallery: [
      "https://c8.alamy.com/comp/MJK4M4/millet-flakes-in-wooden-bowl-light-yellow-rolled-millet-used-for-porridge-muesli-and-baking-wheat-and-gluten-free-grain-isolated-macro-photo-MJK4M4.jpg",
    ],
    packSizes: [
      { weight: "250g", price: 90, mrp: 110 },
      { weight: "500g", price: 170, mrp: 210 },
    ],
    origin: "Mandla district",
    district: "Mandla",
    benefits: [
      "Ready breakfast in under 10 minutes",
      "Higher fibre than rice poha",
      "Low glycemic index",
      "Naturally gluten-free",
    ],
    nutrition: [
      { label: "Energy", value: "346 kcal" },
      { label: "Protein", value: "7.8 g" },
      { label: "Carbs", value: "72.0 g" },
      { label: "Fibre", value: "6.4 g" },
      { label: "Iron", value: "2.3 mg" },
    ],
    recipes: ["Kanda Poha", "Vegetable Poha", "Poha Chivda"],
    dietary: ["Gluten-free", "Low-GI", "Vegan"],
    rating: 4.6,
    reviews: 71,
    inStock: true,
    releasedAt: "2026-01-15",
  },
  {
    slug: "kutki-poha",
    name: "Kutki Millet Poha",
    millet: "Kutki",
    category: "whole-grain",
    tagline: "Little-millet flakes — soft, quick, iron-rich.",
    description:
      "Little millet (Kutki) par-boiled and rolled into delicate poha flakes. Softer than Kodo poha and naturally rich in iron — a wholesome breakfast or evening chivda base.",
    hero: "https://c8.alamy.com/comp/MJK4M4/millet-flakes-in-wooden-bowl-light-yellow-rolled-millet-used-for-porridge-muesli-and-baking-wheat-and-gluten-free-grain-isolated-macro-photo-MJK4M4.jpg",
    gallery: [
      "https://c8.alamy.com/comp/MJK4M4/millet-flakes-in-wooden-bowl-light-yellow-rolled-millet-used-for-porridge-muesli-and-baking-wheat-and-gluten-free-grain-isolated-macro-photo-MJK4M4.jpg",
    ],
    packSizes: [
      { weight: "250g", price: 100, mrp: 125 },
      { weight: "500g", price: 195, mrp: 240 },
    ],
    origin: "Dindori district",
    district: "Dindori",
    benefits: [
      "Naturally high in iron",
      "Soft flakes, quick to cook",
      "Low glycemic index",
      "Naturally gluten-free",
    ],
    nutrition: [
      { label: "Energy", value: "344 kcal" },
      { label: "Protein", value: "7.4 g" },
      { label: "Carbs", value: "70.5 g" },
      { label: "Fibre", value: "6.0 g" },
      { label: "Iron", value: "7.8 mg" },
    ],
    recipes: ["Kanda Poha", "Lemon Poha", "Poha Cutlet"],
    dietary: ["Gluten-free", "High-iron", "Vegan"],
    rating: 4.6,
    reviews: 58,
    inStock: true,
    releasedAt: "2026-01-15",
  },

  // ----- Instant mixes -----------------------------------------------------
  {
    slug: "millet-idli-mix",
    name: "Millet Idli Mix",
    millet: "Mixed",
    category: "ready-to-cook",
    tagline: "Soft, fluffy idlis — no rice, no fermenting overnight.",
    description:
      "A ready multi-millet batter mix for soft, fluffy idlis. Blended from Kodo, Kutki and Sawa millets with urad dal. Just add water, rest briefly and steam — a high-fibre South-Indian breakfast without the white rice.",
    hero: "/products/idli-mix.jpeg",
    gallery: ["/products/idli-mix.jpeg"],
    packSizes: [
      { weight: "200g", price: 95, mrp: 120 },
      { weight: "500g", price: 230, mrp: 285 },
    ],
    origin: "Federation Bhopal unit",
    district: "Multi-district blend",
    benefits: [
      "High-fibre, gluten-free idlis",
      "No overnight fermentation needed",
      "Made from three millets + urad dal",
      "Low glycemic index",
    ],
    nutrition: [
      { label: "Energy", value: "358 kcal" },
      { label: "Protein", value: "10.2 g" },
      { label: "Carbs", value: "66.0 g" },
      { label: "Fibre", value: "8.4 g" },
    ],
    recipes: ["Steamed Idli", "Mini Idli", "Idli Manchurian"],
    dietary: ["Gluten-free", "High-fibre", "Vegan"],
    rating: 4.7,
    reviews: 134,
    inStock: true,
    featured: true,
    badges: ["bestseller"],
    releasedAt: "2026-02-10",
  },
  {
    slug: "millet-dosa-mix",
    name: "Millet Dosa Mix",
    millet: "Mixed",
    category: "ready-to-cook",
    tagline: "Crisp golden dosas from a three-millet batter.",
    description:
      "A ready dosa mix of Kodo, Kutki and Sawa millets with urad dal for crisp, golden dosas every time. Just whisk with water and rest — no grinding, no white rice.",
    hero: "/products/dosa-mix.jpeg",
    gallery: ["/products/dosa-mix.jpeg"],
    packSizes: [
      { weight: "200g", price: 95, mrp: 120 },
      { weight: "500g", price: 230, mrp: 285 },
    ],
    origin: "Federation Bhopal unit",
    district: "Multi-district blend",
    benefits: [
      "Crisp dosas, no grinding",
      "Three millets + urad dal",
      "High in fibre, gluten-free",
      "Low glycemic index",
    ],
    nutrition: [
      { label: "Energy", value: "356 kcal" },
      { label: "Protein", value: "9.8 g" },
      { label: "Carbs", value: "67.0 g" },
      { label: "Fibre", value: "8.0 g" },
    ],
    recipes: ["Plain Dosa", "Masala Dosa", "Uttapam"],
    dietary: ["Gluten-free", "High-fibre", "Vegan"],
    rating: 4.7,
    reviews: 121,
    inStock: true,
    releasedAt: "2026-02-10",
  },
  {
    slug: "millet-upma-mix",
    name: "Millet Upma Mix",
    millet: "Mixed",
    category: "ready-to-cook",
    tagline: "Savoury millet upma with veggies — ready in minutes.",
    description:
      "A savoury multi-millet upma mix with dried vegetables, cashew and tempering. Just sauté and add hot water for a warm, wholesome breakfast or snack in under 10 minutes.",
    hero: "/products/upma-mix.jpeg",
    gallery: ["/products/upma-mix.jpeg"],
    packSizes: [
      { weight: "200g", price: 95, mrp: 120 },
      { weight: "500g", price: 230, mrp: 285 },
    ],
    origin: "Federation Bhopal unit",
    district: "Multi-district blend",
    benefits: [
      "Ready in under 10 minutes",
      "With real vegetables and cashew",
      "High in fibre, gluten-free",
      "Low glycemic index",
    ],
    nutrition: [
      { label: "Energy", value: "362 kcal" },
      { label: "Protein", value: "9.4 g" },
      { label: "Carbs", value: "68.0 g" },
      { label: "Fibre", value: "8.6 g" },
    ],
    recipes: ["Vegetable Upma", "Masala Upma", "Upma Cutlet"],
    dietary: ["Gluten-free", "High-fibre", "Vegan"],
    rating: 4.6,
    reviews: 64,
    inStock: true,
    badges: ["new"],
    releasedAt: "2026-04-20",
  },
  {
    slug: "millet-khichdi-mix",
    name: "Millet Khichdi Mix",
    millet: "Mixed",
    category: "ready-to-cook",
    tagline: "One-pot comfort khichdi — high-fibre, protein-rich.",
    description:
      "A wholesome one-pot mix of millets, moong dal and gentle spices. Pressure-cook with water and a spoon of ghee for soft, comforting khichdi — the meal our farmer-members feed their own families.",
    hero: "/products/khichdi-mix.jpeg",
    gallery: ["/products/khichdi-mix.jpeg"],
    packSizes: [
      { weight: "200g", price: 115, mrp: 140 },
      { weight: "500g", price: 275, mrp: 340 },
    ],
    origin: "Federation Bhopal unit",
    district: "Multi-district blend",
    benefits: [
      "One-pot meal, ready in 20 minutes",
      "Millets + moong dal — complete protein",
      "High in fibre, gluten-free",
      "Easy to digest, low-GI",
    ],
    nutrition: [
      { label: "Energy", value: "360 kcal" },
      { label: "Protein", value: "11.0 g" },
      { label: "Carbs", value: "64.0 g" },
      { label: "Fibre", value: "9.2 g" },
    ],
    recipes: ["Masala Khichdi", "Vegetable Khichdi", "Bisi Bele style"],
    dietary: ["Gluten-free", "High-fibre", "Protein-rich"],
    rating: 4.9,
    reviews: 188,
    inStock: true,
    featured: true,
    badges: ["bestseller"],
    releasedAt: "2026-02-10",
  },
  {
    slug: "millet-biryani-mix",
    name: "Millet Biryani Mix",
    millet: "Mixed",
    category: "ready-to-cook",
    tagline: "Aromatic dum biryani — made with millets, not rice.",
    description:
      "A festive multi-millet biryani mix with whole spices and biryani masala. Layered and cooked on dum, it delivers all the aroma of a classic biryani with the fibre and low-GI benefits of millet. Our most premium ready meal.",
    hero: "https://thumbs.dreamstime.com/b/organic-yellow-millet-grain-wooden-bowl-white-table-healthy-food-ingredient-top-view-349224511.jpg",
    gallery: [
      "https://thumbs.dreamstime.com/b/organic-yellow-millet-grain-wooden-bowl-white-table-healthy-food-ingredient-top-view-349224511.jpg",
    ],
    packSizes: [
      { weight: "200g", price: 260, mrp: 320 },
      { weight: "500g", price: 620, mrp: 770 },
    ],
    origin: "Federation Bhopal unit",
    district: "Multi-district blend",
    benefits: [
      "Festive biryani without the white rice",
      "Whole spices + biryani masala included",
      "High in fibre, gluten-free",
      "Low glycemic index",
    ],
    nutrition: [
      { label: "Energy", value: "372 kcal" },
      { label: "Protein", value: "9.6 g" },
      { label: "Carbs", value: "66.0 g" },
      { label: "Fibre", value: "8.0 g" },
    ],
    recipes: ["Veg Dum Biryani", "Paneer Biryani", "Biryani with raita"],
    dietary: ["Gluten-free", "High-fibre", "Vegan"],
    rating: 4.8,
    reviews: 73,
    inStock: true,
    badges: ["limited"],
    releasedAt: "2026-03-15",
  },

  // ----- Cookies -----------------------------------------------------------
  {
    slug: "cranberry-millet-cookies",
    name: "Multi Millet Cranberry Cookies",
    millet: "Mixed",
    category: "snack",
    tagline: "Pure · Natural · Nutritious — with real cranberries.",
    description:
      "Crunchy multi-millet cookies baked with Kutki, Kodo and Sawa millets and studded with tangy cranberries. No maida, no palm oil — a wholesome tea-time treat made at a women-run unit in Bhopal.",
    hero: "/products/cranberry-cookies.jpeg",
    gallery: ["/products/cranberry-cookies.jpeg"],
    packSizes: [
      { weight: "200g", price: 210, mrp: 260 },
      { weight: "400g", price: 400, mrp: 500 },
    ],
    origin: "Bhopal women-run bakery unit",
    district: "Bhopal",
    benefits: [
      "Baked with three millets, no maida",
      "Real cranberries, no palm oil",
      "Made by a women-run SHG",
      "Wholesome tea-time snack",
    ],
    nutrition: [
      { label: "Energy", value: "452 kcal" },
      { label: "Protein", value: "6.8 g" },
      { label: "Carbs", value: "68.0 g" },
      { label: "Fibre", value: "4.2 g" },
      { label: "Fat", value: "16.0 g" },
    ],
    recipes: [],
    dietary: ["No maida", "Multi-millet"],
    rating: 4.8,
    reviews: 142,
    inStock: true,
    featured: true,
    badges: ["bestseller", "new"],
    releasedAt: "2026-04-25",
  },
  {
    slug: "almond-millet-cookies",
    name: "Multi Millet Almond Cookies",
    millet: "Mixed",
    category: "snack",
    tagline: "Pure · Natural · Nutritious — loaded with almonds.",
    description:
      "Rich, crunchy multi-millet cookies baked with Kutki, Kodo and Sawa millets and generous slivers of almond. No maida, no palm oil — slow-energy snacking that's genuinely good for you.",
    hero: "/products/almond-cookies.jpeg",
    gallery: ["/products/almond-cookies.jpeg"],
    packSizes: [
      { weight: "200g", price: 200, mrp: 250 },
      { weight: "400g", price: 380, mrp: 480 },
    ],
    origin: "Bhopal women-run bakery unit",
    district: "Bhopal",
    benefits: [
      "Baked with three millets, no maida",
      "Real almonds, no palm oil",
      "Made by a women-run SHG",
      "Slow-release energy",
    ],
    nutrition: [
      { label: "Energy", value: "468 kcal" },
      { label: "Protein", value: "7.6 g" },
      { label: "Carbs", value: "64.0 g" },
      { label: "Fibre", value: "4.6 g" },
      { label: "Fat", value: "19.0 g" },
    ],
    recipes: [],
    dietary: ["No maida", "Multi-millet"],
    rating: 4.7,
    reviews: 118,
    inStock: true,
    badges: ["new"],
    releasedAt: "2026-04-25",
  },
  {
    slug: "chocochip-millet-cookies",
    name: "Multi Millet Choco Chip Cookies",
    millet: "Mixed",
    category: "snack",
    tagline: "Pure · Natural · Nutritious — the kids' favourite.",
    description:
      "Multi-millet cookies baked with Kutki, Kodo and Sawa millets and real chocolate chips. The treat that gets children eating millets — no maida, no palm oil.",
    hero: "/products/chocochip-cookies.jpeg",
    gallery: ["/products/chocochip-cookies.jpeg"],
    packSizes: [
      { weight: "200g", price: 200, mrp: 250 },
      { weight: "400g", price: 380, mrp: 480 },
    ],
    origin: "Bhopal women-run bakery unit",
    district: "Bhopal",
    benefits: [
      "Baked with three millets, no maida",
      "Real chocolate chips, no palm oil",
      "Made by a women-run SHG",
      "Kid-approved way to eat millets",
    ],
    nutrition: [
      { label: "Energy", value: "470 kcal" },
      { label: "Protein", value: "6.4 g" },
      { label: "Carbs", value: "67.0 g" },
      { label: "Fibre", value: "4.0 g" },
      { label: "Fat", value: "18.0 g" },
    ],
    recipes: [],
    dietary: ["No maida", "Multi-millet"],
    rating: 4.8,
    reviews: 156,
    inStock: true,
    featured: true,
    badges: ["new"],
    releasedAt: "2026-04-25",
  },

  // ----- Gift --------------------------------------------------------------
  {
    slug: "harvest-gift-hamper",
    name: "Harvest Gift Hamper",
    millet: "All",
    category: "gift",
    tagline: "The whole Narmada Millets range, in one handwoven basket.",
    description:
      "Our flagship hamper for festivals and corporate gifting. Includes Kodo rice, Little-millet rice, a khichdi mix and a box of multi-millet cookies — packed in a handwoven sabai-grass basket made by artisans in eastern MP. Each hamper carries a card naming the farmer collective behind your grains.",
    hero: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/b984af212237383.6731edf4820f3.jpg",
    gallery: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/b984af212237383.6731edf4820f3.jpg",
      "https://gumlet.assettype.com/freepressjournal/2023-06/5e16b281-d4a7-4145-babb-0f87d1567c18/Gond_Thali_16x9.png",
    ],
    packSizes: [{ weight: "Hamper", price: 1499, mrp: 1850 }],
    origin: "Federation curated",
    district: "Multi-district",
    benefits: [
      "Four bestsellers in one curated gift",
      "Handwoven sabai-grass basket",
      "Includes farmer-collective story card",
      "Direct income to tribal women",
    ],
    nutrition: [],
    recipes: [],
    dietary: ["Gluten-free", "Vegan"],
    rating: 4.9,
    reviews: 54,
    inStock: true,
    featured: true,
    badges: ["limited"],
    releasedAt: "2026-03-01",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getFeatured() {
  return products.filter((p) => p.featured);
}

export function getBestsellers(limit = 6) {
  return [...products].sort((a, b) => b.reviews - a.reviews).slice(0, limit);
}

export function getNewArrivals(limit = 4) {
  return [...products]
    .sort(
      (a, b) =>
        new Date(b.releasedAt).getTime() - new Date(a.releasedAt).getTime()
    )
    .slice(0, limit);
}

export function startingPrice(p: Product) {
  return Math.min(...p.packSizes.map((s) => s.price));
}

// ---------------------------------------------------------------------------
// Shop filtering
// ---------------------------------------------------------------------------

export const categoryOptions: { value: ProductCategory; label: string }[] = [
  { value: "whole-grain", label: "Rice & grains" },
  { value: "ready-to-cook", label: "Instant mixes" },
  { value: "snack", label: "Cookies" },
  { value: "gift", label: "Gift packs" },
];

export const milletOptions = ["Kodo", "Kutki", "Barnyard", "Mixed"];

export const badgeOptions: { value: ProductBadge; label: string }[] = [
  { value: "bestseller", label: "Bestsellers" },
  { value: "new", label: "New arrivals" },
  { value: "sale", label: "On sale" },
  { value: "limited", label: "Limited" },
];

export const priceBuckets = [
  { value: "u100", label: "Under ₹100", min: 0, max: 99 },
  { value: "100-200", label: "₹100 – ₹200", min: 100, max: 200 },
  { value: "200-400", label: "₹200 – ₹400", min: 200, max: 400 },
  { value: "400+", label: "₹400 & above", min: 400, max: Infinity },
] as const;

export type PriceBucket = (typeof priceBuckets)[number]["value"];

export function dietaryOptions(): string[] {
  const set = new Set<string>();
  products.forEach((p) => p.dietary.forEach((d) => set.add(d)));
  return [...set];
}

export function packSizeOptions(): string[] {
  const set = new Set<string>();
  products.forEach((p) => p.packSizes.forEach((s) => set.add(s.weight)));
  return [...set];
}

export function countByCategory(cat: ProductCategory) {
  return products.filter((p) => p.category === cat).length;
}

export interface ShopFilters {
  categories: ProductCategory[];
  millets: string[];
  packSizes: string[];
  dietary: string[];
  badges: ProductBadge[];
  price: PriceBucket | null;
  inStockOnly: boolean;
  search: string;
}

export const emptyFilters: ShopFilters = {
  categories: [],
  millets: [],
  packSizes: [],
  dietary: [],
  badges: [],
  price: null,
  inStockOnly: false,
  search: "",
};

export function activeFilterCount(f: ShopFilters): number {
  return (
    f.categories.length +
    f.millets.length +
    f.packSizes.length +
    f.dietary.length +
    f.badges.length +
    (f.price ? 1 : 0) +
    (f.inStockOnly ? 1 : 0) +
    (f.search.trim() ? 1 : 0)
  );
}

export function filterProducts(items: Product[], f: ShopFilters): Product[] {
  return items.filter((p) => {
    if (f.categories.length && !f.categories.includes(p.category)) return false;
    if (
      f.millets.length &&
      !f.millets.some((m) => p.millet.toLowerCase().includes(m.toLowerCase()))
    )
      return false;
    if (
      f.packSizes.length &&
      !p.packSizes.some((s) => f.packSizes.includes(s.weight))
    )
      return false;
    if (f.dietary.length && !f.dietary.some((d) => p.dietary.includes(d)))
      return false;
    if (f.badges.length && !f.badges.some((b) => p.badges?.includes(b)))
      return false;
    if (f.inStockOnly && !p.inStock) return false;
    if (f.price) {
      const bucket = priceBuckets.find((b) => b.value === f.price)!;
      const sp = startingPrice(p);
      if (sp < bucket.min || sp > bucket.max) return false;
    }
    if (f.search.trim()) {
      const q = f.search.toLowerCase();
      const hay =
        `${p.name} ${p.millet} ${p.tagline} ${p.description}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

export type SortOption = "featured" | "price-asc" | "price-desc" | "rating" | "newest";

export function sortProducts(items: Product[], sort: SortOption): Product[] {
  const copy = [...items];
  switch (sort) {
    case "price-asc":
      return copy.sort((a, b) => startingPrice(a) - startingPrice(b));
    case "price-desc":
      return copy.sort((a, b) => startingPrice(b) - startingPrice(a));
    case "rating":
      return copy.sort((a, b) => b.rating - a.rating);
    case "newest":
      return copy.sort(
        (a, b) =>
          new Date(b.releasedAt).getTime() - new Date(a.releasedAt).getTime()
      );
    case "featured":
    default:
      return copy.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }
}
