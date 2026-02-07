"use client";

import { useEffect } from "react";
import HomeProducts from "./components/HomeProducts";

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  /* ── Shared palette ── */
  const c = {
    heroBg: "#0f172a",
    white: "#ffffff",
    bg: "#ffffff",
    bgMuted: "#f8fafc",
    text: "#0f172a",
    textMuted: "#475569",
    textLight: "#64748b",
    textFaint: "#94a3b8",
    border: "#e2e8f0",
  };

  const applications = [
    { name: "Water & Effluent Treatment", icon: "💧" },
    { name: "Steel & Metallurgy", icon: "⚙️" },
    { name: "Construction & Infrastructure", icon: "🏗️" },
    { name: "Sugar Refining", icon: "🧪" },
    { name: "Paper & Pulp Industry", icon: "📄" },
    { name: "Agriculture & Soil Treatment", icon: "🌱" },
  ];

  return (
    <div style={{ width: "100%", background: c.heroBg }}>
      {/* ══════ Hero ══════ */}
      <section
        id="home"
        style={{
          background: c.heroBg,
          color: c.white,
          padding: "5rem 1.5rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient mesh orbs */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            width: "45rem",
            height: "45rem",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-30%",
            right: "-15%",
            width: "40rem",
            height: "40rem",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* Grain overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/grain.svg)",
            backgroundRepeat: "repeat",
            backgroundSize: "200px",
            opacity: 0.03,
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "60rem", margin: "0 auto", width: "100%", textAlign: "center", position: "relative" }}>
          <p
            className="reveal"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              color: c.textFaint,
              marginBottom: "1rem",
            }}
          >
            Trusted Since 2007
          </p>
          <h1
            className="reveal reveal-d1"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              margin: "0 0 1rem",
            }}
          >
            Engineering{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #e2e8f0, #94a3b8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Purity
            </span>
            .
            <br />
            Delivering Trust.
          </h1>
          <p
            className="reveal reveal-d2"
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: c.textFaint,
              maxWidth: "38rem",
              margin: "0 auto 2rem",
            }}
          >
            Premium hydrated lime, quick lime & limestone for India&apos;s
            leading industries — consistent quality, reliable supply.
          </p>

          <div className="reveal reveal-d3" style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="/products"
              className="btn-glow"
              style={{
                display: "inline-block",
                background: c.white,
                color: c.text,
                fontWeight: 600,
                fontSize: "0.9375rem",
                padding: "0.8rem 2rem",
                borderRadius: "0.625rem",
                textDecoration: "none",
                transition: "transform 200ms ease, box-shadow 200ms ease",
              }}
            >
              Our Products
            </a>
            <a
              href="/contact"
              className="btn-ghost"
              style={{
                display: "inline-block",
                background: "transparent",
                color: c.white,
                fontWeight: 500,
                fontSize: "0.9375rem",
                padding: "0.8rem 2rem",
                borderRadius: "0.625rem",
                border: "1px solid rgba(255,255,255,0.15)",
                textDecoration: "none",
                transition: "border-color 200ms ease, background 200ms ease",
              }}
            >
              Contact Us
            </a>
          </div>

          {/* Stats strip */}
          <div
            className="home-stats-grid reveal reveal-d4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.5rem",
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              textAlign: "center",
            }}
          >
            {[
              { value: "2007", label: "Established" },
              { value: "20,000+", label: "MT Annual Capacity" },
              { value: "Pan-India", label: "Supply Network" },
              { value: "4", label: "Product Lines" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontSize: "1.375rem",
                    fontWeight: 700,
                    color: c.white,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: "0.75rem", color: c.textFaint, marginTop: "0.25rem" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ Products ══════ */}
      <HomeProducts />

      {/* ══════ Applications ══════ */}
      <section
        id="applications"
        style={{
          background: c.bgMuted,
          padding: "5rem 1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: c.textLight,
                marginBottom: "0.75rem",
              }}
            >
              Industry Applications
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 700,
                color: c.text,
                letterSpacing: "-0.02em",
                margin: "0 0 0.5rem",
              }}
            >
              Where Our Products Are Used
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: c.textMuted,
                maxWidth: "36rem",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              From water treatment to steel manufacturing — the right grade
              for every application.
            </p>
          </div>

          <div
            className="home-apps-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
            }}
          >
            {applications.map((a, i) => (
              <div
                key={a.name}
                className={`reveal reveal-d${i % 3}`}
                style={{
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  borderRadius: "1rem",
                  padding: "1.75rem 1.5rem",
                  textAlign: "center",
                  transition: "transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease",
                }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{a.icon}</div>
                <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: c.text }}>{a.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section
        style={{
          background: c.heroBg,
          padding: "5rem 1.5rem",
          textAlign: "center",
          color: c.white,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grain */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/grain.svg)",
            backgroundRepeat: "repeat",
            backgroundSize: "200px",
            opacity: 0.03,
            pointerEvents: "none",
          }}
        />
        {/* Gradient orb */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "30rem",
            height: "30rem",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="reveal" style={{ maxWidth: "40rem", margin: "0 auto", position: "relative" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              margin: "0 0 1rem",
            }}
          >
            Ready to discuss your requirements?
          </h2>
          <p style={{ fontSize: "1rem", color: c.textFaint, lineHeight: 1.6, margin: "0 0 2rem" }}>
            Get in touch with our team for pricing, specifications, or bulk
            supply enquiries.
          </p>
          <a
            href="/contact"
            className="btn-glow"
            style={{
              display: "inline-block",
              background: c.white,
              color: c.text,
              fontWeight: 600,
              fontSize: "0.9375rem",
              padding: "0.75rem 2rem",
              borderRadius: "0.625rem",
              textDecoration: "none",
              transition: "transform 200ms ease, box-shadow 200ms ease",
            }}
          >
            Get in Touch →
          </a>
        </div>
      </section>

      {/* ══════ Animations & responsive ══════ */}
      <style>{`
        /* Scroll-reveal */
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 800ms cubic-bezier(0.16, 1, 0.3, 1),
                      transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-d1 { transition-delay: 100ms; }
        .reveal-d2 { transition-delay: 200ms; }
        .reveal-d3 { transition-delay: 300ms; }
        .reveal-d4 { transition-delay: 400ms; }

        /* Button glow */
        .btn-glow:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 30px rgba(255,255,255,0.15) !important;
        }
        .btn-ghost:hover {
          border-color: rgba(255,255,255,0.35) !important;
          background: rgba(255,255,255,0.05) !important;
        }

        /* Application cards hover */
        .home-apps-grid > div:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(15,23,42,0.08);
          border-color: #cbd5e1 !important;
        }

        @media (max-width: 768px) {
          .home-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .home-apps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .home-apps-grid { grid-template-columns: 1fr !important; }
          .home-stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1rem !important; }
        }
      `}</style>

    </div>
  );
}
