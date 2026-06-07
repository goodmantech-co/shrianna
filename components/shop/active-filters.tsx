"use client";

import { X } from "lucide-react";
import {
  categoryOptions,
  badgeOptions,
  priceBuckets,
  type ShopFilters,
} from "@/lib/products";

interface Chip {
  label: string;
  clear: () => void;
}

export function ActiveFilters({
  filters,
  setFilters,
  onClear,
}: {
  filters: ShopFilters;
  setFilters: React.Dispatch<React.SetStateAction<ShopFilters>>;
  onClear: () => void;
}) {
  const chips: Chip[] = [];

  filters.categories.forEach((c) => {
    const label = categoryOptions.find((o) => o.value === c)?.label ?? c;
    chips.push({
      label,
      clear: () =>
        setFilters((f) => ({
          ...f,
          categories: f.categories.filter((v) => v !== c),
        })),
    });
  });

  filters.millets.forEach((m) =>
    chips.push({
      label: m,
      clear: () =>
        setFilters((f) => ({ ...f, millets: f.millets.filter((v) => v !== m) })),
    })
  );

  filters.packSizes.forEach((p) =>
    chips.push({
      label: p,
      clear: () =>
        setFilters((f) => ({
          ...f,
          packSizes: f.packSizes.filter((v) => v !== p),
        })),
    })
  );

  filters.dietary.forEach((d) =>
    chips.push({
      label: d,
      clear: () =>
        setFilters((f) => ({ ...f, dietary: f.dietary.filter((v) => v !== d) })),
    })
  );

  filters.badges.forEach((b) => {
    const label = badgeOptions.find((o) => o.value === b)?.label ?? b;
    chips.push({
      label,
      clear: () =>
        setFilters((f) => ({ ...f, badges: f.badges.filter((v) => v !== b) })),
    });
  });

  if (filters.price) {
    const label =
      priceBuckets.find((b) => b.value === filters.price)?.label ?? "";
    chips.push({
      label,
      clear: () => setFilters((f) => ({ ...f, price: null })),
    });
  }

  if (filters.inStockOnly) {
    chips.push({
      label: "In stock",
      clear: () => setFilters((f) => ({ ...f, inStockOnly: false })),
    });
  }

  if (filters.search.trim()) {
    chips.push({
      label: `"${filters.search.trim()}"`,
      clear: () => setFilters((f) => ({ ...f, search: "" })),
    });
  }

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {chips.map((chip, i) => (
        <button
          key={`${chip.label}-${i}`}
          type="button"
          onClick={chip.clear}
          className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted/70"
        >
          {chip.label}
          <X className="h-3 w-3" />
        </button>
      ))}
      <button
        type="button"
        onClick={onClear}
        className="text-xs font-medium text-primary hover:underline"
      >
        Clear all
      </button>
    </div>
  );
}
