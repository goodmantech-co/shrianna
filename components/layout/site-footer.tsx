import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-muted/40">
      <Container size="wide" className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="text-primary">
              <Logo />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A farmer-owned millet federation incorporated under the
              Rani&nbsp;Durgavati Shrianna Protsahan Yojana, Government of Madhya
              Pradesh. Products sold under the Narmada&nbsp;Millets brand.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              CIN · {site.cin}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-foreground/70">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {site.nav.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-foreground/70">
              More
            </h4>
            <ul className="space-y-2.5 text-sm">
              {site.nav.slice(4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/bulk-enquiry"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Bulk enquiry
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-foreground/70">
              Visit us
            </h4>
            <address className="not-italic text-sm leading-relaxed text-muted-foreground">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city} {site.address.pin}
              <br />
              {site.address.state}
            </address>
            <p className="mt-3 text-sm text-muted-foreground">{site.phone}</p>
            <p className="text-sm text-muted-foreground">{site.email}</p>
            <p className="text-sm text-muted-foreground">{site.website}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <p className="opacity-70">
            Narmada Millets — a Shrianna Federation brand
          </p>
        </div>
      </Container>
    </footer>
  );
}
