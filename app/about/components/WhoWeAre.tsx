"use client";

import { useEffect, useRef, useState } from "react";
import { company, addresses } from "../../data/site";

export default function WhoWeAre() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const slideIn = (from: "left" | "right", delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : `translateX(${from === "left" ? "-2rem" : "2rem"})`,
    transition: `opacity 900ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 900ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  const facts = [
    { label: "Founded",         value: "2007", sub: "Jodhpur, Rajasthan" },
    { label: "Annual Capacity", value: "20,000+", sub: "Metric Tonnes" },
    { label: "Purity Grades",   value: "80 · 85 · 90", sub: "Percent CaO / Ca(OH)₂" },
    { label: "Distribution",    value: "Pan-India", sub: "All major industrial zones" },
  ];

  return (
    <section ref={ref} className="bg-white py-28 px-6">
      <div className="max-w-[72rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — Narrative */}
          <div style={slideIn("left", 0)}>
            <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-slate-400 mb-4">
              Our Story
            </p>
            <h2
              className="font-bold text-slate-900 leading-tight mb-8"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", letterSpacing: "-0.025em" }}
            >
              A Manufacturer with a Long-Term View
            </h2>

            <div className="flex flex-col gap-5 text-slate-500 leading-relaxed" style={{ fontSize: "1rem" }}>
              <p>
                Vikas Lime Industries was established in 2007 with a straightforward
                purpose — to produce consistent, high-quality lime and serve the industrial
                demand of Rajasthan and beyond. What began as a modest manufacturing unit
                has grown into a recognised pan-India supplier trusted by steel mills,
                chemical producers, and water treatment operators alike.
              </p>
              <p>
                We operate from two locations: our manufacturing facility in Hariyadhana,
                Bilara — close to the limestone quarries we source from — and our
                coordination office in Saraswati Nagar, Jodhpur. This proximity to raw
                material allows us to maintain quality at the source, not just at the
                end of the line.
              </p>
              <p>
                Our growth has been deliberate and relationship-driven. We don&apos;t
                compete on price alone. We compete on batch consistency, reliable
                logistics, and a team that understands the technical demands of the
                industries we supply.
              </p>
            </div>

            <a
              href="/about/company-profile#overview"
              className="cp-link mt-8"
            >
              Read the full company overview →
            </a>
          </div>

          {/* Right — Facts card */}
          <div style={slideIn("right", 150)}>
            <div className="bg-slate-900 rounded-3xl p-8 md:p-10">
              <p className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-slate-500 mb-8">
                Company at a Glance
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y divide-slate-800">
                {facts.map((f, i) => (
                  <div key={i} className="py-6 first:pt-0 last:pb-0 sm:odd:pr-8 sm:even:pl-8 sm:border-r-0">
                    <div
                      className="font-bold text-white mb-1"
                      style={{ fontSize: "clamp(1.25rem, 2vw, 1.625rem)", letterSpacing: "-0.02em" }}
                    >
                      {f.value}
                    </div>
                    <div className="text-[0.8125rem] font-medium text-slate-400">{f.label}</div>
                    <div className="text-[0.75rem] text-slate-600 mt-0.5">{f.sub}</div>
                  </div>
                ))}
              </div>

              {/* Address block */}
              <div className="mt-8 pt-8 border-t border-slate-800">
                <p className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-slate-600 mb-3">
                  Manufacturing Unit
                </p>
                <p className="text-[0.875rem] text-slate-400 leading-relaxed">
                  {addresses[1].lines.slice(1).join(", ")}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
