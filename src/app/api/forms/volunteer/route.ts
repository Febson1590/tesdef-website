import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { notifyEnquiry } from "@/lib/notify";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, skills, interests, message } = body as Record<string, string>;
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    await prisma.volunteerApplication.create({ data: { name, email, phone: phone ?? "", skills: skills ?? "", interests: interests ?? "", message } });
    await notifyEnquiry("New volunteer application — TESDEF website", { Name: name, Email: email, Phone: phone ?? "", Skills: skills ?? "", "Programme interests": interests ?? "", Message: message });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
