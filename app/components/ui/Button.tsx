import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";
type Size    = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  external?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:   "bg-white text-slate-900 font-semibold hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] btn-glow",
  secondary: "bg-slate-900 text-white border border-slate-700 font-semibold hover:-translate-y-0.5 hover:border-slate-500",
  ghost:     "bg-transparent text-white border border-white/15 font-medium hover:border-white/35 hover:bg-white/5 btn-ghost",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-8 py-3 text-[0.9375rem]",
  lg: "px-10 py-4 text-base",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
  external = false,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-[0.625rem] transition-all duration-200 select-none";
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
