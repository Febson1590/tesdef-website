import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ORG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Founder's Story",
  description:
    "A statement from Tamarakuro Tonfawei, Founder of the Tamarakuro Environmental and Sustainable Development Foundation (TESDEF).",
};

// ─────────────────────────────────────────────────────────────────────────────
// CLIENT CONFIRMATION REQUIRED (do not surface publicly):
// The founder's official statement below contains the phrase "Tonfawei
// Environmental and Sustainable Development Foundation", whereas the official
// organisation name used across this site is the "Tamarakuro Environmental and
// Sustainable Development Foundation". The statement is shown verbatim as
// supplied by the client; this exact wording requires client confirmation.
// See also the note in src/lib/data.ts (ORG.founderStatement).
// ─────────────────────────────────────────────────────────────────────────────

export default function FounderPage() {
  return (
    <>
      <section className="bg-forest py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">The founder</p>
            <h1 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {ORG.founderName}
            </h1>
            <p className="mt-4 text-lg text-white/70">Founder, {ORG.shortName}</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 flex h-32 w-32 items-center justify-center rounded-full bg-mint text-4xl font-bold text-primary mx-auto sm:h-40 sm:w-40 sm:text-5xl">
              TT
            </div>

            <figure>
              <blockquote className="border-l-4 border-fresh pl-5 sm:pl-6">
                <p className="text-lg leading-relaxed text-ink sm:text-xl">
                  &ldquo;{ORG.founderStatement}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-display font-bold text-forest">{ORG.founderName}</p>
                <p className="text-sm text-muted">
                  Founder, {ORG.name} ({ORG.shortName})
                </p>
              </figcaption>
            </figure>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/about" variant="secondary" size="lg">About TESDEF</Button>
              <Button href="/contact" variant="primary" size="lg">Contact the foundation</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
