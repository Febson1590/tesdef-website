import Link from "next/link";
import { Container } from "@/components/Container";
import { prisma } from "@/lib/prisma";
import { PARTNERS } from "@/lib/data";

async function getPartners() {
  try {
    return await prisma.partner.findMany({ where: { published: true }, orderBy: { order: "asc" } });
  } catch {
    return PARTNERS.filter((p) => p.published).map((p) => ({ ...p, createdAt: new Date(), updatedAt: new Date() }));
  }
}

export async function PartnersSection() {
  const partners = await getPartners();

  return (
    <section aria-labelledby="partners-heading" className="border-t border-black/5 bg-offwhite py-12 sm:py-16">
      <Container>
        {partners.length > 0 && (
          <>
            <div className="mb-8 text-center">
              <p id="partners-heading" className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                Our partners and supporters
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {partners.map((p) => (
                p.website ? (
                  <a
                    key={p.id}
                    href={p.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-ink transition-shadow hover:shadow-sm"
                  >
                    {p.name}
                  </a>
                ) : (
                  <div
                    key={p.id}
                    className="inline-flex items-center rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-ink"
                  >
                    {p.name}
                  </div>
                )
              ))}
            </div>
          </>
        )}

        <p className={partners.length > 0 ? "mt-8 text-center text-sm text-muted" : "text-center text-sm text-muted"}>
          Interested in partnering with TESDEF?{" "}
          <Link href="/get-involved/partner" className="font-semibold text-primary hover:text-forest">
            Get in touch
          </Link>
        </p>
      </Container>
    </section>
  );
}
