import { getProduct } from "@/lib/products";

/**
 * Server-side order computation. The browser sends only (slug, weight, qty);
 * every price is looked up here from the authoritative catalogue in
 * `lib/products.ts`, so the amount charged can never be tampered with client-side.
 */

export interface CartLineInput {
  productSlug: string;
  weight: string;
  quantity: number;
}

export interface Customer {
  name: string;
  phone: string;
  email?: string;
  address: string;
  city: string;
  pincode: string;
}

export interface ResolvedLine {
  productSlug: string;
  name: string;
  weight: string;
  unitPrice: number; // rupees
  quantity: number;
  lineTotal: number; // rupees
}

export interface ComputedOrder {
  lines: ResolvedLine[];
  unresolved: string[];
  amount: number; // rupees
  amountPaise: number; // paise (Razorpay charges in the smallest unit)
  itemCount: number;
}

export function computeOrder(items: CartLineInput[]): ComputedOrder {
  const lines: ResolvedLine[] = [];
  const unresolved: string[] = [];

  for (const item of items ?? []) {
    const product = getProduct(item.productSlug);
    const pack = product?.packSizes.find((s) => s.weight === item.weight);
    const qty = Math.max(1, Math.floor(item.quantity || 0));

    if (!product || !pack || !product.inStock) {
      unresolved.push(`${item.productSlug} (${item.weight})`);
      continue;
    }

    lines.push({
      productSlug: product.slug,
      name: product.name,
      weight: pack.weight,
      unitPrice: pack.price,
      quantity: qty,
      lineTotal: pack.price * qty,
    });
  }

  const amount = lines.reduce((sum, l) => sum + l.lineTotal, 0);
  const itemCount = lines.reduce((sum, l) => sum + l.quantity, 0);

  return { lines, unresolved, amount, amountPaise: amount * 100, itemCount };
}

/** Compact, human-readable line summary for the order notes and the sheet. */
export function itemsSummary(lines: ResolvedLine[]): string {
  return lines.map((l) => `${l.name} ${l.weight} x${l.quantity}`).join("; ");
}

/** Returns an error message if the customer details are incomplete, else null. */
export function validateCustomer(c: Partial<Customer>): string | null {
  if (!c.name?.trim()) return "Full name is required.";
  if (!/^\+?[0-9][0-9\s-]{6,14}$/.test((c.phone ?? "").trim()))
    return "A valid phone number is required.";
  if (c.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email.trim()))
    return "Please enter a valid email address.";
  if (!c.address?.trim()) return "Delivery address is required.";
  if (!c.city?.trim()) return "City is required.";
  if (!/^[1-9][0-9]{5}$/.test((c.pincode ?? "").trim()))
    return "A valid 6-digit pincode is required.";
  return null;
}
