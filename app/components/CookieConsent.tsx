"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "vli-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        setTimeout(() => setVisible(true), 1500);
      }
    } catch {
      // localStorage unavailable (private mode etc.)
    }
  }, []);

  function accept() {
    try { localStorage.setItem(STORAGE_KEY, "accepted"); } catch {}
    setVisible(false);
  }

  function decline() {
    try { localStorage.setItem(STORAGE_KEY, "declined"); } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        bottom: "1.5rem",
        left: "1.5rem",
        zIndex: 9998,
        maxWidth: "22rem",
        background: "#0f172a",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "1rem",
        padding: "1.25rem 1.5rem",
        boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        animation: "slideUp 400ms cubic-bezier(0.16,1,0.3,1) forwards",
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(1rem); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <div>
          <p className="text-[0.875rem] font-semibold text-white mb-1">We use cookies</p>
          <p className="text-[0.8125rem] text-slate-400 leading-relaxed m-0">
            This site uses cookies to improve your experience and gather anonymous usage data.
            No personal information is shared with third parties.
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={accept}
          className="flex-1 text-[0.8125rem] font-semibold text-slate-900 bg-white border-none rounded-lg py-2.5 cursor-pointer hover:bg-slate-100 transition-colors duration-150"
        >
          Accept
        </button>
        <button
          onClick={decline}
          className="flex-1 text-[0.8125rem] font-medium text-slate-400 bg-white/[0.06] border border-white/10 rounded-lg py-2.5 cursor-pointer hover:bg-white/[0.12] transition-colors duration-150"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
