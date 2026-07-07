import Link from "next/link";
import Image from "next/image";
import { Wheat, Soup, Cookie, Gift } from "lucide-react";
import { countByCategory, type ProductCategory } from "@/lib/products";

const tiles: {
  category: ProductCategory;
  label: string;
  blurb: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
}[] = [
  {
    category: "whole-grain",
    label: "Rice & grains",
    blurb: "Kodo, Kutki & poha",
    icon: Wheat,
    image: "/products/little-millet-rice.jpeg",
  },
  {
    category: "ready-to-cook",
    label: "Instant mixes",
    blurb: "Idli, dosa, khichdi",
    icon: Soup,
    image: "/photos/real-pack-range.jpg",
  },
  {
    category: "snack",
    label: "Cookies",
    blurb: "No maida, no palm oil",
    icon: Cookie,
    image: "/products/cranberry-cookies.jpeg",
  },
  {
    category: "gift",
    label: "Gift packs",
    blurb: "Festive hampers",
    icon: Gift,
    image:
      "/products/harvest-hamper.jpg",
  },
];

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {tiles.map((t) => (
        <Link
          key={t.category}
          href="/shop"
          className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-border p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg sm:aspect-[4/3] lg:aspect-[3/4]"
        >
          <Image
            src={t.image}
            alt={t.label}
            fill
            sizes="(min-width: 1024px) 24vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
          <div className="relative text-background">
            <t.icon className="mb-2 h-5 w-5" />
            <p className="font-serif text-xl leading-tight">{t.label}</p>
            <p className="mt-0.5 text-xs text-background/80">{t.blurb}</p>
            <p className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-background/90">
              Shop {countByCategory(t.category)} →
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
