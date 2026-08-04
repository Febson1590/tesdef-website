import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminTable } from "@/components/admin/AdminTable";
import { AdminRowActions, StatusBadge } from "@/components/admin/AdminRowActions";
import { ImageUpload } from "@/components/admin/ImageUpload";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import { createProject, deleteProject } from "./actions";

export const metadata = { title: "Initiatives" };

const inputCls = "w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none";

export default async function AdminProjectsPage() {
  const [projects, programmes] = await Promise.all([
    prisma.project.findMany({ orderBy: [{ order: "asc" }, { createdAt: "desc" }], include: { programme: { select: { title: true } } } }),
    prisma.programme.findMany({ select: { id: true, title: true }, orderBy: { title: "asc" } }),
  ]);

  return (
    <>
      <AdminHeader title="Projects & Initiatives" />
      <div className="space-y-6 p-4 sm:space-y-8 sm:p-6 lg:p-8">
        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="mb-1 font-display text-lg font-bold text-forest">Add project / initiative</h2>
          <p className="mb-5 text-xs text-muted">New records are created as <strong>Draft</strong>. Use Publish to make them public.</p>
          <form action={createProject} className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-semibold text-forest">Title *</label>
              <input name="title" required className={inputCls} />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-semibold text-forest">Summary *</label>
              <textarea name="summary" rows={2} required className={`${inputCls} resize-none`} />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-semibold text-forest">Full story</label>
              <textarea name="story" rows={4} className={`${inputCls} resize-none`} />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Type</label>
              <select name="type" className={inputCls}>
                <option value="initiative">Proposed Initiative</option>
                <option value="project">Project</option>
                <option value="campaign">Campaign</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Location</label>
              <input name="location" className={inputCls} />
            </div>
            <div>
              <ImageUpload name="coverImage" label="Cover image" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Programme</label>
              <select name="programmeId" className={inputCls}>
                <option value="">— None —</option>
                {programmes.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="sticky bottom-3 z-10 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-lg hover:bg-forest lg:static lg:bottom-auto lg:z-auto lg:w-auto lg:shadow-none">Add (as draft)</button>
            </div>
          </form>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">All initiatives ({projects.length})</h2>
          <AdminTable
            keyField="id"
            columns={[
              { key: "title", label: "Title" },
              { key: "type", label: "Type", render: (r) => <span className="capitalize">{String(r.type)}</span> },
              { key: "status", label: "Status", render: (r) => <StatusBadge status={String(r.status)} /> },
              { key: "programme", label: "Programme", render: (r) => (r as { programme?: { title: string } }).programme?.title ?? "—" },
              { key: "createdAt", label: "Created", render: (r) => formatDate(r.createdAt as Date) },
              {
                key: "actions", label: "", render: (r) => (
                  <div className="flex flex-wrap items-center gap-2">
                    <AdminRowActions model="project" id={r.id as string} status={String(r.status)} adminPath="/admin/projects" featured={Boolean(r.featured)} />
                    <form action={deleteProject.bind(null, r.id as string)}>
                      <button type="submit" className="inline-flex min-h-11 items-center text-xs font-semibold text-red-500 hover:underline lg:min-h-0">Delete</button>
                    </form>
                  </div>
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
