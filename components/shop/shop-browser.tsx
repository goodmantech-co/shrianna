"use client";

import * as React from "react";
import {
  ChevronDown,
  SlidersHorizontal,
  Search,
  LayoutGrid,
  Rows3,
  X,
} from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { CategoryStrip } from "@/components/shop/category-strip";
import { FilterPanel } from "@/components/shop/filter-panel";
import { MobileFilterDrawer } from "@/components/shop/mobile-filter-drawer";
import { ActiveFilters } from "@/components/shop/active-filters";
import {
  filterProducts,
  sortProducts,
  activeFilterCount,
  emptyFilters,
  type Product,
  type ShopFilters,
  type ProductCategory,
  type SortOption,
} from "@/lib/products";
import { cn } from "@/lib/utils";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest first" },
  { value: "rating", label: "Top rated" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
];

export function ShopBrowser({ products }: { products: Product[] }) {
  const [filters, setFilters] = React.useState<ShopFilters>(emptyFilters);
  const [sort, setSort] = React.useState<SortOption>("featured");
  const [view, setView] = React.useState<"grid" | "list">("grid");
  const [sortOpen, setSortOpen] = React.useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false);

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

  const visible = React.useMemo(
    () => sortProducts(filterProducts(products, filters), sort),
    [products, filters, sort]
  );

  const clearAll = () => setFilters(emptyFilters);
  const currentSort = sortOptions.find((s) => s.value === sort)!;
  const filterCount = activeFilterCount(filters);

  const stripActive: ProductCategory | "all" =
    filters.categories.length === 1 ? filters.categories[0] : "all";
  const selectCategory = (value: ProductCategory | "all") =>
    setFilters((f) => ({
      ...f,
      categories: value === "all" ? [] : [value],
    }));

  return (
    <>
      <Section className="pb-0 pt-8">
        <Container size="wide">
          <CategoryStrip active={stripActive} onSelect={selectCategory} />
        </Container>
      </Section>

      <Section className="pt-10">
        <Container size="wide">
          <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-10">
            {/* Desktop filter rail */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <FilterPanel
                  filters={filters}
                  setFilters={setFilters}
                  onClear={clearAll}
                  resultCount={visible.length}
                />
              </div>
            </aside>

            {/* Product column */}
            <div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative flex-1">
                    <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      value={filters.search}
                      onChange={(e) =>
                        setFilters((f) => ({ ...f, search: e.target.value }))
                      }
                      placeholder="Search millets, flours, snacks…"
                      className="h-11 w-full rounded-full border border-border bg-card pl-10 pr-9 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                    {filters.search && (
                      <button
                        type="button"
                        onClick={() => setFilters((f) => ({ ...f, search: "" }))}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        aria-label="Clear search"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(true)}
                    className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-medium lg:hidden"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                    {filterCount > 0 && (
                      <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-2xs font-semibold text-primary-foreground">
                        {filterCount}
                      </span>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {visible.length}
                    </span>{" "}
                    {visible.length === 1 ? "product" : "products"}
                  </p>

                  <div className="flex items-center gap-2">
                    <div className="hidden items-center rounded-full border border-border bg-card p-0.5 sm:flex">
                      <button
                        type="button"
                        onClick={() => setView("grid")}
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-full transition-colors",
                          view === "grid"
                            ? "bg-foreground text-background"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                        aria-label="Grid view"
                      >
                        <LayoutGrid className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setView("list")}
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-full transition-colors",
                          view === "list"
                            ? "bg-foreground text-background"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                        aria-label="List view"
                      >
                        <Rows3 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="relative" ref={sortRef}>
                      <button
                        type="button"
                        onClick={() => setSortOpen((v) => !v)}
                        className="inline-flex h-9 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm hover:border-foreground/40"
                      >
                        <span className="hidden sm:inline text-muted-foreground">
                          Sort:
                        </span>
                        <span className="font-medium">{currentSort.label}</span>
                        <ChevronDown className="h-3.5 w-3.5" />
                      </button>
                      {sortOpen && (
                        <div className="absolute right-0 top-full z-10 mt-2 w-56 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
                          {sortOptions.map((opt) => (
                            <button
                              key={opt.value}
                              type="button"
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

                <ActiveFilters
                  filters={filters}
                  setFilters={setFilters}
                  onClear={clearAll}
                />
              </div>

              <div className="mt-8">
                {visible.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-border py-20 text-center">
                    <p className="type-h5">No millets match that.</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Try clearing a filter or two.
                    </p>
                    <Button variant="outline" className="mt-6" onClick={clearAll}>
                      Clear all filters
                    </Button>
                  </div>
                ) : view === "grid" ? (
                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {visible.map((p) => (
                      <ProductCard key={p.slug} product={p} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    {visible.map((p) => (
                      <ProductCard key={p.slug} product={p} view="list" />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <MobileFilterDrawer
        open={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        filters={filters}
        setFilters={setFilters}
        onClear={clearAll}
        resultCount={visible.length}
      />
    </>
  );
}
