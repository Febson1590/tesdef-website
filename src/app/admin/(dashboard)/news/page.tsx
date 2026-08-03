import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminTable } from "@/components/admin/AdminTable";
import { AdminRowActions, StatusBadge } from "@/components/admin/AdminRowActions";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import { createNewsPost, deleteNewsPost } from "./actions";

export const metadata = { title: "News & Updates" };

export default async function AdminNewsPage() {
  const posts = await prisma.newsPost.findMany({ orderBy: { publishedAt: "desc" } });

  return (
    <>
      <AdminHeader title="News & Updates" />
      <div className="p-6 space-y-8">
        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="mb-5 font-display text-lg font-bold text-forest">Write news post</h2>
          <form action={createNewsPost} className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-semibold text-forest">Title *</label>
              <input name="title" required className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Category</label>
              <input name="category" placeholder="e.g. Environment" className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-forest">Cover image URL</label>
              <input name="coverImage" className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-semibold text-forest">Excerpt *</label>
              <textarea name="excerpt" rows={2} required className="w-full resize-none rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-semibold text-forest">Full content</label>
              <textarea name="content" rows={6} className="w-full resize-none rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-forest">Add (as draft)</button>
              <p className="mt-2 text-xs text-muted">New posts are created as Draft. Use Publish to make them public.</p>
            </div>
          </form>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">All posts ({posts.length})</h2>
          <AdminTable
            keyField="id"
            columns={[
              { key: "title", label: "Title" },
              { key: "category", label: "Category" },
              { key: "status", label: "Status", render: (r) => <StatusBadge status={String(r.status)} /> },
              { key: "publishedAt", label: "Date", render: (r) => formatDate(r.publishedAt as Date) },
              {
                key: "actions", label: "", render: (r) => (
                  <div className="flex flex-wrap items-center gap-2">
                    <AdminRowActions model="newsPost" id={r.id as string} status={String(r.status)} adminPath="/admin/news" />
                    <form action={deleteNewsPost.bind(null, r.id as string)}>
                      <button type="submit" className="text-xs font-semibold text-red-500 hover:underline">Delete</button>
                    </form>
                  </div>
                ),
              },
            ]}
            rows={posts as unknown as Record<string, unknown>[]}
          />
        </section>
      </div>
    </>
  );
}
