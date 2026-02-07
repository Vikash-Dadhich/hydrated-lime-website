/**
 * Central product data — single source of truth for all four products.
 * Names are final. Do NOT add, rename, or group products.
 */

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  imageCredit: string;
}

const products: Product[] = [
  {
    id: "hydrated-lime",
    name: "Hydrated Lime",
    tagline: "Fine-grade Ca(OH)₂ for precision-driven water and chemical applications.",
    description:
      "Produced by controlled hydration of high-purity quick lime, our hydrated lime powder offers exceptional fineness and consistent chemical composition. It is the product of choice for municipal water treatment, sugar refining, and construction-grade mortars.",
    points: [
      "Exceptional fineness and free-flowing consistency",
      "Reliable pH control in water and effluent treatment",
      "Suitable for construction mortars and soil stabilisation",
    ],
    image: "/products/HydratedLime.jpeg",
    imageAlt: "Hydrated lime powder — fine white calcium hydroxide",
    imageCredit: "Vikas Lime Industries",
  },
  {
    id: "quick-lime-lumps",
    name: "Quick Lime Lumps",
    tagline: "High-reactivity calcium oxide engineered for demanding industrial processes.",
    description:
      "Our premium-grade quick lime lumps deliver consistently high available CaO content and rapid reactivity. Manufactured under controlled calcination, they meet the exacting standards of steel mills, effluent treatment plants, and chemical producers across India.",
    points: [
      "Consistently high available CaO for superior performance",
      "Uniform lump size for predictable process integration",
      "Trusted by steel and chemical plants across western India",
    ],
    image: "/products/Quick-Lime-Lumps.webp",
    imageAlt: "Quick lime lumps — high reactivity industrial grade",
    imageCredit: "Vikas Lime Industries",
  },
  {
    id: "quick-lime-powder",
    name: "Quick Lime Powder",
    tagline: "Finely ground calcium oxide for rapid dissolution and reaction.",
    description:
      "Our quick lime powder is milled to a controlled fineness for applications requiring fast reactivity and easy blending. Ideal for chemical synthesis, AAC block manufacturing, and pollution control systems where uniform dispersion matters.",
    points: [
      "Controlled fineness for fast and uniform dispersion",
      "High CaO content maintained through sealed processing",
      "Preferred in AAC block plants and pollution control",
    ],
    image: "/products/quick-lime-powder.jpeg",
    imageAlt: "Quick lime powder — finely milled calcium oxide",
    imageCredit: "Vikas Lime Industries",
  },
  {
    id: "limestone",
    name: "Limestone",
    tagline: "Graded natural calcium carbonate for construction and industrial feedstock.",
    description:
      "Sourced from our own quarries in the Bilara region of Rajasthan, our limestone is graded for consistency and supplied as aggregate or feedstock. It serves road construction, concrete batching, and as a raw material for lime kiln operations.",
    points: [
      "Sourced from owned quarries in Bilara, Rajasthan",
      "Available in multiple grades and aggregate sizes",
      "Consistent calcium carbonate content for kiln feed",
    ],
    image: "/products/limestone.jpeg",
    imageAlt: "Limestone aggregate — natural calcium carbonate quarry stone",
    imageCredit: "Vikas Lime Industries",
  },
];

export default products;
