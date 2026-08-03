import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminTable } from "@/components/admin/AdminTable";
import { AdminRowActions, StatusBadge } from "@/components/admin/AdminRowActions";
import { ImageUpload } from "@/components/admin/ImageUpload";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import { createGalleryItem, deleteGalleryItem } from "./actions";

export const metadata = { title: "Gallery" };

export default async function AdminGalleryPage() {
  const items = await prisma.galleryItem.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <>
      <AdminHeader title="Gallery" />
      <div className="p-6 space-y-8">
        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="mb-5 font-display text-lg font-bold text-forest">Add gallery item</h2>
          <form action={createGalleryItem} className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Title *</label>
              <input name="title" required className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Category</label>
              <input name="category" placeholder="e.g. Community" className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div className="sm:col-span-2">
              <ImageUpload name="url" label="Image *" hint="An image is required for a gallery item." />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-semibold text-forest">Caption</label>
              <textarea name="caption" rows={2} className="w-full resize-none rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-forest">Add (as draft)</button>
              <p className="mt-2 text-xs text-muted">New items are created as Draft. Use Publish to make them public.</p>
            </div>
          </form>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">All items ({items.length})</h2>
          <AdminTable
            keyField="id"
            columns={[
              { key: "title", label: "Title" },
              { key: "category", label: "Category" },
              { key: "status", label: "Status", render: (r) => <StatusBadge status={String(r.status)} /> },
              { key: "createdAt", label: "Added", render: (r) => formatDate(r.createdAt as Date) },
              {
                key: "actions", label: "", render: (r) => (
                  <div className="flex flex-wrap items-center gap-2">
                    <AdminRowActions model="galleryItem" id={r.id as string} status={String(r.status)} adminPath="/admin/gallery" />
                    <form action={deleteGalleryItem.bind(null, r.id as string)}>
                      <button type="submit" className="text-xs font-semibold text-red-500 hover:underline">Delete</button>
                    </form>
                  </div>
                ),
              },
            ]}
            rows={items as unknown as Record<string, unknown>[]}
          />
        </section>
      </div>
    </>
  );
}
