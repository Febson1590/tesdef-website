import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminTable } from "@/components/admin/AdminTable";
import { AdminRowActions, StatusBadge } from "@/components/admin/AdminRowActions";
import { ImageUpload } from "@/components/admin/ImageUpload";
import { prisma } from "@/lib/prisma";
import { createPartner, deletePartner } from "./actions";

export const metadata = { title: "Partners" };

export default async function AdminPartnersPage() {
  const partners = await prisma.partner.findMany({ orderBy: { name: "asc" } });

  return (
    <>
      <AdminHeader title="Partners" />
      <div className="space-y-6 p-4 sm:space-y-8 sm:p-6 lg:p-8">
        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="mb-5 font-display text-lg font-bold text-forest">Add partner</h2>
          <form action={createPartner} className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Organisation name *</label>
              <input name="name" required className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Category</label>
              <select name="category" className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none">
                <option value="ngo">NGO</option>
                <option value="government">Government</option>
                <option value="corporate">Corporate</option>
                <option value="academic">Academic</option>
                <option value="media">Media</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Website</label>
              <input name="website" type="url" className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div>
              <ImageUpload name="logo" label="Logo" />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="sticky bottom-3 z-10 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-lg hover:bg-forest lg:static lg:bottom-auto lg:z-auto lg:w-auto lg:shadow-none">Add (as draft)</button>
              <p className="mt-2 text-xs text-muted">New partners are created as Draft. Use Publish to make them public.</p>
            </div>
          </form>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">All partners ({partners.length})</h2>
          <AdminTable
            keyField="id"
            columns={[
              { key: "name", label: "Name" },
              { key: "category", label: "Category" },
              { key: "status", label: "Status", render: (r) => <StatusBadge status={String(r.status)} /> },
              { key: "website", label: "Website" },
              {
                key: "actions", label: "", render: (r) => (
                  <div className="flex flex-wrap items-center gap-2">
                    <AdminRowActions model="partner" id={r.id as string} status={String(r.status)} adminPath="/admin/partners" />
                    <form action={deletePartner.bind(null, r.id as string)}>
                      <button type="submit" className="inline-flex min-h-11 items-center text-xs font-semibold text-red-500 hover:underline lg:min-h-0">Delete</button>
                    </form>
                  </div>
                ),
              },
            ]}
            rows={partners as unknown as Record<string, unknown>[]}
          />
        </section>
      </div>
    </>
  );
}
