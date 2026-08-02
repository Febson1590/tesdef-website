import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, projectId, name, email, message } = body as { amount: number; projectId?: string; name?: string; email?: string; message?: string };
    if (!amount || amount < 100) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }
    await prisma.donationRecord.create({
      data: {
        amount,
        name: name ?? "",
        email: email ?? "",
        message: message ?? "",
        projectId: projectId || null,
        status: "pending",
      },
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
