"use client";

import { useEffect, useRef, useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  index: number;
  visible: boolean;
}

function FeatureCard({ title, description, index, visible }: FeatureCardProps) {
  return (
    <a href="/about/company-profile#quality" style={{ textDecoration: "none", color: "inherit" }}>
      <div 
        className={`feature-card ${visible ? 'is-visible' : ''}`}
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        <h4 className="feature-title">{title}</h4>
        <p className="feature-description">{description}</p>
      </div>
    </a>
  );
}

export default function WhatSetsUsApart() {
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

  const features = [
    {
      title: "Consistent Batch Quality",
      description: "Reliable purity and performance across every delivery."
    },
    {
      title: "Customizable Grades",
      description: "Hydrated Lime and Quick Lime available in 80%, 85%, and 90% purity."
    },
    {
      title: "Strong Logistics & On-Time Delivery",
      description: "Supply chains designed to meet industrial timelines."
    },
    {
      title: "Long-Term Client Partnerships",
      description: "Trusted by leading industrial organizations across sectors."
    },
    {
      title: "Quality-Controlled Manufacturing",
      description: "Process-driven production with strict quality checks."
    },
    {
      title: "Compliance & Industry Association",
      description: "Pollution-compliant operations and active industry affiliation."
    }
  ];

  return (
    <section ref={ref} style={{ background: "#ffffff", width: "100%" }}>
      <div style={{ width: "100%", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          {/* Outer card */}
          <div className="features-outer">
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="features-label">WHAT SETS US APART</span>
            </div>

            {/* Feature grid */}
            <div className="features-grid">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                  visible={visible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
