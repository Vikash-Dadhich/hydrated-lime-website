"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface Section {
  id: string;
  label: string;
  number: string;
  content: string[];
}

export default function CompanyProfileClient({
  sections,
}: {
  sections: Section[];
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  /* Track which section is in viewport for sidebar highlight + animations */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActiveId(id);
            setVisibleSections((prev) => new Set(prev).add(id));
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Smooth-scroll to hash on mount */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, []);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  const ChevronRight = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6"/>
    </svg>
  );

  return (
    <div className="cp-page">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100 px-6 py-3">
        <div className="max-w-[72rem] mx-auto flex items-center gap-2 text-[0.75rem] text-slate-400">
          <Link href="/" className="hover:text-slate-700 transition-colors duration-150">Home</Link>
          <ChevronRight />
          <Link href="/about" className="hover:text-slate-700 transition-colors duration-150">About</Link>
          <ChevronRight />
          <span className="text-slate-700 font-medium">Company Profile</span>
        </div>
      </div>

      {/* Hero header */}
      <div className="cp-hero">
        <div className="cp-hero-inner">
          <Link href="/about" className="cp-back">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Back to About
          </Link>
          <h1 className="cp-hero-title">Company Profile</h1>
          <p className="cp-hero-subtitle">
            A complete overview of Vikas Lime Industries — our history,
            manufacturing capabilities, product range, and future direction.
          </p>

          {/* Quick stats strip */}
          <div className="cp-stats">
            <div className="cp-stat">
              <span className="cp-stat-value">2007</span>
              <span className="cp-stat-label">Established</span>
            </div>
            <div className="cp-stat-divider" />
            <div className="cp-stat">
              <span className="cp-stat-value">20,000+</span>
              <span className="cp-stat-label">Tons / Year</span>
            </div>
            <div className="cp-stat-divider" />
            <div className="cp-stat">
              <span className="cp-stat-value">Pan-India</span>
              <span className="cp-stat-label">Supply Reach</span>
            </div>
            <div className="cp-stat-divider" />
            <div className="cp-stat">
              <span className="cp-stat-value">4</span>
              <span className="cp-stat-label">Product Lines</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile pill nav — sticky, scrollable, hidden on lg+ */}
      <div className="cp-mobile-nav">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`cp-mobile-pill ${activeId === s.id ? "cp-mobile-pill-active" : ""}`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Main body: sidebar + content */}
      <div className="cp-layout">
        {/* Sidebar nav */}
        <aside className="cp-sidebar">
          <nav className="cp-nav">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`cp-nav-item ${activeId === s.id ? "cp-nav-active" : ""}`}
              >
                <span className="cp-nav-num">{s.number}</span>
                <span className="cp-nav-label">{s.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="cp-content">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => {
                if (el) sectionRefs.current.set(section.id, el);
              }}
              className={`cp-section ${visibleSections.has(section.id) ? "cp-section-visible" : ""}`}
            >
              <div className="cp-section-head">
                <span className="cp-section-num">{section.number}</span>
                <h2 className="cp-section-title">{section.label}</h2>
              </div>
              <div className="cp-section-body">
                {section.content.map((paragraph, i) => (
                  <p key={i} className="cp-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
