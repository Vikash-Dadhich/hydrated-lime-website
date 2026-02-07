"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = "", duration = 1200 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) return;
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTime: number | null = null;
            const animate = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              setCount(Math.floor(progress * end));
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={ref} className="metric-number">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function TrustMetrics() {
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
      <div className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="content-center">
          <a href="/about/company-profile#quality" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
            <div className={`metrics-grid ${visible ? "is-visible" : ""}`}>
              <div className="metric-block">
                <AnimatedCounter end={20000} suffix="+" />
                <div className="metric-caption">Annual Production Capacity</div>
              </div>

              <div className="metric-block">
                <AnimatedCounter end={18} suffix="+" />
                <div className="metric-caption">Industry Experience</div>
              </div>

              <div className="metric-block">
                <div className="metric-number">Pan‑India</div>
                <div className="metric-caption">Nationwide Reach</div>
              </div>

              <div className="metric-block">
                <div className="metric-number">Trusted</div>
                <div className="metric-caption">Long‑Term Client Partnerships</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
