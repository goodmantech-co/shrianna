export type NewsItem = {
  date: string;
  type: string;
  title: string;
  body: string;
  image: string;
};

export const news: NewsItem[] = [
  {
    date: "14 October 2025",
    type: "Cabinet decision",
    title:
      "Cabinet clears the Shrianna Federation framework — ₹80 crore interest-free loan and DBT farmer incentives approved",
    body: "The State Cabinet approved the operational framework of the Shrianna Federation, including an ₹80 crore interest-free loan from the State Price Stabilization Fund and DBT-based incentives paid directly to registered millet farmers.",
    image: "/editorial/cabinet-decision.jpg",
  },
  {
    date: "5 October 2025",
    type: "Scheme update",
    title:
      "Rani Durgavati Shrianna Protsahan Yojana: farmers to receive a ₹1,000 per quintal incentive via DBT",
    body: "Field-level instructions issued by the Farmer Welfare Department detail registration windows, procurement centres and a transparent grievance redressal mechanism.",
    image: "/editorial/kodo-kutki-field.jpg",
  },
  {
    date: "12 February 2025",
    type: "Operations",
    title:
      "Bhopal mill inaugurated at Beej Bhawan — first batch of 500 quintals of Kodo packed",
    body: "The federation's own processing unit, with capacity for 8 MT/day of cleaning and de-husking, anchors the Narmada Millets supply chain.",
    image: "/editorial/procurement.jpg",
  },
  {
    date: "31 July 2024",
    type: "Market",
    title: "Narmada Millets packets hit mainstream Bhopal retailers for the first time",
    body: "Federation-branded Kodo and Kutki products appear on shelves at select grocers in Bhopal and Indore — the first commercial outing for the Narmada Millets brand.",
    image: "/editorial/mill-launch.jpg",
  },
];
