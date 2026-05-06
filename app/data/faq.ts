/**
 * app/data/faq.ts
 * Frequently asked questions for B2B lime procurement.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "What purity grades do you supply?",
    answer:
      "We supply Hydrated Lime and Quick Lime (Lumps & Powder) in 80%, 85%, and 90% purity grades. Limestone is supplied at 90–95% CaCO₃ content. The right grade depends on your process requirements — our team can advise.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "We accept orders from 1 MT upward. Pricing becomes more competitive at 5 MT+ due to logistics efficiency. For regular monthly supply above 20 MT, we offer preferred pricing and priority dispatch.",
  },
  {
    question: "Do you deliver across all of India?",
    answer:
      "Yes. We supply pan-India from our facility in Jodhpur, Rajasthan, with established logistics to all major industrial zones including Gujarat, Maharashtra, Haryana, Uttar Pradesh, Karnataka, and Tamil Nadu.",
  },
  {
    question: "What is the typical dispatch timeline?",
    answer:
      "In-stock material is dispatched within 1–3 business days of order confirmation. Delivery takes 3–7 business days within Rajasthan and Gujarat, and 7–14 business days to most other states depending on destination.",
  },
  {
    question: "Can we request a product sample before placing an order?",
    answer:
      "Yes. We supply evaluation samples (up to 5 kg) for new clients. Contact us via WhatsApp or the enquiry form — we'll arrange dispatch once basic procurement details are shared.",
  },
  {
    question: "Is every batch tested before dispatch?",
    answer:
      "Yes. Every production batch is quality-checked for purity (CaO / Ca(OH)₂ %), moisture content, and physical properties before being approved for packaging and dispatch. We maintain batch records for traceability.",
  },
  {
    question: "What packaging options are available?",
    answer:
      "Standard packaging is 25 kg HDPE bags. We also supply in one-tonne jumbo bags and bulk (loose) loads for large-volume requirements. Custom packaging specifications can be arranged for clients on regular supply agreements.",
  },
  {
    question: "Do you provide a Certificate of Analysis (COA) with each batch?",
    answer:
      "Yes. We issue a Certificate of Analysis for every production batch, documenting purity (CaO / Ca(OH)₂ %), moisture content, and physical properties. COAs are dispatched with the delivery documentation. If your specification requires independent third-party lab verification, contact us to discuss the process.",
  },
  {
    question: "Can you handle large or long-term supply contracts?",
    answer:
      "Yes. We work with several industrial clients on annual supply agreements with committed monthly volumes and locked pricing. If you have regular requirements, contact us to discuss a supply schedule — we align production planning to give you priority dispatch and consistent grade availability.",
  },
];
