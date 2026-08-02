import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

const AMOUNTS = [500, 1000, 5000, 10000];

export function DonateCtaSection() {
  return (
    <section aria-labelledby="donate-heading" className="relative overflow-hidden bg-primary py-16 sm:py-20 lg:py-24">
      {/* Decorative ambient circles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-fresh/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-forest/30 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">Support our work</p>
          <h2 id="donate-heading" className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Your contribution creates lasting change
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Every naira donated goes directly to programmes that protect the environment, empower young people, and build stronger communities in the Niger Delta. No contribution is too small.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {AMOUNTS.map((a) => (
              <Link
                key={a}
                href={`/donate?amount=${a}`}
                className="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/20"
              >
                ₦{a.toLocaleString()}
              </Link>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href="/donate" variant="onDark" size="lg">
              Donate now
            </Button>
            <Link href="/projects" className="text-sm font-semibold text-white/80 hover:text-white">
              Support a specific project →
            </Link>
          </div>

          <p className="mt-6 text-xs text-white/50">
            TESDEF is a registered non-profit organisation. All donations are subject to our transparency and accountability commitments.
          </p>
        </div>
      </Container>
    </section>
  );
}
