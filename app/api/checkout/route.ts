import { NextResponse } from "next/server";
import { adminGraphQL, shopifyConfigured } from "@/lib/shopify";
import { resolveVariant } from "@/lib/shopify-catalog";

interface CartLine {
  productSlug: string;
  weight: string;
  quantity: number;
}

export async function POST(req: Request) {
  if (!shopifyConfigured()) {
    return NextResponse.json(
      { error: "Shopify is not configured on the server." },
      { status: 503 }
    );
  }

  let body: { items?: CartLine[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const items = body.items ?? [];
  if (items.length === 0) {
    return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });
  }

  // Resolve each cart line to a Shopify variant ID.
  const lineItems: { variantId: string; quantity: number }[] = [];
  const unresolved: string[] = [];
  for (const item of items) {
    const variant = await resolveVariant(item.productSlug, item.weight);
    if (!variant) {
      unresolved.push(`${item.productSlug} (${item.weight})`);
      continue;
    }
    lineItems.push({
      variantId: variant.id,
      quantity: Math.max(1, Math.floor(item.quantity)),
    });
  }

  if (lineItems.length === 0) {
    return NextResponse.json(
      { error: `Could not match products in Shopify: ${unresolved.join(", ")}` },
      { status: 422 }
    );
  }

  const data = await adminGraphQL<{
    draftOrderCreate: {
      draftOrder: { id: string; invoiceUrl: string } | null;
      userErrors: { field: string[]; message: string }[];
    };
  }>(
    `mutation($input: DraftOrderInput!) {
      draftOrderCreate(input: $input) {
        draftOrder { id invoiceUrl }
        userErrors { field message }
      }
    }`,
    { input: { lineItems } }
  );

  const result = data.draftOrderCreate;
  if (result.userErrors?.length || !result.draftOrder) {
    return NextResponse.json(
      {
        error:
          result.userErrors?.map((e) => e.message).join("; ") ||
          "Could not create checkout.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    invoiceUrl: result.draftOrder.invoiceUrl,
    skipped: unresolved,
  });
}
