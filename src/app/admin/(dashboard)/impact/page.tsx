import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminTable } from "@/components/admin/AdminTable";
import { prisma } from "@/lib/prisma";
import { createImpactStat, deleteImpactStat } from "./actions";

export const metadata = { title: "Impact Stats" };

export default async function AdminImpactPage() {
  const stats = await prisma.impactStat.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <>
      <AdminHeader title="Impact Stats" />
      <div className="p-6 space-y-8">
        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="mb-5 font-display text-lg font-bold text-forest">Add impact stat</h2>
          <form action={createImpactStat} className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Label *</label>
              <input name="label" required placeholder="e.g. Trees planted" className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Value *</label>
              <input name="value" required placeholder="e.g. 12,500+" className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Icon (emoji or SVG path name)</label>
              <input name="icon" placeholder="e.g. tree" className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Description</label>
              <input name="description" className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-forest">Add stat</button>
            </div>
          </form>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">All stats ({stats.length})</h2>
          <AdminTable
            keyField="id"
            columns={[
              { key: "label", label: "Label" },
              { key: "value", label: "Value" },
              { key: "description", label: "Description" },
              {
                key: "actions", label: "", render: (r) => (
                  <form action={deleteImpactStat.bind(null, r.id as string)}>
                    <button type="submit" className="text-xs font-semibold text-red-500 hover:underline">Delete</button>
                  </form>
                ),
              },
            ]}
            rows={stats as unknown as Record<string, unknown>[]}
          />
        </section>
      </div>
    </>
  );
}
