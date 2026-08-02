import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminTable } from "@/components/admin/AdminTable";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";

export const metadata = { title: "Contact Messages" };

export default async function AdminMessagesPage() {
  const messages = await prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <>
      <AdminHeader title="Contact Messages" />
      <div className="p-6">
        <p className="mb-4 text-sm text-muted">{messages.filter((m) => !m.read).length} unread of {messages.length} total</p>
        <AdminTable
          keyField="id"
          columns={[
            { key: "name", label: "Name" },
            { key: "email", label: "Email" },
            { key: "subject", label: "Subject" },
            { key: "message", label: "Message", render: (r) => String(r.message ?? "").slice(0, 80) + (String(r.message ?? "").length > 80 ? "…" : "") },
            { key: "createdAt", label: "Received", render: (r) => formatDate(r.createdAt as Date) },
            { key: "read", label: "Read", render: (r) => (r.read ? "✓" : "—") },
          ]}
          rows={messages as unknown as Record<string, unknown>[]}
          emptyMessage="No contact messages yet."
        />
      </div>
    </>
  );
}
