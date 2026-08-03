"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { PROJECTS } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

const AMOUNTS = [500, 1000, 2500, 5000, 10000, 25000];

export default function DonatePage() {
  const [amount, setAmount] = useState<number | "">(5000);
  const [custom, setCustom] = useState("");
  const [projectId, setProjectId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const finalAmount = custom ? Number(custom) : Number(amount);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!finalAmount || finalAmount < 100) return;
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

  const activeProjects = PROJECTS.filter((p) => p.status === "active");

  return (
    <>
      <section className="bg-forest py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">Support our work</p>
            <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Make a donation</h1>
            <p className="mt-5 text-lg text-white/70">
              Your support helps TESDEF advance its mission across its areas of focus. No payment processing is live yet — this page records pledges.
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
                <form onSubmit={handleSubmit} className="space-y-6">
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
                        <input id="custom-amount" type="number" min="100" value={custom}
                          onChange={(e) => { setCustom(e.target.value); setAmount(""); }}
                          className="w-full rounded-xl border border-black/15 bg-white py-3 pl-9 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="0" />
                      </div>
                    </div>
                  </div>

                  {/* Project selection */}
                  <div>
                    <label htmlFor="donate-project" className="mb-1.5 block text-sm font-semibold text-forest">Allocate to a specific project (optional)</label>
                    <select id="donate-project" value={projectId} onChange={(e) => setProjectId(e.target.value)}
                      className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                      <option value="">General fund — where most needed</option>
                      {activeProjects.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}
                    </select>
                  </div>

                  {/* Donor info */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="donor-name" className="mb-1.5 block text-sm font-semibold text-forest">Your name</label>
                      <input id="donor-name" type="text" value={name} onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                    </div>
                    <div>
                      <label htmlFor="donor-email" className="mb-1.5 block text-sm font-semibold text-forest">Email address</label>
                      <input id="donor-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="donor-message" className="mb-1.5 block text-sm font-semibold text-forest">Leave a message (optional)</label>
                    <textarea id="donor-message" rows={3} value={message} onChange={(e) => setMessage(e.target.value)}
                      className="w-full resize-none rounded-xl border border-black/15 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>

                  {status === "error" && (
                    <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">Something went wrong. Please try again.</p>
                  )}

                  <button type="submit" disabled={status === "loading" || !finalAmount}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-white transition-colors hover:bg-forest disabled:cursor-not-allowed disabled:opacity-60">
                    {status === "loading" ? "Processing…" : `Pledge ${finalAmount ? formatCurrency(finalAmount) : "donation"}`}
                  </button>
                  <p className="text-center text-xs text-muted">
                    ⚠ Payment processing is not yet live. Your pledge will be recorded and we will contact you when it is activated.
                  </p>
                </form>
              )}
            </div>

            {/* Projects sidebar */}
            <aside className="space-y-4">
              <h2 className="font-display text-lg font-bold text-forest">Our projects</h2>
              <p className="text-xs text-muted">Sample content — pending client confirmation.</p>
              {activeProjects.slice(0, 4).map((p) => (
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
