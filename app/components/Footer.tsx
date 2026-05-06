import Link from "next/link";
import { footerNavLinks, primaryContact, addresses, company } from "../data/site";
import products from "../data/products";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 px-6 pt-14 pb-8 relative">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "url(/grain.svg)", backgroundRepeat: "repeat", backgroundSize: "200px" }}
      />

      <div className="max-w-[72rem] mx-auto relative">
        {/* Top row */}
        <div className="flex flex-wrap justify-between gap-10">
          {/* Brand */}
          <div className="max-w-[22rem]">
            <p className="font-serif font-bold text-xl text-slate-50 mb-3">
              Vikas Lime Industries
            </p>
            <p className="text-sm leading-relaxed m-0">
              Premium hydrated lime, quick lime &amp; limestone for
              India&apos;s industries — consistent quality since 2007.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[0.75rem] font-semibold tracking-[0.08em] uppercase text-slate-200 mb-4">
              Pages
            </p>
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              {footerNavLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-slate-50 transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about/company-profile"
                  className="text-sm text-slate-400 hover:text-slate-50 transition-colors duration-150"
                >
                  Company Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Products sub-links */}
          <div>
            <p className="text-[0.75rem] font-semibold tracking-[0.08em] uppercase text-slate-200 mb-4">
              Products
            </p>
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              {products.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/products#${p.id}`}
                    className="text-sm text-slate-400 hover:text-slate-50 transition-colors duration-150"
                  >
                    {p.name}
                    <span className="ml-1.5 text-[0.65rem] text-slate-600 font-mono">{p.formula}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[0.75rem] font-semibold tracking-[0.08em] uppercase text-slate-200 mb-4">
              Reach Us
            </p>
            <div className="flex flex-col gap-1.5 text-sm">
              <span>{addresses[0].lines[1]}</span>
              <span>{addresses[0].lines[2]}</span>
              <a
                href={`tel:${primaryContact.mobileTel}`}
                className="text-slate-400 hover:text-slate-50 transition-colors duration-150"
              >
                {primaryContact.mobile}
              </a>
              <a
                href={`mailto:${primaryContact.email}`}
                className="text-slate-400 hover:text-slate-50 transition-colors duration-150"
              >
                {primaryContact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800 my-10" />

        {/* Service states */}
        <div className="mb-6">
          <p className="text-[0.6875rem] font-semibold tracking-[0.1em] uppercase text-slate-600 mb-3">
            Supplying Across India
          </p>
          <div className="flex flex-wrap gap-2">
            {company.serviceStates.map((state) => (
              <span
                key={state}
                className="text-[0.6875rem] text-slate-500 bg-slate-800 px-2.5 py-1 rounded-full"
              >
                {state}
              </span>
            ))}
            <span className="text-[0.6875rem] text-slate-600 bg-transparent px-2.5 py-1 rounded-full">
              + more
            </span>
          </div>
        </div>

        <div className="h-px bg-slate-800 mb-6" />

        {/* Bottom */}
        <div className="flex flex-wrap justify-between items-center gap-3 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Vikas Lime Industries. All rights reserved.</span>
          <span className="text-slate-600">{company.legalNote}</span>
        </div>
      </div>
    </footer>
  );
}
