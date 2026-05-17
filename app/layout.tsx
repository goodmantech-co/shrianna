import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PromoStrip } from "@/components/layout/promo-strip";
import { CartProvider } from "@/components/cart/cart-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shriannafederation.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shrianna Federation — Millets from the heart of Madhya Pradesh",
    template: "%s · Shrianna Federation",
  },
  description:
    "A farmer-owned consortium reviving Kodo, Kutki and Ragi across eleven tribal districts of Madhya Pradesh. Procured at fair prices, milled in Bhopal, paid directly to women farmers.",
  keywords: [
    "millet",
    "kodo",
    "kutki",
    "ragi",
    "FPO",
    "Madhya Pradesh",
    "tribal farmers",
    "Shri Anna",
    "Shrianna Federation",
    "Rani Durgavati Shri Anna Protsahan Yojana",
    "Bhopal millets",
  ],
  authors: [{ name: "Shrianna Federation" }],
  creator: "Shrianna Federation",
  publisher: "Shrianna Federation",
  openGraph: {
    type: "website",
    siteName: "Shrianna Federation",
    title: "Shrianna Federation — Millets from the heart of Madhya Pradesh",
    description:
      "Ancient millets. Grown by women. From eleven tribal districts of MP. Kodo, Kutki and Ragi procured at fair prices, milled honestly, paid directly via DBT.",
    url: siteUrl,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrianna Federation — Millets from the heart of Madhya Pradesh",
    description:
      "A farmer-owned millet federation under the Rani Durgavati Shri Anna Protsahan Yojana. Reviving Kodo, Kutki and Ragi — grown by women, paid directly via DBT.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CartProvider>
          <PromoStrip />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
