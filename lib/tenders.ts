// Tenders published by Shrianna Federation. Add new tenders at the top; once the deadline
// passes the page marks them closed automatically. PDFs live in /public/tenders.

export type TenderDocument = { label: string; language: string; href: string; size: string };

export type Tender = {
  ref: string;
  issued: string;
  title: string;
  titleHi: string;
  summary: string;
  /** Submission deadline, India Standard Time, as confirmed by Shrianna (27 Oct 2026). */
  deadline: string;
  deadlineLabel: string;
  facts: { label: string; value: string }[];
  documents: TenderDocument[];
};

export const tenders: Tender[] = [
  {
    ref: "SF/26-27/141",
    issued: "17 October 2026",
    title: "Rate contract for 50 kg PP woven bags for packaging Kodo and Kutki",
    titleHi: "पी.पी. बुने बैग: निविदा आमंत्रण सूचना",
    summary:
      "Quotations are invited for a rate contract to supply 50 kg capacity polypropylene (PP) woven sacks for packaging agricultural commodities, delivered across designated districts of Madhya Pradesh.",
    deadline: "2026-10-27T17:00:00+05:30",
    deadlineLabel: "27 October 2026, 5:00 pm",
    facts: [
      { label: "Quantity", value: "6,50,000 bags (5,20,000 white and 1,30,000 yellow), procured in four lots" },
      { label: "Estimated value", value: "₹150 lakh" },
      { label: "Tender fee", value: "₹1,000, non-refundable, by demand draft or bank transfer" },
      { label: "Submission", value: "Sealed envelopes by speed post or registered post, or password-protected scanned copies by email" },
      { label: "Rate validity", value: "Six months from the date of the purchase order" },
      {
        label: "Delivery",
        value:
          "Dindori, Mandla, Anuppur, Shahdol, Umaria, Katni, Jabalpur, Chhindwara, Rewa, Maihar, Satna, Balaghat, Seoni, Sidhi and Singrauli",
      },
    ],
    documents: [
      { label: "Tender document", language: "English", href: "/tenders/pp-bags-rfq-2026-english.pdf", size: "8.4 MB" },
      { label: "निविदा दस्तावेज़", language: "हिन्दी", href: "/tenders/pp-bags-rfq-2026-hindi.pdf", size: "7.7 MB" },
    ],
  },
];

export const submissionAddress = [
  "The Chief Executive Officer",
  "Shrianna Protsahan Consortium of Farmer Producer Company Ltd.",
  "36, Beej Bhavan, Mother Teresa Marg",
  "Arera Hills, Bhopal (M.P.) 462011",
];
