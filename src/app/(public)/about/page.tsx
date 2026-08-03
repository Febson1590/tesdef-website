import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ORG, CORE_VALUES, FOCUS_AREAS, TEAM } from "@/lib/data";

export const metadata: Metadata = {
  title: "About TESDEF",
  description:
    "About the Tamarakuro Environmental and Sustainable Development Foundation (TESDEF) — our vision, mission, purpose, core values and areas of focus.",
};

export default function AboutPage() {
  const team = TEAM.filter((m) => m.published);

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
              The {ORG.name} ({ORG.shortName}) advances environmental sustainability,
              youth empowerment, digital innovation and inclusive community development.
              Rooted in Gbaramatu Kingdom and the Niger Delta, the Foundation works with
              communities across Nigeria and beyond.
            </p>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-black/5 bg-offwhite p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.10em] text-primary">Our Vision</p>
              <p className="text-base leading-relaxed text-ink">{ORG.vision}</p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-offwhite p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.10em] text-primary">Our Mission</p>
              <p className="text-base leading-relaxed text-ink">{ORG.mission}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Purpose */}
      <section className="bg-offwhite py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading label="Why we exist" title="Our purpose" align="left" />
            <div className="mt-6 space-y-4">
              {ORG.purpose.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-ink">{para}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            label="What guides us"
            title="Core values"
            subtitle="Eight principles that shape every decision, every programme, and every relationship TESDEF builds."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((v, i) => (
              <div key={v.title} className="rounded-2xl border border-black/5 bg-offwhite p-6">
                <span className="mb-3 block font-display text-3xl font-extrabold text-mint">0{i + 1}</span>
                <h3 className="font-display text-lg font-bold text-forest">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Areas of focus */}
      <section className="bg-primary py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">What we focus on</p>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Our areas of focus</h2>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {FOCUS_AREAS.map((f) => (
              <span
                key={f.title}
                className="rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium text-white"
              >
                {f.title}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            label="Our people"
            title="Leadership"
            subtitle="TESDEF was founded by Tamarakuro Tonfawei. Additional team profiles will be added as they are confirmed."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {team.map((m) => (
              <div key={m.id} className="flex w-full max-w-xs flex-col items-center rounded-2xl border border-black/5 bg-offwhite p-6 text-center">
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
                Learn about the vision behind TESDEF and its roots in Gbaramatu Kingdom and the Niger Delta.
              </p>
            </div>
            <Button href="/founder" variant="primary" size="lg">
              Read the founder&apos;s story
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
