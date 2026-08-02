"use server";

import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createImpactStat(formData: FormData) {
  await requireSession();
  const label = formData.get("label") as string;
  const value = formData.get("value") as string;
  const description = formData.get("description") as string;
  const icon = formData.get("icon") as string;
  await prisma.impactStat.create({ data: { label, value, description, icon } });
  revalidatePath("/admin/impact");
  revalidatePath("/impact");
}

export async function deleteImpactStat(id: string) {
  await requireSession();
  await prisma.impactStat.delete({ where: { id } });
  revalidatePath("/admin/impact");
  revalidatePath("/impact");
}
