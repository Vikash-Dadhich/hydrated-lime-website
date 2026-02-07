"use client";

import { useEffect, useRef, useState } from "react";

const points = [
  "Expanding manufacturing capacity to meet growing demand.",
  "Becoming a preferred pan-India supplier across core industries.",
  "Entering export markets with consistent, certified quality.",
  "Investing in technology and process modernization.",
  "Strengthening our commitment to sustainable and responsible manufacturing.",
];

export default function Vision() {
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
      { threshold: 0.15 }
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
          {/* Outer card */}
          <div
            style={{
              background: "#f8fafc",
              borderRadius: "1.25rem",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 12px rgba(15, 23, 42, 0.04)",
              padding: "4rem 2.5rem",
              maxWidth: "48rem",
              margin: "0 auto",
            }}
          >
            {/* Label */}
            <div
              className={`vision-fade ${visible ? "vision-show" : ""}`}
              style={{
                textAlign: "center",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.8125rem",
                  color: "#475569",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  fontWeight: 600,
                }}
              >
                Our Vision
              </span>
            </div>

            {/* Headline */}
            <h2
              className={`vision-fade ${visible ? "vision-show" : ""}`}
              style={{
                textAlign: "center",
                fontSize: "1.75rem",
                fontWeight: 600,
                color: "#0f172a",
                lineHeight: 1.3,
                margin: "0 auto 2.5rem",
                maxWidth: "32ch",
                transitionDelay: "100ms",
              }}
            >
              Shaping the Future of Industrial Supply
            </h2>

            {/* Divider */}
            <div
              className={`vision-fade ${visible ? "vision-show" : ""}`}
              style={{
                width: "3rem",
                height: "2px",
                background: "#cbd5e1",
                margin: "0 auto 2.5rem",
                transitionDelay: "180ms",
              }}
            />

            {/* Points */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                maxWidth: "36rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {points.map((point, i) => (
                <li
                  key={i}
                  className={`vision-fade ${visible ? "vision-show" : ""}`}
                  style={{
                    fontSize: "0.9375rem",
                    color: "#64748b",
                    lineHeight: 1.75,
                    textAlign: "center",
                    padding: "0.375rem 0",
                    transitionDelay: `${250 + i * 80}ms`,
                  }}
                >
                  {point}
                </li>
              ))}
            </ul>

            <div
              className={`vision-fade ${visible ? "vision-show" : ""}`}
              style={{ textAlign: "center", marginTop: "2rem", transitionDelay: "650ms" }}
            >
              <a href="/about/company-profile#vision" className="cp-link">Read our full vision →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
