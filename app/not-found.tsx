import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container, Section, Eyebrow } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Section>
      <Container size="narrow">
        <div className="rounded-2xl border border-border bg-card p-12 text-center">
          <Eyebrow>404</Eyebrow>
          <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            We couldn&rsquo;t find that page.
          </h1>
          <p className="mt-4 text-muted-foreground">
            The page may have moved, or the link might be out of date. Let&rsquo;s
            get you back to the millets.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button asChild>
              <Link href="/shop">Browse the shop</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Back to home</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
