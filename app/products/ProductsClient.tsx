"use client";

import products from "../data/products";
import ProductShowcaseSection from "../components/ProductShowcaseSection";

/* ── Palette ── */
const c = {
  dark: "#0f172a",
  darkAlt: "#1e293b",
  white: "#ffffff",
  textFaint: "#94a3b8",
  border: "rgba(255,255,255,0.08)",
};

export default function ProductsClient() {
  return (
    <div style={{ width: "100%", background: c.dark }}>
      {/* ══════ Hero ══════ */}
      <div
        style={{
          background: `linear-gradient(180deg, ${c.dark} 0%, ${c.darkAlt} 100%)`,
          color: c.white,
          padding: "5rem 1.5rem 4rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              color: c.textFaint,
              margin: "0 0 1.25rem",
            }}
          >
            Our Products
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              margin: "0 0 1rem",
            }}
          >
            Four products.
            <br />
            Built for industry.
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: c.textFaint,
              lineHeight: 1.7,
              margin: 0,
              maxWidth: "36rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            From high-reactivity quick lime to graded limestone — every product
            is manufactured for consistency, purity, and reliable performance.
          </p>

          {/* Product index strip */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.375rem",
              marginTop: "2.5rem",
            }}
          >
            {products.map((p, i) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: c.textFaint,
                  textDecoration: "none",
                  padding: "0.4rem 0.875rem",
                  borderRadius: 9999,
                  border: `1px solid ${c.border}`,
                  transition: "border-color 200ms ease, color 200ms ease",
                  whiteSpace: "nowrap",
                }}
              >
                {String(i + 1).padStart(2, "0")} {p.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ══════ Product sections ══════ */}
      {products.map((product, i) => (
        <div key={product.id} id={product.id} style={{ scrollMarginTop: "2rem" }}>
          <ProductShowcaseSection product={product} index={i} variant="full" />
        </div>
      ))}

      {/* ══════ CTA ══════ */}
      <div
        style={{
          background: c.darkAlt,
          padding: "5rem 1.5rem",
          textAlign: "center",
          color: c.white,
          borderTop: `1px solid ${c.border}`,
        }}
      >
        <div style={{ maxWidth: "40rem", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              margin: "0 0 1rem",
            }}
          >
            Need a specific grade or bulk supply?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: c.textFaint,
              lineHeight: 1.6,
              margin: "0 0 2rem",
            }}
          >
            Our team can guide you to the right product for your process.
            Reach out for pricing, technical specs, or sample requests.
          </p>
          <a
            href="/contact"
            style={{
              display: "inline-block",
              background: c.white,
              color: c.dark,
              fontWeight: 600,
              fontSize: "0.9375rem",
              padding: "0.75rem 2rem",
              borderRadius: "0.625rem",
              textDecoration: "none",
            }}
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </div>
  );
}
