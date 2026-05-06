import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Vikas Lime Industries supplies hydrated lime, quick lime, and limestone to water treatment, steel, construction, sugar, AAC block, and agriculture sectors across India.",
  openGraph: {
    title: "Industries We Serve — Vikas Lime Industries",
    description:
      "Lime supply for water treatment, steel & metallurgy, construction, sugar refining, AAC blocks, and agriculture — Jodhpur, Rajasthan.",
    url: "https://vikaslimeindustries.com/industries",
  },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
