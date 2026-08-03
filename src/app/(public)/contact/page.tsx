"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { CONTACT } from "@/lib/data";

const MAX = { name: 120, email: 160, subject: 160, message: 4000 };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email)) e.email = "Please enter a valid email address.";
    if (!form.message.trim()) e.message = "Please enter a message.";
    if (!consent) e.consent = "Please provide your consent to continue.";
    setErrors(e);
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    const found = validate();
    if (Object.keys(found).length > 0) {
      const first = document.getElementById(`con-${Object.keys(found)[0]}`);
      first?.focus();
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  // Build the list of verified contact details (empty ones are hidden).
  const details: { label: string; value: string; href?: string }[] = [];
  if (CONTACT.email) details.push({ label: "General enquiries", value: CONTACT.email, href: `mailto:${CONTACT.email}` });
  if (CONTACT.partnershipsEmail) details.push({ label: "Partnerships", value: CONTACT.partnershipsEmail, href: `mailto:${CONTACT.partnershipsEmail}` });
  if (CONTACT.mediaEmail) details.push({ label: "Media & press", value: CONTACT.mediaEmail, href: `mailto:${CONTACT.mediaEmail}` });
  if (CONTACT.phone) details.push({ label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s+/g, "")}` });
  if (CONTACT.address) details.push({ label: "Location", value: CONTACT.address });

  return (
    <>
      <section className="bg-forest py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">Reach out</p>
            <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Contact TESDEF</h1>
            <p className="mt-5 text-lg text-white/70">Questions, ideas, media enquiries, or just want to say hello — we would love to hear from you.</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_320px]">
            {/* Form */}
            <div>
              {status === "success" ? (
                <div className="rounded-2xl bg-mint p-8 text-center">
                  <svg className="mx-auto mb-4 h-12 w-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h2 className="font-display text-2xl font-bold text-forest">Message sent</h2>
                  <p className="mt-3 text-muted">Thank you for getting in touch. The TESDEF team will respond through the appropriate contact channel.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="con-name" className="mb-1.5 block text-sm font-semibold text-forest">Full name <span className="text-red-500">*</span></label>
                      <input id="con-name" name="name" type="text" required maxLength={MAX.name} autoComplete="name"
                        aria-invalid={!!errors.name} aria-describedby={errors.name ? "con-name-err" : undefined}
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                      {errors.name && <p id="con-name-err" role="alert" className="mt-1 text-xs text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="con-email" className="mb-1.5 block text-sm font-semibold text-forest">Email <span className="text-red-500">*</span></label>
                      <input id="con-email" name="email" type="email" required maxLength={MAX.email} autoComplete="email" inputMode="email"
                        aria-invalid={!!errors.email} aria-describedby={errors.email ? "con-email-err" : undefined}
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                      {errors.email && <p id="con-email-err" role="alert" className="mt-1 text-xs text-red-600">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="con-subject" className="mb-1.5 block text-sm font-semibold text-forest">Subject</label>
                    <input id="con-subject" name="subject" type="text" maxLength={MAX.subject}
                      value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div>
                    <label htmlFor="con-message" className="mb-1.5 block text-sm font-semibold text-forest">Message <span className="text-red-500">*</span></label>
                    <textarea id="con-message" name="message" required rows={6} maxLength={MAX.message}
                      aria-invalid={!!errors.message} aria-describedby={errors.message ? "con-message-err" : undefined}
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full resize-none rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                    {errors.message && <p id="con-message-err" role="alert" className="mt-1 text-xs text-red-600">{errors.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="con-consent" className="flex items-start gap-3 text-sm text-muted">
                      <input id="con-consent" name="consent" type="checkbox" checked={consent}
                        aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "con-consent-err" : undefined}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 h-4 w-4 flex-none rounded border-black/30 text-primary focus:ring-2 focus:ring-primary/30" />
                      <span>I consent to TESDEF using the information provided to respond to my enquiry. <span className="text-red-500">*</span></span>
                    </label>
                    {errors.consent && <p id="con-consent-err" role="alert" className="mt-1 text-xs text-red-600">{errors.consent}</p>}
                  </div>

                  {status === "error" && (
                    <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">Something went wrong. Please try again.</p>
                  )}
                  <button type="submit" disabled={status === "loading"}
                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-7 text-base font-semibold text-white transition-colors hover:bg-forest disabled:cursor-not-allowed disabled:opacity-60">
                    {status === "loading" ? "Sending…" : "Send message"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <aside className="space-y-5">
              <h2 className="font-display text-lg font-bold text-forest">Get in touch</h2>
              {details.length > 0 ? (
                details.map((c) => (
                  <div key={c.label} className="rounded-xl border border-black/5 p-4">
                    <p className="text-xs text-muted">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-medium text-ink hover:text-primary">{c.value}</a>
                    ) : (
                      <p className="text-sm font-medium text-ink">{c.value}</p>
                    )}
                  </div>
                ))
              ) : (
                <p className="rounded-xl border border-black/5 bg-offwhite p-4 text-sm leading-relaxed text-muted">
                  Complete the form and the TESDEF team will respond through the appropriate contact channel.
                </p>
              )}
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
