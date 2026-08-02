import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminTable } from "@/components/admin/AdminTable";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import { createProgramme, deleteProgramme } from "./actions";

export const metadata = { title: "Programmes" };

export default async function AdminProgrammesPage() {
  const programmes = await prisma.programme.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <>
      <AdminHeader title="Programmes" />
      <div className="p-6 space-y-8">
        {/* Add form */}
        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="mb-5 font-display text-lg font-bold text-forest">Add programme</h2>
          <form action={createProgramme} className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-semibold text-forest">Title *</label>
              <input name="title" required className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Tagline</label>
              <input name="tagline" className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Icon (emoji or name)</label>
              <input name="icon" className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-semibold text-forest">Description</label>
              <textarea name="description" rows={3} className="w-full resize-none rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-forest">Add programme</button>
            </div>
          </form>
        </section>

        {/* Table */}
        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">All programmes ({programmes.length})</h2>
          <AdminTable
            keyField="id"
            columns={[
              { key: "title", label: "Title" },
              { key: "tagline", label: "Tagline" },
              { key: "createdAt", label: "Created", render: (r) => formatDate(r.createdAt as Date) },
              {
                key: "actions", label: "", render: (r) => (
                  <form action={deleteProgramme.bind(null, r.id as string)}>
                    <button type="submit" className="text-xs font-semibold text-red-500 hover:underline">Delete</button>
                  </form>
                ),
              },
            ]}
            rows={programmes as unknown as Record<string, unknown>[]}
          />
        </section>
      </div>
    </>
  );
}
