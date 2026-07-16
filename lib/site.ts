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
        { label: "The Scheme", href: "/about#scheme" },
        { label: "Board & Team", href: "/about#leadership" },
      ],
    },
    { label: "Activities", href: "/activities" },
    { label: "Impact", href: "/impact" },
    { label: "Farmers & FPOs", href: "/farmers" },
    {
      label: "Gallery",
      href: "/gallery",
      children: [
        { label: "Images", href: "/gallery#images" },
        { label: "Videos", href: "/gallery#videos" },
      ],
    },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
  vision:
    "To build a sustainable and inclusive millet-based ecosystem that empowers farmers and FPOs, strengthens market access, enhances nutritional security, and establishes millets as a mainstream food choice across India and global markets.",
  missionPillars: [
    {
      title: "Market Development",
      body: "Developing sustainable marketing channels and expanding market opportunities for millet-based products in domestic and international markets.",
    },
    {
      title: "Strengthening the FPO Ecosystem",
      body: "Enhancing institutional capacities of FPOs engaged in millet production, processing, aggregation and marketing.",
    },
    {
      title: "Value Chain Development",
      body: "Creating an integrated millet value chain covering production, procurement, processing, branding, marketing and export.",
    },
    {
      title: "Brand Promotion",
      body: "Establishing a strong and credible identity for Madhya Pradesh millets as premium, nutritious and sustainable food products.",
    },
  ],
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
