"use client";

import * as React from "react";

export interface CartItem {
  productSlug: string;
  name: string;
  weight: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  add: (item: Omit<CartItem, "quantity">) => void;
  remove: (slug: string, weight: string) => void;
  setQty: (slug: string, weight: string, qty: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const CartContext = React.createContext<CartState | null>(null);

const STORAGE_KEY = "narmada-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [hydrated, setHydrated] = React.useState(false);

  // Load the saved cart once on mount (client only).
  React.useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved) as CartItem[]);
    } catch {
      /* ignore corrupt/unavailable storage */
    }
    setHydrated(true);
  }, []);

  // Persist on every change (after the initial load, so we don't clobber it).
  React.useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, hydrated]);

  const add: CartState["add"] = (incoming) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.productSlug === incoming.productSlug && i.weight === incoming.weight
      );
      if (existing) {
        return prev.map((i) =>
          i === existing ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...incoming, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const remove: CartState["remove"] = (slug, weight) => {
    setItems((prev) =>
      prev.filter((i) => !(i.productSlug === slug && i.weight === weight))
    );
  };

  const setQty: CartState["setQty"] = (slug, weight, qty) => {
    if (qty <= 0) return remove(slug, weight);
    setItems((prev) =>
      prev.map((i) =>
        i.productSlug === slug && i.weight === weight ? { ...i, quantity: qty } : i
      )
    );
  };

  const value: CartState = {
    items,
    isOpen,
    add,
    remove,
    setQty,
    clear: () => setItems([]),
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((v) => !v),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = React.useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

export function useCartCount() {
  const { items } = useCart();
  return items.reduce((sum, i) => sum + i.quantity, 0);
}

export function useCartTotal() {
  const { items } = useCart();
  return items.reduce((sum, i) => sum + i.price * i.quantity, 0);
}
