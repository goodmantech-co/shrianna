"use client";

import * as React from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
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
          scrolled
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
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-foreground/80 transition-colors hover:text-brand-blue-deep"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={toggle}
                className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-foreground/5"
                aria-label="Open cart"
              >
                <ShoppingBag className="h-5 w-5" />
                {count > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
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
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="border-b border-border/50 py-3 text-base last:border-0"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </Container>
          </div>
        )}
      </header>
      <CartDrawer />
    </>
  );
}
