"use client";

import { useRef, useState, useEffect } from "react";
import { company } from "../../data/site";
import AnimatedCounter from "../../components/ui/AnimatedCounter";

const stats = [
  {
    end: 2007,
    suffix: "",
    label: "Year Established",
    note: "Jodhpur, Rajasthan",
    isYear: true,
  },
  {
    end: 20000,
    suffix: "+",
    label: "MT Annual Capacity",
    note: "Hydrated Lime, Quick Lime & Limestone",
  },
  {
    end: 0,          // computed dynamically
    suffix: "+",
    label: "Years of Experience",
    note: "Continuous operation since founding",
    isDynamic: true,
  },
  {
    end: 100,
    suffix: "+",
    label: "Industrial Clients",
    note: "Across 8+ states pan-India",
  },
];

export default function TrustMetrics() {
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

  const yearsInBusiness = company.yearsInBusiness;

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 bg-slate-900 overflow-hidden"
    >
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "url(/grain.svg)", backgroundRepeat: "repeat", backgroundSize: "200px" }}
      />
      {/* Accent glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[16rem] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(212,168,83,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-[72rem] mx-auto relative">
        <div className="text-center mb-14">
          <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-slate-500 mb-3">
            By the Numbers
          </p>
          <h2
            className="font-bold text-white leading-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.025em" }}
          >
            Scale That Earns Trust
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-800 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => {
            const endVal = stat.isDynamic ? yearsInBusiness : stat.end;
            return (
              <div
                key={i}
                className="bg-slate-900 px-8 py-10 flex flex-col items-center text-center hover:bg-slate-800/70 transition-colors duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(1rem)",
                  transition: `opacity 700ms ease ${i * 100}ms, transform 700ms ease ${i * 100}ms`,
                }}
              >
                <div
                  className="font-bold text-white leading-none mb-3"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.04em" }}
                >
                  {visible ? (
                    <AnimatedCounter end={endVal} suffix={stat.suffix} duration={1400} />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <div className="text-[0.8125rem] font-semibold text-slate-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-[0.75rem] text-slate-600">{stat.note}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
