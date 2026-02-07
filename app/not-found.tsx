import Link from "next/link";

export default function NotFound() {
  const c = {
    bg: "#0f172a",
    white: "#ffffff",
    faint: "#94a3b8",
    border: "rgba(255,255,255,0.08)",
  };

  return (
    <div
      style={{
        background: c.bg,
        color: c.white,
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "4rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "28rem" }}>
        <p
          style={{
            fontSize: "5rem",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            margin: "0 0 1rem",
            background: "linear-gradient(135deg, #e2e8f0, #64748b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </p>
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            margin: "0 0 0.75rem",
          }}
        >
          Page not found
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: c.faint,
            lineHeight: 1.6,
            margin: "0 0 2rem",
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            background: c.white,
            color: c.bg,
            fontWeight: 600,
            fontSize: "0.9375rem",
            padding: "0.75rem 2rem",
            borderRadius: "0.625rem",
            textDecoration: "none",
            transition: "transform 200ms ease, box-shadow 200ms ease",
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
