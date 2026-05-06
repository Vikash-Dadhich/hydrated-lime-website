/**
 * app/data/industries.ts
 * Content for the /industries landing page.
 */

export interface IndustryDetail {
  id: string;
  name: string;
  tagline: string;
  role: string;
  /** Which product names are recommended */
  products: string[];
  /** One headline stat / proof point */
  stat: string;
  statLabel: string;
}

export const industries: IndustryDetail[] = [
  {
    id: "water-treatment",
    name: "Water & Effluent Treatment",
    tagline: "The most widely used chemical for pH correction and heavy metal removal.",
    role:
      "Lime raises pH to precipitate heavy metals, coagulate suspended solids, and disinfect wastewater. Hydrated lime is the preferred input for municipal and industrial water treatment systems, offering precise pH control and high surface reactivity at economical cost.",
    products: ["Hydrated Lime", "Quick Lime Lumps"],
    stat: "80%+",
    statLabel: "of water treatment plants use lime",
  },
  {
    id: "steel-metallurgy",
    name: "Steel & Metallurgy",
    tagline: "High-reactivity quick lime — indispensable in every steel furnace.",
    role:
      "Quick lime acts as a flux in blast furnaces and steel-making converters, binding silica, phosphorus, and sulphur impurities into slag. Consistent CaO content and rapid reactivity are essential for meeting target steel grades and maintaining process efficiency.",
    products: ["Quick Lime Lumps", "Quick Lime Powder"],
    stat: "40–60 kg",
    statLabel: "of lime consumed per tonne of steel",
  },
  {
    id: "construction",
    name: "Construction & Infrastructure",
    tagline: "Soil stabilisation, mortars, and aggregates — lime is foundational.",
    role:
      "Hydrated lime stabilises clay-heavy soils for road and foundation work, improves workability of mortars, and acts as a damp-proofing agent. Limestone grit is a key aggregate for road base and concrete batching — sourced directly from our Bilara quarries.",
    products: ["Hydrated Lime", "Limestone"],
    stat: "50%+",
    statLabel: "stronger subgrade after lime stabilisation",
  },
  {
    id: "sugar-refining",
    name: "Sugar Refining",
    tagline: "Lime milk clarification — the backbone of every sugar season.",
    role:
      "Milk of lime (hydrated lime slurry) is used in the carbonatation and sulphitation stages of sugar production to clarify raw cane juice, remove impurities, and achieve the correct pH for sugar crystallisation. Consistent fineness and purity are critical for juice clarity and output.",
    products: ["Hydrated Lime"],
    stat: "1.5–3 kg",
    statLabel: "of lime per 100 kg sugar produced",
  },
  {
    id: "aac-blocks",
    name: "AAC Block Manufacturing",
    tagline: "Quick lime powder — the reactive core of lightweight concrete.",
    role:
      "Quick lime powder reacts with fly ash or silica sand under autoclave conditions (steam + pressure) to form calcium silicate hydrates — the binding phase that gives AAC blocks their lightweight structure and compressive strength. High reactivity and controlled particle size are non-negotiable.",
    products: ["Quick Lime Powder", "Quick Lime Lumps"],
    stat: "10–20%",
    statLabel: "lime content by weight in every AAC block",
  },
  {
    id: "agriculture",
    name: "Agriculture & Soil Treatment",
    tagline: "Neutralise acidic soils and unlock crop potential.",
    role:
      "Agricultural liming neutralises acidic soils, improves the availability of calcium and other nutrients, and creates an environment where fertilisers work more effectively. Ground limestone and hydrated lime are both used depending on soil pH targets and budget constraints.",
    products: ["Limestone", "Hydrated Lime"],
    stat: "15–30%",
    statLabel: "yield improvement on treated acidic soils",
  },
];
