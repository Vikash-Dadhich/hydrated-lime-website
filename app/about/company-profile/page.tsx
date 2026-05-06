import type { Metadata } from "next";
import CompanyProfileClient from "./CompanyProfileClient";

export const metadata: Metadata = {
  title: "Company Profile",
  description:
    "Complete company profile of Vikas Lime Industries — manufacturer and supplier of hydrated lime, quick lime, and limestone gitti since 2007.",
  openGraph: {
    title: "Company Profile — Vikas Lime Industries",
    description:
      "Complete company profile — manufacturer and supplier of hydrated lime, quick lime, and limestone since 2007.",
    url: "https://vikaslimeindustries.com/about/company-profile",
  },
};

const sections = [
  {
    id: "overview",
    label: "Company Overview",
    number: "01",
    content: [
      "Vikas Lime Industries was established in 2007 as a manufacturer and supplier of Hydrated Lime, Quick Lime, and Limestone Gitti for industrial and commercial use. The company operates its manufacturing unit in Hariyadhana, Jodhpur, with an office presence in Saraswati Nagar that supports sales coordination and customer engagement across the country.",
      "Since its inception, the company has maintained a clear focus on producing consistent, high-quality lime products suited for a wide range of industrial applications. With a well-structured supply chain and the ability to service customers across India, Vikas Lime Industries has grown into a dependable name in the mineral-based manufacturing space.",
    ],
  },
  {
    id: "journey",
    label: "Our Journey",
    number: "02",
    content: [
      "The company began as a small manufacturing unit with a straightforward purpose — to produce quality lime products and serve local industrial demand. In its early years, operations were modest, but the emphasis on maintaining purity and consistency in every batch set the foundation for what would follow.",
      "Over the next several years, this approach attracted the attention of larger industrial buyers who valued reliability over volume alone. Vikas Lime Industries gradually expanded its production capabilities and began building long-term relationships with organisations in cement, chemicals, and metals. These relationships were sustained not through aggressive pricing, but through dependable supply, transparent communication, and consistent product quality.",
      "Today, the company operates with a pan-India supply reach, serving a diverse set of industries from its Jodhpur-based manufacturing facility. The journey from a small manufacturing unit to a recognised industrial supplier has been shaped by patience, discipline, and a commitment to doing the fundamentals well.",
    ],
  },
  {
    id: "quality",
    label: "Manufacturing & Quality",
    number: "03",
    content: [
      "Vikas Lime Industries operates with an annual production capacity of approximately 20,000 tons. The manufacturing process is structured around consistency — each batch undergoes quality checks designed to ensure that purity, calcium content, and physical properties remain within defined parameters. The company produces Hydrated Lime and Quick Lime in 80%, 85%, and 90% purity grades, allowing it to address varying industrial requirements with precision.",
      "The production facility follows a process-driven approach where raw material selection, kiln operations, hydration cycles, and packaging are all standardised. Pollution-control measures are in place, and the company maintains compliance with applicable environmental norms. Vikas Lime Industries is also associated with recognised industry bodies, reinforcing its commitment to operational standards and responsible manufacturing practices.",
    ],
  },
  {
    id: "products",
    label: "Products & Specifications",
    number: "04",
    content: [
      "The company's product portfolio includes Hydrated Lime, Quick Lime Lumps, Quick Lime Powder, and Limestone — four product lines that serve a broad spectrum of industrial applications. Hydrated Lime and Quick Lime are available in 80%, 85%, and 90% purity grades, and the company is equipped to customise specifications based on the technical requirements of individual clients. Limestone is supplied in multiple aggregate sizes suitable for construction, road base, and process-related use.",
      "Each product is manufactured under controlled conditions to ensure batch-to-batch consistency. Whether the application is water treatment, flue gas desulphurisation, soil stabilisation, or chemical processing, Vikas Lime Industries works with clients to identify the appropriate grade, particle size, and packaging format to match the specific needs of their operation.",
    ],
  },
  {
    id: "clients",
    label: "Industries & Clients",
    number: "05",
    content: [
      "Vikas Lime Industries serves a range of industrial sectors including cement manufacturing, chemical processing, metal refining, water treatment, and construction. The company's client base spans both large-scale industrial organisations and mid-size operations, many of which have maintained ongoing supply relationships over several years.",
      "The approach to client engagement is rooted in long-term partnership rather than transactional supply. The company works closely with procurement and technical teams to understand evolving requirements, maintain supply continuity, and address quality expectations. This approach has earned the trust of leading industrial organisations across India, and forms the basis of the company's reputation.",
    ],
  },
  {
    id: "vision",
    label: "Vision & Future Direction",
    number: "06",
    content: [
      "Looking ahead, Vikas Lime Industries is focused on expanding its manufacturing capacity to meet growing demand across existing and new markets. The company intends to strengthen its position as a preferred pan-India supplier by deepening its distribution network and improving supply turnaround for clients in underserved regions.",
      "Parallel to domestic growth, the company is actively exploring entry into export markets, with a focus on geographies where reliable lime supply remains a constraint. Investments in process modernisation and technology adoption are planned to improve efficiency, reduce waste, and enable tighter quality control at scale. Central to this direction is a sustained commitment to environmentally responsible manufacturing — ensuring that growth does not come at the cost of compliance, community, or natural resources.",
    ],
  },
];

export default function CompanyProfile() {
  return <CompanyProfileClient sections={sections} />;
}
