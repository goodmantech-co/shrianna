export type ProductCategory =
  | "whole-grain"
  | "flour"
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

export const products: Product[] = [
  {
    slug: "kodo-millet-whole",
    name: "Whole Kodo Millet",
    millet: "Kodo",
    category: "whole-grain",
    tagline: "Ancient grain. Slow-grown. Hand-cleaned.",
    description:
      "Kodo (Paspalum scrobiculatum) is one of the oldest cultivated grains in India. Our Kodo is rain-fed, grown without chemical inputs by smallholder women farmers across Mandla and Dindori. Each grain is sun-dried on the threshing floor before being de-husked at our Bhopal mill.",
    hero: "https://thumbs.dreamstime.com/b/organic-yellow-millet-grain-wooden-bowl-white-table-healthy-food-ingredient-top-view-349224511.jpg",
    gallery: [
      "https://thumbs.dreamstime.com/b/organic-yellow-millet-grain-wooden-bowl-white-table-healthy-food-ingredient-top-view-349224511.jpg",
      "https://thumbs.dreamstime.com/b/organic-yellow-millet-grain-wooden-bowl-white-table-healthy-food-ingredient-top-view-349224559.jpg",
      "https://thumbs.dreamstime.com/b/millet-ancient-african-grain-wooden-bowl-white-background-overhead-flat-lay-shot-healthy-vegan-side-dish-402820873.jpg",
    ],
    packSizes: [
      { weight: "500g", price: 180, mrp: 220 },
      { weight: "1kg", price: 320, mrp: 380 },
      { weight: "5kg", price: 1450, mrp: 1750 },
    ],
    origin: "Mandla district",
    district: "Mandla",
    benefits: [
      "Naturally gluten-free",
      "Low glycemic index — gentle on blood sugar",
      "Rich in dietary fibre and antioxidants",
      "High in B-vitamins and minerals",
    ],
    nutrition: [
      { label: "Energy", value: "353 kcal" },
      { label: "Protein", value: "8.3 g" },
      { label: "Carbs", value: "65.9 g" },
      { label: "Fibre", value: "9.0 g" },
      { label: "Fat", value: "1.4 g" },
      { label: "Iron", value: "0.5 mg" },
    ],
    recipes: ["Kodo Pulao", "Kodo Khichdi", "Kodo Idli"],
    dietary: ["Gluten-free", "Vegan", "Low GI"],
    rating: 4.8,
    reviews: 312,
    inStock: true,
    featured: true,
    badges: ["bestseller"],
    releasedAt: "2025-11-01",
  },
  {
    slug: "kutki-millet-whole",
    name: "Whole Kutki Millet",
    millet: "Kutki",
    category: "whole-grain",
    tagline: "Little millet. Big heritage. Ready on dew.",
    description:
      "Kutki, also called little millet, is the staple grain of the Gond and Baiga communities of central India. It survives where almost nothing else can — the saying goes that kutki gets ready just with dew. Cooks like rice, with a delicate nutty flavour.",
    hero: "https://c8.alamy.com/comp/3AWG1G3/golden-millet-in-a-wooden-bowl-3AWG1G3.jpg",
    gallery: [
      "https://c8.alamy.com/comp/3AWG1G3/golden-millet-in-a-wooden-bowl-3AWG1G3.jpg",
      "https://thumbs.dreamstime.com/z/top-view-millet-rice-millet-grains-wooden-bowl-isolated-white-80791424.jpg",
      "https://thumbs.dreamstime.com/z/millet-rice-millet-grains-wooden-bowl-put-wooden-table-top-view-background-92090369.jpg",
    ],
    packSizes: [
      { weight: "500g", price: 220, mrp: 260 },
      { weight: "1kg", price: 400, mrp: 460 },
      { weight: "5kg", price: 1850 },
    ],
    origin: "Dindori district",
    district: "Dindori",
    benefits: [
      "Easy to digest — ideal for daily eating",
      "Drought-resilient — climate-smart food",
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
    recipes: ["Kutki Kheer", "Kutki Upma", "Kutki Khichdi"],
    dietary: ["Gluten-free", "Vegan", "High iron"],
    rating: 4.9,
    reviews: 247,
    inStock: true,
    featured: true,
    badges: ["bestseller", "sale"],
    releasedAt: "2025-11-01",
  },
  {
    slug: "ragi-flour-stoneground",
    name: "Stone-Ground Ragi Flour",
    millet: "Ragi",
    category: "flour",
    tagline: "Finger millet, milled the slow way.",
    description:
      "Finger millet (ragi) is one of the highest plant sources of calcium. Our ragi is sourced from FPO members across central MP and stone-ground in small batches to preserve nutrition. Use for roti, ambli, malt, or simply mix into dosa batter.",
    hero: "https://c8.alamy.com/comp/MJK4M4/millet-flakes-in-wooden-bowl-light-yellow-rolled-millet-used-for-porridge-muesli-and-baking-wheat-and-gluten-free-grain-isolated-macro-photo-MJK4M4.jpg",
    gallery: [
      "https://c8.alamy.com/comp/MJK4M4/millet-flakes-in-wooden-bowl-light-yellow-rolled-millet-used-for-porridge-muesli-and-baking-wheat-and-gluten-free-grain-isolated-macro-photo-MJK4M4.jpg",
      "https://thumbs.dreamstime.com/z/hulled-millet-bowl-wooden-background-top-view-yellow-grain-rustic-style-237213455.jpg",
    ],
    packSizes: [
      { weight: "500g", price: 140 },
      { weight: "1kg", price: 260 },
    ],
    origin: "Chhindwara district",
    district: "Chhindwara",
    benefits: [
      "Highest plant source of calcium",
      "Supports bone health",
      "Rich in iron, suitable for growing children",
      "Gluten-free, easy to digest",
    ],
    nutrition: [
      { label: "Energy", value: "328 kcal" },
      { label: "Protein", value: "7.3 g" },
      { label: "Carbs", value: "72.0 g" },
      { label: "Fibre", value: "11.5 g" },
      { label: "Calcium", value: "344 mg" },
      { label: "Iron", value: "3.9 mg" },
    ],
    recipes: ["Ragi Roti", "Ragi Malt", "Ragi Mudde"],
    dietary: ["Gluten-free", "Vegan", "High calcium"],
    rating: 4.7,
    reviews: 168,
    inStock: true,
    releasedAt: "2025-10-15",
  },
  {
    slug: "mixed-millet-atta",
    name: "Federation Mixed Millet Atta",
    millet: "Mixed",
    category: "flour",
    tagline: "Six millets. One everyday roti.",
    description:
      "A blend of Kodo, Kutki, Ragi, Jowar, Bajra and Sama — milled together in proportions tuned for the perfect roti. This is the flour our farmer-members feed their own families with.",
    hero: "https://creadordesigns.com/wp-content/uploads/2022/08/millet-packaging.jpg",
    gallery: [
      "https://creadordesigns.com/wp-content/uploads/2022/08/millet-packaging.jpg",
      "https://feminisminindia.com/wp-content/uploads/2022/09/Processing-plant-of-federation.jpg",
      "https://images.bhaskarassets.com/web2images/521/2024/02/12/e3466c22-fd49-49f1-94d0-09da9d644155_1707740807770.jpg",
    ],
    packSizes: [
      { weight: "1kg", price: 240 },
      { weight: "5kg", price: 1100, mrp: 1300 },
    ],
    origin: "Multi-district blend",
    district: "Mandla · Dindori · Chhindwara",
    benefits: [
      "Six millets in everyday-friendly proportions",
      "Easier to roll than 100% millet flour",
      "Naturally low GI",
      "Family-tested by our own farmer-members",
    ],
    nutrition: [
      { label: "Energy", value: "340 kcal" },
      { label: "Protein", value: "9.1 g" },
      { label: "Carbs", value: "68.0 g" },
      { label: "Fibre", value: "10.2 g" },
      { label: "Iron", value: "4.1 mg" },
      { label: "Calcium", value: "180 mg" },
    ],
    recipes: ["Mixed Millet Roti", "Thalipeeth", "Millet Paratha"],
    dietary: ["Gluten-free", "Vegan", "Low GI"],
    rating: 4.9,
    reviews: 421,
    inStock: true,
    featured: true,
    badges: ["bestseller"],
    releasedAt: "2025-09-01",
  },
  {
    slug: "kodo-kutki-bar",
    name: "Kodo-Kutki Snack Bar",
    millet: "Kodo · Kutki",
    category: "snack",
    tagline: "Pocket millet. Jaggery-bound. No refined sugar.",
    description:
      "A chewy, slow-energy bar made from puffed Kodo and Kutki, bound with Madhya Pradesh jaggery and roasted peanuts. Made at a women-run unit in Bhopal. Six bars per box.",
    hero: "https://images.indianexpress.com/2018/10/kodo-kutki-bar-759.jpg",
    gallery: [
      "https://images.indianexpress.com/2018/10/kodo-kutki-bar-759.jpg",
    ],
    packSizes: [
      { weight: "Box of 6", price: 360 },
      { weight: "Box of 12", price: 680, mrp: 720 },
    ],
    origin: "Bhopal processing unit",
    district: "Bhopal",
    benefits: [
      "Slow-release energy, no refined sugar",
      "Made by a women-run SHG",
      "Travel-friendly format",
      "Naturally gluten-free",
    ],
    nutrition: [
      { label: "Per bar", value: "40g" },
      { label: "Energy", value: "158 kcal" },
      { label: "Protein", value: "4.2 g" },
      { label: "Added sugar", value: "0 g" },
    ],
    recipes: [],
    dietary: ["No refined sugar", "Vegan"],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    badges: ["new"],
    releasedAt: "2026-04-10",
  },
  {
    slug: "harvest-gift-hamper",
    name: "Harvest Gift Hamper",
    millet: "All",
    category: "gift",
    tagline: "Five millets. One handwoven basket. A story.",
    description:
      "Our flagship hamper for festivals and corporate gifting. Includes Kodo, Kutki, Ragi flour, Mixed atta, and a box of snack bars — packed inside a handwoven sabai-grass basket made by artisans in eastern MP. Each hamper includes a card naming the farmer collective behind your grains.",
    hero: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/b984af212237383.6731edf4820f3.jpg",
    gallery: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/b984af212237383.6731edf4820f3.jpg",
      "https://gumlet.assettype.com/freepressjournal/2023-06/5e16b281-d4a7-4145-babb-0f87d1567c18/Gond_Thali_16x9.png",
      "https://images.bhaskarassets.com/web2images/521/2023/08/02/fe9727a5-3f8c-4e47-a00b-63d229d15d97_1690960196315.jpg",
    ],
    packSizes: [{ weight: "Hamper", price: 1850 }],
    origin: "Federation curated",
    district: "Multi-district",
    benefits: [
      "Five SKUs, one curated gift",
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

export type SortOption = "featured" | "price-asc" | "price-desc" | "rating" | "newest";

export function sortProducts(items: Product[], sort: SortOption): Product[] {
  const copy = [...items];
  const startingPrice = (p: Product) =>
    Math.min(...p.packSizes.map((s) => s.price));
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
      return copy.sort(
        (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      );
  }
}
