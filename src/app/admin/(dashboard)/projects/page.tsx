import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminTable } from "@/components/admin/AdminTable";
import { prisma } from "@/lib/prisma";
import { formatCurrency, formatDate } from "@/lib/utils";
import { createProject, deleteProject } from "./actions";

export const metadata = { title: "Projects & Campaigns" };

export default async function AdminProjectsPage() {
  const [projects, programmes] = await Promise.all([
    prisma.project.findMany({ orderBy: { createdAt: "desc" }, include: { programme: { select: { title: true } } } }),
    prisma.programme.findMany({ select: { id: true, title: true }, orderBy: { title: "asc" } }),
  ]);

  return (
    <>
      <AdminHeader title="Projects & Campaigns" />
      <div className="p-6 space-y-8">
        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="mb-5 font-display text-lg font-bold text-forest">Add project / campaign</h2>
          <form action={createProject} className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-semibold text-forest">Title *</label>
              <input name="title" required className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-semibold text-forest">Summary *</label>
              <textarea name="summary" rows={2} required className="w-full resize-none rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-semibold text-forest">Full story</label>
              <textarea name="story" rows={4} className="w-full resize-none rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Location</label>
              <input name="location" className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Status</label>
              <select name="status" className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none">
                <option value="active">Active</option>
                <option value="planning">Planning</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Funding goal (₦)</label>
              <input name="fundingGoal" type="number" min={0} className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Amount raised (₦)</label>
              <input name="amountRaised" type="number" min={0} className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Cover image URL</label>
              <input name="coverImage" className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Programme</label>
              <select name="programmeId" className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none">
                <option value="">— None —</option>
                {programmes.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-forest">Add project</button>
            </div>
          </form>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">All projects ({projects.length})</h2>
          <AdminTable
            keyField="id"
            columns={[
              { key: "title", label: "Title" },
              { key: "status", label: "Status" },
              { key: "programme", label: "Programme", render: (r) => (r as { programme?: { title: string } }).programme?.title ?? "—" },
              { key: "amountRaised", label: "Raised", render: (r) => formatCurrency(Number(r.amountRaised)) },
              { key: "fundingGoal", label: "Goal", render: (r) => formatCurrency(Number(r.fundingGoal)) },
              { key: "createdAt", label: "Created", render: (r) => formatDate(r.createdAt as Date) },
              {
                key: "actions", label: "", render: (r) => (
                  <form action={deleteProject.bind(null, r.id as string)}>
                    <button type="submit" className="text-xs font-semibold text-red-500 hover:underline">Delete</button>
                  </form>
                ),
              },
            ]}
            rows={projects as unknown as Record<string, unknown>[]}
          />
        </section>
      </div>
    </>
  );
}
