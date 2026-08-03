import { Container } from "@/components/Container";
import { FOCUS_AREAS } from "@/lib/data";

export function IntroSection() {
  return (
    <section aria-labelledby="intro-heading" className="bg-white py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary/70">Who we are</p>
          <h2 id="intro-heading" className="font-display text-2xl font-bold text-forest sm:text-3xl">
            A non-profit advancing sustainability and community development
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            TESDEF is a non-profit, non-governmental organization established to promote
            environmental sustainability, youth empowerment, digital innovation and community
            development. The Foundation seeks to transform vulnerable communities into resilient,
            environmentally responsible, and economically empowered societies.
          </p>
        </div>

        <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2.5">
          {FOCUS_AREAS.map((f) => (
            <li
              key={f.title}
              className="rounded-full border border-black/10 bg-offwhite px-4 py-2 text-sm font-medium text-forest"
            >
              {f.title}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
