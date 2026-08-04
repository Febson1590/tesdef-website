import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminRowActions, StatusBadge } from "@/components/admin/AdminRowActions";
import { ImageUpload } from "@/components/admin/ImageUpload";
import { prisma } from "@/lib/prisma";
import { createHeroSlide, updateHeroSlide, moveHeroSlide, deleteHeroSlide } from "./actions";

export const metadata = { title: "Hero Slides" };

const inputCls = "w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none";
const moveBtn = "grid h-7 w-7 place-items-center rounded-lg border border-black/15 text-sm text-ink hover:bg-offwhite disabled:cursor-not-allowed disabled:opacity-40";

export default async function AdminHeroPage() {
  const slides = await prisma.heroSlide.findMany({ orderBy: [{ order: "asc" }, { createdAt: "asc" }] });

  return (
    <>
      <AdminHeader title="Hero Slides" />
      <div className="p-6 space-y-8">
        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="mb-1 font-display text-lg font-bold text-forest">Add hero slide</h2>
          <p className="mb-5 text-xs text-muted">
            New slides are created as <strong>Draft</strong>. Use Publish to show them in the homepage carousel.
            The carousel shows published slides only; a single published slide displays as a static image.
          </p>
          <form action={createHeroSlide} className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <ImageUpload name="image" label="Slide image *" hint="An image is required for a hero slide." />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Title</label>
              <input name="title" maxLength={80} className={inputCls} placeholder="Short slide title" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Display order</label>
              <input name="order" type="number" defaultValue={slides.length} className={inputCls} />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-semibold text-forest">Caption</label>
              <input name="caption" maxLength={140} className={inputCls} placeholder="Short supporting caption" />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-forest">Add (as draft)</button>
            </div>
          </form>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">All slides ({slides.length})</h2>
          {slides.length === 0 ? (
            <p className="rounded-2xl border border-black/5 bg-offwhite p-10 text-center text-sm text-muted">
              No hero slides yet. The homepage shows the default hero image until a slide is published.
            </p>
          ) : (
            <div className="space-y-4">
              {slides.map((s, i) => (
                <div key={s.id} className="grid gap-4 rounded-2xl border border-black/10 bg-white p-4 shadow-sm sm:grid-cols-[180px_1fr]">
                  <div>
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-mint">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.image} alt={s.title || "Hero slide"} className="h-full w-full object-cover" />
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <StatusBadge status={s.status} />
                      <div className="flex items-center gap-1">
                        <form action={moveHeroSlide.bind(null, s.id, "up")}>
                          <button type="submit" className={moveBtn} disabled={i === 0} aria-label="Move up">↑</button>
                        </form>
                        <form action={moveHeroSlide.bind(null, s.id, "down")}>
                          <button type="submit" className={moveBtn} disabled={i === slides.length - 1} aria-label="Move down">↓</button>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div>
                    <form action={updateHeroSlide.bind(null, s.id)} className="space-y-2">
                      <input name="title" defaultValue={s.title} maxLength={80} placeholder="Title" className={inputCls} />
                      <input name="caption" defaultValue={s.caption} maxLength={140} placeholder="Caption" className={inputCls} />
                      <div className="flex items-center gap-2">
                        <label className="text-xs text-muted">Order</label>
                        <input name="order" type="number" defaultValue={s.order} className="w-20 rounded-xl border border-black/15 px-3 py-2 text-sm focus:border-primary focus:outline-none" />
                        <button type="submit" className="rounded-full border border-primary/30 px-4 py-1.5 text-xs font-semibold text-primary hover:bg-mint">Save changes</button>
                      </div>
                    </form>

                    <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-black/5 pt-3">
                      <AdminRowActions model="heroSlide" id={s.id} status={s.status} adminPath="/admin/hero" />
                      <form action={deleteHeroSlide.bind(null, s.id)}>
                        <button type="submit" className="text-xs font-semibold text-red-500 hover:underline">Delete</button>
                      </form>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
