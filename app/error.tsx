"use client";

const c = {
  bg: "#0f172a",
  white: "#ffffff",
  faint: "#94a3b8",
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
            fontSize: "3rem",
            fontWeight: 700,
            lineHeight: 1,
            margin: "0 0 1rem",
            background: "linear-gradient(135deg, #e2e8f0, #64748b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Oops
        </p>
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            margin: "0 0 0.75rem",
          }}
        >
          Something went wrong
        </h2>
        <p
          style={{
            fontSize: "0.9375rem",
            color: c.faint,
            lineHeight: 1.6,
            margin: "0 0 2rem",
          }}
        >
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <button
          onClick={reset}
          style={{
            fontFamily: "inherit",
            display: "inline-block",
            background: c.white,
            color: c.bg,
            fontWeight: 600,
            fontSize: "0.9375rem",
            padding: "0.75rem 2rem",
            borderRadius: "0.625rem",
            border: "none",
            cursor: "pointer",
            transition: "transform 200ms ease, box-shadow 200ms ease",
          }}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
