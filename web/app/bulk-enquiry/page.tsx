import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Bulk enquiry" };

export default function BulkEnquiryPage() {
  return (
    <Section>
      <Container size="narrow">
        <Eyebrow>For institutions & retailers</Eyebrow>
        <h1 className="mt-3 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          Procure Shrianna at scale.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          We supply schools, hospitals, modern-trade retailers, hotels and
          corporate gifting programmes. MOQ starts at 100&nbsp;kg. Pricing is
          tiered by volume — fill in your requirement below and we&rsquo;ll
          come back within two working days.
        </p>

        <form className="mt-12 space-y-5 rounded-2xl border border-border bg-card p-8">
          <Field label="Organisation name" required />
          <Field label="Your name" required />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Email" type="email" required />
            <Field label="Phone" type="tel" required />
          </div>
          <label className="block text-sm">
            <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Type of buyer
            </span>
            <select className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
              <option>Retail / Modern trade</option>
              <option>Schools / Mid-day meal programme</option>
              <option>Hospitality / Hotel chain</option>
              <option>Corporate gifting</option>
              <option>NGO / Government programme</option>
              <option>Other</option>
            </select>
          </label>
          <div>
            <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Requirement (volumes, SKUs, timeline)
            </span>
            <textarea
              rows={5}
              className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <Button size="lg" className="w-full" type="button">
            Send enquiry
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Showcase site — the form does not actually send.
          </p>
        </form>
      </Container>
    </Section>
  );
}

function Field({
  label,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
      <input
        {...rest}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}
