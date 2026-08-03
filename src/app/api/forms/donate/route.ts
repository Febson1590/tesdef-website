import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { notifyEnquiry } from "@/lib/notify";

// Support-interest submissions (no live payment processing).
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, country, supportType, message } = body as {
      name?: string;
      email?: string;
      country?: string;
      supportType?: string;
      message?: string;
    };
    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    await prisma.donationRecord.create({
      data: {
        name,
        email,
        country: country ?? "",
        supportType: supportType ?? "",
        message: message ?? "",
        status: "pending",
      },
    });
    await notifyEnquiry("New support interest — TESDEF website", { Name: name, Email: email, Country: country ?? "", "Support type": supportType ?? "", Message: message ?? "" });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
