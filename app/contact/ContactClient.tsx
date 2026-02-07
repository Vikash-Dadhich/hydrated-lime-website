"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

const initialForm: FormData = { name: "", email: "", mobile: "", message: "" };

/* ── Shared style tokens ── */
const color = {
  bg: "#ffffff",
  bgMuted: "#f8fafc",
  heroBg: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
  text: "#0f172a",
  textMuted: "#475569",
  textLight: "#64748b",
  textFaint: "#94a3b8",
  border: "#e2e8f0",
  borderFocus: "#475569",
  white: "#ffffff",
  success: "#22c55e",
};

export default function ContactClient() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          access_key: "62c4bac1-028d-484c-a4d3-9178d629d6d8",
          subject: `New Query from ${form.name} — Vikas Lime Industries`,
          from_name: "Vikas Lime Website",
          name: form.name,
          email: form.email,
          mobile: form.mobile,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setForm(initialForm);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ width: "100%", background: color.bg }}>
      {/* ══════ Hero ══════ */}
      <div
        style={{
          background: color.heroBg,
          color: color.white,
          padding: "5rem 1.5rem 4rem",
        }}
      >
        <div style={{ maxWidth: "60rem", margin: "0 auto", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              margin: "0 0 0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            Contact Us
          </h1>
          <p style={{ fontSize: "1.0625rem", color: color.textFaint, lineHeight: 1.6, margin: 0 }}>
            For business inquiries, partnerships, or general information.
          </p>
        </div>
      </div>

      {/* ══════ Main: Info + Form ══════ */}
      <div style={{ padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
            className="ct-responsive-grid"
          >
            {/* ── LEFT: Contact Info ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {/* Key Contacts */}
              <div>
                <SectionLabel>Key Contacts</SectionLabel>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <ContactCard
                    name="Vishnu Avatar Dadhich"
                    role="Proprietor"
                    mobile="+91 9414135630"
                    email="vikashlime@gmail.com"
                  />
                  <ContactCard
                    name="Vikash Dadhich"
                    role="Manager — Procurement & Logistics"
                    mobile="+91 8094110701"
                    email="vikashdadhich1998@gmail.com"
                  />
                </div>
              </div>

              {/* Business Inquiry */}
              <div>
                <SectionLabel>Business Inquiries</SectionLabel>
                <a
                  href="mailto:vikashlime@gmail.com"
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 500,
                    color: color.text,
                    textDecoration: "none",
                    borderBottom: `1px solid ${color.border}`,
                    paddingBottom: 2,
                  }}
                >
                  vikashlime@gmail.com
                </a>
              </div>

              {/* Business Hours */}
              <div>
                <SectionLabel>Business Hours</SectionLabel>
                <p style={{ fontSize: "0.9375rem", color: color.textMuted, lineHeight: 1.6, margin: 0 }}>
                  Monday – Saturday
                </p>
                <p style={{ fontSize: "0.9375rem", color: color.textMuted, lineHeight: 1.6, margin: 0 }}>
                  9:00 AM – 6:00 PM IST
                </p>
              </div>
            </div>

            {/* ── RIGHT: Form ── */}
            <div>
              <div
                style={{
                  background: color.bgMuted,
                  border: `1px solid ${color.border}`,
                  borderRadius: "1.25rem",
                  padding: "2.5rem 2rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: color.text,
                    margin: "0 0 0.5rem",
                  }}
                >
                  Send a Query
                </h2>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: color.textLight,
                    lineHeight: 1.5,
                    margin: "0 0 2rem",
                  }}
                >
                  Fill in the details below and our team will respond within one
                  business day.
                </p>

                {submitted ? (
                  <div style={{ textAlign: "center", padding: "2rem 0" }}>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={color.success}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ margin: "0 auto 1rem", display: "block" }}
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: color.textMuted,
                        lineHeight: 1.6,
                        margin: "0 0 1.5rem",
                      }}
                    >
                      Thank you for reaching out. Our team will get back to you
                      shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      style={{
                        fontFamily: "inherit",
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        color: color.textMuted,
                        background: "none",
                        border: `1px solid ${color.border}`,
                        borderRadius: "0.5rem",
                        padding: "0.5rem 1rem",
                        cursor: "pointer",
                      }}
                    >
                      Send another query
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
                  >
                    <FormField
                      id="ct-name"
                      label="Full Name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                    <FormField
                      id="ct-email"
                      label="Email Address"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                    />
                    <FormField
                      id="ct-mobile"
                      label="Mobile Number"
                      name="mobile"
                      type="tel"
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                    />
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                      <label
                        htmlFor="ct-message"
                        style={{ fontSize: "0.8125rem", fontWeight: 500, color: color.textMuted }}
                      >
                        Message / Query
                      </label>
                      <textarea
                        id="ct-message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements…"
                        style={inputStyle}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      style={{
                        fontFamily: "inherit",
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: color.white,
                        background: color.text,
                        border: "none",
                        borderRadius: "0.625rem",
                        padding: "0.875rem 1.5rem",
                        cursor: submitting ? "not-allowed" : "pointer",
                        opacity: submitting ? 0.6 : 1,
                        marginTop: "0.5rem",
                        transition: "background 200ms ease, opacity 200ms ease",
                      }}
                    >
                      {submitting ? "Sending…" : "Submit Query"}
                    </button>

                    {error && (
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "#ef4444",
                          margin: "0.75rem 0 0",
                          lineHeight: 1.5,
                        }}
                      >
                        {error}
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════ Addresses ══════ */}
      <div
        style={{
          background: color.bgMuted,
          padding: "4rem 1.5rem",
          borderTop: `1px solid ${color.border}`,
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div className="ct-addr-responsive" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
            <AddressCard
              label="Office Address"
              lines={["Vikas Lime Industries", "A-280, Saraswati Nagar Basni", "342005, Jodhpur, Rajasthan"]}
            />
            <AddressCard
              label="Factory"
              lines={["Vikas Lime Industries", "384/25/1/1, Hariyadhana", "342602, Tehsil-Bilara", "Dist-Jodhpur, Rajasthan"]}
            />
          </div>
        </div>
      </div>

      {/* ══════ Map ══════ */}
      <div style={{ background: color.bgMuted, padding: "0 1.5rem 4rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div
            style={{
              borderRadius: "1rem",
              overflow: "hidden",
              border: `1px solid ${color.border}`,
              height: "24rem",
            }}
          >
            <iframe
              title="Vikas Lime Industries — Manufacturing Unit Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.3389842493903!2d73.7676704761991!3d26.38023387696861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a19fc0ef0fa17%3A0xcd6fdfa6cb8c784e!2sVikas%20Lime%20Industries!5e0!3m2!1sen!2sin!4v1770400672181!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (min-width: 768px) {
          .ct-responsive-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 4rem !important;
          }
          .ct-addr-responsive {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════════════════
   Sub-components
   ═══════════════════════════════════════ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: "0.8125rem",
        fontWeight: 600,
        color: color.textMuted,
        letterSpacing: "0.08em",
        textTransform: "uppercase" as const,
        margin: "0 0 1.25rem",
      }}
    >
      {children}
    </h2>
  );
}

