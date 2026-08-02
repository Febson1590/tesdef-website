import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const ev = await prisma.event.findUnique({ where: { slug } });
    if (!ev) return {};
    return { title: ev.title, description: ev.description.slice(0, 160) };
  } catch {
    return {};
  }
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;

  let ev;
  try {
    ev = await prisma.event.findUnique({ where: { slug, published: true } });
    if (!ev) notFound();
  } catch {
    notFound();
  }

  if (!ev) notFound();

  return (
    <>
      <section className="bg-forest py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">Event</p>
            <h1 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">{ev.title}</h1>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 grid gap-4 rounded-2xl border border-black/5 bg-offwhite p-6 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">Date</p>
                <p className="mt-1 font-semibold text-forest">{formatDate(ev.startDate)}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">Location</p>
                <p className="mt-1 font-semibold text-forest">{ev.isVirtual ? "Virtual" : ev.location}</p>
              </div>
              {ev.registrationLink && ev.registrationLink !== "#" && (
                <div className="flex items-center">
                  <Button href={ev.registrationLink} external variant="primary" size="sm">Register now</Button>
                </div>
              )}
            </div>

            <p className="text-lg leading-relaxed text-ink">{ev.description}</p>

            {ev.registrationLink && ev.registrationLink !== "#" && (
              <div className="mt-8">
                <Button href={ev.registrationLink} external variant="primary" size="lg">Register for this event</Button>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
