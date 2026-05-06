"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import { contacts, addresses, businessHours, mapEmbedSrc } from "../data/site";
import products from "../data/products";

const WHATSAPP_NUM = contacts[0].mobileTel.replace("+", "");

interface FormData {
  name: string;
  email: string;
  mobile: string;
  product: string;
  enquiryType: string;
  quantity: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  mobile: "",
  product: "",
  enquiryType: "",
  quantity: "",
  message: "",
};

// ─── Hero ────────────────────────────────────────────────────────────────────

function ContactHero() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const fade = (delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(1.25rem)",
    transition: `opacity 700ms ease ${delay}ms, transform 700ms ease ${delay}ms`,
  });

  const quickLinks = [
    {
      label: "WhatsApp",
      href: `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent("Hello, I'd like to enquire about your lime products.")}`,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      color: "#25D366",
    },
    {
      label: contacts[0].mobile,
      href: `tel:${contacts[0].mobileTel}`,
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13.6a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2.84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17.92z" />
        </svg>
      ),
      color: "#3b82f6",
    },
    {
      label: contacts[0].email,
      href: `mailto:${contacts[0].email}`,
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      color: "#8b5cf6",
    },
  ];

  return (
    <div
      ref={ref}
      className="relative bg-slate-900 text-white py-28 px-6 overflow-hidden"
    >
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "url(/grain.svg)", backgroundRepeat: "repeat", backgroundSize: "200px" }}
      />
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[20rem] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(212,168,83,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[60rem] mx-auto text-center">
        <p className="text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-slate-500 mb-5" style={fade(0)}>
          Contact Us
        </p>
        <h1
          className="font-serif font-bold text-white leading-[1.1] mb-5"
          style={{ ...fade(100), fontSize: "clamp(2.25rem, 5vw, 3.5rem)", letterSpacing: "-0.025em" }}
        >
          Let&apos;s Talk{" "}
          <span style={{
            background: "linear-gradient(135deg, #D4A853 0%, #f5d48a 50%, #D4A853 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Business
          </span>
        </h1>
        <p
          className="text-slate-400 leading-relaxed mb-10 mx-auto"
          style={{ ...fade(200), fontSize: "1.0625rem", maxWidth: "44ch" }}
        >
          Reach out for pricing, bulk supply, technical specs, or sample
          requests. Our team responds within one business day.
        </p>

        {/* Quick-contact chips */}
        <div className="flex flex-wrap justify-center gap-3" style={fade(300)}>
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2.5 text-[0.8125rem] font-medium text-slate-300 bg-white/[0.06] border border-white/[0.1] px-4 py-2.5 rounded-full no-underline hover:bg-white/[0.12] hover:border-white/25 hover:text-white transition-all duration-200"
            >
              <span style={{ color: link.color }}>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main contact section (info + form) ──────────────────────────────────────

export default function ContactClient() {
  const [form, setForm]             = useState<FormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [error, setError]           = useState("");
  const [mobileTab, setMobileTab]   = useState<"form" | "info">("form");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Enquiry — ${form.product || "General"} — ${form.name} — Vikas Lime Industries`,
          from_name: "Vikas Lime Website",
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) { setSubmitted(true); setForm(initialForm); }
      else setError("Something went wrong. Please try again or reach us on WhatsApp.");
    } catch {
      setError("Network error. Please check your connection or reach us on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

  const gmapsLinks = [
    "https://maps.google.com/?q=Vikas+Lime+Industries+Jodhpur+Rajasthan",
    "https://maps.google.com/?q=384+Hariyadhana+Bilara+Jodhpur+Rajasthan",
  ];

  return (
    <div className="w-full bg-white">
      <ContactHero />

      {/* ── Service commitment strip ── */}
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-5">
        <div className="max-w-[72rem] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "⏱", title: "Reply in 2 Hours",     sub: "On WhatsApp during business hours"          },
              { icon: "📋", title: "COA with Every Batch",  sub: "Certificate of Analysis on every dispatch" },
              { icon: "📦", title: "1–3 Day Dispatch",      sub: "After order confirmation and payment"       },
              { icon: "🧪", title: "Free Sample (5 kg)",    sub: "For new clients evaluating our quality"     },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="text-[1.25rem] shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <p className="text-[0.8125rem] font-semibold text-slate-800 leading-tight mb-0.5">{item.title}</p>
                  <p className="text-[0.75rem] text-slate-400 leading-snug">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile tab switcher ── */}
      <div className="lg:hidden sticky top-18 z-10 bg-white border-b border-slate-100 px-6 py-3">
        <div className="flex gap-2 max-w-sm">
          <button
            onClick={() => setMobileTab("form")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${mobileTab === "form" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500 hover:text-slate-700"}`}
          >
            Send Enquiry
          </button>
          <button
            onClick={() => setMobileTab("info")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${mobileTab === "info" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500 hover:text-slate-700"}`}
          >
            Contact Info
          </button>
        </div>
      </div>

      {/* ── Info + Form ── */}
      <div className="py-12 lg:py-20 px-6">
        <div className="max-w-[72rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">

            {/* Left: Info panel */}
            <div className={`flex flex-col gap-8 lg:sticky lg:top-24 ${mobileTab === "info" ? "block" : "hidden lg:flex"}`}>

              {/* WhatsApp CTA card */}
              <div className="rounded-2xl overflow-hidden">
                <a
                  href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent("Hello, I'd like to enquire about your lime products.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#25D366] text-white px-6 py-5 no-underline hover:bg-[#1ebe5d] transition-colors duration-200"
                >
                  <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[0.9375rem]">Chat on WhatsApp</div>
                    <div className="text-white/75 text-[0.8125rem]">Fastest response — usually within 1 hour</div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-auto shrink-0">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </a>
              </div>

              {/* Contact people */}
              <div>
                <InfoLabel>Key Contacts</InfoLabel>
                <div className="flex flex-col gap-3">
                  {contacts.map((c) => (
                    <div
                      key={c.name}
                      className="bg-slate-50 border border-slate-200 rounded-2xl p-5"
                    >
                      <div className="font-semibold text-slate-900 text-[0.9375rem] mb-0.5">{c.name}</div>
                      <div className="text-[0.8125rem] text-slate-500 mb-4">{c.role}</div>
                      <div className="flex flex-col gap-2">
                        <a href={`tel:${c.mobileTel}`}
                          className="flex items-center gap-2.5 text-[0.875rem] text-slate-500 hover:text-slate-900 no-underline transition-colors duration-150">
                          <PhoneIcon /> {c.mobile}
                        </a>
                        <a href={`mailto:${c.email}`}
                          className="flex items-center gap-2.5 text-[0.875rem] text-slate-500 hover:text-slate-900 no-underline transition-colors duration-150">
                          <MailIcon /> {c.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Addresses */}
              <div>
                <InfoLabel>Our Locations</InfoLabel>
                <div className="flex flex-col gap-3">
                  {addresses.map((addr, i) => (
                    <address
                      key={addr.label}
                      className="bg-slate-50 border border-slate-200 rounded-2xl p-5 not-italic"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <MapPinIcon />
                          <span className="text-[0.75rem] font-semibold text-slate-500 tracking-[0.08em] uppercase">
                            {addr.label}
                          </span>
                        </div>
                        <a
                          href={gmapsLinks[i]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[0.6875rem] font-medium text-blue-600 hover:text-blue-800 no-underline shrink-0 transition-colors duration-150"
                        >
                          Open in Maps →
                        </a>
                      </div>
                      <p className="text-[0.875rem] text-slate-500 leading-[1.75] m-0">
                        {addr.lines.slice(1).map((line, j) => (
                          <span key={j}>{line}{j < addr.lines.length - 2 && <br />}</span>
                        ))}
                      </p>
                    </address>
                  ))}
                </div>
              </div>

              {/* Business hours */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <ClockIcon />
                  <span className="text-[0.75rem] font-semibold text-slate-500 tracking-[0.08em] uppercase">
                    Business Hours
                  </span>
                </div>
                <p className="text-[0.9375rem] font-medium text-slate-800 m-0">{businessHours.days}</p>
                <p className="text-[0.875rem] text-slate-500 m-0 mt-0.5">{businessHours.hours}</p>
                <p className="text-[0.75rem] text-slate-400 m-0 mt-3">
                  Outside hours? WhatsApp us — we respond daily.
                </p>
              </div>
            </div>

            {/* Right: Enhanced form */}
            <div className={`bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 ${mobileTab === "form" ? "block" : "hidden lg:block"}`}>
              <h2 className="text-[1.375rem] font-bold text-slate-900 mb-2 leading-tight" style={{ letterSpacing: "-0.02em" }}>
                Send an Enquiry
              </h2>
              <p className="text-[0.875rem] text-slate-500 leading-relaxed mb-8">
                Tell us what you need — we&apos;ll respond within one business day with pricing and availability.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Enquiry Received</h3>
                  <p className="text-slate-500 leading-relaxed mb-6 text-[0.9375rem]">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[0.8125rem] font-medium text-slate-600 bg-white border border-slate-200 rounded-full px-5 py-2.5 cursor-pointer hover:border-slate-400 transition-colors duration-200"
                    >
                      Send another enquiry
                    </button>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUM}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.8125rem] font-semibold text-white bg-[#25D366] rounded-full px-5 py-2.5 no-underline hover:bg-[#1ebe5d] transition-colors duration-200"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Row 1: Name + Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField id="ct-name"   label="Full Name *"     name="name"   type="text"  value={form.name}   onChange={handleChange} placeholder="Your full name" />
                    <FormField id="ct-mobile" label="Mobile Number *" name="mobile" type="tel"   value={form.mobile} onChange={handleChange} placeholder="+91 00000 00000" />
                  </div>

                  {/* Email */}
                  <FormField id="ct-email" label="Email Address *" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" />

                  {/* Row 2: Product + Enquiry Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormSelect id="ct-product" label="Product Interest" name="product" value={form.product} onChange={handleChange}>
                      <option value="">All products / Not sure</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                    </FormSelect>
                    <FormSelect id="ct-type" label="Enquiry Type" name="enquiryType" value={form.enquiryType} onChange={handleChange}>
                      <option value="">Select type…</option>
                      <option value="Pricing & Quote">Pricing &amp; Quote</option>
                      <option value="Bulk Order (>50 MT)">Bulk Order (&gt;50 MT)</option>
                      <option value="Technical Specification">Technical Specification</option>
                      <option value="Sample Request">Sample Request</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </FormSelect>
                  </div>

                  {/* Quantity */}
                  <FormField
                    id="ct-qty"
                    label="Approximate Requirement"
                    name="quantity"
                    type="text"
                    value={form.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 50 MT/month (optional)"
                    required={false}
                  />

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="ct-message" className="text-[0.8125rem] font-medium text-slate-600">
                      Message / Additional Details
                    </label>
                    <textarea
                      id="ct-message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Any specific grade, packaging, or delivery requirements…"
                      className="font-[inherit] text-[0.9375rem] text-slate-900 bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none w-full box-border resize-none focus:border-slate-400 transition-colors duration-200"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-1 font-[inherit] text-[0.9375rem] font-semibold text-white bg-slate-900 border-none rounded-xl px-6 py-4 cursor-pointer transition-all duration-200 hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
                  >
                    {submitting ? "Sending…" : "Submit Enquiry"}
                  </button>

                  {error && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                        <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
                      </svg>
                      <p className="text-[0.875rem] text-red-600 leading-relaxed m-0">{error}</p>
                    </div>
                  )}

                  <p className="text-[0.75rem] text-slate-400 leading-relaxed m-0">
                    By submitting, you agree we may contact you regarding your enquiry.
                    We never share your details with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Map ── */}
      <div className="bg-slate-50 border-t border-slate-200 px-6 pb-20 pt-6">
        <div className="max-w-[72rem] mx-auto">
          <p className="text-[0.75rem] font-semibold tracking-[0.1em] uppercase text-slate-400 mb-4">
            Find Us
          </p>
          <div className="rounded-2xl overflow-hidden border border-slate-200" style={{ height: "28rem" }}>
            <iframe
              title="Vikas Lime Industries — Office Location, Jodhpur"
              src={mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Small utility components ─────────────────────────────────────────────────

function InfoLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[0.75rem] font-semibold text-slate-400 tracking-[0.1em] uppercase mb-3">
      {children}
    </h2>
  );
}

function FormField({
  id, label, name, type, value, onChange, placeholder, required = true,
}: {
  id: string; label: string; name: string; type: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[0.8125rem] font-medium text-slate-600">{label}</label>
      <input
        id={id} name={name} type={type} required={required}
        value={value} onChange={onChange} placeholder={placeholder}
        className="font-[inherit] text-[0.9375rem] text-slate-900 bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none w-full box-border focus:border-slate-400 transition-colors duration-200"
      />
    </div>
  );
}

function FormSelect({
  id, label, name, value, onChange, children,
}: {
  id: string; label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[0.8125rem] font-medium text-slate-600">{label}</label>
      <select
        id={id} name={name} value={value} onChange={onChange}
        className="font-[inherit] text-[0.9375rem] text-slate-900 bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none w-full box-border focus:border-slate-400 transition-colors duration-200 appearance-none cursor-pointer"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 0.875rem center", paddingRight: "2.5rem" }}
      >
        {children}
      </select>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-slate-400">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13.6a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2.84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-slate-400">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-slate-400">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-slate-400">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
