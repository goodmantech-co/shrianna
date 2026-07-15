"use client";

import * as React from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { useCart, useCartCount } from "@/components/cart/cart-provider";
import { CartDrawer } from "@/components/cart/cart-drawer";

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { toggle } = useCart();
  const count = useCartCount();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-30 transition-all ${
          scrolled || mobileOpen
            ? "border-b border-border bg-background/85 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <Container size="wide">
          <div className="flex h-20 items-center justify-between gap-6">
            <Link href="/" aria-label="Shrianna Federation home" className="text-primary">
              <Logo />
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {site.nav.map((item) =>
                item.children ? (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-brand-blue-deep"
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                    </Link>
                    <div className="invisible absolute left-1/2 top-full z-40 w-56 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                      <div className="overflow-hidden rounded-xl border border-border bg-background shadow-lg">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-muted/60 hover:text-brand-blue-deep"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-brand-blue-deep"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="flex items-center gap-2">
              <Button asChild size="sm" className="hidden sm:inline-flex">
                <Link href="/shop">Shop</Link>
              </Button>
              <button
                onClick={toggle}
                className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-foreground/5"
                aria-label="Open cart"
              >
                <ShoppingBag className="h-5 w-5" />
                {count > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary px-1 text-2xs font-semibold text-primary-foreground">
                    {count}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-foreground/5 lg:hidden"
                aria-label="Open menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </Container>

        {mobileOpen && (
          <div className="border-t border-border bg-background lg:hidden">
            <Container size="wide">
              <nav className="flex flex-col py-4">
                {site.nav.map((item) => (
                  <div key={item.href} className="border-b border-border/50 last:border-0">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-base"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="flex flex-col pb-2">
                        {item.children.slice(1).map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-2 pl-4 text-sm text-muted-foreground"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/shop"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 rounded-lg bg-primary px-4 py-3 text-center text-base font-medium text-primary-foreground"
                >
                  Shop Narmada Millets
                </Link>
              </nav>
            </Container>
          </div>
        )}
      </header>
      <CartDrawer />
    </>
  );
}
