import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminTable } from "@/components/admin/AdminTable";
import { prisma } from "@/lib/prisma";
import { formatCurrency, formatDate } from "@/lib/utils";

export const metadata = { title: "Donations" };

export default async function AdminDonationsPage() {
  const donations = await prisma.donationRecord.findMany({ orderBy: { createdAt: "desc" }, include: { project: { select: { title: true } } } });
  const total = donations.reduce((sum, d) => sum + d.amount, 0);

  return (
    <>
      <AdminHeader title="Donations" />
      <div className="p-6 space-y-6">
        <div className="rounded-xl border border-black/10 bg-white px-6 py-4 shadow-sm">
          <p className="text-sm text-muted">Total pledged (all time)</p>
          <p className="font-display text-2xl font-bold text-forest">{formatCurrency(total)}</p>
        </div>
        <AdminTable
          keyField="id"
          columns={[
            { key: "name", label: "Donor", render: (r) => String(r.name || "Anonymous") },
            { key: "email", label: "Email" },
            { key: "amount", label: "Amount", render: (r) => formatCurrency(Number(r.amount)) },
            { key: "project", label: "Project", render: (r) => (r as { project?: { title: string } }).project?.title ?? "General" },
            { key: "status", label: "Status" },
            { key: "createdAt", label: "Date", render: (r) => formatDate(r.createdAt as Date) },
          ]}
          rows={donations as unknown as Record<string, unknown>[]}
          emptyMessage="No donation records yet."
        />
      </div>
    </>
  );
}
