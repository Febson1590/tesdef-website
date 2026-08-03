"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { PROGRAMME_CATEGORIES } from "@/lib/data";

const PROGRAMME_INTERESTS = PROGRAMME_CATEGORIES;

const MAX = { name: 120, email: 160, phone: 40, skills: 300, message: 4000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function VolunteerPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", skills: "", message: "" });
  const [interests, setInterests] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function toggleInterest(value: string) {
    setInterests((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email)) e.email = "Please enter a valid email address.";
    if (!form.message.trim()) e.message = "Please tell us a little about yourself.";
    if (!consent) e.consent = "Please provide your consent to continue.";
    setErrors(e);
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    const found = validate();
    if (Object.keys(found).length > 0) {
      document.getElementById(`vol-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/forms/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, interests: interests.join(", ") }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputCls = "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-ink placeholder-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <>
      <section className="bg-forest py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">Volunteer</p>
            <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Volunteer with TESDEF</h1>
            <p className="mt-5 text-lg text-white/70">
              Bring your skills, energy, and time to support our work with communities.
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
                <h2 className="font-display text-2xl font-bold text-forest">Application received</h2>
                <p className="mt-3 text-muted">Thank you for your interest in volunteering with TESDEF. We will review your application and be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="vol-name" className="mb-1.5 block text-sm font-semibold text-forest">Full name <span className="text-red-500">*</span></label>
                    <input id="vol-name" name="name" type="text" required maxLength={MAX.name} autoComplete="name"
                      aria-invalid={!!errors.name} aria-describedby={errors.name ? "vol-name-err" : undefined}
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputCls} placeholder="Your full name" />
                    {errors.name && <p id="vol-name-err" role="alert" className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="vol-email" className="mb-1.5 block text-sm font-semibold text-forest">Email address <span className="text-red-500">*</span></label>
                    <input id="vol-email" name="email" type="email" required maxLength={MAX.email} autoComplete="email" inputMode="email"
                      aria-invalid={!!errors.email} aria-describedby={errors.email ? "vol-email-err" : undefined}
                      value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputCls} placeholder="you@example.com" />
                    {errors.email && <p id="vol-email-err" role="alert" className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="vol-phone" className="mb-1.5 block text-sm font-semibold text-forest">Phone number</label>
                  <input id="vol-phone" name="phone" type="tel" maxLength={MAX.phone} autoComplete="tel"
                    value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputCls} placeholder="+[country code] phone number" />
                </div>
                <div>
                  <label htmlFor="vol-skills" className="mb-1.5 block text-sm font-semibold text-forest">Your skills and expertise</label>
                  <input id="vol-skills" name="skills" type="text" maxLength={MAX.skills}
                    value={form.skills} onChange={(e) => setForm({ ...form, skills: e.target.value })}
                    className={inputCls} placeholder="e.g. web development, teaching, health, engineering" />
                </div>

                <fieldset>
                  <legend className="mb-2 block text-sm font-semibold text-forest">Programme areas you are interested in</legend>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {PROGRAMME_INTERESTS.map((p) => (
                      <label key={p} className="flex items-start gap-2.5 rounded-xl border border-black/10 p-3 text-sm text-ink">
                        <input type="checkbox" checked={interests.includes(p)} onChange={() => toggleInterest(p)}
                          className="mt-0.5 h-4 w-4 flex-none rounded border-black/30 text-primary focus:ring-2 focus:ring-primary/30" />
                        <span>{p}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="vol-message" className="mb-1.5 block text-sm font-semibold text-forest">Tell us about yourself <span className="text-red-500">*</span></label>
                  <textarea id="vol-message" name="message" required rows={5} maxLength={MAX.message}
                    aria-invalid={!!errors.message} aria-describedby={errors.message ? "vol-message-err" : undefined}
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputCls} resize-none`} placeholder="Why do you want to volunteer with TESDEF? What can you contribute?" />
                  {errors.message && <p id="vol-message-err" role="alert" className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>

                <div>
                  <label htmlFor="vol-consent" className="flex items-start gap-3 text-sm text-muted">
                    <input id="vol-consent" name="consent" type="checkbox" checked={consent}
                      aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "vol-consent-err" : undefined}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 flex-none rounded border-black/30 text-primary focus:ring-2 focus:ring-primary/30" />
                    <span>I consent to TESDEF using the information provided to respond to my application. <span className="text-red-500">*</span></span>
                  </label>
                  {errors.consent && <p id="vol-consent-err" role="alert" className="mt-1 text-xs text-red-600">{errors.consent}</p>}
                </div>

                {status === "error" && (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">Something went wrong. Please try again.</p>
                )}
                <button type="submit" disabled={status === "loading"}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-white shadow-sm transition-colors hover:bg-forest disabled:cursor-not-allowed disabled:opacity-60">
                  {status === "loading" ? "Submitting…" : "Submit application"}
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
