interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  heading,
  subtext,
  align = "center",
  dark = false,
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const headingColor = dark ? "text-white" : "text-slate-900";
  const subtextColor = dark ? "text-slate-400" : "text-slate-500";
  const eyebrowColor = dark ? "text-slate-500" : "text-slate-500";

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <p className={`text-[0.75rem] font-semibold tracking-[0.1em] uppercase mb-3 ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-bold tracking-tight leading-tight ${headingColor}`}
        style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.02em" }}
      >
        {heading}
      </h2>
      {subtext && (
        <p className={`mt-3 text-base leading-relaxed max-w-xl ${align === "center" ? "mx-auto" : ""} ${subtextColor}`}>
          {subtext}
        </p>
      )}
    </div>
  );
}
