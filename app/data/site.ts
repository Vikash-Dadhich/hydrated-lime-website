/**
 * app/data/site.ts
 * Single source of truth for all non-product business content.
 * Import from here; never hardcode business data in components.
 */

// ─── Company ───────────────────────────────────────────────────────────────

export const company = {
  name: "Vikas Lime Industries",
  shortName: "Vikas Lime",
  foundedYear: 2007,
  /** Dynamically computed years in business */
  get yearsInBusiness() {
    return new Date().getFullYear() - this.foundedYear;
  },
  annualCapacity: "20,000+",
  annualCapacityUnit: "MT",
  supplyReach: "Pan-India",
  productLines: 4,
  clientCount: 100,
  puritiGrades: ["80%", "85%", "90%"],
  description:
    "Premium hydrated lime, quick lime & limestone manufacturer since 2007 — Jodhpur, Rajasthan.",
  url: "https://vikaslimeindustries.com",
  /** States actively served — for trust signals */
  serviceStates: [
    "Rajasthan", "Gujarat", "Maharashtra", "Haryana",
    "Uttar Pradesh", "Karnataka", "Tamil Nadu", "Madhya Pradesh",
  ],
  /** Legal / registration note shown in footer */
  legalNote: "Sole Proprietorship · GST Registered · Rajasthan Pollution Control Board Compliant",
};

// ─── Contacts ──────────────────────────────────────────────────────────────

export const contacts = [
  {
    name: "Vishnu Avatar Dadhich",
    role: "Proprietor",
    mobile: "+91 9414135630",
    mobileTel: "+919414135630",
    email: "vikashlime@gmail.com",
    initials: "VA",
    bio: "Founder of Vikas Lime Industries with over 19 years of hands-on experience in lime manufacturing and kiln operations. Vishnu oversees production quality, key client relationships, and long-term supply strategy from our Bilara facility.",
    expertise: "Manufacturing · Quality Control · Client Relations",
  },
  {
    name: "Vikash Dadhich",
    role: "Manager — Procurement & Logistics",
    mobile: "+91 8094110701",
    mobileTel: "+918094110701",
    email: "vikashdadhich1998@gmail.com",
    initials: "VK",
    bio: "Manages the complete procurement and logistics chain — from raw limestone sourcing at our Bilara quarries to last-mile delivery across India. Vikash ensures every supply agreement is fulfilled on schedule.",
    expertise: "Procurement · Logistics · Supply Chain",
  },
];

export const primaryContact = contacts[0];

// ─── Addresses ─────────────────────────────────────────────────────────────

export const addresses = [
  {
    label: "Office Address",
    lines: [
      "Vikas Lime Industries",
      "A-280, Saraswati Nagar, Basni",
      "342005, Jodhpur, Rajasthan",
    ],
  },
  {
    label: "Factory",
    lines: [
      "Vikas Lime Industries",
      "384/25/1/1, Hariyadhana",
      "342602, Tehsil-Bilara",
      "Dist-Jodhpur, Rajasthan",
    ],
  },
];

export const businessHours = {
  days: "Monday – Saturday",
  hours: "9:00 AM – 6:00 PM IST",
};

export const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.3389842493903!2d73.7676704761991!3d26.38023387696861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a19fc0ef0fa17%3A0xcd6fdfa6cb8c784e!2sVikas%20Lime%20Industries!5e0!3m2!1sen!2sin!4v1770400672181!5m2!1sen!2sin";

// ─── Hero Stats ─────────────────────────────────────────────────────────────

export const heroStats = [
  { value: "2007", label: "Established" },
  { value: "20,000+", label: "MT Annual Capacity" },
  { value: "Pan-India", label: "Supply Network" },
  { value: "4", label: "Product Lines" },
];

// ─── Applications ──────────────────────────────────────────────────────────

export interface Application {
  name: string;
  icon: string;
  /** Deep-link to the corresponding /industries card */
  href: string;
}

export const applications: Application[] = [
  { name: "Water & Effluent Treatment",   icon: "💧", href: "/industries#water-treatment"  },
  { name: "Steel & Metallurgy",           icon: "⚙️", href: "/industries#steel-metallurgy" },
  { name: "Construction & Infrastructure",icon: "🏗️", href: "/industries#construction"      },
  { name: "Sugar Refining",               icon: "🧪", href: "/industries#sugar-refining"   },
  { name: "Paper & Pulp Industry",        icon: "📄", href: "/industries"                   },
  { name: "Agriculture & Soil Treatment", icon: "🌱", href: "/industries#agriculture"       },
];

