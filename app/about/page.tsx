import type { Metadata } from "next";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import TrustMetrics from "./components/TrustMetrics";
import WhatSetsUsApart from "./components/WhatSetsUsApart";
import Timeline from "./components/Timeline";
import Team from "./components/Team";
import Vision from "./components/Vision";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Vikas Lime Industries — premium lime manufacturer since 2007, Jodhpur, Rajasthan. Quality-controlled hydrated lime, quick lime & limestone for India's industries.",
  openGraph: {
    title: "About Us — Vikas Lime Industries",
    description:
      "Built on quality. Trusted across India. Manufacturer and supplier of hydrated lime, quick lime, and limestone since 2007 — Jodhpur, Rajasthan.",
    url: "https://vikaslimeindustries.com/about",
  },
};

export default function About() {
  return (
    <div id="about">
      {/* Dark — Full-viewport hero with kiln background */}
      <Hero />

      {/* White — Narrative story + facts card */}
      <WhoWeAre />

      {/* Dark — 4 animated stat tiles */}
      <TrustMetrics />

      {/* Light gray — 6 differentiator cards with icons */}
      <WhatSetsUsApart />

      {/* White — Horizontal timeline (desktop) / vertical (mobile) */}
      <Timeline />

      {/* White — 2-person team cards */}
      <Team />

      {/* Dark — Split vision + 5 vision points */}
      <Vision />
    </div>
  );
}
