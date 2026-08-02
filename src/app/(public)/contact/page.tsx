"use client";

import { useState } from "react";
import { Container } from "@/components/Container";

const CONTACT_INFO = [
  {
    label: "General enquiries",
    value: "info@tesdef.org",
    icon: (
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    label: "Partnerships",
    value: "partnerships@tesdef.org",
    icon: (
      <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>
    ),
  },
  {
    label: "Media & press",
    value: "media@tesdef.org",
    icon: (
      <><path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14" /><rect x="1" y="6" width="15" height="12" rx="2" /></>
    ),
  },
  {
    label: "Location",
    value: "Warri, Delta State, Nigeria",
    icon: (
      <><path d="M12 22c5-3.5 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 3 8.5 8 12Z" /><path d="M12 11.5v.01" /></>
    ),
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
                  <p className="mt-3 text-muted">Thank you for getting in touch. We will respond within three working days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="con-name" className="mb-1.5 block text-sm font-semibold text-forest">Full name <span className="text-red-500">*</span></label>
                      <input id="con-name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                    </div>
                    <div>
                      <label htmlFor="con-email" className="mb-1.5 block text-sm font-semibold text-forest">Email <span className="text-red-500">*</span></label>
                      <input id="con-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="con-subject" className="mb-1.5 block text-sm font-semibold text-forest">Subject</label>
                    <input id="con-subject" type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div>
                    <label htmlFor="con-message" className="mb-1.5 block text-sm font-semibold text-forest">Message <span className="text-red-500">*</span></label>
                    <textarea id="con-message" required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full resize-none rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                  {status === "error" && (
                    <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">Something went wrong. Please try again or email us directly.</p>
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
              {CONTACT_INFO.map((c) => (
                <div key={c.label} className="flex items-start gap-3 rounded-xl border border-black/5 p-4">
                  <div className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-mint text-primary">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {c.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted">{c.label}</p>
                    <p className="text-sm font-medium text-ink">{c.value}</p>
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
