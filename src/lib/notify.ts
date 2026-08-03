import { CONTACT } from "@/lib/data";

// Sends an enquiry notification to the verified TESDEF inbox (CONTACT.notifyEmail).
//
// This is a NO-OP unless RESEND_API_KEY is configured, so all forms keep working
// regardless — every submission is always stored and visible in the admin
// dashboard. Once RESEND_API_KEY (and optionally RESEND_FROM) are set as Vercel
// env vars, submissions are additionally emailed to tesdef2026@gmail.com.
export async function notifyEnquiry(subject: string, fields: Record<string, string>) {
  const key = process.env.RESEND_API_KEY;
  const to = CONTACT.notifyEmail;
  if (!key || !to) return;

  const from = process.env.RESEND_FROM || "TESDEF Website <onboarding@resend.dev>";
  const text = Object.entries(fields)
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to,
        subject,
        text,
        ...(fields.Email ? { reply_to: fields.Email } : {}),
      }),
    });
  } catch (e) {
    console.error("notifyEnquiry failed:", e);
  }
}
