"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container, Section, Eyebrow } from "@/components/ui/container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section>
      <Container size="narrow">
        <div className="rounded-2xl border border-border bg-card p-12 text-center">
          <Eyebrow>Something went wrong</Eyebrow>
          <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            That didn&rsquo;t go as planned.
          </h1>
          <p className="mt-4 text-muted-foreground">
            An unexpected error occurred. You can try again, or head back home.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button onClick={reset}>Try again</Button>
            <Button asChild variant="outline">
              <Link href="/">Back to home</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
