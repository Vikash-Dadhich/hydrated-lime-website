import Link from "next/link";

const quickLinks = [
  { label: "Products",   href: "/products",   desc: "Hydrated Lime, Quick Lime & Limestone" },
  { label: "Industries", href: "/industries", desc: "Steel, Water Treatment, Construction…"  },
  { label: "About",      href: "/about",      desc: "Our story, team, and capabilities"      },
  { label: "Contact",    href: "/contact",    desc: "Enquiry, pricing, and samples"           },
];

export default function NotFound() {
  return (
    <div className="bg-slate-900 text-white min-h-[80vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-[36rem] w-full text-center">
        <p
          className="font-bold leading-none mb-4"
          style={{
            fontSize: "5rem",
            letterSpacing: "-0.04em",
            background: "linear-gradient(135deg, #e2e8f0, #64748b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </p>
        <h1 className="text-2xl font-semibold mb-3">Page not found</h1>
        <p className="text-slate-400 leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Here are some useful places to go:
        </p>

        <div className="grid grid-cols-2 gap-3 mb-10">
          {quickLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group bg-slate-800 hover:bg-slate-700 border border-white/[0.06] hover:border-white/[0.12] rounded-xl p-4 text-left no-underline transition-all duration-200"
            >
              <p className="font-semibold text-white text-[0.9375rem] mb-0.5 group-hover:text-white">{l.label}</p>
              <p className="text-[0.75rem] text-slate-500 leading-snug">{l.desc}</p>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[0.875rem] text-slate-400 hover:text-white transition-colors duration-150 no-underline"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
