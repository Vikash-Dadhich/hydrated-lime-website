"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import products from "../data/products";

/* ── Palette ── */
const c = {
  bg: "#ffffff",
  text: "#0f172a",
  textMuted: "#475569",
  textLight: "#64748b",
  textFaint: "#94a3b8",
  border: "#e2e8f0",
};

/**
 * Home page products grid — 4 products with magnetic 3D hover.
 */
export default function HomeProducts() {
  const [hovered, setHovered] = useState<number | null>(null);
  const router = useRouter();
  const total = products.length;

  return (
    <section
      id="products"
      style={{ background: c.bg, padding: "5rem 1.5rem" }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "1rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: c.text,
              letterSpacing: "-0.025em",
              margin: "0 0 0.25rem",
              lineHeight: 1.15,
            }}
          >
            Our Product Range
          </h2>
          <div
            style={{
              width: 40,
              height: 3,
              background: "linear-gradient(90deg, #0f172a, #64748b)",
              borderRadius: 2,
              margin: "0.75rem 0 1.5rem",
            }}
          />
          <p
            style={{
              fontSize: "1rem",
              color: c.textMuted,
              lineHeight: 1.6,
              maxWidth: "52rem",
              margin: 0,
            }}
          >
            Every batch is manufactured to exacting standards — because the industries
            we serve demand nothing less than consistent purity, precise grading,
            and reliable supply.
          </p>
        </div>

        {/* Product grid */}
        <div style={{ position: "relative", marginTop: "2.5rem" }}>
          <div
            className="hp-track"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${total}, 1fr)`,
              gap: "1.25rem",
            }}
          >
            {products.map((product, i) => (
              <MagneticCard
                key={product.id}
                isHovered={i === hovered}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => router.push(`/products#${product.id}`)}
              >
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 767px) 75vw, 25vw"
                  style={{
                    objectFit: "cover",
                    transition: "filter 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
                    filter: i === hovered ? "brightness(0.5)" : "brightness(0.92)",
                    transform: i === hovered ? "scale(1.05)" : "scale(1)",
                  }}
                />

                {/* Overlay with number + name */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                    padding: "1.5rem",
                    opacity: i === hovered ? 1 : 0,
                    transition: "opacity 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                    pointerEvents: "none",
                    background: "linear-gradient(180deg, transparent 30%, rgba(15,23,42,0.7) 100%)",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3
                    style={{
                      fontSize: "clamp(0.875rem, 1.5vw, 1.0625rem)",
                      fontWeight: 700,
                      color: "#ffffff",
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.06em",
                      lineHeight: 1.3,
                      margin: 0,
                    }}
                  >
                    {product.name}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.65)",
                      marginTop: "0.25rem",
                    }}
                  >
                    View details →
                  </span>
                </div>
              </MagneticCard>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: horizontal scroll */}
      <style>{`
        @media (max-width: 767px) {
          .hp-track {
            grid-template-columns: repeat(${total}, 75vw) !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .hp-track::-webkit-scrollbar { display: none; }
          .hp-track > * { scroll-snap-align: start; }
        }
      `}</style>
    </section>
  );
}

/** Magnetic tilt card — tilts toward cursor on hover */
function MagneticCard({
  children,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  children: React.ReactNode;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -6, y: dx * 6 });
  }, []);

  const handleLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    onMouseLeave();
  }, [onMouseLeave]);

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        all: "unset",
        cursor: "pointer",
        position: "relative",
        borderRadius: "1rem",
        overflow: "hidden",
        aspectRatio: "3 / 4",
        background: "#f1f5f9",
        border: `1px solid ${isHovered ? "rgba(148,163,184,0.4)" : c.border}`,
        display: "block",
        transition: "border-color 400ms ease, box-shadow 500ms ease",
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        boxShadow: isHovered
          ? "0 20px 60px rgba(15,23,42,0.15), 0 0 0 1px rgba(148,163,184,0.1)"
          : "0 4px 12px rgba(15,23,42,0.04)",
        willChange: "transform",
      }}
    >
      {children}
    </button>
  );
}


