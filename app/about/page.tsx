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

const leadership = [
  {
    name: "Balram Kumar Vishwakarma",
    role: "Chief Executive Officer",
    image: "/photos/team/balram-vishwakarma.jpg",
    bio: [
      "Balram Kumar Vishwakarma is the Chief Executive Officer of Shrianna Federation. An MBA in Finance & Marketing with a Post Graduate Diploma in Rural Development, he brings over 12 years of professional experience in agribusiness, financial management, rural development and Farmer Producer Organization (FPO) leadership.",
      "He has extensive expertise in financial planning, procurement, operations, supply chain management, corporate governance and team leadership. Throughout his career he has managed large multidisciplinary teams, implemented government-supported agricultural initiatives and strengthened farmer-owned institutions.",
      "As CEO, he is leading the implementation of the Rani Durgavati Shrianna Protsahan Yojana — driving millet procurement, value addition, branding and market development while working closely with government departments, research institutions and FPOs to enhance farmer incomes and build a sustainable millet value chain across Madhya Pradesh.",
    ],
  },
  {
    name: "Atul Vikram Singh",
    role: "Expert Director",
    image: "/photos/team/atul-vikram-singh.jpg",
    bio: [
      "Atul Vikram Singh, a postgraduate in agriculture from GB Pant University of Agriculture & Technology (GBPUAT), is a development and CSR professional with 25 years of experience across national and international organizations, including government consulting. His areas of expertise are CSR, water conservation, agriculture & food processing, rural livelihoods, gender inclusion and public policy.",
      "He has been actively involved in designing and implementing innovative government and CSR initiatives that strengthen community welfare and sustainable livelihoods. His work has focused on promoting sustainable crop production including millets, developing Farmer Producer Organizations (FPOs) and integrating digital platforms in programme management. He has contributed to policy formulation, project design & implementation and institutional capacity building across many states of India.",
      "Passionate about innovation, he combines strategic planning with practical implementation to deliver scalable solutions. His interests include agri-value chains, food and nutrition security, climate-resilient agriculture and technology-enabled governance.",
    ],
  },
];

const team = [
  { name: "Neelesh Dubey", role: "Finance Manager" },
  { name: "Shashwat Arora", role: "Marketing Manager" },
];

export default function AboutPage() {
  return (
    <>
      <Section variant="hero">
        <Container size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Our story</Eyebrow>
              <h1 className="mt-4 type-h1">
                A federation born of a 500-year-old promise.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Shrianna Protsahan Consortium of Farmer Producer Company
                Limited — formerly known as &lsquo;Shrianna Federation&rsquo; —
                was established by the Department of Farmer Welfare and
                Agriculture Development, Government of Madhya Pradesh, on
                9 March 2024 under the Rani&nbsp;Durgavati Shrianna Protsahan
                Yojana — a flagship scheme launched during the International
                Year of Millets (2023–24) and named for the tribal warrior
                queen Rani Durgavati.
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

      <Section variant="flush">
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
              <h2 className="mt-4 type-h2">
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
                  <p className="font-serif text-5xl leading-none text-accent">{stat}</p>
                  <p className="mt-1 text-sm text-secondary-foreground/70">
                    {label}
                  </p>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      <Section id="objectives" className="scroll-mt-24 pb-0">
        <Container size="wide">
          <Eyebrow>Objectives</Eyebrow>
          <h2 className="mt-3 max-w-3xl type-h2">
            What the federation is here to do.
          </h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Promote Kodo, Kutki and other millets through organized farmer collectives and FPOs.",
              "Develop an efficient millet value chain from production to market.",
              "Increase farmers' income through value addition and improved price realization.",
              "Create sustainable market opportunities for millet-based products.",
              "Support government initiatives on nutritional security, climate-resilient agriculture and sustainable food systems.",
              "Facilitate processing, branding, packaging and marketing of millet products at scale.",
              "Strengthen FPO-led enterprises engaged in millet production and value addition.",
            ].map((objective, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-xl border border-border bg-card p-5"
              >
                <span className="font-serif text-2xl leading-none text-primary/60">
                  0{i + 1}
                </span>
                <p className="text-sm leading-relaxed text-foreground/85">
                  {objective}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="leadership" className="scroll-mt-24">
        <Container size="wide">
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="mt-3 max-w-3xl type-h2">
            A board drawn from the farmers it serves.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Our directors are nominated by the member producer companies
            themselves — smallholder farmers who sit on the board because they
            understand the harvest, and because no federation can call itself
            farmer-owned otherwise.
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {board.map((m) => (
              <li
                key={m.name}
                className="rounded-xl border border-border bg-card p-5"
              >
                <p className="type-h6">{m.name}</p>
                <p className="mt-1 text-sm font-medium text-foreground/80">
                  {m.fpo}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {m.district}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="mt-14 type-h3">
            The team
          </h3>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Operations are led by the Chief Executive Officer and a central
            team of five professionals in Bhopal, supported by 5–15
            para-professionals in the project districts. Together they oversee
            programme implementation, procurement, processing and value
            addition, branding and marketing, partnerships and business
            development, and financial and operational management — guided by
            principles of transparency, accountability and inclusive growth.
          </p>

          <div className="mt-6 space-y-6">
            {leadership.map((m) => (
              <article
                key={m.name}
                className="grid gap-6 rounded-2xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-[240px_1fr] lg:gap-10"
              >
                <div className="relative mx-auto aspect-square w-full max-w-[240px] overflow-hidden rounded-xl lg:mx-0">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="type-h4">{m.name}</h4>
                  <p className="mt-1 type-eyebrow text-primary">{m.role}</p>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {m.bio.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {team.map((m) => (
              <li
                key={m.name}
                className="rounded-xl border border-border bg-card p-5"
              >
                <p className="type-h6">{m.name}</p>
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
