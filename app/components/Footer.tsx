import Link from "next/link";

const c = {
  bg: "#0f172a",
  text: "#94a3b8",
  textBright: "#e2e8f0",
  border: "#1e293b",
  white: "#f8fafc",
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: c.bg,
        color: c.text,
        padding: "3.5rem 1.5rem 2rem",
        position: "relative",
      }}
    >
      {/* Grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/grain.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
          opacity: 0.03,
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "2.5rem",
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: "22rem" }}>
            <div
              style={{
                fontFamily: "var(--font-playfair, Georgia, serif)",
                fontWeight: 700,
                fontSize: "1.25rem",
                color: c.white,
                marginBottom: "0.75rem",
              }}
            >
              Vikas Lime Industries
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
              Premium hydrated lime, quick lime & limestone gitti for
              India&apos;s industries — consistent quality since 2007.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: c.textBright,
                marginBottom: "1rem",
              }}
            >
              Quick Links
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    style={{
                      fontSize: "0.875rem",
                      color: c.text,
                      textDecoration: "none",
                    }}
                    className="ftr-link"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: c.textBright,
                marginBottom: "1rem",
              }}
            >
              Reach Us
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", fontSize: "0.875rem" }}>
              <span>A-280, Saraswati Nagar Basni</span>
              <span>342005, Jodhpur, Rajasthan</span>
              <a href="tel:+919414135630" style={{ color: c.text, textDecoration: "none" }} className="ftr-link">
                +91 94141 35630
              </a>
              <a href="mailto:vikashlime@gmail.com" style={{ color: c.text, textDecoration: "none" }} className="ftr-link">
                vikashlime@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: c.border,
            margin: "2.5rem 0 1.5rem",
          }}
        />

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.75rem",
            color: c.text,
          }}
        >
          <span>© {new Date().getFullYear()} Vikas Lime Industries. All rights reserved.</span>
          <span>Jodhpur, Rajasthan — India</span>
        </div>
      </div>

      <style>{`
        .ftr-link:hover { color: ${c.white} !important; }
      `}</style>
    </footer>
  );
}
