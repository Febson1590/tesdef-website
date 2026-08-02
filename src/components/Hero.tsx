import Image from "next/image";
import { Container } from "./Container";
import { Button } from "./Button";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-offwhite"
    >
      {/* Soft ambient background wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-24 top-[-10%] h-[36rem] w-[36rem] rounded-full bg-mint blur-3xl" />
        <div className="absolute right-[-15%] top-[20%] h-[28rem] w-[28rem] rounded-full bg-fresh/10 blur-3xl" />
      </div>

      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        {/* Text column */}
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary shadow-sm">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-fresh"
            />
            Tamarakuro Environmental &amp; Sustainable Development Foundation
          </p>

          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-extrabold leading-[1.08] text-forest sm:text-5xl lg:text-6xl"
          >
            Empowering Communities.
            <br className="hidden sm:block" /> Protecting Nature.{" "}
            <span className="text-primary">Building the Future.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            TESDEF promotes environmental sustainability, youth empowerment,
            digital innovation and community development across Gbaramatu
            Kingdom, the Niger Delta and beyond.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#" variant="primary" size="lg">
              Explore Our Work
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Button>
            <Button href="#" variant="secondary" size="lg">
              Join Our Mission
            </Button>
          </div>

          <div className="mt-10 flex items-start gap-3 border-t border-black/5 pt-6">
            <svg
              className="mt-0.5 h-5 w-5 flex-none text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 22c5-3.5 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 3 8.5 8 12Z" />
              <path d="M12 11.5v.01" />
            </svg>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              Creating resilient communities through sustainability, innovation
              and inclusive development.
            </p>
          </div>
        </div>

        {/* Visual column — real photograph, premium framing */}
        <div className="relative">
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}

/**
 * Hero photograph: community tree planting in the Niger Delta.
 * Source asset: /public/images/hero/hero-tree-planting.jpg
 * (optimised from the original supplied photo).
 */
function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none">
      {/* Layered accent panels for depth */}
      <div
        aria-hidden="true"
        className="absolute -right-4 -top-4 hidden h-full w-full rounded-3xl bg-mint lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-8 -left-8 hidden h-40 w-40 rounded-full bg-fresh/20 blur-3xl lg:block"
      />

      <figure className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/10 lg:aspect-[4/5]">
        <Image
          src="/images/hero/hero-tree-planting.jpg"
          alt="TESDEF volunteers planting a young tree sapling in rich soil on a green hillside, with community members reforesting the land and the Niger Delta hills at golden hour behind them"
          fill
          priority
          sizes="(max-width: 1024px) 92vw, 45vw"
          className="object-cover object-[70%_50%] lg:object-[62%_45%]"
        />

        {/* Brand-tinted bottom gradient — small on mobile, unchanged on desktop */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest/80 via-forest/15 to-transparent lg:h-2/5 lg:from-forest/85 lg:via-forest/25"
        />

        <figcaption className="absolute inset-x-4 bottom-4 lg:inset-x-5 lg:bottom-5">
          {/* Mobile: minimal caption, no badge or location */}
          <span className="block lg:hidden">
            <span className="block font-display text-sm font-bold leading-tight text-white">
              Community tree planting
            </span>
            <span className="mt-0.5 block text-xs font-medium leading-snug text-white/85">
              Restoring ecosystems for future generations
            </span>
          </span>

          {/* Desktop: unchanged badge + caption */}
          <span className="hidden items-center gap-3 lg:flex">
            <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-white/15 ring-1 ring-white/25 backdrop-blur-sm">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
                <path
                  d="M20 4C11 4 4 9.5 4 17c0 1.2.2 2.3.5 3.3C6 14 11 10.5 17 9.5c-4.5 2-7.8 5.4-9.4 10.5.9.3 1.9.5 3 .5C18 20.5 20 12 20 4Z"
                  fill="#8CC63F"
                />
              </svg>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-sm font-bold text-white">
                Community tree planting
              </span>
              <span className="text-xs font-medium text-white/80">
                Reforesting the Niger Delta
              </span>
            </span>
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
