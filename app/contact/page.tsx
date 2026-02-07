import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Vikas Lime Industries for business inquiries, partnerships, or general information.",
  openGraph: {
    title: "Contact Us — Vikas Lime Industries",
    description:
      "Get in touch with Vikas Lime Industries for business inquiries, partnerships, or bulk supply enquiries.",
    url: "https://vikaslimeindustries.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
