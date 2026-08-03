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

export default function PartnerPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ orgName: "", contactName: "", email: "", phone: "", type: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
                <p className="mt-3 text-muted">Thank you for your interest in partnering with TESDEF. Our partnerships team will contact you within five working days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="org-name" className="mb-1.5 block text-sm font-semibold text-forest">Organisation name <span className="text-red-500">*</span></label>
                    <input id="org-name" type="text" required value={form.orgName} onChange={(e) => setForm({ ...form, orgName: e.target.value })}
                      className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold text-forest">Contact name <span className="text-red-500">*</span></label>
                    <input id="contact-name" type="text" required value={form.contactName} onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                      className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="part-email" className="mb-1.5 block text-sm font-semibold text-forest">Email <span className="text-red-500">*</span></label>
                    <input id="part-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div>
                    <label htmlFor="part-phone" className="mb-1.5 block text-sm font-semibold text-forest">Phone</label>
                    <input id="part-phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                </div>
                <div>
                  <label htmlFor="part-type" className="mb-1.5 block text-sm font-semibold text-forest">Partnership type</label>
                  <select id="part-type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option value="">Select a type…</option>
                    {PARTNER_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="part-message" className="mb-1.5 block text-sm font-semibold text-forest">Tell us about the partnership you have in mind <span className="text-red-500">*</span></label>
                  <textarea id="part-message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm resize-none focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
                {status === "error" && (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">Something went wrong. Please try again or email partnerships@tesdef.org.</p>
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
