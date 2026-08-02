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

        {/* Visual column — refined, replaceable nature treatment (no stock image) */}
        <div className="relative">
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}

/**
 * Temporary premium visual treatment: a forest-gradient panel with a
 * topographic contour motif. Purely decorative and easily replaced with a
 * real photograph later (drop into /public/images/hero and swap this block).
 */
function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 sm:max-w-lg lg:max-w-none"
    >
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest via-[#124a34] to-primary" />

      {/* Topographic contour lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g stroke="#8CC63F" strokeOpacity="0.22" strokeWidth="1.5">
          <path d="M-20 120C80 60 200 90 300 40s140-40 160-60" />
          <path d="M-20 170C80 110 200 140 300 90s140-40 160-60" />
          <path d="M-20 230C90 170 210 205 320 150s120-30 140-50" />
          <path d="M-20 300C100 240 220 275 330 220s110-25 130-45" />
          <path d="M-20 370C110 310 230 345 340 290s100-20 120-40" />
          <path d="M-20 440C120 380 240 415 350 360s90-15 110-35" />
        </g>
        <g fill="#8CC63F" fillOpacity="0.5">
          <circle cx="300" cy="90" r="2.5" />
          <circle cx="320" cy="150" r="2" />
          <circle cx="330" cy="220" r="2" />
        </g>
      </svg>

      {/* Soft glow */}
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-fresh/20 blur-2xl" />

      {/* Floating leaf glyph */}
      <div className="absolute bottom-6 left-6 grid h-16 w-16 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
          <path
            d="M20 4C11 4 4 9.5 4 17c0 1.2.2 2.3.5 3.3C6 14 11 10.5 17 9.5c-4.5 2-7.8 5.4-9.4 10.5.9.3 1.9.5 3 .5C18 20.5 20 12 20 4Z"
            fill="#8CC63F"
          />
        </svg>
      </div>

      {/* Caption chip */}
      <div className="absolute bottom-6 right-6 rounded-xl bg-white/95 px-4 py-3 shadow-lg">
        <p className="font-display text-sm font-bold leading-tight text-forest">
          Niger Delta
        </p>
        <p className="text-[11px] font-medium text-muted">
          Rooted in community
        </p>
      </div>
    </div>
  );
}
