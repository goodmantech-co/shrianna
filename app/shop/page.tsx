"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import { Badge } from "@/components/ui/badge";
import { TrustStrip } from "@/components/layout/trust-strip";
import {
  products,
  sortProducts,
  type ProductCategory,
  type SortOption,
} from "@/lib/products";
import { cn } from "@/lib/utils";

const categories: { value: ProductCategory | "all"; label: string }[] = [
  { value: "all", label: "All millets" },
  { value: "whole-grain", label: "Whole grains" },
  { value: "flour", label: "Flours" },
  { value: "snack", label: "Snacks" },
  { value: "gift", label: "Gifts" },
];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest first" },
  { value: "rating", label: "Top rated" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
];

export default function ShopPage() {
  const [active, setActive] = React.useState<ProductCategory | "all">("all");
  const [sort, setSort] = React.useState<SortOption>("featured");
  const [sortOpen, setSortOpen] = React.useState(false);

  const sortRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);
  const visible = sortProducts(filtered, sort);

  const currentSort = sortOptions.find((s) => s.value === sort)!;

  return (
    <>
      <TrustStrip />

      <Section className="pb-8">
        <Container size="wide">
          <div className="flex flex-col gap-6">
            <Eyebrow>The Shrianna shop</Eyebrow>
            <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
              Millets, milled and packed in Bhopal.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Every product on this page is traceable to a farmer collective in
              one of eleven tribal districts of Madhya Pradesh.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-b border-border pb-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setActive(c.value)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm transition-all",
                    active === c.value
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card hover:border-foreground/40"
                  )}
                >
                  {c.label}
                  <span
                    className={cn(
                      "ml-2 text-xs",
                      active === c.value ? "opacity-70" : "text-muted-foreground"
                    )}
                  >
                    {c.value === "all"
                      ? products.length
                      : products.filter((p) => p.category === c.value).length}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  {visible.length}
                </span>{" "}
                {visible.length === 1 ? "product" : "products"}
              </p>

              <div className="relative" ref={sortRef}>
                <button
                  onClick={() => setSortOpen((v) => !v)}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-foreground/40"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5" />
                  Sort: <span className="font-medium">{currentSort.label}</span>
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full z-10 mt-2 w-56 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setSort(opt.value);
                          setSortOpen(false);
                        }}
                        className={cn(
                          "block w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-muted",
                          opt.value === sort && "bg-muted font-medium"
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container size="wide">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>

          {visible.length === 0 && (
            <p className="py-20 text-center text-muted-foreground">
              No products in this category yet. Check back at the next harvest.
            </p>
          )}
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container size="wide">
          <div className="grid gap-10 rounded-2xl border border-border bg-card p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <Badge variant="accent" className="mb-4">
                For institutions
              </Badge>
              <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
                Bulk procurement for schools, canteens & retailers
              </h2>
              <p className="mt-4 text-muted-foreground">
                We supply mid-day meal programmes, hospitals and curated
                retailers across India. MOQ from 100&nbsp;kg.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Link
                href="/bulk-enquiry"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                Send a bulk enquiry →
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
