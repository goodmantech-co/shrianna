import Image from "next/image";
import Link from "next/link";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata = {
  title: "Our Story",
  description:
    "Shrianna Federation is a farmer-owned consortium of 25+ FPOs reviving Kodo and Kutki millets across Madhya Pradesh, under the Rani Durgavati Shrianna Protsahan Yojana.",
  alternates: { canonical: "/about" },
};

const board = [
  {
    name: "Mankumari",
    fpo: "Baiga Chak Mahila Kishan Utpadak Producer Company Limited",
    district: "Dindori / Mandla",
  },
  {
    name: "Rukmani Bai",
    fpo: "Kharmer Mahila Kishan Producer Company Limited",
    district: "Dindori",
  },
  {
    name: "Asha Uikey",
    fpo: "Bhojpur Ajeevika Farmer Producer Company Limited",
    district: "Raisen",
  },
  {
    name: "Sumitra Jayswal",
    fpo: "Singdev Mahila Kishan Producer Company Limited",
    district: "Singrauli / Sidhi",
  },
  {
    name: "Maya Sukhdeve",
    fpo: "Satpura Mahila Kishan Producer Company Limited",
    district: "Chhindwara",
  },
  {
    name: "Krishnadhar Dwivedi",
    fpo: "Vindhyanchal Crop Producer Company Limited",
    district: "Rewa",
  },
  {
    name: "Poonam Tiwari",
    fpo: "Bandhawgarh Krishi Vanopaj Producer Company Limited",
    district: "Umaria",
  },
];

const team = [
  { name: "Balram Kumar Vishwakarma", role: "Chief Executive Officer" },
  { name: "Neelesh Dubey", role: "Finance Manager" },
  { name: "Shashwat Arora", role: "Marketing Manager" },
];

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Our story</Eyebrow>
              <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
                A federation born of a 500-year-old promise.
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
                Shrianna Federation was incorporated on 9 March 2024 under the
                Rani&nbsp;Durgavati Shrianna Protsahan Yojana — a Madhya Pradesh
                government scheme launched during the International Year of
                Millets (2023–24) and named for the tribal warrior queen Rani
                Durgavati.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[5/4]">
              <Image
                src="/editorial/kodo-kutki-field.jpg"
                alt="Kodo Kutki field"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container size="narrow" className="prose-content space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            For centuries, the Gond, Baiga and other tribal communities of central
            India have grown Kodo and Kutki — drought-resilient millets that ripen
            on monsoon dew alone. Through the green revolution they were sidelined
            as "coarse cereals." The land they grew on was called marginal. The
            people who grew them were paid the least.
          </p>
          <p>
            Shrianna was created to change that. We are the apex consortium of
            25+ farmer producer organisations across Madhya Pradesh, owned and
            governed by the farmers themselves. We procure
            their millets directly at fair prices, process them in Bhopal, and
            bring them to plates across India under the Narmada Millets brand.
          </p>
          <p>
            The scheme funding us is anchored by an interest-free loan of
            ₹80&nbsp;crore from the State&apos;s Price Stabilization Fund. Every
            additional rupee the federation earns goes back into procurement,
            processing capacity and farmer payments.
          </p>
        </Container>
      </Section>

      <Section id="scheme" className="scroll-mt-24 bg-secondary text-secondary-foreground">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow className="text-accent">The scheme</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
                Rani Durgavati Shrianna Protsahan Yojana
              </h2>
              <p className="mt-6 leading-relaxed text-secondary-foreground/80">
                Approved by the MP Cabinet on 3 January 2024, the scheme
                provides incentives of ₹10/kg to farmers cultivating millets, in
                addition to the minimum support price. It is administered by
                the Farmer Welfare & Agricultural Development Department.
              </p>
              <p className="mt-4 leading-relaxed text-secondary-foreground/80">
                Shrianna Federation is the procurement and brand arm of the
                scheme — buying Kodo at ₹2,500/quintal, Kutki at ₹3,500/quintal,
                with a further ₹1,000/quintal incentive transferred directly to
                farmer bank accounts via DBT.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-10 self-center">
              {[
                ["16", "Launch districts (FY 2025–26)"],
                ["40,000 MT", "Procurement target (FY 2026–27)"],
                ["28,300 qtl", "Procured (FY 2025–26)"],
                ["₹7.28 Cr", "Paid via DBT (FY 2025–26)"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <p className="font-serif text-4xl text-accent sm:text-5xl">{stat}</p>
                  <p className="mt-1 text-sm text-secondary-foreground/70">
                    {label}
                  </p>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      <Section id="leadership" className="scroll-mt-24">
        <Container size="wide">
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl tracking-tight sm:text-5xl">
            A board drawn from the farmers it serves.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Our directors are nominated by the member producer companies
            themselves — smallholder farmers who sit on the board because they
            understand the harvest, and because no federation can call itself
            farmer-owned otherwise.
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {board.map((m) => (
              <li
                key={m.name}
                className="rounded-xl border border-border bg-card p-5"
              >
                <p className="font-serif text-lg leading-tight">{m.name}</p>
                <p className="mt-1 text-sm font-medium text-foreground/80">
                  {m.fpo}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {m.district}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="mt-14 font-serif text-2xl tracking-tight sm:text-3xl">
            The team
          </h3>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            The professionals who run the federation&apos;s day-to-day
            procurement, finance and brand operations from Bhopal.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <li
                key={m.name}
                className="rounded-xl border border-border bg-card p-5"
              >
                <p className="font-serif text-lg leading-tight">{m.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
              </li>
            ))}
          </ul>

          <div className="mt-14 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/farmers">Meet the farmers →</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/impact">See our impact</Link>
            </Button>
          </div>

          <p className="mt-12 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Registered office · {site.address.line1}, {site.address.line2},{" "}
            {site.address.city} {site.address.pin} · CIN {site.cin}
          </p>
        </Container>
      </Section>
    </>
  );
}
