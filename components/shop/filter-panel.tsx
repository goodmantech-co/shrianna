"use client";

import * as React from "react";
import { Check } from "lucide-react";
import {
  categoryOptions,
  milletOptions,
  badgeOptions,
  priceBuckets,
  dietaryOptions,
  packSizeOptions,
  countByCategory,
  type ShopFilters,
  type ProductCategory,
  type ProductBadge,
  type PriceBucket,
} from "@/lib/products";
import { cn } from "@/lib/utils";

interface FilterPanelProps {
  filters: ShopFilters;
  setFilters: React.Dispatch<React.SetStateAction<ShopFilters>>;
  onClear: () => void;
  resultCount: number;
}

function toggleIn<T>(arr: T[], value: T): T[] {
  return arr.includes(value)
    ? arr.filter((v) => v !== value)
    : [...arr, value];
}

function Group({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-border py-5 first:pt-0">
      <p className="mb-3 type-eyebrow text-muted-foreground">
        {title}
      </p>
      {children}
    </div>
  );
}

function CheckRow({
  label,
  checked,
  onClick,
  count,
}: {
  label: string;
  checked: boolean;
  onClick: () => void;
  count?: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-center gap-2.5 py-1.5 text-left text-sm"
    >
      <span
        className={cn(
          "flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] border transition-colors",
          checked
            ? "border-primary bg-primary text-primary-foreground"
            : "border-foreground/25 bg-card group-hover:border-foreground/50"
        )}
      >
        {checked && <Check className="h-3 w-3" strokeWidth={3} />}
      </span>
      <span className={cn("flex-1", checked && "font-medium")}>{label}</span>
      {count !== undefined && (
        <span className="text-xs text-muted-foreground">{count}</span>
      )}
    </button>
  );
}

function Pill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card hover:border-foreground/40"
      )}
    >
      {label}
    </button>
  );
}

export function FilterPanel({
  filters,
  setFilters,
  onClear,
  resultCount,
}: FilterPanelProps) {
  const diet = dietaryOptions();
  const packs = packSizeOptions();

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between pb-4">
        <p className="type-h6">Filters</p>
        <button
          type="button"
          onClick={onClear}
          className="text-xs font-medium text-primary hover:underline"
        >
          Clear all
        </button>
      </div>

      <Group title="Category">
        <div className="space-y-0.5">
          {categoryOptions.map((c) => (
            <CheckRow
              key={c.value}
              label={c.label}
              count={countByCategory(c.value)}
              checked={filters.categories.includes(c.value)}
              onClick={() =>
                setFilters((f) => ({
                  ...f,
                  categories: toggleIn<ProductCategory>(f.categories, c.value),
                }))
              }
            />
          ))}
        </div>
      </Group>

      <Group title="Millet type">
        <div className="flex flex-wrap gap-2">
          {milletOptions.map((m) => (
            <Pill
              key={m}
              label={m}
              active={filters.millets.includes(m)}
              onClick={() =>
                setFilters((f) => ({ ...f, millets: toggleIn(f.millets, m) }))
              }
            />
          ))}
        </div>
      </Group>

      <Group title="Price">
        <div className="space-y-0.5">
          {priceBuckets.map((b) => (
            <CheckRow
              key={b.value}
              label={b.label}
              checked={filters.price === b.value}
              onClick={() =>
                setFilters((f) => ({
                  ...f,
                  price: f.price === b.value ? null : (b.value as PriceBucket),
                }))
              }
            />
          ))}
        </div>
      </Group>

      <Group title="Pack size">
        <div className="flex flex-wrap gap-2">
          {packs.map((p) => (
            <Pill
              key={p}
              label={p}
              active={filters.packSizes.includes(p)}
              onClick={() =>
                setFilters((f) => ({
                  ...f,
                  packSizes: toggleIn(f.packSizes, p),
                }))
              }
            />
          ))}
        </div>
      </Group>

      <Group title="Good for">
        <div className="space-y-0.5">
          {diet.map((d) => (
            <CheckRow
              key={d}
              label={d}
              checked={filters.dietary.includes(d)}
              onClick={() =>
                setFilters((f) => ({ ...f, dietary: toggleIn(f.dietary, d) }))
              }
            />
          ))}
        </div>
      </Group>

      <Group title="Highlights">
        <div className="space-y-0.5">
          {badgeOptions.map((b) => (
            <CheckRow
              key={b.value}
              label={b.label}
              checked={filters.badges.includes(b.value)}
              onClick={() =>
                setFilters((f) => ({
                  ...f,
                  badges: toggleIn<ProductBadge>(f.badges, b.value),
                }))
              }
            />
          ))}
          <CheckRow
            label="In stock only"
            checked={filters.inStockOnly}
            onClick={() =>
              setFilters((f) => ({ ...f, inStockOnly: !f.inStockOnly }))
            }
          />
        </div>
      </Group>

      <p className="pt-4 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">{resultCount}</span>{" "}
        {resultCount === 1 ? "product" : "products"} match
      </p>
    </div>
  );
}
