export default function Loading() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0f172a",
      }}
    >
      <style>{`
        @keyframes loading-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .loading-bar {
          width: 3rem;
          height: 4px;
          border-radius: 2px;
          background: #94a3b8;
          animation: loading-pulse 1.2s ease-in-out infinite;
        }
        .loading-bar:nth-child(2) { animation-delay: 0.15s; }
        .loading-bar:nth-child(3) { animation-delay: 0.3s; }
      `}</style>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <div className="loading-bar" />
        <div className="loading-bar" />
        <div className="loading-bar" />
      </div>
    </div>
  );
}
