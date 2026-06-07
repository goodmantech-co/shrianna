import Image from "next/image";
import Link from "next/link";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata = { title: "Our story" };

const board = [
  { name: "Asha Uikey", role: "Director" },
  { name: "Rukmani Bai", role: "Director" },
  { name: "Vimala Prajapati", role: "Director" },
  { name: "Mankumari", role: "Director" },
  { name: "Neelam Pawar", role: "Director" },
  { name: "Balram Kumar Vishwakarma", role: "Director" },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pb-0">
        <Container size="narrow">
          <Eyebrow>Our story</Eyebrow>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            A federation born of a 500-year-old promise.
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            Shrianna Federation was incorporated in March 2024 under the
            Rani&nbsp;Durgavati Shrianna Protsahan Yojana — a Madhya Pradesh
            government scheme launched during the International Year of Millets
            (2023–24) and named for the tribal warrior queen Rani Durgavati.
          </p>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src="https://feminisminindia.com/wp-content/uploads/2022/09/Kodo-Kutki-field-2048x1152.jpg"
              alt="Kodo Kutki field"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
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
            25+ farmer producer organisations across sixteen districts of Madhya
            Pradesh, owned and governed by the farmers themselves. We procure
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

      <Section className="bg-secondary text-secondary-foreground">
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
                ["16", "Districts in MP"],
                ["40,000 MT", "FY 2026–27 target"],
                ["28,300 qtl", "Procured in 2025–26"],
                ["₹7.28 Cr", "Paid via DBT"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <p className="font-serif text-5xl text-accent">{stat}</p>
                  <p className="mt-1 text-sm text-secondary-foreground/70">
                    {label}
                  </p>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl tracking-tight sm:text-5xl">
            A board of women who grow what they govern.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Five of our six directors are tribal women smallholders. They sit on
            the board because they understand the harvest — and because no
            federation can call itself farmer-owned otherwise.
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {board.map((m) => (
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
