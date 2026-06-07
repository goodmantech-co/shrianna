"use client";

import * as React from "react";
import { X } from "lucide-react";
import { FilterPanel } from "./filter-panel";
import { Button } from "@/components/ui/button";
import type { ShopFilters } from "@/lib/products";

export function MobileFilterDrawer({
  open,
  onClose,
  filters,
  setFilters,
  onClear,
  resultCount,
}: {
  open: boolean;
  onClose: () => void;
  filters: ShopFilters;
  setFilters: React.Dispatch<React.SetStateAction<ShopFilters>>;
  onClear: () => void;
  resultCount: number;
}) {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="absolute inset-y-0 left-0 flex w-[88%] max-w-sm flex-col bg-background shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <p className="font-serif text-lg">Filters</p>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-foreground/5"
            aria-label="Close filters"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
            onClear={onClear}
            resultCount={resultCount}
          />
        </div>

        <div className="border-t border-border p-4">
          <Button onClick={onClose} className="w-full" size="lg">
            Show {resultCount} {resultCount === 1 ? "product" : "products"}
          </Button>
        </div>
      </div>
    </div>
  );
}
