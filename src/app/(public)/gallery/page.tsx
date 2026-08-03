import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from TESDEF's work across communities, environment, and its areas of focus.",
};

async function getGalleryItems() {
  try {
    return await prisma.galleryItem.findMany({ where: { status: "published" }, orderBy: { order: "asc" } });
  } catch {
    return [];
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
            <p className="mt-5 text-lg text-white/70">Photographs and field updates from TESDEF&apos;s work.</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          {items.length === 0 ? (
            <div className="mx-auto max-w-2xl rounded-2xl border border-black/5 bg-offwhite p-12 text-center">
              <p className="text-base text-muted">Programme photographs, community activities and field updates will be published here as TESDEF&apos;s work progresses.</p>
            </div>
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
