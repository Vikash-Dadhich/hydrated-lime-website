"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { industries } from "../data/industries";
import { contacts } from "../data/site";

const WHATSAPP_NUM = contacts[0].mobileTel.replace("+", "");

/* ── Industry SVG icons (one per sector) ─────────────────────────────────── */
const IndustryIcons: Record<string, React.FC> = {
  "water-treatment": () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 8 2 13a10 10 0 0020 0c0-5-4.48-11-10-11z"/>
      <path d="M8 16s1.5 2 4 2 4-2 4-2"/>
    </svg>
  ),
  "steel-metallurgy": () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>
  ),
  "construction": () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/>
    </svg>
  ),
  "sugar-refining": () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
    </svg>
  ),
  "aac-blocks": () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
    </svg>
  ),
  "agriculture": () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12"/><path d="M5 12C5 8.13 8.13 5 12 5s7 3.13 7 7-3.13 7-7 7"/><path d="M5 12c0 1.85.63 3.55 1.68 4.9"/>
    </svg>
  ),
};

/* ── Hero ──────────────────────────────────────────────────────────────────── */
function IndustriesHero() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true))); },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const fade = (d = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(1.25rem)",
    transition: `opacity 700ms ease ${d}ms, transform 700ms ease ${d}ms`,
  });

  return (
    <div ref={ref} className="relative bg-slate-900 text-white py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "url(/grain.svg)", backgroundRepeat: "repeat", backgroundSize: "200px" }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[22rem] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(212,168,83,0.06) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-[60rem] mx-auto text-center">
        <p className="text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-slate-500 mb-5" style={fade(0)}>
          Industries We Serve
        </p>
        <h1
          className="font-serif font-bold text-white leading-[1.1] mb-5"
          style={{ ...fade(100), fontSize: "clamp(2.25rem, 5vw, 3.5rem)", letterSpacing: "-0.025em" }}
        >
          Lime at the Heart of{" "}
          <span style={{
            background: "linear-gradient(135deg, #D4A853 0%, #f5d48a 50%, #D4A853 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Indian Industry
          </span>
        </h1>
        <p
          className="text-slate-400 leading-relaxed mx-auto mb-10"
          style={{ ...fade(200), fontSize: "clamp(1rem, 2vw, 1.125rem)", maxWidth: "48ch" }}
        >
          From steel mills to sugar factories, from water treatment to road construction —
          Vikas Lime Industries supplies the lime that keeps India&apos;s industrial
          operations running.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-wrap justify-center gap-3" style={fade(300)}>
          <a
            href="/products"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold text-[0.875rem] px-6 py-3 rounded-full no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)] transition-all duration-200"
          >
            View All Products
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent("Hello, I'd like to enquire about lime supply for my industry.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent text-white font-medium text-[0.875rem] px-6 py-3 rounded-full border border-white/20 no-underline hover:border-white/40 hover:bg-white/5 transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Enquire via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Industry Card ─────────────────────────────────────────────────────────── */
function IndustryCard({ industry, index }: { industry: typeof industries[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true))); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Icon = IndustryIcons[industry.id] ?? (() => null);

  return (
    <div
      ref={ref}
      className="group bg-white border border-slate-200 rounded-3xl p-8 flex flex-col hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(1.5rem)",
        transition: `opacity 600ms ease ${(index % 3) * 80}ms, transform 600ms ease ${(index % 3) * 80}ms, border-color 300ms, box-shadow 300ms, translate 300ms`,
      }}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-slate-900 flex items-center justify-center mb-5 text-slate-500 group-hover:text-white transition-all duration-300">
        <Icon />
      </div>

      {/* Name + tagline */}
      <h2 className="text-[1.0625rem] font-bold text-slate-900 mb-2 leading-snug">{industry.name}</h2>
      <p className="text-[0.875rem] text-slate-500 leading-relaxed mb-5">{industry.tagline}</p>

      {/* Stat */}
      <div className="flex items-baseline gap-2 bg-slate-50 rounded-xl px-4 py-3 mb-5">
        <span className="font-bold text-slate-900" style={{ fontSize: "1.375rem", letterSpacing: "-0.03em" }}>
          {industry.stat}
        </span>
        <span className="text-[0.75rem] text-slate-500">{industry.statLabel}</span>
      </div>

      {/* Role — clamped on mobile, full on desktop */}
      <p className={`text-[0.875rem] text-slate-500 leading-[1.8] mb-1 flex-1 ${!expanded ? "line-clamp-3 lg:line-clamp-none" : ""}`}>
        {industry.role}
      </p>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="text-[0.75rem] font-semibold text-slate-400 hover:text-slate-700 mb-5 text-left transition-colors duration-150 lg:hidden"
      >
        {expanded ? "Show less ↑" : "Show more ↓"}
      </button>

      {/* Recommended products */}
      <div className="mb-6">
        <p className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-slate-400 mb-2">Recommended Products</p>
        <div className="flex flex-wrap gap-2">
          {industry.products.map((prod) => (
            <Link
              key={prod}
              href={`/products#${prod.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[0.75rem] font-medium text-slate-700 bg-slate-100 hover:bg-slate-900 hover:text-white px-3 py-1.5 rounded-full no-underline transition-all duration-150"
            >
              {prod}
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <a
        href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(`Hello, I'm looking for lime supply for ${industry.name}. Please share more details.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-[#25D366] no-underline hover:underline transition-colors duration-150"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Enquire for {industry.name.split(" ")[0]}
      </a>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────────── */
export default function IndustriesClient() {
  return (
    <div className="w-full bg-white">
      <IndustriesHero />

      {/* Grid of 6 industry cards */}
      <section className="py-20 px-6">
        <div className="max-w-[72rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <IndustryCard key={industry.id} industry={industry} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <div className="max-w-[40rem] mx-auto">
          <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-slate-500 mb-4">
            Don&apos;t see your industry?
          </p>
          <h2
            className="font-bold text-white mb-5"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}
          >
            We work across all lime-consuming industries.
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8" style={{ fontSize: "1rem" }}>
            If your process uses lime — regardless of sector — our team can help
            identify the right grade, size, and supply arrangement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent("Hello, I'd like to discuss lime supply for my industry.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-semibold text-[0.9375rem] px-7 py-3.5 rounded-full no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(37,211,102,0.35)] transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold text-[0.9375rem] px-7 py-3.5 rounded-full no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,255,255,0.15)] transition-all duration-200"
            >
              Send Enquiry
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
