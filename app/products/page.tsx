import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our four core products: Hydrated Lime, Quick Lime Lumps, Quick Lime Powder, and Limestone — consistent quality for India's industries.",
  openGraph: {
    title: "Products — Vikas Lime Industries",
    description:
      "Hydrated Lime, Quick Lime Lumps, Quick Lime Powder, and Limestone — consistent quality for India's industries.",
    url: "https://vikaslimeindustries.com/products",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
