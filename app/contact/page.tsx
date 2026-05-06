import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Vikas Lime Industries — pricing, bulk orders, technical specs, and sample requests for hydrated lime, quick lime, and limestone.",
  openGraph: {
    title: "Contact Us — Vikas Lime Industries",
    description:
      "Reach our team for pricing, bulk supply, and sample requests. Hydrated lime, quick lime & limestone manufacturer — Jodhpur, Rajasthan.",
    url: "https://vikaslimeindustries.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
