"use client";

import { useEffect, useRef, useState } from "react";

const c = {
  bg: "#ffffff",
  text: "#0f172a",
  textMuted: "#475569",
  textFaint: "#94a3b8",
};

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

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
      { threshold: 0.15 }
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
    const onHash = () => { if (location.hash === "#about") restart(); };
    const onPop = () => { if (location.hash === "#about" || location.pathname.endsWith("/about")) restart(); };

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

  const base: React.CSSProperties = { transition: "all 1s ease-out" };
  const hidden: React.CSSProperties = { opacity: 0, transform: "translateY(1.5rem)" };
  const shown: React.CSSProperties = { opacity: 1, transform: "translateY(0)" };

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: c.bg,
        position: "relative",
        padding: "5rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "52rem", width: "100%" }}>
        <h1
          style={{
            ...base,
            ...(visible ? shown : hidden),
            fontFamily: "var(--font-sans, system-ui, sans-serif)",
            fontWeight: 600,
            fontSize: "clamp(2rem, 5vw, 3.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: c.text,
            margin: 0,
          }}
        >
          Engineering Purity.
          <br />
          Delivering Trust.
          <br />
          Since 2007.
        </h1>

        <div
          style={{
            ...base,
            transitionDuration: "700ms",
            marginTop: "1.5rem",
            height: 2,
            borderRadius: 1,
            background: c.text,
            width: visible ? 40 : 0,
          }}
          aria-hidden
        />

        <p
          style={{
            ...base,
            transitionDelay: "200ms",
            ...(visible ? shown : hidden),
            marginTop: "1.5rem",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            lineHeight: 1.7,
            color: c.textMuted,
            fontWeight: 300,
            maxWidth: "38rem",
          }}
        >
          A legacy-built, quality-first manufacturer of Hydrated Lime and Quick Lime
          <br />
          for India&apos;s leading industries.
        </p>

        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: c.textFaint,
              animation: "pulse 2s infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
