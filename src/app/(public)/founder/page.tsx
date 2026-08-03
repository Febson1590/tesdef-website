import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ORG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Founder's Story",
  description:
    "Tamarakuro Tonfawei is the founder of the Tamarakuro Environmental and Sustainable Development Foundation (TESDEF), rooted in Gbaramatu Kingdom and the Niger Delta.",
};

// ─────────────────────────────────────────────────────────────────────────────
// CLIENT CONFIRMATION REQUIRED:
// 1. The founder's full personal statement/story is not yet provided. The block
//    below is a clearly-labelled placeholder — do not invent biographical
//    details (education, dates, roles, achievements).
// 2. NAME INCONSISTENCY TO CONFIRM: the founder's official statement reportedly
//    refers to the "Tonfawei Environmental and Sustainable Development
//    Foundation", whereas the official organisation name used across this site
//    is the "Tamarakuro Environmental and Sustainable Development Foundation".
//    We have used the official organisation name here and elsewhere. Please
//    confirm the correct wording of the foundation name in the statement.
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
            <div className="mb-10 flex h-40 w-40 items-center justify-center rounded-full bg-mint text-5xl font-bold text-primary mx-auto">
              TT
            </div>

            <div className="prose prose-lg max-w-none text-ink">
              <p className="lead font-semibold text-forest">
                {ORG.founderName} founded the {ORG.name} ({ORG.shortName}) —
                an organisation rooted in Gbaramatu Kingdom and the Niger Delta,
                working with communities across Nigeria and beyond.
              </p>

              <p>
                TESDEF was established to bridge the gap between environmental
                sustainability and community development — equipping young people,
                women, and vulnerable populations with the knowledge, skills, and
                opportunities needed to become active contributors to sustainable
                development.
              </p>

              <p>
                The Foundation&apos;s work responds to pressing challenges such as
                environmental degradation, youth unemployment, poor waste
                management, climate change, and limited digital opportunities —
                through innovative, community-led solutions.
              </p>

              {/* Placeholder for the founder's personal statement — pending client confirmation. */}
              <div className="not-prose my-8 rounded-2xl border border-dashed border-primary/30 bg-mint/40 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                  Sample content — pending client confirmation
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  The founder&apos;s full statement and story will be published here
                  once provided by TESDEF. To keep this page accurate, no
                  biographical details have been added in the meantime.
                </p>
              </div>
            </div>

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
