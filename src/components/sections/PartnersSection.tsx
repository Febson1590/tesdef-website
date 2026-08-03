import Link from "next/link";
import { Container } from "@/components/Container";
import { prisma } from "@/lib/prisma";

async function getPartners() {
  try {
    return await prisma.partner.findMany({
      where: { status: "published" },
      orderBy: { order: "asc" },
    });
  } catch {
    return [];
  }
}

export async function PartnersSection() {
  const partners = await getPartners();

  // Show the partners section only when verified, published partners exist.
  if (partners.length === 0) return null;

  return (
    <section aria-labelledby="partners-heading" className="border-t border-black/5 bg-offwhite py-12 sm:py-16">
      <Container>
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

        <p className="mt-8 text-center text-sm text-muted">
          Interested in partnering with TESDEF?{" "}
          <Link href="/get-involved/partner" className="font-semibold text-primary hover:text-forest">
            Get in touch
          </Link>
        </p>
      </Container>
    </section>
  );
}
