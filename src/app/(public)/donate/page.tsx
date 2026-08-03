"use client";

import { useState } from "react";
import { Container } from "@/components/Container";

const SUPPORT_TYPES = [
  "Financial support",
  "Volunteering",
  "Partnership",
  "Donation of goods or equipment",
  "Skills or expertise",
  "Other",
];

const MAX = { name: 120, email: 160, country: 80, message: 4000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SupportPage() {
  const [form, setForm] = useState({ name: "", email: "", country: "", supportType: "", message: "" });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email)) e.email = "Please enter a valid email address.";
    if (!consent) e.consent = "Please provide your consent to continue.";
    setErrors(e);
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    const found = validate();
    if (Object.keys(found).length > 0) {
      document.getElementById(`sup-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/forms/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputCls = "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <>
      <section className="bg-forest py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">Support our work</p>
            <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Support TESDEF</h1>
            <p className="mt-5 text-lg text-white/70">
              Register your interest in supporting TESDEF&apos;s work. Tell us how you would like to help and our team will be in touch.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            {status === "success" ? (
              <div className="rounded-2xl bg-mint p-8 text-center">
                <svg className="mx-auto mb-4 h-12 w-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h2 className="font-display text-2xl font-bold text-forest">Thank you!</h2>
                <p className="mt-3 text-muted">Your interest has been registered. The TESDEF team will be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="sup-name" className="mb-1.5 block text-sm font-semibold text-forest">Full name <span className="text-red-500">*</span></label>
                    <input id="sup-name" name="name" type="text" required maxLength={MAX.name} autoComplete="name"
                      aria-invalid={!!errors.name} aria-describedby={errors.name ? "sup-name-err" : undefined}
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
                    {errors.name && <p id="sup-name-err" role="alert" className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="sup-email" className="mb-1.5 block text-sm font-semibold text-forest">Email <span className="text-red-500">*</span></label>
                    <input id="sup-email" name="email" type="email" required maxLength={MAX.email} autoComplete="email" inputMode="email"
                      aria-invalid={!!errors.email} aria-describedby={errors.email ? "sup-email-err" : undefined}
                      value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
                    {errors.email && <p id="sup-email-err" role="alert" className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="sup-country" className="mb-1.5 block text-sm font-semibold text-forest">Country</label>
                  <input id="sup-country" name="country" type="text" maxLength={MAX.country} autoComplete="country-name"
                    value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className={inputCls} placeholder="Optional" />
                </div>
                <div>
                  <label htmlFor="sup-supportType" className="mb-1.5 block text-sm font-semibold text-forest">Type of support</label>
                  <select id="sup-supportType" name="supportType" value={form.supportType} onChange={(e) => setForm({ ...form, supportType: e.target.value })} className={inputCls}>
                    <option value="">Select a type…</option>
                    {SUPPORT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="sup-message" className="mb-1.5 block text-sm font-semibold text-forest">Message</label>
                  <textarea id="sup-message" name="message" rows={5} maxLength={MAX.message}
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputCls} resize-none`}
                    placeholder="Tell us how you would like to support TESDEF" />
                </div>

                <div>
                  <label htmlFor="sup-consent" className="flex items-start gap-3 text-sm text-muted">
                    <input id="sup-consent" name="consent" type="checkbox" checked={consent}
                      aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "sup-consent-err" : undefined}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 flex-none rounded border-black/30 text-primary focus:ring-2 focus:ring-primary/30" />
                    <span>I consent to TESDEF using the information provided to respond to my enquiry. <span className="text-red-500">*</span></span>
                  </label>
                  {errors.consent && <p id="sup-consent-err" role="alert" className="mt-1 text-xs text-red-600">{errors.consent}</p>}
                </div>

                {status === "error" && (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">Something went wrong. Please try again.</p>
                )}
                <button type="submit" disabled={status === "loading"}
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-7 text-base font-semibold text-white transition-colors hover:bg-forest disabled:cursor-not-allowed disabled:opacity-60">
                  {status === "loading" ? "Submitting…" : "Register your interest"}
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
