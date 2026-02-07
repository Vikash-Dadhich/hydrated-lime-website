"use client";

import { useEffect, useRef, useState } from "react";

export default function WhoWeAre() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(false);
            requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
          } else {
            setVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    obs.observe(el);

    const restart = () => {
      setVisible(false);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
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
      if (location.hash === "#about" || location.pathname.endsWith("/about")) restart();
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
    <section ref={ref} style={{ width: "100%", background: "#ffffff" }}>
      <div className="container" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="about-card">
          <div className="content-center">
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center" }}>
              <div
                style={{
                  flex: 1,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-1.5rem)",
                  transition: "all 900ms ease-out",
                }}
              >
                <div style={{ color: "#64748b", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Who We Are
                </div>
                <h3 style={{ marginTop: "0.75rem", fontSize: "clamp(1.5rem, 3vw, 1.875rem)", color: "#0f172a", fontWeight: 600, maxWidth: "36rem" }}>
                  Founded in 2007, we supply consistent, quality lime to India&#8217;s industries.
                </h3>

                <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", color: "#475569", maxWidth: "32rem" }}>
                  <p>We began as a small manufacturing unit and have grown into a trusted supplier for large industrial clients.</p>
                  <p>Specialising in Hydrated Lime, Quick Lime, and Limestone Gitti, we maintain a manufacturing unit in Hariyadhana, Jodhpur, and an office in Saraswati Nagar.</p>
                  <p>Our operations support Pan&#8209;India supply with a focus on reliability and specification consistency.</p>
                </div>
                <a href="/about/company-profile#overview" className="cp-link">Read full company overview &#8594;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
