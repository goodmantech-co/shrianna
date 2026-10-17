"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";

/**
 * Open / closed badge worked out in the visitor's browser, so a statically built page
 * still shows the right state after the deadline passes.
 */
export function TenderStatus({ deadline }: { deadline: string }) {
  const [open, setOpen] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const check = () => setOpen(Date.now() < new Date(deadline).getTime());
    check();
    const t = setInterval(check, 60_000);
    return () => clearInterval(t);
  }, [deadline]);

  if (open === null) return <Badge variant="muted">Tender</Badge>;
  return open ? <Badge variant="accent">Open for submissions</Badge> : <Badge variant="muted">Closed</Badge>;
}
