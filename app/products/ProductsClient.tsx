"use client";

import { useEffect, useRef, useState } from "react";
import products from "../data/products";
import { contacts } from "../data/site";
import ProductShowcaseSection from "../components/ProductShowcaseSection";

const WHATSAPP_NUM = contacts[0].mobileTel.replace("+", "");

function ProductsHero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const fade = (delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(1.25rem)",
    transition: `opacity 800ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 800ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  return (
    <div
      ref={ref}
      className="relative overflow-hidden text-white text-center py-28 px-6 bg-slate-900"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[20rem] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(212,168,83,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[56rem] mx-auto">
        <div style={fade(0)}>
          <p className="text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-slate-500 mb-5">
            Our Products
          </p>
        </div>

        <h1
          className="font-serif font-bold text-white leading-[1.1] mb-5"
          style={{
            ...fade(100),
            fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)",
            letterSpacing: "-0.025em",
          }}
        >
          Four products.{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #D4A853 0%, #f5d48a 50%, #D4A853 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Built
          </span>{" "}
          for industry.
        </h1>

        <p
          className="text-slate-400 leading-[1.75] mx-auto mb-10"
          style={{
            ...fade(200),
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            maxWidth: "42ch",
          }}
        >
          From high-reactivity quick lime to graded limestone — every product
          is manufactured for consistency, purity, and reliable performance.
        </p>

        {/* Product quick-nav */}
        <div
          className="flex flex-wrap justify-center gap-2"
          style={fade(300)}
        >
          {products.map((p, i) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="group inline-flex items-center gap-2.5 text-[0.8125rem] font-medium text-slate-400 px-4 py-2 rounded-full border border-white/[0.08] no-underline hover:border-white/25 hover:text-white hover:bg-white/[0.05] transition-all duration-200"
            >
              <span className="text-[0.625rem] font-bold text-slate-600 group-hover:text-slate-400 transition-colors duration-200">
                {String(i + 1).padStart(2, "0")}
              </span>
              {p.name}
              <span className="text-[0.625rem] text-slate-600 font-mono group-hover:text-slate-400 transition-colors duration-200">
                {p.formula}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductsCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const fade = (delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(1.25rem)",
    transition: `opacity 700ms ease ${delay}ms, transform 700ms ease ${delay}ms`,
  });

  return (
    <div
      ref={ref}
      className="relative bg-slate-900 py-24 px-6 text-center text-white overflow-hidden"
    >
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "url(/grain.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[16rem] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(212,168,83,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[44rem] mx-auto">
        <p
          className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-slate-500 mb-4"
          style={fade(0)}
        >
          Get in Touch
        </p>
        <h2
          className="font-serif font-bold text-white leading-[1.1] mb-5"
          style={{
            ...fade(100),
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            letterSpacing: "-0.025em",
          }}
        >
          Need a specific grade or bulk supply?
        </h2>
        <p
          className="text-slate-400 leading-relaxed mb-10"
          style={{ ...fade(200), fontSize: "1.0625rem", maxWidth: "42ch", margin: "0 auto 2.5rem" }}
        >
          Our team can guide you to the right product for your process.
          Reach out for pricing, technical specs, or sample requests.
        </p>
        <div
          className="flex flex-wrap justify-center gap-4"
          style={fade(300)}
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent("Hello, I'd like to enquire about your lime products and pricing.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-semibold text-[0.9375rem] px-7 py-3.5 rounded-full no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(37,211,102,0.35)] transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold text-[0.9375rem] px-7 py-3.5 rounded-full no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,255,255,0.15)] transition-all duration-200"
          >
            Send Enquiry
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProductsClient() {
  return (
    <div className="w-full">
      <ProductsHero />

      {/* Alternating white / slate-50 product sections */}
      {products.map((product, i) => (
        <div key={product.id} id={product.id} style={{ scrollMarginTop: "5rem" }}>
          <ProductShowcaseSection product={product} index={i} />
        </div>
      ))}

      {/* CTA */}
      <ProductsCTA />
    </div>
  );
}
