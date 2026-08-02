import { AdminHeader } from "@/components/admin/AdminHeader";
import { prisma } from "@/lib/prisma";
import { formatCurrency, formatDate } from "@/lib/utils";
import Link from "next/link";

async function getStats() {
  const [programmes, projects, news, events, messages, volunteers, enquiries, donations] = await Promise.all([
    prisma.programme.count(),
    prisma.project.count(),
    prisma.newsPost.count(),
    prisma.event.count(),
    prisma.contactMessage.count({ where: { read: false } }),
    prisma.volunteerApplication.count({ where: { status: "pending" } }),
    prisma.partnershipEnquiry.count({ where: { status: "pending" } }),
    prisma.donationRecord.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
  ]);
  const totalDonations = await prisma.donationRecord.aggregate({ _sum: { amount: true } });
  return { programmes, projects, news, events, messages, volunteers, enquiries, donations, totalDonations: totalDonations._sum.amount ?? 0 };
}

const STAT_CARDS = [
  { label: "Programmes", href: "/admin/programmes", color: "bg-mint text-forest" },
  { label: "Projects", href: "/admin/projects", color: "bg-primary/10 text-primary" },
  { label: "News posts", href: "/admin/news", color: "bg-fresh/20 text-forest" },
  { label: "Events", href: "/admin/events", color: "bg-amber-50 text-amber-700" },
];

export default async function AdminDashboard() {
  const stats = await getStats();
  const counts = [stats.programmes, stats.projects, stats.news, stats.events];
  const inboxItems = [
    { label: "Unread messages", count: stats.messages, href: "/admin/messages", urgent: stats.messages > 0 },
    { label: "Pending volunteers", count: stats.volunteers, href: "/admin/volunteers", urgent: stats.volunteers > 0 },
    { label: "Pending enquiries", count: stats.enquiries, href: "/admin/enquiries", urgent: stats.enquiries > 0 },
  ];

  return (
    <>
      <AdminHeader title="Dashboard" />
      <div className="p-6 space-y-8">
        {/* Content counts */}
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">Content overview</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STAT_CARDS.map((card, i) => (
              <Link key={card.label} href={card.href} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <p className={`mb-2 inline-block rounded-lg px-2.5 py-1 text-2xl font-bold ${card.color}`}>{counts[i]}</p>
                <p className="text-sm font-medium text-ink">{card.label}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Inbox */}
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">Inbox</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {inboxItems.map((item) => (
              <Link key={item.label} href={item.href}
                className={`flex items-center justify-between rounded-xl border p-5 shadow-sm transition-shadow hover:shadow-md ${item.urgent ? "border-amber-200 bg-amber-50" : "border-black/10 bg-white"}`}>
                <span className="text-sm font-medium text-ink">{item.label}</span>
                <span className={`rounded-full px-3 py-1 text-sm font-bold ${item.urgent ? "bg-amber-500 text-white" : "bg-offwhite text-muted"}`}>{item.count}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Donations summary */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Recent donations</h2>
            <Link href="/admin/donations" className="text-xs font-semibold text-primary hover:underline">View all →</Link>
          </div>
          <div className="rounded-xl border border-black/10 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
              <span className="text-sm font-medium text-muted">Total pledged (all time)</span>
              <span className="font-display text-xl font-bold text-forest">{formatCurrency(stats.totalDonations)}</span>
            </div>
            {stats.donations.length === 0 ? (
              <p className="px-5 py-8 text-center text-sm text-muted">No donations yet.</p>
            ) : (
              <ul className="divide-y divide-black/5">
                {stats.donations.map((d) => (
                  <li key={d.id} className="flex items-center justify-between px-5 py-3">
                    <div>
                      <p className="text-sm font-medium text-ink">{d.name || "Anonymous"}</p>
                      <p className="text-xs text-muted">{formatDate(d.createdAt)}</p>
                    </div>
                    <span className="font-semibold text-primary">{formatCurrency(d.amount)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">Quick actions</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/admin/programmes", label: "Add programme" },
              { href: "/admin/projects", label: "Add project" },
              { href: "/admin/news", label: "Write news post" },
              { href: "/admin/events", label: "Create event" },
              { href: "/admin/gallery", label: "Upload to gallery" },
            ].map((a) => (
              <Link key={a.href} href={a.href}
                className="rounded-full border border-primary/30 bg-white px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white">
                {a.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
