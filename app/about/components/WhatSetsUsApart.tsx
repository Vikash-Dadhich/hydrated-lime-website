"use client";

import { useEffect, useRef, useState } from "react";
import { features } from "../../data/site";

const featureIcons: React.FC[] = [
  () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
    </svg>
  ),
  () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M2 12h2M20 12h2M18.66 18.66l-1.41-1.41M6.34 5.34L4.93 4.93M12 2v2M12 20v2"/>
    </svg>
  ),
  () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
  () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
    </svg>
  ),
  () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
    </svg>
  ),
  () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
];

export default function WhatSetsUsApart() {
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
    <section ref={ref} className="bg-slate-50 py-28 px-6">
      <div className="max-w-[72rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-slate-400 mb-3"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 600ms ease",
            }}
          >
            What Sets Us Apart
          </p>
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
            Why Industry Leaders Choose Us
          </h2>
        </div>

        {/* 2 × 3 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = featureIcons[i];
            return (
              <div
                key={i}
                className="group bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(1.5rem)",
                  transition: `opacity 600ms ease ${i * 80}ms, transform 600ms ease ${i * 80}ms, border-color 300ms, box-shadow 300ms, translate 300ms`,
                }}
              >
                <div className="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-slate-900 flex items-center justify-center mb-5 text-slate-500 group-hover:text-white transition-all duration-300">
                  <Icon />
                </div>
                <h3 className="text-[1rem] font-semibold text-slate-900 mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[0.9rem] text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
