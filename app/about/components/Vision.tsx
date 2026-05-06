"use client";

import { useEffect, useRef, useState } from "react";
import { visionPoints } from "../../data/site";
import Link from "next/link";

export default function Vision() {
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
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-slate-900 py-28 px-6 relative overflow-hidden">
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "url(/grain.svg)", backgroundRepeat: "repeat", backgroundSize: "200px" }}
      />
      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(212,168,83,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-[72rem] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Headline */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(1.5rem)",
              transition: "opacity 800ms ease, transform 800ms ease",
            }}
          >
            <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-slate-500 mb-5">
              Our Vision
            </p>
            <h2
              className="font-serif font-bold text-white leading-[1.08] mb-8"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.025em" }}
            >
              Shaping the Future of Industrial Lime Supply
            </h2>
            <div className="w-10 h-px bg-slate-600 mb-8" />
            <p className="text-slate-400 leading-relaxed mb-8" style={{ fontSize: "1.0625rem" }}>
              Vikas Lime Industries is focused on growing responsibly — expanding
              capacity, deepening reach, and entering new markets without
              compromising the quality and reliability that built our reputation.
            </p>
            <Link
              href="/about/company-profile#vision"
              className="inline-flex items-center gap-2 text-[0.875rem] font-medium text-slate-400 hover:text-white transition-colors duration-200 no-underline"
            >
              Read the detailed vision
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </Link>

            {/* Exit CTA — moves buyer to Products or Contact */}
            <div className="mt-12 pt-10 border-t border-slate-800 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold text-[0.875rem] px-6 py-3 rounded-full no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)] transition-all duration-200"
              >
                View Our Products
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-slate-400 font-medium text-[0.875rem] px-6 py-3 rounded-full border border-slate-700 no-underline hover:border-slate-500 hover:text-white transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right — Vision points */}
          <div className="flex flex-col gap-0 divide-y divide-slate-800">
            {visionPoints.map((point, i) => (
              <div
                key={i}
                className="py-5 flex items-start gap-4 group"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(1.5rem)",
                  transition: `opacity 600ms ease ${200 + i * 100}ms, transform 600ms ease ${200 + i * 100}ms`,
                }}
              >
                <div
                  className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 group-hover:bg-slate-700 flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-[#D4A853] transition-colors duration-200" />
                </div>
                <p className="text-[0.9375rem] text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-200">
                  {point}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
