"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BulkEnquiryForm() {
  const [submitting, setSubmitting] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "bulk",
          organisation: data.get("organisation"),
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          buyerType: data.get("buyerType"),
          message: data.get("message"),
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Could not send your enquiry.");
      setSent(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-secondary" />
        <h2 className="mt-4 type-h4">Enquiry received</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks — our procurement desk will come back to you within two working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-12 space-y-5 rounded-2xl border border-border bg-card p-8">
      <Field label="Organisation name" name="organisation" required />
      <Field label="Your name" name="name" required />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <label className="block text-sm">
        <span className="mb-1.5 block type-eyebrow text-muted-foreground">
          Type of buyer
        </span>
        <select
          name="buyerType"
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          <option>Retail / Modern trade</option>
          <option>Schools / Mid-day meal programme</option>
          <option>Hospitality / Hotel chain</option>
          <option>Corporate gifting</option>
          <option>NGO / Government programme</option>
          <option>Other</option>
        </select>
      </label>
      <div>
        <span className="mb-1.5 block type-eyebrow text-muted-foreground">
          Requirement (volumes, SKUs, timeline)
        </span>
        <textarea
          name="message"
          rows={5}
          className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <Button size="lg" className="w-full" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send enquiry"}
      </Button>
      {error && <p className="text-center text-xs text-destructive">{error}</p>}
    </form>
  );
}

function Field({
  label,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block type-eyebrow text-muted-foreground">
        {label}
      </span>
      <input
        {...rest}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}
