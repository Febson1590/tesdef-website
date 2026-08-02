import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMPACT_STATS, PROJECTS, TESTIMONIALS } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Impact",
  description: "TESDEF's measurable impact across environmental sustainability, youth empowerment, digital inclusion, and community development.",
};

export default function ImpactPage() {
  const totalRaised = PROJECTS.reduce((sum, p) => sum + p.amountRaised, 0);
  const totalSupporters = PROJECTS.reduce((sum, p) => sum + p.supporterCount, 0);

  return (
    <>
      <section className="bg-forest py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">Results</p>
            <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Our Impact</h1>
            <p className="mt-5 text-lg text-white/70">
              A decade of community-led work — measured, evaluated, and shared openly.
            </p>
          </div>
        </Container>
      </section>

      {/* Core stats */}
      <section className="bg-primary py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {IMPACT_STATS.map((s) => (
              <div key={s.id} className="rounded-2xl bg-white/10 p-6 text-center">
                <span className="font-display text-3xl font-extrabold text-white">{s.value}</span>
                <p className="mt-1.5 text-xs uppercase tracking-wide text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Financial */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading label="Financial impact" title="Resources mobilised for communities" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { label: "Total raised across all projects", value: formatCurrency(totalRaised) },
              { label: "Individual supporters", value: totalSupporters.toLocaleString() },
              { label: "Active projects in 2026", value: PROJECTS.filter((p) => p.status === "active").length.toString() },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-black/5 bg-offwhite p-8 text-center">
                <span className="font-display text-3xl font-extrabold text-forest">{item.value}</span>
                <p className="mt-2 text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stories */}
      <section className="bg-mint py-16 sm:py-20">
        <Container>
          <SectionHeading label="Human stories" title="Impact in their own words" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.filter((t) => t.published).map((t) => (
              <figure key={t.id} className="rounded-2xl border border-black/5 bg-white p-6">
                <blockquote className="text-sm leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 border-t border-black/5 pt-4">
                  <p className="font-semibold text-forest">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
