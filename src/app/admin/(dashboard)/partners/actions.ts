"use server";

import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createPartner(formData: FormData) {
  await requireSession();
  const name = formData.get("name") as string;
  const logo = formData.get("logo") as string;
  const website = formData.get("website") as string;
  const category = formData.get("category") as string;
  await prisma.partner.create({ data: { name, logo: logo || "", website: website || "", category: category || "" } });
  revalidatePath("/admin/partners");
}

export async function deletePartner(id: string) {
  await requireSession();
  await prisma.partner.delete({ where: { id } });
  revalidatePath("/admin/partners");
}
