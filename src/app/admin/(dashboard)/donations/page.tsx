import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminTable } from "@/components/admin/AdminTable";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";

export const metadata = { title: "Support interest" };

export default async function AdminSupportPage() {
  const records = await prisma.donationRecord.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <>
      <AdminHeader title="Support interest" />
      <div className="space-y-6 p-4 sm:p-6 lg:p-8">
        <div className="rounded-xl border border-black/10 bg-white px-6 py-4 shadow-sm">
          <p className="text-sm text-muted">Support-interest submissions</p>
          <p className="font-display text-2xl font-bold text-forest">{records.length}</p>
          <p className="mt-1 text-xs text-muted">Payment processing is not live — these are expressions of interest.</p>
        </div>
        <AdminTable
          keyField="id"
          columns={[
            { key: "name", label: "Name", render: (r) => String(r.name || "—") },
            { key: "email", label: "Email" },
            { key: "country", label: "Country", render: (r) => String(r.country || "—") },
            { key: "supportType", label: "Type of support", render: (r) => String(r.supportType || "—") },
            { key: "createdAt", label: "Date", render: (r) => formatDate(r.createdAt as Date) },
          ]}
          rows={records as unknown as Record<string, unknown>[]}
          emptyMessage="No support-interest submissions yet."
        />
      </div>
    </>
  );
}
