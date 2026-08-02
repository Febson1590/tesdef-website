import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { prisma } from "@/lib/prisma";
import { TESTIMONIALS } from "@/lib/data";

async function getTestimonials() {
  try {
    return await prisma.testimonial.findMany({ where: { published: true }, orderBy: { order: "asc" }, take: 3 });
  } catch {
    return TESTIMONIALS.filter((t) => t.published).slice(0, 3).map((t) => ({ ...t, createdAt: new Date() }));
  }
}

export async function StoriesSection() {
  const testimonials = await getTestimonials();

  return (
    <section aria-labelledby="stories-heading" className="bg-mint py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          id="stories-heading"
          label="Human stories"
          title="Change in their own words"
          subtitle="Behind every statistic is a person, a family, a community whose life has shifted in a meaningful way."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <svg className="mb-4 h-8 w-8 text-fresh" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <blockquote className="flex-1 text-sm leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-black/5 pt-4">
                <p className="font-semibold text-forest">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
                {t.location && <p className="text-xs text-muted">{t.location}</p>}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
