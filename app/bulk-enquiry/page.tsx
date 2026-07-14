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
      <Container size="narrow" className="text-center">
        <Eyebrow>For institutions & retailers</Eyebrow>
        <h1 className="mt-3 type-h1">
          Procure Shrianna at scale.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          We supply schools, hospitals, modern-trade retailers, hotels and
          corporate gifting programmes. MOQ starts at 100&nbsp;kg. Pricing is
          tiered by volume — fill in your requirement below and we&rsquo;ll
          come back within two working days.
        </p>

        <div className="text-left">
          <BulkEnquiryForm />
        </div>
      </Container>
    </Section>
  );
}
