"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Product } from "../data/products";

/* ── Palette ── */
const c = {
  dark: "#0f172a",
  darkAlt: "#1e293b",
  white: "#ffffff",
  textFaint: "#94a3b8",
  textLight: "#64748b",
  border: "rgba(255,255,255,0.08)",
};

/**
 * Reusable section — renders ONE product with alternating layout.
 * Used on both the homepage (simplified) and the Products page (detailed).
 */
export default function ProductShowcaseSection({
  product,
  index,
  variant = "full",
}: {
  product: Product;
  index: number;
  variant?: "home" | "full";
}) {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const fade = (delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(2rem)",
    transition: `opacity 900ms ease ${delay}ms, transform 900ms ease ${delay}ms`,
  });

  return (
    <section
      ref={ref}
      style={{
        background: isEven
          ? `linear-gradient(180deg, ${c.dark} 0%, ${c.darkAlt} 100%)`
          : c.dark,
        color: c.white,
        padding: variant === "home" ? "6rem 1.5rem" : "7rem 1.5rem",
        minHeight: variant === "home" ? "80vh" : "auto",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto", width: "100%" }}>
        <div
          className="ps-row"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* ── Image ── */}
          <div
            style={{
              ...fade(0),
              order: 1,
            }}
            className={isEven ? "ps-img-left" : "ps-img-right"}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "1rem",
                overflow: "hidden",
                aspectRatio: "16 / 10",
                background: c.darkAlt,
              }}
            >
              {/* Google-sourced image — see products.ts imageCredit */}
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                style={{
                  objectFit: "cover",
                  filter: "brightness(0.85) contrast(1.05)",
                }}
              />
              {/* Subtle overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.6) 100%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

          {/* ── Text ── */}
          <div
            style={{
              order: 2,
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
            className={isEven ? "ps-txt-right" : "ps-txt-left"}
          >
            {/* Product number */}
            <span
              style={{
                ...fade(100),
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: c.textFaint,
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Name */}
            <h2
              style={{
                ...fade(200),
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
                margin: 0,
              }}
            >
              {product.name}
            </h2>

            {/* Tagline */}
            <p
              style={{
                ...fade(300),
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                color: c.textFaint,
                margin: 0,
                maxWidth: "36rem",
              }}
            >
              {product.tagline}
            </p>

            {variant === "full" && (
              <>
                {/* Description */}
                <p
                  style={{
                    ...fade(400),
                    fontSize: "0.9375rem",
                    lineHeight: 1.8,
                    color: c.textLight,
                    margin: 0,
                    maxWidth: "38rem",
                  }}
                >
                  {product.description}
                </p>

                {/* Key points */}
                <ul
                  style={{
                    ...fade(500),
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.625rem",
                  }}
                >
                  {product.points.map((pt) => (
                    <li
                      key={pt}
                      style={{
                        fontSize: "0.875rem",
                        color: c.textFaint,
                        lineHeight: 1.5,
                        display: "flex",
                        alignItems: "baseline",
                        gap: "0.75rem",
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: c.textFaint,
                          flexShrink: 0,
                          marginTop: "0.35rem",
                        }}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {variant === "home" && (
              <a
                href="/products"
                style={{
                  ...fade(400),
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: c.textFaint,
                  textDecoration: "none",
                  borderBottom: `1px solid ${c.border}`,
                  paddingBottom: 2,
                  width: "fit-content",
                  transition: "color 200ms ease",
                }}
              >
                View details →
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Responsive: alternating layout on desktop */}
      <style>{`
        @media (min-width: 768px) {
          .ps-row {
            grid-template-columns: 1fr 1fr !important;
            gap: 4rem !important;
          }
          .ps-img-left { order: 1 !important; }
          .ps-txt-right { order: 2 !important; }
          .ps-img-right { order: 2 !important; }
          .ps-txt-left { order: 1 !important; }
        }
      `}</style>
    </section>
  );
}
