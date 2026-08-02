"use server";

import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { slugify } from "@/lib/utils";

export async function createProgramme(formData: FormData) {
  await requireSession();
  const title = formData.get("title") as string;
  const tagline = formData.get("tagline") as string;
  const description = formData.get("description") as string;
  const icon = formData.get("icon") as string;
  const slug = slugify(title);
  await prisma.programme.create({ data: { title, tagline, description, icon, slug } });
  revalidatePath("/admin/programmes");
  revalidatePath("/programmes");
}

export async function deleteProgramme(id: string) {
  await requireSession();
  await prisma.programme.delete({ where: { id } });
  revalidatePath("/admin/programmes");
  revalidatePath("/programmes");
}