// ─── Timeline ──────────────────────────────────────────────────────────────

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const milestones: Milestone[] = [
  {
    year: "2007",
    title: "Founded",
    description:
      "First production unit commissioned in Hariyadhana, Bilara — close to the region's finest limestone deposits. Early focus on consistent quality over volume.",
  },
  {
    year: "2012",
    title: "Capacity Expansion",
    description:
      "Second calcination kiln brought online; annual output doubled to 10,000 MT. First long-term supply agreements signed with steel and water treatment plants in Gujarat and Rajasthan.",
  },
  {
    year: "2020",
    title: "Pan-India Operations",
    description:
      "Reached 20,000+ MT annual capacity. Established direct logistics to 15+ states, cutting delivery lead times across Maharashtra, Haryana, Karnataka, and Tamil Nadu.",
  },
  {
    year: "2026",
    title: "Next Chapter",
    description:
      "Pursuing quality certification (BIS / ISO), export market entry, and kiln technology upgrades — with the goal of becoming a top-3 lime supplier in Western India.",
  },
];

// ─── Differentiators ───────────────────────────────────────────────────────

export interface Feature {
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    title: "Consistent Batch Quality",
    description:
      "Same purity reading, batch after batch — no surprises for process engineers or QC teams.",
  },
  {
    title: "Customisable Grades",
    description:
      "80%, 85%, and 90% purity for Hydrated Lime and Quick Lime — matched to your process specification.",
  },
  {
    title: "On-Time Delivery",
    description:
      "Dedicated trucks dispatched within 24–48 hrs of confirmation. 3–7 day delivery to Rajasthan and Gujarat.",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "Over half our clients have bought from us for 5+ years. We compete on trust and consistency, not price alone.",
  },
  {
    title: "Quality-Controlled Manufacturing",
    description:
      "Batch-level CaO, moisture, and reactivity checks before every dispatch. Batch records maintained for full traceability.",
  },
  {
    title: "Compliance & Industry Affiliation",
    description:
      "Pollution Control Board compliant. Active member of the Rajasthan Lime Manufacturers Association.",
  },
];

// ─── Vision ────────────────────────────────────────────────────────────────

export const visionPoints: string[] = [
  "Scale annual capacity beyond 50,000 MT through kiln modernisation and upstream quarry investment.",
  "Obtain BIS and ISO quality certifications to serve regulated industries and enter export markets.",
  "Build direct supply partnerships with 100+ industrial clients across every major Indian state.",
  "Reduce dispatch lead times by establishing regional stocking points in Gujarat and Maharashtra.",
  "Achieve a net-lower carbon footprint through energy-efficient kiln upgrades by 2028.",
];

// ─── Process Steps ─────────────────────────────────────────────────────────

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Quarrying",
    description:
      "High-grade limestone extracted from our own quarries in the Bilara region of Rajasthan — the source of our quality advantage.",
  },
  {
    step: "02",
    title: "Calcination",
    description:
      "Stone is fired in high-temperature kilns under controlled conditions to produce premium-grade Quick Lime with consistent CaO content.",
  },
  {
    step: "03",
    title: "Processing",
    description:
      "Controlled hydration, milling, and grading to achieve precise purity grades (80%, 85%, 90%) and customer-specified particle size.",
  },
  {
    step: "04",
    title: "Quality & Dispatch",
    description:
      "Every batch is tested for purity, moisture, and reactivity before packaging. Certificate of Analysis issued and product dispatched from our Jodhpur facility within 24–48 hours.",
  },
];

// ─── Differentiators (Why Choose Us) ────────────────────────────────────────

export interface Differentiator {
  title: string;
  description: string;
}

export const differentiators: Differentiator[] = [
  {
    title: "Batch-Level Quality Control",
    description:
      "Every production run is tested for purity, reactivity, and moisture before dispatch. Certificate of Analysis provided with each delivery.",
  },
  {
    title: "Reliable Pan-India Supply",
    description:
      "Established logistics from Jodhpur ensures consistent, on-time delivery — whether your requirement is 5 MT or 5,000 MT per month.",
  },
  {
    title: "Technical Partnership",
    description:
      "Our team works with your procurement and process engineers to select the right grade, particle size, and packaging for your operation.",
  },
];

// ─── Certifications / Trust Badges ──────────────────────────────────────────

export const trustBadges = [
  { label: "Established 2007",           detail: "In continuous operation for 19 years"        },
  { label: "Pollution Control Compliant", detail: "Environment-responsible manufacturing"       },
  { label: "Industry Association Member", detail: "Rajasthan Lime Manufacturers Association"    },
  { label: "COA with Every Batch",        detail: "Certificate of Analysis on every dispatch"  },
  { label: "Pan-India Licensed Supplier", detail: "Serving clients across all major states"    },
];

// ─── Navigation ─────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Products",   href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Contact",    href: "/contact" },
];

export const footerNavLinks = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Products",   href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Contact",    href: "/contact" },
];
