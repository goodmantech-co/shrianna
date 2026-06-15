import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { site } from "@/lib/site";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Shrianna Federation in Bhopal — for orders, procurement, FPO membership or bulk enquiries about Narmada Millets.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Section>
      <Container size="wide">
        <Eyebrow>Get in touch</Eyebrow>
        <h1 className="mt-3 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          We&rsquo;re at Beej Bhawan. Come say hello.
        </h1>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <ContactCard icon={MapPin} title="Registered office">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city} {site.address.pin}, {site.address.state}
            </ContactCard>

            <ContactCard icon={Phone} title="Call">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                {site.phone}
              </a>
            </ContactCard>

            <ContactCard icon={Mail} title="Write">
              <a href={`mailto:${site.email}`} className="hover:text-primary">
                {site.email}
              </a>
            </ContactCard>

            <ContactCard icon={Globe} title="Online">
              <a
                href={`https://${site.website.replace(/^www\./, "")}`}
                className="hover:text-primary"
              >
                {site.website}
              </a>
            </ContactCard>

            <div className="rounded-xl border border-border bg-muted/40 p-6 text-sm leading-relaxed text-muted-foreground">
              <p className="font-medium text-foreground">
                For procurement or FPO enquiries
              </p>
              <p className="mt-2">
                If you represent a farmer producer organisation interested in
                joining the consortium, reach out directly to our procurement
                desk via the phone number above.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5 rounded-xl border border-border bg-card p-6">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {title}
        </p>
        <p className="mt-1.5 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
