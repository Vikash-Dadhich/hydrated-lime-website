import type { Metadata } from "next";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import TrustMetrics from "./components/TrustMetrics";
import WhatSetsUsApart from "./components/WhatSetsUsApart";
import Timeline from "./components/Timeline";
import Vision from "./components/Vision";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Vikas Lime Industries — manufacturer and supplier of premium hydrated lime and quick lime since 2007.",
  openGraph: {
    title: "About Us — Vikas Lime Industries",
    description:
      "Manufacturer and supplier of premium hydrated lime and quick lime since 2007 — Jodhpur, Rajasthan.",
    url: "https://vikaslimeindustries.com/about",
  },
};

export default function About() {
  return (
    <div id="about">
      <Hero />
      <WhoWeAre />
      <TrustMetrics />
      <WhatSetsUsApart />
      <Timeline />
      <Vision />
    </div>
  );
}
