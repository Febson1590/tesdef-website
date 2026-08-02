import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TEAM, IMPACT_STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About TESDEF",
  description:
    "Learn about the Tamarakuro Environmental and Sustainable Development Foundation — our mission, vision, values, and the team driving change in the Niger Delta.",
};

const CORE_VALUES = [
  { title: "Community First", description: "Every decision is made in service of the communities we exist to support. Their priorities are our priorities." },
  { title: "Integrity", description: "We hold ourselves to the highest standards of transparency, honesty, and accountability in everything we do." },
  { title: "Innovation", description: "We embrace creative, context-sensitive solutions and continuously learn from experience." },
  { title: "Equity", description: "We actively work to ensure that the most marginalised members of our communities share fully in our programmes." },
  { title: "Sustainability", description: "We design for long-term impact, building capacity that endures beyond the life of any single project." },
  { title: "Partnership", description: "We achieve more together. We build honest, mutual partnerships with communities, government, civil society, and the private sector." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">Who we are</p>
            <h1 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              About TESDEF
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              The Tamarakuro Environmental and Sustainable Development Foundation (TESDEF) is a Nigerian non-profit organisation dedicated to protecting the natural environment and improving lives across Gbaramatu Kingdom, the Niger Delta, and beyond.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission, Vision, Purpose */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                label: "Our Mission",
                text: "To promote environmental sustainability, youth empowerment, digital inclusion, innovation, and community development through evidence-based programmes that create lasting change in the Niger Delta and across Nigeria.",
              },
              {
                label: "Our Vision",
                text: "A Niger Delta where communities thrive in a healthy environment, young people have equal access to opportunity, and innovation drives inclusive and sustainable development.",
              },
              {
                label: "Our Purpose",
                text: "To be the trusted bridge between community need and practical solutions — listening deeply, acting boldly, and measuring rigorously to ensure that every programme we run genuinely transforms lives.",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-black/5 bg-offwhite p-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.10em] text-primary">{item.label}</p>
                <p className="text-base leading-relaxed text-ink">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="bg-offwhite py-16 sm:py-20">
        <Container>
          <SectionHeading
            label="What guides us"
            title="Core values"
            subtitle="Six principles that shape every decision, every programme, and every relationship TESDEF builds."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((v, i) => (
              <div key={v.title} className="rounded-2xl border border-black/5 bg-white p-6">
                <span className="mb-3 block font-display text-3xl font-extrabold text-mint">0{i + 1}</span>
                <h3 className="font-display text-lg font-bold text-forest">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Impact stats */}
      <section className="bg-primary py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {IMPACT_STATS.map((s) => (
              <div key={s.id} className="text-center">
                <span className="font-display text-3xl font-extrabold text-white">{s.value}</span>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            label="Our people"
            title="The TESDEF team"
            subtitle="A dedicated group of professionals and community leaders who bring the foundation's mission to life every day."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {TEAM.filter((m) => m.published).map((m) => (
              <div key={m.id} className="flex flex-col items-center rounded-2xl border border-black/5 bg-offwhite p-6 text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-mint text-2xl font-bold text-primary">
                  {m.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <h3 className="font-display text-base font-bold text-forest">{m.name}</h3>
                <p className="mt-1 text-xs text-muted">{m.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder CTA */}
      <section className="bg-mint py-12 sm:py-16">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex-1">
              <h2 className="font-display text-xl font-bold text-forest sm:text-2xl">
                Meet the founder
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Learn about the journey that led Tamarakuro to found TESDEF and the vision that continues to guide the foundation.
              </p>
            </div>
            <Button href="/founder" variant="primary" size="lg">
              Read the founder's story
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
