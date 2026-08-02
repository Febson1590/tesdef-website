import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminTable } from "@/components/admin/AdminTable";
import { prisma } from "@/lib/prisma";
import { createTeamMember, deleteTeamMember } from "./actions";

export const metadata = { title: "Team" };

export default async function AdminTeamPage() {
  const members = await prisma.teamMember.findMany({ orderBy: { createdAt: "asc" } });

  return (
    <>
      <AdminHeader title="Team" />
      <div className="p-6 space-y-8">
        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="mb-5 font-display text-lg font-bold text-forest">Add team member</h2>
          <form action={createTeamMember} className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Name *</label>
              <input name="name" required className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Role *</label>
              <input name="role" required className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Photo URL</label>
              <input name="image" className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-semibold text-forest">Bio</label>
              <textarea name="bio" rows={3} className="w-full resize-none rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-forest">Add member</button>
            </div>
          </form>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">All members ({members.length})</h2>
          <AdminTable
            keyField="id"
            columns={[
              { key: "name", label: "Name" },
              { key: "role", label: "Role" },
              { key: "bio", label: "Bio", render: (r) => String(r.bio ?? "").slice(0, 60) + (String(r.bio ?? "").length > 60 ? "…" : "") },
              {
                key: "actions", label: "", render: (r) => (
                  <form action={deleteTeamMember.bind(null, r.id as string)}>
                    <button type="submit" className="text-xs font-semibold text-red-500 hover:underline">Delete</button>
                  </form>
                ),
              },
            ]}
            rows={members as unknown as Record<string, unknown>[]}
          />
        </section>
      </div>
    </>
  );
}
