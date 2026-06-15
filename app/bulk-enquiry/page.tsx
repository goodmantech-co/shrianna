import { Container, Section, Eyebrow } from "@/components/ui/container";
import { BulkEnquiryForm } from "@/components/forms/bulk-enquiry-form";

export const metadata = {
  title: "Bulk enquiry",
  description:
    "Procure Narmada Millets at scale for schools, hospitals, retail, hospitality and corporate gifting. MOQ from 100kg with volume-tiered pricing.",
  alternates: { canonical: "/bulk-enquiry" },
};

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

        <BulkEnquiryForm />
      </Container>
    </Section>
  );
}
