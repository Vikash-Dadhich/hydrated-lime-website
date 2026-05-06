"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const fade = (delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(1.5rem)",
    transition: `opacity 900ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 900ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  return (
    <section
      ref={ref}
      className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-slate-900"
    >
      {/* Kiln background */}
      <Image
        src="/about-kiln.jpeg"
        alt="Rotary lime kiln — Vikas Lime Industries manufacturing facility"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center 35%" }}
        className="opacity-20"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900" />

      {/* Side glow from kiln orange */}
      <div
        className="absolute right-0 top-1/3 w-[40rem] h-[40rem] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at right, rgba(212,168,83,0.06) 0%, transparent 70%)" }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "url(/grain.svg)", backgroundRepeat: "repeat", backgroundSize: "200px" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[72rem] mx-auto w-full px-6 pt-36 pb-24">
        {/* Eyebrow */}
        <div style={fade(0)}>
          <p className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-slate-500 mb-6">
            About Vikas Lime Industries
          </p>
        </div>

        {/* Headline */}
        <h1
          className="font-serif font-bold text-white leading-[1.05] mb-8"
          style={{
            ...fade(120),
            fontSize: "clamp(2.75rem, 7vw, 5rem)",
            letterSpacing: "-0.02em",
            maxWidth: "14ch",
          }}
        >
          Built on Quality.
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #D4A853 0%, #f5d48a 50%, #D4A853 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Trusted
          </span>{" "}
          Across India.
        </h1>

        {/* Rule */}
        <div
          className="bg-slate-700 mb-8"
          style={{ ...fade(220), height: 1, width: "3rem" }}
        />

        {/* Sub-copy */}
        <p
          className="text-slate-300 leading-relaxed mb-10"
          style={{
            ...fade(300),
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            maxWidth: "42ch",
          }}
        >
          Manufacturer and supplier of premium hydrated lime, quick lime, and
          limestone — serving India&apos;s most demanding industrial operations
          since 2007 from our facility in Jodhpur, Rajasthan.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4" style={fade(400)}>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-7 py-3 rounded-full no-underline text-[0.9375rem] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-200"
          >
            Our Products
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Link>
          <Link
            href="/about/company-profile"
            className="inline-flex items-center gap-2 text-white font-medium px-7 py-3 rounded-full border border-white/20 no-underline text-[0.9375rem] hover:border-white/40 hover:bg-white/5 transition-all duration-200"
          >
            Company Profile
          </Link>
        </div>

        {/* Founding year stamp */}
        <div
          className="absolute bottom-10 right-6 md:right-12 flex flex-col items-end"
          style={fade(600)}
        >
          <span className="text-[0.625rem] tracking-[0.2em] uppercase text-slate-600 mb-1">Est.</span>
          <span
            className="font-bold text-slate-800"
            style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", letterSpacing: "-0.04em", lineHeight: 1 }}
          >
            2007
          </span>
        </div>
      </div>
    </section>
  );
}
