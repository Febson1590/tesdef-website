import Link from "next/link";
import { Container } from "@/components/Container";

// Honest homepage impact teaser — no metrics are shown until verified results
// exist. Links to the Impact page for TESDEF's approach.
export function ImpactSection() {
  return (
    <section aria-labelledby="impact-heading" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary/70">Our impact</p>
          <h2 id="impact-heading" className="font-display text-2xl font-bold text-forest sm:text-3xl">
            Measuring Our Impact
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Verified impact results will be published here as TESDEF&apos;s programmes progress, ensuring
            transparency and accountability.
          </p>
          <Link
            href="/impact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-forest"
          >
            Our approach to impact
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
