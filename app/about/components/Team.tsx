"use client";

import { useEffect, useRef, useState } from "react";
import { contacts } from "../../data/site";

const avatarGradients = [
  "from-slate-600 to-slate-800",
  "from-slate-700 to-slate-900",
];

export default function Team() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white py-28 px-6">
      <div className="max-w-[72rem] mx-auto">
        {/* Header */}
        <div
          className="mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(1rem)",
            transition: "opacity 700ms ease, transform 700ms ease",
          }}
        >
          <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-slate-400 mb-3">
            The People Behind the Company
          </p>
          <h2
            className="font-bold text-slate-900 leading-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.025em" }}
          >
            Our Team
          </h2>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[52rem]">
          {contacts.map((person, i) => (
            <div
              key={i}
              className="group bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(1.5rem)",
                transition: `opacity 600ms ease ${i * 150}ms, transform 600ms ease ${i * 150}ms`,
              }}
            >
              {/* Avatar */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${avatarGradients[i]} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}
              >
                <span className="text-[1.125rem] font-bold text-white tracking-wider">
                  {person.initials}
                </span>
              </div>

              {/* Name + role */}
              <h3 className="text-[1.125rem] font-semibold text-slate-900 mb-1">
                {person.name}
              </h3>
              <p className="text-[0.8125rem] text-slate-500 mb-4">{person.role}</p>

              {/* Bio */}
              <p className="text-[0.875rem] text-slate-500 leading-relaxed mb-4">
                {person.bio}
              </p>

              {/* Expertise chips */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {person.expertise.split(" · ").map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.6875rem] font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-200 mb-6" />

              {/* Contact details */}
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${person.mobileTel}`}
                  className="flex items-center gap-3 text-[0.875rem] text-slate-500 hover:text-slate-900 no-underline transition-colors duration-150 group/link"
                >
                  <span className="w-8 h-8 rounded-lg bg-slate-200 group-hover/link:bg-slate-900 flex items-center justify-center shrink-0 transition-colors duration-200">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:stroke-white transition-colors duration-200">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13.6a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2.84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17.92z"/>
                    </svg>
                  </span>
                  {person.mobile}
                </a>
                <a
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-3 text-[0.875rem] text-slate-500 hover:text-slate-900 no-underline transition-colors duration-150 group/link"
                >
                  <span className="w-8 h-8 rounded-lg bg-slate-200 group-hover/link:bg-slate-900 flex items-center justify-center shrink-0 transition-colors duration-200">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:stroke-white transition-colors duration-200">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  {person.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
