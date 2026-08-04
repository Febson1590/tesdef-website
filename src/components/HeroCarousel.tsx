"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type HeroSlideData = {
  id: string;
  image: string;
  title: string;
  caption: string;
};

const AUTO_MS = 5500;

export function HeroCarousel({ slides }: { slides: HeroSlideData[] }) {
  const count = slides.length;
  const multiple = count > 1;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((i: number) => setIndex((i + count) % count), [count]);
  const next = useCallback(() => setIndex((v) => (v + 1) % count), [count]);
  const prev = useCallback(() => setIndex((v) => (v - 1 + count) % count), [count]);

  // Auto-advance — paused on hover/focus and when the user prefers reduced motion.
  useEffect(() => {
    if (!multiple || paused) return;
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(next, AUTO_MS);
    return () => clearInterval(t);
  }, [multiple, paused, next]);

  function onKeyDown(e: React.KeyboardEvent) {
    if (!multiple) return;
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); next(); }
  }

  const arrow = "absolute top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/25 text-white ring-1 ring-white/30 backdrop-blur-sm transition-colors hover:bg-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";

  return (
    <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none">
      {/* Layered accent panels (unchanged framing) */}
      <div aria-hidden="true" className="absolute -right-4 -top-4 hidden h-full w-full rounded-3xl bg-mint lg:block" />
      <div aria-hidden="true" className="absolute -bottom-8 -left-8 hidden h-40 w-40 rounded-full bg-fresh/20 blur-3xl lg:block" />

      <div
        className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:aspect-[4/5]"
        {...(multiple
          ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "Hero image carousel",
              tabIndex: 0,
              onKeyDown,
              onMouseEnter: () => setPaused(true),
              onMouseLeave: () => setPaused(false),
              onFocus: () => setPaused(true),
              onBlur: () => setPaused(false),
            }
          : {})}
      >
        {slides.map((s, i) => (
          <figure
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === index ? "opacity-100" : "opacity-0"}`}
            aria-hidden={i === index ? undefined : true}
            {...(multiple ? { role: "group", "aria-roledescription": "slide", "aria-label": `${i + 1} of ${count}` } : {})}
          >
            <Image
              src={s.image}
              alt={s.title || "TESDEF"}
              fill
              priority={i === 0}
              sizes="(max-width: 1024px) 92vw, 45vw"
              className="object-cover object-center"
            />
            {(s.title || s.caption) && (
              <>
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-forest/85 via-forest/25 to-transparent" />
                <figcaption className="absolute inset-x-5 bottom-9">
                  {s.title && <p className="font-display text-sm font-bold text-white sm:text-base">{s.title}</p>}
                  {s.caption && <p className="mt-0.5 text-xs font-medium text-white/85 sm:text-sm">{s.caption}</p>}
                </figcaption>
              </>
            )}
          </figure>
        ))}

        {multiple && (
          <>
            <button type="button" onClick={prev} aria-label="Previous slide" className={`${arrow} left-3`}>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button type="button" onClick={next} aria-label="Next slide" className={`${arrow} right-3`}>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
            </button>

            <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1.5">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show slide ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  className={`h-1.5 rounded-full transition-all ${i === index ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
