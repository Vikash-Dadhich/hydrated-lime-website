"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HomeProducts from "./components/HomeProducts";
import AnimatedCounter from "./components/ui/AnimatedCounter";
import FaqAccordion from "./components/ui/FaqAccordion";
import {
  applications,
  processSteps,
  differentiators,
  trustBadges,
  company,
} from "./data/site";
import { faqs } from "./data/faq";

/* ─── Application SVG Icons ─────────────────────────────────────────────── */
const AppIcons: Record<string, React.FC<{ className?: string }>> = {
  "Water & Effluent Treatment": ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 8 2 13a10 10 0 0020 0c0-5-4.48-11-10-11z"/>
      <path d="M8 16s1.5 2 4 2 4-2 4-2"/>
    </svg>
  ),
  "Steel & Metallurgy": ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M2 12h2M20 12h2M18.66 18.66l-1.41-1.41M6.34 5.34L4.93 4.93"/>
      <circle cx="12" cy="12" r="8" strokeDasharray="3 3"/>
    </svg>
  ),
  "Construction & Infrastructure": ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18"/>
      <path d="M5 21V7l7-4 7 4v14"/>
      <path d="M9 21v-6h6v6"/>
    </svg>
  ),
  "Sugar Refining": ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
    </svg>
  ),
  "Paper & Pulp Industry": ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
  "Agriculture & Soil Treatment": ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12"/>
      <path d="M5 12C5 8.13 8.13 5 12 5s7 3.13 7 7-3.13 7-7 7"/>
      <path d="M5 12c0 1.85.63 3.55 1.68 4.9"/>
    </svg>
  ),
};

/* ─── Differentiator Icons ──────────────────────────────────────────────── */
const DiffIcon: Record<number, React.FC> = {
  0: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 11 12 14 22 4"/>
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
    </svg>
  ),
  1: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
    </svg>
  ),
  2: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87"/>
      <path d="M16 3.13a4 4 0 010 7.75"/>
    </svg>
  ),
};

