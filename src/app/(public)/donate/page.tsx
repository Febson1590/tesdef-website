"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { PROJECTS } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

const AMOUNTS = [500, 1000, 2500, 5000, 10000, 25000];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function DonatePage() {
  const [amount, setAmount] = useState<number | "">(5000);
  const [custom, setCustom] = useState("");
  const [projectId, setProjectId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const finalAmount = custom ? Number(custom) : Number(amount);

  function validate() {
    const e: Record<string, string> = {};
    if (!finalAmount || finalAmount < 100) e.amount = "Please choose or enter an amount of ₦100 or more.";
    if (!name.trim()) e.name = "Please enter your name.";
    if (!email.trim()) e.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email)) e.email = "Please enter a valid email address.";
    if (!consent) e.consent = "Please provide your consent to continue.";
    setErrors(e);
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    const found = validate();
    if (Object.keys(found).length > 0) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/forms/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: finalAmount, projectId, name, email, message }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const initiatives = PROJECTS.filter((p) => p.published);

  return (
    <>
      <section className="bg-forest py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">Support our work</p>
            <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Support TESDEF</h1>
            <p className="mt-5 text-lg text-white/70">
              Register your interest in supporting TESDEF&apos;s work. Payment processing is not yet live — this records your pledge, and we will be in touch when it is activated.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_340px]">
            {/* Form */}
            <div>
              {status === "success" ? (
                <div className="rounded-2xl bg-mint p-8 text-center">
                  <svg className="mx-auto mb-4 h-12 w-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h2 className="font-display text-2xl font-bold text-forest">Thank you!</h2>
                  <p className="mt-3 text-muted">Your pledge of {formatCurrency(finalAmount)} has been recorded. We will contact you when payment processing goes live.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Amount selection */}
                  <div>
                    <p className="mb-3 text-sm font-semibold text-forest">Choose an amount (₦)</p>
                    <div className="flex flex-wrap gap-3">
                      {AMOUNTS.map((a) => (
                        <button key={a} type="button"
                          onClick={() => { setAmount(a); setCustom(""); }}
                          className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${amount === a && !custom ? "border-primary bg-primary text-white" : "border-black/15 text-ink hover:border-primary hover:text-primary"}`}>
                          ₦{a.toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <div className="mt-3">
                      <label htmlFor="custom-amount" className="mb-1.5 block text-sm font-medium text-muted">Or enter a custom amount</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted">₦</span>
                        <input id="custom-amount" type="number" min="100" inputMode="numeric" value={custom}
                          onChange={(e) => { setCustom(e.target.value); setAmount(""); }}
                          className="w-full rounded-xl border border-black/15 bg-white py-3 pl-9 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="0" />
                      </div>
                    </div>
                    {errors.amount && <p role="alert" className="mt-1 text-xs text-red-600">{errors.amount}</p>}
                  </div>

                  {/* Initiative selection */}
                  {initiatives.length > 0 && (
                    <div>
                      <label htmlFor="donate-project" className="mb-1.5 block text-sm font-semibold text-forest">Direct your support to an initiative (optional)</label>
                      <select id="donate-project" value={projectId} onChange={(e) => setProjectId(e.target.value)}
                        className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                        <option value="">Where most needed</option>
                        {initiatives.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}
                      </select>
                    </div>
                  )}

                  {/* Donor info */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="donor-name" className="mb-1.5 block text-sm font-semibold text-forest">Your name <span className="text-red-500">*</span></label>
                      <input id="donor-name" type="text" required maxLength={120} autoComplete="name" value={name}
                        aria-invalid={!!errors.name} onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                      {errors.name && <p role="alert" className="mt-1 text-xs text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="donor-email" className="mb-1.5 block text-sm font-semibold text-forest">Email address <span className="text-red-500">*</span></label>
                      <input id="donor-email" type="email" required maxLength={160} autoComplete="email" inputMode="email" value={email}
                        aria-invalid={!!errors.email} onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                      {errors.email && <p role="alert" className="mt-1 text-xs text-red-600">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="donor-message" className="mb-1.5 block text-sm font-semibold text-forest">Leave a message (optional)</label>
                    <textarea id="donor-message" rows={3} maxLength={2000} value={message} onChange={(e) => setMessage(e.target.value)}
                      className="w-full resize-none rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>

                  <div>
                    <label htmlFor="donor-consent" className="flex items-start gap-3 text-sm text-muted">
                      <input id="donor-consent" type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)}
                        aria-invalid={!!errors.consent}
                        className="mt-0.5 h-4 w-4 flex-none rounded border-black/30 text-primary focus:ring-2 focus:ring-primary/30" />
                      <span>I consent to TESDEF using the information provided to respond to my pledge. <span className="text-red-500">*</span></span>
                    </label>
                    {errors.consent && <p role="alert" className="mt-1 text-xs text-red-600">{errors.consent}</p>}
                  </div>

                  {status === "error" && (
                    <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">Something went wrong. Please try again.</p>
                  )}

                  <button type="submit" disabled={status === "loading"}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-white transition-colors hover:bg-forest disabled:cursor-not-allowed disabled:opacity-60">
                    {status === "loading" ? "Processing…" : `Pledge ${finalAmount ? formatCurrency(finalAmount) : "your support"}`}
                  </button>
                  <p className="text-center text-xs text-muted">
                    Payment processing is not yet live. Your pledge will be recorded and we will contact you when it is activated.
                  </p>
                </form>
              )}
            </div>

            {/* Initiatives sidebar */}
            <aside className="space-y-4">
              <h2 className="font-display text-lg font-bold text-forest">Proposed initiatives</h2>
              {initiatives.slice(0, 4).map((p) => (
                <div key={p.id} className="rounded-xl border border-black/5 bg-offwhite p-4">
                  <p className="text-sm font-semibold text-forest">{p.title}</p>
                  <p className="mt-1 text-xs text-muted">{p.programmeName}</p>
                </div>
              ))}
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
