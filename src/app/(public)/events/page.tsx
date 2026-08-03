import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { EventCard } from "@/components/ui/EventCard";
import { prisma } from "@/lib/prisma";
import { EVENTS } from "@/lib/data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events from TESDEF — community engagement, workshops, forums, and more.",
};

async function getEvents() {
  try {
    return await prisma.event.findMany({ where: { published: true }, orderBy: { startDate: "asc" } });
  } catch {
    return EVENTS.filter((e) => e.published).map((e) => ({
      ...e,
      startDate: new Date(e.startDate),
      endDate: e.endDate ? new Date(e.endDate) : null,
      createdAt: new Date(),
      updatedAt: new Date(),
      excerpt: "",
    }));
  }
}

export default async function EventsPage() {
  const events = await getEvents();
  const now = new Date();
  const upcoming = events.filter((e) => e.startDate >= now);
  const past = events.filter((e) => e.startDate < now);

  return (
    <>
      <section className="bg-forest py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">Calendar</p>
            <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Events</h1>
            <p className="mt-5 text-lg text-white/70">Events and community activities from TESDEF.</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          {events.length === 0 ? (
            <div className="mx-auto max-w-2xl rounded-2xl border border-black/5 bg-offwhite p-12 text-center">
              <p className="text-base text-muted">Upcoming events will appear here once dates, locations and participation details are confirmed.</p>
            </div>
          ) : (
            <>
              {upcoming.length > 0 && (
                <div className="mb-12">
                  <h2 className="mb-6 font-display text-2xl font-bold text-forest">Upcoming events</h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {upcoming.map((e) => (
                      <EventCard key={e.id} title={e.title} description={e.description} location={e.location} startDate={e.startDate.toISOString()} slug={e.slug} isVirtual={e.isVirtual} />
                    ))}
                  </div>
                </div>
              )}
              {past.length > 0 && (
                <div>
                  <h2 className="mb-6 font-display text-2xl font-bold text-muted">Past events</h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {past.map((e) => (
                      <EventCard key={e.id} title={e.title} description={e.description} location={e.location} startDate={e.startDate.toISOString()} slug={e.slug} isVirtual={e.isVirtual} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </Container>
      </section>
    </>
  );
}
