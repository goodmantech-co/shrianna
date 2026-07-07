import Link from "next/link";
import { Container, Section } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrustStrip } from "@/components/layout/trust-strip";
import { ShopBrowser } from "@/components/shop/shop-browser";
import { products } from "@/lib/products";

export const metadata = {
  title: "Shop Narmada Millets",
  description:
    "Buy Narmada Millets online — Kodo and Kutki rice, instant idli/dosa/khichdi mixes and millet cookies, milled in Bhopal and traceable to farmer collectives across Madhya Pradesh. Free shipping over ₹999.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <>
      {/* Shop hero (static, server-rendered) */}
      <Section className="pb-0 pt-10 sm:pt-14">
        <Container size="wide">
          <div className="flex flex-col gap-4">
            <Badge variant="accent" className="w-fit">
              Narmada Millets · by Shrianna Federation
            </Badge>
            <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              The Narmada Millets shop.
            </h1>
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              Rice, instant mixes and cookies — milled and baked in Bhopal,
              traceable to a farmer collective in Madhya Pradesh. Free shipping
              over ₹999 · COD available.
            </p>
          </div>
        </Container>
      </Section>

      {/* Interactive catalogue (client island) */}
      <ShopBrowser products={products} />

      <TrustStrip />

      {/* Bulk band (static) */}
      <Section className="bg-muted/40">
        <Container size="wide">
          <div className="grid gap-10 rounded-2xl border border-border bg-card p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <Badge variant="accent" className="mb-4">
                For institutions
              </Badge>
              <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
                Bulk procurement for schools, canteens &amp; retailers
              </h2>
              <p className="mt-4 text-muted-foreground">
                We supply mid-day meal programmes, hospitals and curated
                retailers across India. MOQ from 100&nbsp;kg.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Button asChild size="lg">
                <Link href="/bulk-enquiry">Send a bulk enquiry →</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
