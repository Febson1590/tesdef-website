import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { prisma } from "@/lib/prisma";
import { GALLERY_ITEMS } from "@/lib/data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from TESDEF's programmes and projects — communities, environment, and impact across the Niger Delta.",
};

async function getGalleryItems() {
  try {
    return await prisma.galleryItem.findMany({ where: { published: true }, orderBy: { order: "asc" } });
  } catch {
    return GALLERY_ITEMS.filter((g) => g.published)
      .sort((a, b) => a.order - b.order)
      .map((g) => ({ ...g, createdAt: new Date(), title: "" }));
  }
}

export default async function GalleryPage() {
  const items = await getGalleryItems();

  return (
    <>
      <section className="bg-forest py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-fresh/80">Photos</p>
            <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Gallery</h1>
            <p className="mt-5 text-lg text-white/70">Communities, environment, and impact — captured across the Niger Delta.</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          {items.length === 0 ? (
            <p className="py-20 text-center text-muted">Gallery coming soon.</p>
          ) : (
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {items.map((item) => (
                <figure key={item.id} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden bg-mint">
                    <Image
                      src={item.url}
                      alt={item.alt || item.caption || item.title || "TESDEF gallery photo"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  {item.caption && (
                    <figcaption className="mt-2 px-1 text-xs text-muted">{item.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
