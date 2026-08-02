import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Admin — TESDEF", template: "%s | TESDEF Admin" },
  robots: "noindex, nofollow",
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
