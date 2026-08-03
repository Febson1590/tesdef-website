import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { notifyEnquiry } from "@/lib/notify";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { orgName, contactName, email, phone, type, message } = body as Record<string, string>;
    if (!orgName || !contactName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    await prisma.partnershipEnquiry.create({ data: { orgName, contactName, email, phone: phone ?? "", type: type ?? "", message } });
    await notifyEnquiry("New partnership enquiry — TESDEF website", { Organisation: orgName, Contact: contactName, Email: email, Phone: phone ?? "", "Partnership type": type ?? "", Message: message });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
