import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PromoStrip } from "@/components/layout/promo-strip";
import { CartProvider } from "@/components/cart/cart-provider";
import { site } from "@/lib/site";

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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shriannafederation.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: {
    default: "Shrianna Federation — Millets from the heart of Madhya Pradesh",
    template: "%s · Shrianna Federation",
  },
  description:
    "A farmer-owned consortium reviving Kodo, Kutki and other millets across Madhya Pradesh. Procured at fair prices, processed under the Narmada Millets brand, paid directly to farmers via DBT.",
  keywords: [
    "millet",
    "kodo",
    "kutki",
    "ragi",
    "FPO",
    "Madhya Pradesh",
    "tribal farmers",
    "Shri Anna",
    "Narmada Millets",
    "Shrianna Federation",
    "Rani Durgavati Shrianna Protsahan Yojana",
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
      "Ancient millets. Grown by women. From sixteen districts of MP. Kodo, Kutki and other millets procured at fair prices, sold as Narmada Millets, paid directly via DBT.",
    url: siteUrl,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrianna Federation — Millets from the heart of Madhya Pradesh",
    description:
      "A farmer-owned millet federation under the Rani Durgavati Shrianna Protsahan Yojana. Reviving Kodo, Kutki and other millets — sold under the Narmada Millets brand, paid directly via DBT.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              legalName: site.legalName,
              url: siteUrl,
              logo: `${siteUrl}/shriannalogo.jpeg`,
              email: site.email,
              telephone: site.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: `${site.address.line1}, ${site.address.line2}`,
                addressLocality: site.address.city,
                addressRegion: site.address.state,
                postalCode: site.address.pin,
                addressCountry: "IN",
              },
            }),
          }}
        />
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
