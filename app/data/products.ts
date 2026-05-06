/**
 * Central product data — single source of truth for all four products.
 * Names are final. Do NOT add, rename, or group products.
 */

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  /** Chemical formula shown as a small badge */
  formula: string;
  tagline: string;
  description: string;
  points: string[];
  /** Key technical specifications rendered in a spec table */
  specs: ProductSpec[];
  /** Industry / application chips */
  industries: string[];
  image: string;
  imageAlt: string;
  imageCredit: string;
}

const products: Product[] = [
  {
    id: "hydrated-lime",
    name: "Hydrated Lime",
    formula: "Ca(OH)₂",
    tagline:
      "Fine-grade calcium hydroxide for precision-driven water treatment, refining, and construction applications.",
    description:
      "Produced by controlled hydration of high-purity quick lime, our hydrated lime powder offers exceptional fineness and consistent chemical composition. It is the preferred input for municipal water treatment, sugar refining, construction mortars, and soil stabilisation projects — wherever reliable pH control and high surface reactivity matter.",
    points: [
      "Exceptional fineness and free-flowing consistency",
      "Reliable pH control in water and effluent treatment",
      "Suitable for construction mortars and soil stabilisation",
    ],
    specs: [
      { label: "Purity Grades",     value: "80% · 85% · 90% Ca(OH)₂" },
      { label: "Particle Size",     value: "D90 < 45 μm" },
      { label: "Moisture Content",  value: "≤ 1%" },
      { label: "Whiteness",         value: "≥ 90%" },
      { label: "Packaging",         value: "25 kg HDPE bags / Bulk" },
    ],
    industries: [
      "Water Treatment",
      "Sugar Refining",
      "Construction",
      "Soil Stabilisation",
      "Paper & Pulp",
    ],
    image: "/products/HydratedLime.png",
    imageAlt: "Hydrated lime powder — fine white calcium hydroxide",
    imageCredit: "Vikas Lime Industries",
  },
  {
    id: "quick-lime-lumps",
    name: "Quick Lime Lumps",
    formula: "CaO",
    tagline:
      "High-reactivity calcium oxide engineered for steel production, chemical synthesis, and effluent treatment.",
    description:
      "Our premium-grade quick lime lumps deliver consistently high available CaO content and rapid reactivity. Manufactured under controlled calcination in our Bilara facility, they meet the exacting standards of steel mills, effluent treatment plants, and chemical producers across India. Uniform lump size ensures predictable process integration and minimum waste.",
    points: [
      "Consistently high available CaO for superior performance",
      "Uniform lump size for predictable process integration",
      "Trusted by steel and chemical plants across western India",
    ],
    specs: [
      { label: "Purity Grades",     value: "80% · 85% · 90% CaO" },
      { label: "Lump Size",         value: "20 – 80 mm" },
      { label: "Moisture Content",  value: "≤ 0.5%" },
      { label: "Reactivity (T60)",  value: "< 3 min" },
      { label: "Packaging",         value: "Bulk / Jumbo bags" },
    ],
    industries: [
      "Steel & Metallurgy",
      "Effluent Treatment",
      "Chemical Production",
      "Power Plants",
      "Desulphurisation",
    ],
    image: "/products/Quick-Lime-Lumps.png",
    imageAlt: "Quick lime lumps — high reactivity industrial grade calcium oxide",
    imageCredit: "Vikas Lime Industries",
  },
  {
    id: "quick-lime-powder",
    name: "Quick Lime Powder",
    formula: "CaO",
    tagline:
      "Finely milled calcium oxide for fast dissolution, rapid reaction, and uniform blending.",
    description:
      "Our quick lime powder is milled to a controlled fineness for applications requiring fast reactivity and easy blending. Sealed processing maintains high CaO content and prevents premature hydration. Ideal for chemical synthesis, AAC block manufacturing, and pollution control systems where uniform dispersion and consistent performance across batches are critical.",
    points: [
      "Controlled fineness for fast and uniform dispersion",
      "High CaO content maintained through sealed processing",
      "Preferred in AAC block plants and pollution control",
    ],
    specs: [
      { label: "Purity Grades",     value: "80% · 85% · 90% CaO" },
      { label: "Particle Size",     value: "D90 < 90 μm" },
      { label: "Moisture Content",  value: "≤ 0.5%" },
      { label: "Reactivity",        value: "High (rapid)" },
      { label: "Packaging",         value: "25 kg bags / Bulk" },
    ],
    industries: [
      "AAC Block Plants",
      "Pollution Control",
      "Chemical Synthesis",
      "Rubber & PVC",
      "Fertiliser Production",
    ],
    image: "/products/quick-lime-powder.png",
    imageAlt: "Quick lime powder — finely milled calcium oxide",
    imageCredit: "Vikas Lime Industries",
  },
  {
    id: "limestone",
    name: "Limestone",
    formula: "CaCO₃",
    tagline:
      "Graded natural calcium carbonate sourced from our own Bilara quarries for construction and industrial feedstock.",
    description:
      "Sourced from our own quarries in the Bilara region of Rajasthan, our limestone is graded for consistency and supplied as aggregate or feedstock. Available across a range of sizes to suit road construction, concrete batching, kiln feed requirements, and agricultural soil amendment. Consistent CaCO₃ content across deliveries makes it a reliable raw material input.",
    points: [
      "Sourced from owned quarries in Bilara, Rajasthan",
      "Available in multiple grades and aggregate sizes",
      "Consistent calcium carbonate content for kiln feed",
    ],
    specs: [
      { label: "CaCO₃ Content",     value: "90 – 95%" },
      { label: "Available Sizes",   value: "0–5, 5–20, 20–40, 40–80 mm" },
      { label: "Moisture Content",  value: "≤ 2%" },
      { label: "Source",            value: "Own quarries — Bilara, Rajasthan" },
      { label: "Packaging",         value: "Bulk / Tipper loads" },
    ],
    industries: [
      "Road Construction",
      "Concrete Batching",
      "Kiln Feedstock",
      "Agriculture",
      "Building Materials",
    ],
    image: "/products/limestone.png",
    imageAlt: "Limestone aggregate — natural calcium carbonate quarry stone",
    imageCredit: "Vikas Lime Industries",
  },
];

export default products;
