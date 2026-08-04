import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminTable } from "@/components/admin/AdminTable";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";

export const metadata = { title: "Partnership Enquiries" };

export default async function AdminEnquiriesPage() {
  const enquiries = await prisma.partnershipEnquiry.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <>
      <AdminHeader title="Partnership Enquiries" />
      <div className="p-4 sm:p-6 lg:p-8">
        <p className="mb-4 text-sm text-muted">{enquiries.filter((e) => e.status === "pending").length} pending of {enquiries.length} total</p>
        <AdminTable
          keyField="id"
          columns={[
            { key: "orgName", label: "Organisation" },
            { key: "contactName", label: "Contact" },
            { key: "email", label: "Email" },
            { key: "type", label: "Type" },
            { key: "status", label: "Status" },
            { key: "createdAt", label: "Received", render: (r) => formatDate(r.createdAt as Date) },
          ]}
          rows={enquiries as unknown as Record<string, unknown>[]}
          emptyMessage="No partnership enquiries yet."
        />
      </div>
    </>
  );
}
