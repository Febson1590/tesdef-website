import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FOCUS_AREAS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "How TESDEF pursues impact across environmental sustainability, youth empowerment, digital inclusion, and community development — through community-led, evidence-based work.",
};

const APPROACH = [
  {
    title: "Community-led",
    description:
      "We work with communities as partners so that they lead, own and sustain the change — with particular attention to young people, women and vulnerable groups.",
  },
  {
    title: "Evidence-based",
    description:
      "We aim to ground our programmes in research and community priorities, and to learn and adapt as we go.",
  },
  {
    title: "Transparent & accountable",
    description:
      "We are committed to reporting on our work openly and measuring our results as programmes are delivered.",
  },
];

export default function ImpactPage() {
  return (
    <>
      <section className="bg-forest py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">Our approach</p>
            <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Our Impact</h1>
            <p className="mt-5 text-lg text-white/70">
              TESDEF works to create resilient communities and lasting impact through
              community-led, evidence-based programmes.
            </p>
          </div>
        </Container>
      </section>

      {/* Areas of focus */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            label="Where we focus"
            title="Areas of focus"
            subtitle="TESDEF's work spans the following areas, pursued together with the communities we serve."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {FOCUS_AREAS.map((f) => (
              <div key={f.title} className="rounded-2xl border border-black/5 bg-offwhite p-5 text-center">
                <p className="text-sm font-semibold text-forest">{f.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="bg-mint py-16 sm:py-20">
        <Container>
          <SectionHeading label="How we work" title="Our approach to impact" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {APPROACH.map((a) => (
              <div key={a.title} className="rounded-2xl border border-black/5 bg-white p-8">
                <h3 className="font-display text-lg font-bold text-forest">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Measuring our impact */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold text-forest sm:text-3xl">Measuring Our Impact</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              As TESDEF&apos;s programmes are delivered, verified results and progress reports will be
              published here to ensure transparency and accountability.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