/* ─── Process Step Icons ────────────────────────────────────────────────── */
const ProcessIcons: React.FC[] = [
  () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
      <line x1="12" y1="22" x2="12" y2="15.5"/>
      <polyline points="22 8.5 12 15.5 2 8.5"/>
    </svg>
  ),
  () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c-5 6-5 10 0 14 5-4 5-8 0-14z"/>
      <path d="M12 16v6"/>
      <path d="M8 18h8"/>
    </svg>
  ),
  () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M2 12h2M20 12h2M18.66 18.66l-1.41-1.41M6.34 5.34L4.93 4.93M12 2v2M12 20v2"/>
    </svg>
  ),
  () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13"/>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
];

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const whatsappHref = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919414135630"}?text=${encodeURIComponent("Hello, I'd like to inquire about your lime products.")}`;

  return (
    <div className="w-full">

      {/* ════════════════════════════════════════
          01  HERO
          ════════════════════════════════════════ */}
      <section
        id="home"
        className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-slate-900"
      >
        {/* Quarry background */}
        <Image
          src="/hero-quarry.jpeg"
          alt="Limestone quarry — Bilara, Rajasthan"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          className="opacity-25"
        />

        {/* Gradient overlay — bottom-heavy so stats strip stands out */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />

        {/* Grain texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "url(/grain.svg)", backgroundRepeat: "repeat", backgroundSize: "200px" }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[72rem] mx-auto w-full px-6 pt-32 pb-16">
          {/* Eyebrow */}
          <p className="reveal text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-6">
            Vikas Lime Industries · Jodhpur, Rajasthan
          </p>

          {/* Headline */}
          <h1
            className="reveal reveal-d1 font-serif font-bold text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)", letterSpacing: "-0.02em", maxWidth: "16ch" }}
          >
            Engineering{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4A853 0%, #f5d48a 50%, #D4A853 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Purity.
            </span>
            <br />Delivering Trust.
          </h1>

          {/* Sub-copy */}
          <p
            className="reveal reveal-d2 text-slate-300 mb-10 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", maxWidth: "44ch" }}
          >
            Manufactured at our Bilara facility from owned quarries —
            hydrated lime, quick lime &amp; limestone supplied to steel,
            water treatment, and construction industries across India since 2007.
          </p>

          {/* CTAs */}
          <div className="reveal reveal-d3 flex flex-wrap gap-4">
            <a
              href="/products"
              className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-8 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-200 no-underline text-[0.9375rem]"
            >
              Explore Products
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent text-white font-medium px-8 py-3.5 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200 no-underline text-[0.9375rem]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Tertiary micro-CTA */}
          <p className="reveal reveal-d3 text-[0.8125rem] text-slate-500 mt-5 mb-20">
            or{" "}
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919414135630"}?text=${encodeURIComponent("Hello, I'd like to request a product sample for evaluation.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 underline underline-offset-4 hover:text-white transition-colors duration-150"
            >
              request a free product sample →
            </a>
          </p>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
            <div className="w-px h-12 bg-white/40" style={{ animation: "scrollLine 2s ease-in-out infinite" }} />
            <span className="text-[0.625rem] tracking-[0.2em] uppercase text-white">Scroll</span>
          </div>
        </div>

      </section>

      {/* ════════════════════════════════════════
          02  TRUST BAR (Animated Stats)
          ════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-100 py-10 px-6">
        <div className="max-w-[72rem] mx-auto">
          {/* gap-px + bg-slate-100 renders as separators between cells on all screen sizes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-100">
            {[
              { value: company.foundedYear, suffix: "", label: "Year Established" },
              { value: 20000, suffix: "+", label: "MT Annual Capacity" },
              { value: company.yearsInBusiness, suffix: "+", label: "Years of Experience" },
              { value: 4, suffix: "", label: "Product Lines" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center px-6 py-6 bg-white">
                <div
                  className="font-bold text-slate-900 mb-1 leading-none"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.03em" }}
                >
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={1400} />
                </div>
                <div className="text-[0.75rem] text-slate-400 tracking-wide uppercase font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          03  PRODUCTS
          ════════════════════════════════════════ */}
      <HomeProducts />

      {/* ════════════════════════════════════════
          04  APPLICATIONS
          ════════════════════════════════════════ */}
      <section id="applications" className="bg-slate-900 py-24 px-6">
        <div className="max-w-[72rem] mx-auto">
          <div className="reveal mb-14 max-w-xl">
            <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-slate-500 mb-3">
              Industry Applications
            </p>
            <h2
              className="font-bold text-white mb-4 leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.025em" }}
            >
              Where Our Products Are Used
            </h2>
            <p className="text-slate-400 leading-relaxed" style={{ fontSize: "1.0625rem" }}>
              From water treatment to steel manufacturing — the right lime grade
              for every industrial process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((app, i) => {
              const Icon = AppIcons[app.name];
              return (
                <Link
                  key={app.name}
                  href={app.href}
                  className={`reveal reveal-d${i % 3} group bg-slate-800/60 border border-slate-700/60 rounded-2xl p-8 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 no-underline flex flex-col`}
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-700/60 group-hover:bg-slate-700 flex items-center justify-center mb-5 text-slate-400 group-hover:text-white transition-all duration-300">
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                  <h3 className="text-[1rem] font-semibold text-white leading-tight flex-1">
                    {app.name}
                  </h3>
                  <p className="text-[0.75rem] text-slate-600 group-hover:text-slate-400 mt-3 flex items-center gap-1 transition-colors duration-200">
                    See how we serve this sector
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          05  WHY CHOOSE US
          ════════════════════════════════════════ */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[72rem] mx-auto">
          <div className="reveal text-center mb-16">
            <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-slate-400 mb-3">
              Why Vikas Lime
            </p>
            <h2
              className="font-bold text-slate-900 leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.025em" }}
            >
              The Difference Quality Makes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((d, i) => {
              const Icon = DiffIcon[i];
              return (
                <div
                  key={i}
                  className={`reveal reveal-d${i} group`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 group-hover:bg-slate-900 flex items-center justify-center mb-6 text-slate-600 group-hover:text-white transition-all duration-300">
                    <Icon />
                  </div>
                  <h3 className="text-[1.125rem] font-semibold text-slate-900 mb-3 leading-tight">
                    {d.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-[0.9375rem]">
                    {d.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Conversion bridge — appears after buyer reads the differentiators */}
          <div className="reveal mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50 border border-slate-200 rounded-2xl px-8 py-6">
            <div>
              <p className="font-semibold text-slate-900 text-[1rem] leading-tight mb-1">
                See the quality difference for yourself.
              </p>
              <p className="text-[0.875rem] text-slate-500">
                We supply evaluation samples (up to 5 kg) to new clients — no commitment required.
              </p>
            </div>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919414135630"}?text=${encodeURIComponent("Hello, I'd like to request a product sample for evaluation.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2.5 bg-slate-900 text-white font-semibold text-[0.875rem] px-6 py-3 rounded-full no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(15,23,42,0.2)] transition-all duration-200 whitespace-nowrap"
            >
              Request a Free Sample
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          06  PROCESS
          ════════════════════════════════════════ */}
      <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
        {/* Grain */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "url(/grain.svg)", backgroundRepeat: "repeat", backgroundSize: "200px" }}
        />
        {/* Subtle accent glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[20rem] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(212,168,83,0.06) 0%, transparent 70%)" }}
        />

        <div className="max-w-[72rem] mx-auto relative">
          <div className="reveal text-center mb-16">
            <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-slate-500 mb-3">
              How We Work
            </p>
            <h2
              className="font-bold text-white leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", letterSpacing: "-0.025em" }}
            >
              From Quarry to Delivery
            </h2>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => {
              const Icon = ProcessIcons[i];
              return (
                <div
                  key={step.step}
                  className={`reveal reveal-d${i} relative`}
                >
                  {/* Connector line on desktop */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(100%_-_1px)] w-full h-px bg-gradient-to-r from-slate-600 to-transparent z-0" />
                  )}

                  <div className="relative z-10 bg-slate-800/60 border border-slate-700/50 rounded-2xl p-7 h-full hover:border-slate-600 hover:bg-slate-800 transition-all duration-300 group">
                    {/* Step number */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-[0.625rem] font-bold tracking-[0.15em] text-slate-500 uppercase">
                        {step.step}
                      </span>
                      <div className="h-px flex-1 bg-slate-700" />
                    </div>

                    {/* Icon */}
                    <div className="text-slate-400 group-hover:text-[#D4A853] transition-colors duration-300 mb-5">
                      <Icon />
                    </div>

                    {/* Title */}
                    <h3 className="text-[1rem] font-semibold text-white mb-2">{step.title}</h3>

                    {/* Description */}
                    <p className="text-[0.875rem] text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          07  TRUST / CERTIFICATIONS STRIP
          ════════════════════════════════════════ */}
      <section className="bg-slate-50 border-y border-slate-200 py-12 px-6 overflow-hidden">
        <div className="max-w-[72rem] mx-auto">
          <p className="text-center text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-8">
            Quality &amp; Compliance
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {trustBadges.map((badge, i) => (
              <div
                key={i}
                className="reveal bg-white border border-slate-200 rounded-xl p-5 text-center hover:border-slate-300 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center mx-auto mb-3">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <polyline points="20 6 9 17 4 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[0.8125rem] font-semibold text-slate-900 leading-tight mb-1">
                  {badge.label}
                </p>
                <p className="text-[0.6875rem] text-slate-400 leading-tight">{badge.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          08  FAQ
          ════════════════════════════════════════ */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[72rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
            {/* Left — header */}
            <div className="lg:sticky lg:top-24">
              <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-slate-400 mb-4">
                FAQ
              </p>
              <h2
                className="font-bold text-slate-900 leading-tight mb-5"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)", letterSpacing: "-0.025em" }}
              >
                Common Questions
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8" style={{ fontSize: "1rem" }}>
                Quick answers to what our buyers typically ask before placing
                an order. Need something more specific?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-slate-700 border border-slate-300 px-5 py-2.5 rounded-full no-underline hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200"
              >
                Ask us directly
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
            </div>

            {/* Right — accordion */}
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          09  CTA
          ════════════════════════════════════════ */}
      <section className="relative bg-slate-900 py-28 px-6 text-center overflow-hidden">
        {/* Quarry bg subtle */}
        <Image
          src="/hero-quarry.jpeg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 60%" }}
          className="opacity-10"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/95" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "url(/grain.svg)", backgroundRepeat: "repeat", backgroundSize: "200px" }}
        />

        <div className="reveal relative z-10 max-w-[44rem] mx-auto">
          <p className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-slate-500 mb-5">
            Start a Conversation
          </p>
          <h2
            className="font-serif font-bold text-white mb-5 leading-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", letterSpacing: "-0.025em" }}
          >
            Get pricing in one WhatsApp message.
          </h2>
          <p className="text-slate-400 leading-relaxed mb-10" style={{ fontSize: "1.0625rem" }}>
            Tell us what you need — grade, volume, and delivery state. We&apos;ll send you
            a price and dispatch timeline within the same business day.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-3.5 rounded-full no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,211,102,0.3)] transition-all duration-200 text-[0.9375rem]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp for Pricing
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-8 py-3.5 rounded-full no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-200 text-[0.9375rem]"
            >
              Send a Formal Enquiry
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </a>
          </div>

          {/* Micro-trust signals */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10">
            {[
              "Free product sample available",
              "No commitment to enquire",
              "Reply within 2 hrs on WhatsApp",
            ].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-[0.75rem] text-slate-600">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