function ContactCard({
  name,
  role,
  mobile,
  email,
}: {
  name: string;
  role: string;
  mobile: string;
  email: string;
}) {
  return (
    <div
      style={{
        background: color.bgMuted,
        border: `1px solid ${color.border}`,
        borderRadius: "0.875rem",
        padding: "1.5rem",
      }}
    >
      <div style={{ fontSize: "1rem", fontWeight: 600, color: color.text, marginBottom: "0.25rem" }}>
        {name}
      </div>
      <div style={{ fontSize: "0.8125rem", color: color.textLight, marginBottom: "1rem" }}>
        {role}
      </div>
      <DetailRow label="Mobile" href={`tel:${mobile.replace(/\s/g, "")}`} value={mobile} />
      <DetailRow label="Email" href={`mailto:${email}`} value={email} />
    </div>
  );
}

function DetailRow({ label, href, value }: { label: string; href: string; value: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", padding: "0.3rem 0" }}>
      <span
        style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          color: color.textFaint,
          textTransform: "uppercase" as const,
          letterSpacing: "0.04em",
          minWidth: "3.5rem",
        }}
      >
        {label}
      </span>
      <a
        href={href}
        style={{
          fontSize: "0.9375rem",
          color: color.textMuted,
          textDecoration: "none",
        }}
      >
        {value}
      </a>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  fontFamily: "inherit",
  fontSize: "0.9375rem",
  color: color.text,
  background: color.white,
  border: `1px solid ${color.border}`,
  borderRadius: "0.625rem",
  padding: "0.75rem 1rem",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};

function FormField({
  id,
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
      <label htmlFor={id} style={{ fontSize: "0.8125rem", fontWeight: 500, color: color.textMuted }}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={inputStyle}
      />
    </div>
  );
}

function AddressCard({ label, lines }: { label: string; lines: string[] }) {
  return (
    <address
      style={{
        background: color.white,
        border: `1px solid ${color.border}`,
        borderRadius: "1rem",
        padding: "2rem",
        fontStyle: "normal",
      }}
    >
      <h3
        style={{
          fontSize: "0.8125rem",
          fontWeight: 600,
          color: color.textMuted,
          letterSpacing: "0.08em",
          textTransform: "uppercase" as const,
          margin: "0 0 1rem",
        }}
      >
        {label}
      </h3>
      <p style={{ fontSize: "0.9375rem", color: color.textMuted, lineHeight: 1.8, margin: 0 }}>
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    </address>
  );
}