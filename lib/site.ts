export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const site = {
  name: "Shrianna Federation",
  legalName: "Shrianna Protsahan Consortium of Farmer Producer Company Limited",
  cin: "U01611MP2024PTC070230",
  tagline: "Millets from the heart of Madhya Pradesh",
  description:
    "A farmer-owned federation reviving the ancient millets of central India.",
  address: {
    line1: "36, Beej Bhawan",
    line2: "Mother Teresa Marg, Arera Hills",
    city: "Bhopal",
    state: "Madhya Pradesh",
    pin: "462011",
  },
  phone: "+91 74009 92084",
  email: "shriannafederation@gmail.com",
  website: "www.shriannafederation.in",
  nav: [
    {
      label: "About",
      href: "/about",
      children: [
        { label: "Our Story", href: "/about" },
        { label: "Board & Team", href: "/about#leadership" },
        { label: "The Scheme", href: "/about#scheme" },
      ],
    },
    { label: "Activities", href: "/activities" },
    { label: "Impact", href: "/impact" },
    { label: "Farmers", href: "/farmers" },
    { label: "Gallery", href: "/gallery" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
  vision:
    "A Madhya Pradesh where the ancient millets of central India are revived, and where smallholder millet farming is dignified, remunerative and resilient.",
  mission:
    "To run a farmer-owned umbrella that procures Kodo, Kutki and other millets at fair prices, processes them under one roof, pays farmers directly via DBT, and builds lasting market linkage under the Narmada Millets brand.",
  affiliations: [
    { name: "Government of Madhya Pradesh", logo: "/logos/mp-emblem.svg" },
    {
      name: "Dept. of Farmer Welfare & Agriculture Development",
      logo: "/logos/mp-agri-dept.png",
    },
    // State scheme — no logo of its own; shown as a text label.
    { name: "Rani Durgavati Shrianna Protsahan Yojana" },
    { name: "ICAR-CIAE, Bhopal", logo: "/logos/icar-ciae.svg" },
    { name: "ICAR-IIMR, Hyderabad", logo: "/logos/iimr.png" },
  ] as { name: string; logo?: string }[],
  impact: [
    { stat: "5,000", suffix: "+", label: "Millet farmer members (FY 2025–26)" },
    { stat: "25+", suffix: "", label: "FPOs united across MP" },
    { stat: "₹7.28", suffix: " Cr", label: "Paid to farmers via DBT (FY 2025–26)" },
    { stat: "16", suffix: "", label: "Launch districts (FY 2025–26)" },
  ],
  scheme: {
    name: "Rani Durgavati Shrianna Protsahan Yojana",
    department: "Department of Farmer Welfare & Agriculture Development, Madhya Pradesh",
  },
};
