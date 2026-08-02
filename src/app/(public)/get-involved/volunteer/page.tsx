"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { Container } from "@/components/Container";

export default function VolunteerPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", skills: "", interests: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/forms/volunteer", {
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
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">Volunteer</p>
            <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Volunteer with TESDEF</h1>
            <p className="mt-5 text-lg text-white/70">
              Bring your skills, energy, and time to the communities that need them most.
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
                <p className="mt-3 text-muted">Thank you for applying to volunteer with TESDEF. We will review your application and get back to you within five working days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="vol-name" className="mb-1.5 block text-sm font-semibold text-forest">Full name <span className="text-red-500">*</span></label>
                    <input id="vol-name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-ink placeholder-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="vol-email" className="mb-1.5 block text-sm font-semibold text-forest">Email address <span className="text-red-500">*</span></label>
                    <input id="vol-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-ink placeholder-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="vol-phone" className="mb-1.5 block text-sm font-semibold text-forest">Phone number</label>
                  <input id="vol-phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-ink placeholder-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="+234 800 000 0000" />
                </div>
                <div>
                  <label htmlFor="vol-skills" className="mb-1.5 block text-sm font-semibold text-forest">Your skills and expertise</label>
                  <input id="vol-skills" type="text" value={form.skills} onChange={(e) => setForm({ ...form, skills: e.target.value })}
                    className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-ink placeholder-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. web development, teaching, health, engineering" />
                </div>
                <div>
                  <label htmlFor="vol-interests" className="mb-1.5 block text-sm font-semibold text-forest">Programmes you are interested in</label>
                  <input id="vol-interests" type="text" value={form.interests} onChange={(e) => setForm({ ...form, interests: e.target.value })}
                    className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-ink placeholder-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. reforestation, digital skills, health outreach" />
                </div>
                <div>
                  <label htmlFor="vol-message" className="mb-1.5 block text-sm font-semibold text-forest">Tell us about yourself <span className="text-red-500">*</span></label>
                  <textarea id="vol-message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-ink placeholder-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none" placeholder="Why do you want to volunteer with TESDEF? What can you contribute?" />
                </div>
                {status === "error" && (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">Something went wrong. Please try again or email us directly at info@tesdef.org.</p>
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
