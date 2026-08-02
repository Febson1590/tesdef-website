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

      <Container className="grid items-center gap-8 pt-6 pb-8 sm:gap-12 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        {/* Text column */}
        <div className="max-w-2xl">
          <p className="flex w-fit max-w-full items-center gap-2 rounded-2xl border border-primary/15 bg-white px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-primary shadow-sm lg:rounded-full lg:text-xs lg:tracking-[0.12em]">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 flex-none rounded-full bg-fresh"
            />
            <span className="lg:hidden">
              Environmental &amp; Sustainable Development Foundation
            </span>
            <span className="hidden lg:inline">
              Tamarakuro Environmental &amp; Sustainable Development Foundation
            </span>
          </p>

          <h1
            id="hero-heading"
            className="mt-5 text-[1.6rem] font-extrabold leading-[1.2] text-forest sm:mt-6 sm:text-5xl sm:leading-[1.08] lg:text-6xl"
          >
            Empowering Communities.
            <br />
            Protecting Nature.
            <br className="sm:hidden" />{" "}
            <span className="text-primary">Building the Future.</span>
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:mt-6 sm:text-lg">
            <span className="lg:hidden">
              TESDEF works to support environmental sustainability, empower young
              people, encourage digital innovation, and build inclusive
              communities. Our goal is to help communities become stronger and
              make a lasting difference.
            </span>
            <span className="hidden lg:inline">
              TESDEF promotes environmental sustainability, youth empowerment,
              digital innovation and community development across Gbaramatu
              Kingdom, the Niger Delta and beyond.
            </span>
          </p>

          <div className="mt-7 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:items-center sm:gap-3">
            <Button
              href="#"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
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
            <Button
              href="#"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Join Our Mission
            </Button>
          </div>

          <div className="mt-8 flex items-start gap-3 border-t border-black/5 pt-5 sm:mt-10 sm:pt-6">
            {/* Mobile: community / inclusive-development icon */}
            <svg
              className="mt-0.5 h-5 w-5 flex-none text-primary lg:hidden"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            {/* Desktop: unchanged icon */}
            <svg
              className="mt-0.5 hidden h-5 w-5 flex-none text-primary lg:block"
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

        {/* Desktop only: brand-tinted bottom gradient + caption (hidden on mobile) */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 hidden h-2/5 bg-gradient-to-t from-forest/85 via-forest/25 to-transparent lg:block"
        />

        <figcaption className="absolute inset-x-5 bottom-5 hidden items-center gap-3 lg:flex">
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
        </figcaption>
      </figure>
    </div>
  );
}
