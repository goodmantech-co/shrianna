"use client";

import Image from "next/image";
import { Wheat, Soup, Cookie, Gift, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";
import { countByCategory, type ProductCategory } from "@/lib/products";

const tiles: {
  value: ProductCategory | "all";
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
}[] = [
  {
    value: "all",
    label: "All products",
    icon: LayoutGrid,
    image: "/products/kodo-rice.jpeg",
  },
  {
    value: "whole-grain",
    label: "Rice & grains",
    icon: Wheat,
    image: "/products/little-millet-rice.jpeg",
  },
  {
    value: "ready-to-cook",
    label: "Instant mixes",
    icon: Soup,
    image: "/photos/real-pack-range.jpg",
  },
  {
    value: "snack",
    label: "Cookies",
    icon: Cookie,
    image: "/products/cranberry-cookies.jpeg",
  },
  {
    value: "gift",
    label: "Gift packs",
    icon: Gift,
    image:
      "/products/harvest-hamper.jpg",
  },
];

export function CategoryStrip({
  active,
  onSelect,
}: {
  active: ProductCategory | "all";
  onSelect: (value: ProductCategory | "all") => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {tiles.map((t) => {
        const isActive = active === t.value;
        const count =
          t.value === "all" ? undefined : countByCategory(t.value);
        return (
          <button
            key={t.value}
            type="button"
            onClick={() => onSelect(t.value)}
            className={cn(
              "group relative flex h-28 flex-col justify-end overflow-hidden rounded-xl border p-3 text-left transition-all",
              isActive
                ? "border-primary ring-2 ring-primary/30"
                : "border-border hover:border-foreground/30"
            )}
          >
            <Image
              src={t.image}
              alt={t.label}
              fill
              sizes="(min-width: 1024px) 20vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/25 to-transparent" />
            <div className="relative flex items-center gap-2 text-background">
              <t.icon className="h-4 w-4 shrink-0" />
              <span className="text-sm font-semibold leading-tight">
                {t.label}
              </span>
            </div>
            {count !== undefined && (
              <span className="relative mt-0.5 text-[11px] text-background/80">
                {count} {count === 1 ? "product" : "products"}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
