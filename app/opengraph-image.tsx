import { ImageResponse } from "next/og";

export const alt = "Vikas Lime Industries — Premium Lime Manufacturer since 2007";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(148,163,184,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(148,163,184,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Brand mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            VL
          </div>
          <span style={{ fontSize: 24, fontWeight: 600, color: "#94a3b8" }}>
            Vikas Lime Industries
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-1.5px",
            maxWidth: "800px",
            marginBottom: "24px",
          }}
        >
          Premium Lime Manufacturer Since 2007
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: 22,
            color: "#94a3b8",
            lineHeight: 1.5,
            maxWidth: "600px",
          }}
        >
          Hydrated Lime &bull; Quick Lime Lumps &bull; Quick Lime Powder &bull; Limestone
        </div>

        {/* Bottom strip */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 80,
            display: "flex",
            gap: "32px",
            fontSize: 16,
            color: "#64748b",
          }}
        >
          <span>Jodhpur, Rajasthan</span>
          <span>&#8226;</span>
          <span>20,000+ MT / Year</span>
          <span>&#8226;</span>
          <span>Pan-India Supply</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
