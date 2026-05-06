interface BadgeProps {
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
}

export default function Badge({
  children,
  variant = "light",
  className = "",
}: BadgeProps) {
  const base = "inline-block text-[0.75rem] font-semibold tracking-[0.12em] uppercase";
  const variants = {
    dark:  "text-slate-400",
    light: "text-slate-500",
  };

  return (
    <p className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </p>
  );
}
