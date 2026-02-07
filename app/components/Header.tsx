"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";

/* ── Shared palette ── */
const c = {
  barBg: "rgba(15, 23, 42, 0.75)",
  barBgSolid: "rgba(15, 23, 42, 0.92)",
  link: "#94a3b8",
  linkHover: "#ffffff",
  white: "#ffffff",
  pillBg: "#ffffff",
  pillText: "#0f172a",
  arrowBg: "#0f172a",
  arrowFg: "#ffffff",
  drawerBg: "#0f172a",
};

const navItems = [
  { label: "Home", href: "/", hash: "home" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/", hash: "applications" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* Close mobile drawer on route change */
  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      // Menu must close when the route changes — this is a side-effect of navigation.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMenuOpen(false);
    }
  }, [pathname]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  function scrollToSection(e: React.MouseEvent, id: string) {
    if (typeof window === "undefined") return;
    const onHome = pathname === "/" || pathname === "";
    if (onHome) {
      e.preventDefault();
      closeMenu();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", "#" + id);
      }
    } else {
      e.preventDefault();
      window.location.assign("/#" + id);
    }
  }

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          padding: "1rem 1.5rem",
          transition: "padding 300ms ease",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div
            style={{
              background: scrolled ? c.barBgSolid : c.barBg,
              backdropFilter: "blur(16px) saturate(180%)",
              WebkitBackdropFilter: "blur(16px) saturate(180%)",
              borderRadius: 9999,
              padding: "0.75rem 2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: scrolled
                ? "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)"
                : "0 4px 24px rgba(0,0,0,0.12)",
              transition: "background 400ms ease, box-shadow 400ms ease",
            }}
          >
            {/* Logo */}
            <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
              <span
                style={{
                  color: c.white,
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  fontFamily: "var(--font-playfair, Georgia, serif)",
                }}
              >
                Vikas Lime
              </span>
            </Link>

            {/* Desktop Nav — centered absolutely */}
            <nav
              aria-label="Main navigation"
              className="hdr-desktop-nav"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  listStyle: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2rem",
                  margin: 0,
                  padding: 0,
                }}
              >
                {navItems.map((item) => {
                  const isHash = !!item.hash;
                  const isActive = !isHash && pathname === item.href;
                  const linkStyle: React.CSSProperties = {
                    fontFamily: "var(--font-playfair, Georgia, serif)",
                    fontSize: "0.9375rem",
                    letterSpacing: "0.015em",
                    color: isActive ? c.linkHover : c.link,
                    textDecoration: "none",
                    transition: "color 150ms ease",
                    whiteSpace: "nowrap",
                  };

                  if (isHash) {
                    return (
                      <li key={item.label}>
                        <a
                          href={`#${item.hash}`}
                          onClick={(e) => scrollToSection(e, item.hash!)}
                          style={linkStyle}
                          className="hdr-link"
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  }

                  return (
                    <li key={item.label}>
                      <Link href={item.href} style={linkStyle} className="hdr-link">
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hdr-desktop-cta"
              style={{
                textDecoration: "none",
                background: c.pillBg,
                color: c.pillText,
                padding: "0.35rem 0.9rem",
                borderRadius: 9999,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                boxShadow: "0 6px 18px rgba(2,6,23,0.12)",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-playfair, Georgia, serif)",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                }}
              >
                Contact Us
              </span>
              <span
                style={{
                  display: "inline-flex",
                  width: 28,
                  height: 28,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 9999,
                  background: c.arrowBg,
                  color: c.arrowFg,
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </Link>

            {/* Hamburger button — mobile only */}
            <button
              className="hdr-hamburger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              style={{
                display: "none", /* shown via media query */
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.25rem",
                flexShrink: 0,
              }}
            >
              <div style={{ width: 24, height: 18, position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    width: 24,
                    height: 2,
                    background: c.white,
                    borderRadius: 2,
                    transition: "transform 300ms ease, opacity 200ms ease",
                    top: menuOpen ? 8 : 0,
                    transform: menuOpen ? "rotate(45deg)" : "none",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 8,
                    width: 24,
                    height: 2,
                    background: c.white,
                    borderRadius: 2,
                    transition: "opacity 200ms ease",
                    opacity: menuOpen ? 0 : 1,
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    width: 24,
                    height: 2,
                    background: c.white,
                    borderRadius: 2,
                    transition: "transform 300ms ease, opacity 200ms ease",
                    top: menuOpen ? 8 : 16,
                    transform: menuOpen ? "rotate(-45deg)" : "none",
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer overlay ── */}
      <div
        className="hdr-overlay"
        onClick={closeMenu}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 98,
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 300ms ease",
        }}
      />

      {/* ── Mobile drawer ── */}
      <nav
        className="hdr-mobile-drawer"
        aria-label="Mobile navigation"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 99,
          width: "min(80vw, 320px)",
          height: "100vh",
          background: c.drawerBg,
          borderLeft: "1px solid rgba(255,255,255,0.06)",
          padding: "5rem 2rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 350ms cubic-bezier(0.16, 1, 0.3, 1)",
          boxShadow: menuOpen ? "-8px 0 32px rgba(0,0,0,0.3)" : "none",
        }}
      >
        {navItems.map((item) => {
          const isHash = !!item.hash;
          const isActive = !isHash && pathname === item.href;

          if (isHash) {
            return (
              <a
                key={item.label}
                href={`#${item.hash}`}
                onClick={(e) => scrollToSection(e, item.hash!)}
                style={{
                  fontSize: "1.125rem",
                  fontFamily: "var(--font-playfair, Georgia, serif)",
                  color: c.link,
                  textDecoration: "none",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  transition: "color 150ms ease",
                }}
                className="hdr-link"
              >
                {item.label}
              </a>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              style={{
                fontSize: "1.125rem",
                fontFamily: "var(--font-playfair, Georgia, serif)",
                color: isActive ? c.linkHover : c.link,
                textDecoration: "none",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                transition: "color 150ms ease",
              }}
              className="hdr-link"
            >
              {item.label}
            </Link>
          );
        })}

        {/* Mobile CTA */}
        <Link
          href="/contact"
          onClick={closeMenu}
          style={{
            marginTop: "1.5rem",
            textDecoration: "none",
            background: c.pillBg,
            color: c.pillText,
            padding: "0.75rem 1.25rem",
            borderRadius: "0.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.6rem",
            fontFamily: "var(--font-playfair, Georgia, serif)",
            fontWeight: 600,
            fontSize: "0.9375rem",
          }}
        >
          Contact Us
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Link>
      </nav>

      {/* Responsive styles */}
      <style>{`
        .hdr-link:hover { color: ${c.linkHover} !important; }

        /* Desktop: show nav & CTA, hide hamburger */
        @media (min-width: 769px) {
          .hdr-desktop-nav { display: flex !important; }
          .hdr-desktop-cta { display: inline-flex !important; }
          .hdr-hamburger { display: none !important; }
          .hdr-mobile-drawer { display: none !important; }
          .hdr-overlay { display: none !important; }
        }

        /* Mobile: hide nav & CTA, show hamburger */
        @media (max-width: 768px) {
          .hdr-desktop-nav { display: none !important; }
          .hdr-desktop-cta { display: none !important; }
          .hdr-hamburger { display: flex !important; align-items: center; justify-content: center; }
          .hdr-mobile-drawer { display: flex !important; }
        }
      `}</style>
    </>
  );
}
