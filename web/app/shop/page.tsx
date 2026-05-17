"use client";

import * as React from "react";
import Link from "next/link";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import { Badge } from "@/components/ui/badge";
import { products, type ProductCategory } from "@/lib/products";
import { cn } from "@/lib/utils";

const categories: { value: ProductCategory | "all"; label: string }[] = [
  { value: "all", label: "All millets" },
  { value: "whole-grain", label: "Whole grains" },
  { value: "flour", label: "Flours" },
  { value: "snack", label: "Snacks" },
  { value: "gift", label: "Gifts" },
];

export default function ShopPage() {
  const [active, setActive] = React.useState<ProductCategory | "all">("all");

  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <>
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

          <div className="mt-12 flex flex-wrap gap-2 border-b border-border pb-4">
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
        </Container>
      </Section>

      <Section className="pt-4">
        <Container size="wide">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>

          {filtered.length === 0 && (
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
              <Badge variant="accent" className="mb-4">For institutions</Badge>
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
