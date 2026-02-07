"use client";

import { useEffect, useRef, useState } from "react";

const milestones = [
  {
    year: "2007",
    title: "Founded",
    description:
      "Established as a small manufacturing unit with a focus on quality and consistency.",
  },
  {
    year: "2012",
    title: "Growth Phase",
    description:
      "Expanded operations and built long-term relationships with large industrial clients.",
  },
  {
    year: "2020",
    title: "Present Day",
    description:
      "Operating with an annual production capacity of 20,000 tons, supplying industries across India.",
  },
  {
    year: "2026",
    title: "Looking Ahead",
    description:
      "Focused on capacity expansion, pan-India leadership, export markets, and process modernization.",
  },
];

export default function Timeline() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(false);
            requestAnimationFrame(() =>
              requestAnimationFrame(() => setVisible(true))
            );
          } else {
            setVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    obs.observe(el);

    const restart = () => {
      setVisible(false);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setVisible(true))
      );
    };

    const onShow = (e: Event) => {
      try {
        const detail = (e as CustomEvent).detail;
        if (detail?.id === "about") restart();
      } catch {}
    };
    const onHash = () => {
      if (location.hash === "#about") restart();
    };
    const onPop = () => {
      if (
        location.hash === "#about" ||
        location.pathname.endsWith("/about")
      )
        restart();
    };

    window.addEventListener("section:show", onShow as EventListener);
    window.addEventListener("hashchange", onHash as EventListener);
    window.addEventListener("popstate", onPop as EventListener);

    return () => {
      obs.disconnect();
      window.removeEventListener("section:show", onShow as EventListener);
      window.removeEventListener("hashchange", onHash as EventListener);
      window.removeEventListener("popstate", onPop as EventListener);
    };
  }, []);

  return (
    <section ref={ref} style={{ background: "#ffffff", width: "100%" }}>
      <div style={{ width: "100%", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div
            style={{
              background: "#f8fafc",
              borderRadius: "1.25rem",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 12px rgba(15, 23, 42, 0.04)",
              overflow: "hidden",
            }}
            className="tl-container"
          >
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <div
                style={{
                  fontSize: "0.875rem",
                  color: "#475569",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  fontWeight: 600,
                  marginBottom: "1rem",
                }}
              >
                LEGACY TO GROWTH
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#64748b",
                  maxWidth: "42ch",
                  margin: "0.75rem auto 0",
                  lineHeight: 1.6,
                }}
              >
                A journey shaped by trust, scale, and continuous improvement.
              </p>
              <a href="/about/company-profile#journey" className="cp-link" style={{ marginTop: "1rem", display: "inline-block" }}>Read the full story →</a>
            </div>

            {/* Timeline */}
            <div className="tl-track">
              {milestones.map((m, i) => {
                const side = i % 2 === 0 ? "left" : "right";
                return (
                  <div
                    key={i}
                    className={`tl-row ${visible ? "tl-show" : ""}`}
                    style={{ transitionDelay: visible ? `${i * 150}ms` : "0ms" }}
                  >
                    {/* Left card (desktop even indices only) */}
                    <div className="tl-cell tl-cell-left">
                      {side === "left" && (
                        <div className="tl-card">
                          <span className="tl-year">{m.year}</span>
                          <h4 className="tl-title">{m.title}</h4>
                          <p className="tl-desc">{m.description}</p>
                        </div>
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="tl-center">
                      <div className="tl-dot" />
                    </div>

                    {/* Right card (desktop odd indices + ALL on mobile) */}
                    <div className="tl-cell tl-cell-right">
                      {side === "right" ? (
                        <div className="tl-card">
                          <span className="tl-year">{m.year}</span>
                          <h4 className="tl-title">{m.title}</h4>
                          <p className="tl-desc">{m.description}</p>
                        </div>
                      ) : (
                        <div className="tl-card tl-card-mobile-only">
                          <span className="tl-year">{m.year}</span>
                          <h4 className="tl-title">{m.title}</h4>
                          <p className="tl-desc">{m.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
