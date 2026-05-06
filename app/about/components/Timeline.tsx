"use client";

import { useEffect, useRef, useState } from "react";
import { milestones } from "../../data/site";

export default function Timeline() {
  const ref = useRef<HTMLElement>(null);
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

  return (
    <section ref={ref} className="bg-white py-28 px-6">
      <div className="max-w-[72rem] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-slate-400 mb-3"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 600ms ease" }}
          >
            Our Journey
          </p>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2
              className="font-bold text-slate-900 leading-tight"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                letterSpacing: "-0.025em",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(1rem)",
                transition: "opacity 700ms ease 100ms, transform 700ms ease 100ms",
              }}
            >
              From Modest Beginnings
              <br />to Pan-India Scale
            </h2>
            <a
              href="/about/company-profile#journey"
              className="cp-link shrink-0"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 600ms ease 300ms",
              }}
            >
              Read the full story →
            </a>
          </div>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div
            className="absolute top-[2.75rem] left-0 right-0 h-px bg-slate-200"
            style={{
              transformOrigin: "left",
              transform: visible ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 1000ms cubic-bezier(0.16,1,0.3,1) 200ms",
            }}
          />

          <div className="grid grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="flex flex-col"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(1.5rem)",
                  transition: `opacity 600ms ease ${300 + i * 120}ms, transform 600ms ease ${300 + i * 120}ms`,
                }}
              >
                {/* Dot */}
                <div className="relative mb-8">
                  <div
                    className="w-5 h-5 rounded-full bg-white border-[3px] border-slate-900 transition-all duration-500 relative z-10"
                    style={{
                      transform: visible ? "scale(1)" : "scale(0)",
                      transition: `transform 400ms cubic-bezier(0.34,1.56,0.64,1) ${400 + i * 120}ms`,
                    }}
                  />
                </div>

                {/* Year */}
                <span className="text-[0.75rem] font-bold tracking-[0.08em] text-slate-400 uppercase mb-2">
                  {m.year}
                </span>

                {/* Title */}
                <h3 className="text-[1rem] font-semibold text-slate-900 mb-3 leading-snug">
                  {m.title}
                </h3>

                {/* Description */}
                <p className="text-[0.875rem] text-slate-500 leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden flex flex-col gap-0">
          {/* Vertical line */}
          <div className="relative">
            <div className="absolute left-[0.9rem] top-0 bottom-0 w-px bg-slate-200" />
            {milestones.map((m, i) => (
              <div
                key={i}
                className="relative pl-10 pb-10 last:pb-0"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-1rem)",
                  transition: `opacity 600ms ease ${i * 120}ms, transform 600ms ease ${i * 120}ms`,
                }}
              >
                {/* Dot */}
                <div
                  className="absolute left-0 top-1 w-[1.875rem] h-[1.875rem] rounded-full bg-white border-[3px] border-slate-900 flex items-center justify-center"
                  style={{
                    transform: visible ? "scale(1)" : "scale(0)",
                    transition: `transform 400ms cubic-bezier(0.34,1.56,0.64,1) ${150 + i * 120}ms`,
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-slate-900" />
                </div>

                <span className="text-[0.6875rem] font-bold tracking-[0.1em] text-slate-400 uppercase block mb-1">
                  {m.year}
                </span>
                <h3 className="text-[1rem] font-semibold text-slate-900 mb-2">{m.title}</h3>
                <p className="text-[0.875rem] text-slate-500 leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
