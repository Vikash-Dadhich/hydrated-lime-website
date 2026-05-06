"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Product } from "../data/products";
import { contacts } from "../data/site";

const WHATSAPP_NUM = contacts[0].mobileTel.replace("+", "");

function waLink(productName: string) {
  const msg = encodeURIComponent(
    `Hello, I am interested in ${productName}. Please share pricing and availability.`
  );
  return `https://wa.me/${WHATSAPP_NUM}?text=${msg}`;
}

export default function ProductShowcaseSection({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const isEven = index % 2 === 0;
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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const slideIn = (from: "left" | "right", delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : `translateX(${from === "left" ? "-2rem" : "2rem"})`,
    transition: `opacity 800ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 800ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  const fade = (delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(1rem)",
    transition: `opacity 700ms ease ${delay}ms, transform 700ms ease ${delay}ms`,
  });

  const imgSide = isEven ? "left" : "right";
  const txtSide = isEven ? "right" : "left";
  const bg = isEven ? "#ffffff" : "#f8fafc";

  return (
    <section
      ref={ref}
      className="py-24 px-6 overflow-hidden"
      style={{ background: bg, scrollMarginTop: "4rem" }}
    >
      <div className="max-w-[72rem] mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            !isEven ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
          }`}
        >
          {/* ── Image block ── */}
          <div style={slideIn(imgSide, 0)}>
            <div
              className="relative rounded-3xl overflow-hidden bg-slate-100 group"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                style={{
                  objectFit: "cover",
                  filter: "brightness(0.92) contrast(1.06) saturate(0.95)",
                  transition: "transform 600ms cubic-bezier(0.16,1,0.3,1)",
                }}
                className="group-hover:scale-[1.03]"
              />

              {/* Bottom gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.55) 100%)",
                }}
              />

              {/* Formula pill */}
              <div
                className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}
              >
                <span className="text-[0.6875rem] font-bold tracking-[0.06em] uppercase text-slate-400 mr-1">
                  Formula
                </span>
                <span className="text-[0.875rem] font-semibold text-slate-800 font-mono">
                  {product.formula}
                </span>
              </div>

              {/* Index number */}
              <div className="absolute bottom-4 right-4 text-white font-bold leading-none"
                style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", letterSpacing: "-0.06em", opacity: 0.25 }}>
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* ── Text block ── */}
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div style={fade(100)}>
              <span className="text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-slate-400 mb-3 block">
                Product {String(index + 1).padStart(2, "0")}
              </span>
              <h2
                className="font-bold text-slate-900 leading-[1.1] mb-3"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  letterSpacing: "-0.025em",
                }}
              >
                {product.name}
              </h2>
              <p
                className="text-slate-500 leading-relaxed"
                style={{ fontSize: "1.0625rem", maxWidth: "40ch" }}
              >
                {product.tagline}
              </p>
            </div>

            {/* Description */}
            <p
              className="text-slate-500 leading-[1.85]"
              style={{ ...fade(180), fontSize: "0.9375rem", maxWidth: "52ch" }}
            >
              {product.description}
            </p>

            {/* Spec table */}
            <div
              className="rounded-2xl border border-slate-200 overflow-hidden"
              style={fade(260)}
            >
              <div className="px-5 py-3 bg-slate-50 border-b border-slate-200">
                <p className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-slate-400">
                  Technical Specifications
                </p>
              </div>
              <div className="divide-y divide-slate-100">
                {product.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-5 py-3 hover:bg-slate-50 transition-colors duration-150"
                  >
                    <span className="text-[0.8125rem] text-slate-500 font-medium">
                      {spec.label}
                    </span>
                    <span className="text-[0.8125rem] text-slate-800 font-semibold text-right ml-4">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry chips */}
            <div style={fade(340)}>
              <p className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-slate-400 mb-3">
                Industries Served
              </p>
              <div className="flex flex-wrap gap-2">
                {product.industries.map((ind) => (
                  <span
                    key={ind}
                    className="text-[0.75rem] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors duration-150"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 pt-2" style={fade(420)}>
              <a
                href={waLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-semibold text-[0.875rem] px-5 py-3 rounded-full no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all duration-200"
              >
                {/* WhatsApp icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Request via WhatsApp
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-slate-700 font-semibold text-[0.875rem] px-5 py-3 rounded-full border border-slate-300 no-underline hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-200"
              >
                Send Enquiry
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
