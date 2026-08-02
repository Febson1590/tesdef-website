"use server";

import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createTeamMember(formData: FormData) {
  await requireSession();
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const bio = formData.get("bio") as string;
  const image = formData.get("image") as string;
  await prisma.teamMember.create({ data: { name, role, bio, image: image || "" } });
  revalidatePath("/admin/team");
  revalidatePath("/about");
}

export async function deleteTeamMember(id: string) {
  await requireSession();
  await prisma.teamMember.delete({ where: { id } });
  revalidatePath("/admin/team");
  revalidatePath("/about");
}
