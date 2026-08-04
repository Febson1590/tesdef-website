import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminTable } from "@/components/admin/AdminTable";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";

export const metadata = { title: "Volunteer Applications" };

export default async function AdminVolunteersPage() {
  const applications = await prisma.volunteerApplication.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <>
      <AdminHeader title="Volunteer Applications" />
      <div className="p-4 sm:p-6 lg:p-8">
        <p className="mb-4 text-sm text-muted">{applications.filter((a) => a.status === "pending").length} pending of {applications.length} total</p>
        <AdminTable
          keyField="id"
          columns={[
            { key: "name", label: "Name" },
            { key: "email", label: "Email" },
            { key: "phone", label: "Phone" },
            { key: "skills", label: "Skills", render: (r) => String(r.skills ?? "").slice(0, 60) },
            { key: "status", label: "Status" },
            { key: "createdAt", label: "Applied", render: (r) => formatDate(r.createdAt as Date) },
          ]}
          rows={applications as unknown as Record<string, unknown>[]}
          emptyMessage="No volunteer applications yet."
        />
      </div>
    </>
  );
}
