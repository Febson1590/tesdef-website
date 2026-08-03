"use client";

import { useState } from "react";
import { Container } from "@/components/Container";

const PARTNER_TYPES = [
  "Corporate partnership",
  "Government / public sector",
  "International NGO / foundation",
  "Research / academic institution",
  "Civil society organisation",
  "Media partnership",
  "Other",
];

const MAX = { orgName: 160, contactName: 120, email: 160, phone: 40, message: 4000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function PartnerPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ orgName: "", contactName: "", email: "", phone: "", type: "", message: "" });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.orgName.trim()) e.orgName = "Please enter your organisation name.";
    if (!form.contactName.trim()) e.contactName = "Please enter a contact name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email)) e.email = "Please enter a valid email address.";
    if (!form.message.trim()) e.message = "Please describe the partnership you have in mind.";
    if (!consent) e.consent = "Please provide your consent to continue.";
    setErrors(e);
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    const found = validate();
    if (Object.keys(found).length > 0) {
      document.getElementById(`part-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/forms/partner", {
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
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">Partnerships</p>
            <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Partner with TESDEF</h1>
            <p className="mt-5 text-lg text-white/70">
              Strategic partnerships that amplify impact. Let&apos;s explore what we can build together.
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
                <h2 className="font-display text-2xl font-bold text-forest">Enquiry received</h2>
                <p className="mt-3 text-muted">Thank you for your interest in partnering with TESDEF. Our team will be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="part-orgName" className="mb-1.5 block text-sm font-semibold text-forest">Organisation name <span className="text-red-500">*</span></label>
                    <input id="part-orgName" name="orgName" type="text" required maxLength={MAX.orgName} autoComplete="organization"
                      aria-invalid={!!errors.orgName} aria-describedby={errors.orgName ? "part-orgName-err" : undefined}
                      value={form.orgName} onChange={(e) => setForm({ ...form, orgName: e.target.value })} className={inputCls} />
                    {errors.orgName && <p id="part-orgName-err" role="alert" className="mt-1 text-xs text-red-600">{errors.orgName}</p>}
                  </div>
                  <div>
                    <label htmlFor="part-contactName" className="mb-1.5 block text-sm font-semibold text-forest">Contact name <span className="text-red-500">*</span></label>
                    <input id="part-contactName" name="contactName" type="text" required maxLength={MAX.contactName} autoComplete="name"
                      aria-invalid={!!errors.contactName} aria-describedby={errors.contactName ? "part-contactName-err" : undefined}
                      value={form.contactName} onChange={(e) => setForm({ ...form, contactName: e.target.value })} className={inputCls} />
                    {errors.contactName && <p id="part-contactName-err" role="alert" className="mt-1 text-xs text-red-600">{errors.contactName}</p>}
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="part-email" className="mb-1.5 block text-sm font-semibold text-forest">Email <span className="text-red-500">*</span></label>
                    <input id="part-email" name="email" type="email" required maxLength={MAX.email} autoComplete="email" inputMode="email"
                      aria-invalid={!!errors.email} aria-describedby={errors.email ? "part-email-err" : undefined}
                      value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
                    {errors.email && <p id="part-email-err" role="alert" className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="part-phone" className="mb-1.5 block text-sm font-semibold text-forest">Phone</label>
                    <input id="part-phone" name="phone" type="tel" maxLength={MAX.phone} autoComplete="tel"
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} placeholder="Optional" />
                  </div>
                </div>
                <div>
                  <label htmlFor="part-type" className="mb-1.5 block text-sm font-semibold text-forest">Partnership type</label>
                  <select id="part-type" name="type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className={inputCls}>
                    <option value="">Select a type…</option>
                    {PARTNER_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="part-message" className="mb-1.5 block text-sm font-semibold text-forest">Tell us about the partnership you have in mind <span className="text-red-500">*</span></label>
                  <textarea id="part-message" name="message" required rows={5} maxLength={MAX.message}
                    aria-invalid={!!errors.message} aria-describedby={errors.message ? "part-message-err" : undefined}
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputCls} resize-none`} />
                  {errors.message && <p id="part-message-err" role="alert" className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>

                <div>
                  <label htmlFor="part-consent" className="flex items-start gap-3 text-sm text-muted">
                    <input id="part-consent" name="consent" type="checkbox" checked={consent}
                      aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "part-consent-err" : undefined}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 flex-none rounded border-black/30 text-primary focus:ring-2 focus:ring-primary/30" />
                    <span>I consent to TESDEF using the information provided to respond to my enquiry. <span className="text-red-500">*</span></span>
                  </label>
                  {errors.consent && <p id="part-consent-err" role="alert" className="mt-1 text-xs text-red-600">{errors.consent}</p>}
                </div>

                {status === "error" && (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">Something went wrong. Please try again.</p>
                )}
                <button type="submit" disabled={status === "loading"}
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-7 text-base font-semibold text-white transition-colors hover:bg-forest disabled:cursor-not-allowed disabled:opacity-60">
                  {status === "loading" ? "Submitting…" : "Send enquiry"}
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
