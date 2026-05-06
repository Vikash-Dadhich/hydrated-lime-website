"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";
import { navItems } from "../data/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      setMenuOpen(false);
    }
  }, [pathname]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const linkClass = (active: boolean) =>
    `font-serif text-[0.9375rem] tracking-[0.015em] whitespace-nowrap transition-colors duration-150 ${
      active ? "text-white" : "text-slate-400 hover:text-white"
    }`;

  return (
    <>
      <header className="sticky top-0 z-[100] px-6 py-4 transition-[padding] duration-300">
        <div className="max-w-[72rem] mx-auto">
          <div
            className={`
              rounded-full px-8 py-3 flex items-center justify-between relative
              border border-white/[0.06] backdrop-blur-[16px] saturate-180
              transition-[background,box-shadow] duration-400
            `}
            style={{
              background: scrolled ? "rgba(15,23,42,0.92)" : "rgba(15,23,42,0.75)",
              boxShadow: scrolled
                ? "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)"
                : "0 4px 24px rgba(0,0,0,0.12)",
            }}
          >
            {/* Logo */}
            <Link href="/" className="shrink-0 no-underline">
              <span className="text-white font-bold text-lg font-serif">Vikas Lime</span>
            </Link>

            {/* Desktop nav — centered */}
            <nav
              aria-label="Main navigation"
              className="hidden md:flex absolute left-1/2 -translate-x-1/2"
            >
              <ul className="flex items-center gap-8 list-none m-0 p-0">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <li key={item.label} className="flex flex-col items-center gap-1.5">
                      <Link href={item.href} className={linkClass(isActive)}>
                        {item.label}
                      </Link>
                      <span
                        className="block w-1 h-1 rounded-full bg-white transition-all duration-200"
                        style={{ opacity: isActive ? 1 : 0, transform: isActive ? "scaleX(1)" : "scaleX(0)" }}
                      />
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop CTA pill */}
            <Link
              href="/contact"
              className="
                hidden md:inline-flex items-center gap-2.5 shrink-0 no-underline
                bg-white text-slate-900 rounded-full px-4 py-1.5
                shadow-[0_6px_18px_rgba(2,6,23,0.12)]
              "
            >
              <span className="font-serif font-semibold text-[0.875rem]">Contact Us</span>
              <span className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-slate-900 text-white">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex items-center justify-center p-1 bg-transparent border-none cursor-pointer shrink-0"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <div className="w-6 h-[18px] relative">
                <span className="absolute left-0 w-6 h-0.5 bg-white rounded-sm transition-all duration-300"
                  style={{ top: menuOpen ? 8 : 0, transform: menuOpen ? "rotate(45deg)" : "none" }} />
                <span className="absolute left-0 top-2 w-6 h-0.5 bg-white rounded-sm transition-opacity duration-200"
                  style={{ opacity: menuOpen ? 0 : 1 }} />
                <span className="absolute left-0 w-6 h-0.5 bg-white rounded-sm transition-all duration-300"
                  style={{ top: menuOpen ? 8 : 16, transform: menuOpen ? "rotate(-45deg)" : "none" }} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className="md:hidden fixed inset-0 z-[98] bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none" }}
        onClick={closeMenu}
      />

      {/* Mobile drawer */}
      <nav
        aria-label="Mobile navigation"
        className="md:hidden fixed top-0 right-0 z-[99] h-screen w-[min(80vw,320px)] bg-slate-900 border-l border-white/[0.06] flex flex-col gap-2 px-8 pt-20 pb-8 shadow-2xl transition-transform duration-350"
        style={{
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 350ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className={`font-serif text-lg py-3 border-b border-white/[0.06] transition-colors duration-150 flex items-center justify-between ${
                isActive ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {item.label}
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
              )}
            </Link>
          );
        })}

        <Link
          href="/contact"
          onClick={closeMenu}
          className="mt-6 flex items-center justify-center gap-2 bg-white text-slate-900 rounded-xl px-5 py-3 font-serif font-semibold text-[0.9375rem] no-underline"
        >
          Contact Us
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </Link>
      </nav>
    </>
  );
}
