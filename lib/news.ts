export type NewsItem = {
  date: string;
  type: string;
  title: string;
  body: string;
  image: string;
  /** Photographic image for compact cards (home) where newspaper scans crop badly */
  cardImage?: string;
  source?: string;
  url?: string;
};

export const news: NewsItem[] = [
  {
    date: "10 May 2026",
    type: "In the press · Dainik Bhaskar",
    title:
      "Government to sell 13 products made from Kodo, Kutki & Ragi — logo finalised, labelling and packaging next",
    body: "Dainik Bhaskar reports that 25 FPOs across the Jabalpur, Rewa and Shahdol divisions are processing the federation's Kodo–Kutki into 13 value-added foods, to be sold by the State under the Narmada Millets brand once packaging is ready.",
    image: "/photos/news-bhaskar.jpg",
    cardImage: "/photos/grain-cleaning.jpg",
    source: "Dainik Bhaskar",
  },
  {
    date: "May 2026",
    type: "In the press · Raj Express",
    title:
      "Government to make Kodo–Kutki products and sell them under the ‘Narmada Millets’ brand",
    body: "Raj Express reports the State bought Kutki at ₹3,500 and Kodo at ₹2,500 per quintal with a ₹1,000 per quintal bonus to farmers — around 3,000 MT from about 4,000 growers — and will now process and brand it as Narmada Millets.",
    image: "/photos/news-rajexpress.jpg",
    cardImage: "/photos/procurement-centre.jpg",
    source: "Raj Express",
  },
  {
    date: "March 2026",
    type: "In the press · ETV Bharat",
    title:
      "MP's Kodo–Kutki becomes ‘Narmada Millets’ — government to sell instant idli, dosa and upma mixes",
    body: "ETV Bharat reports that kodo and kutki grown in Madhya Pradesh will be turned into ready-to-cook idli, dosa, upma and kheer mixes under the Narmada Millets brand, after the State procured 3,000 metric tonnes through farmer producer organisations.",
    image: "/photos/narmada-millets-range.jpg",
    cardImage: "/photos/real-pack-range.jpg",
    source: "ETV Bharat",
    url: "https://www.etvbharat.com/hi/state/mp-farmer-producer-organizations-make-narmada-millets-kodo-kutki-italy-dosa-upma-powderer-madhya-pradesh-news-mps26031004830",
  },
  {
    date: "February 2026",
    type: "Procurement",
    title:
      "First procurement season closes — Kodo & Kutki aggregated from member FPOs across Madhya Pradesh",
    body: "Across the launch districts, member producer organisations weighed, quality-checked and aggregated the Kharif Kodo–Kutki harvest at block-level centres, with payments routed directly to farmers' bank accounts via DBT.",
    image: "/photos/procurement-volume.jpg",
  },
];
