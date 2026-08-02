"use server";

import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createGalleryItem(formData: FormData) {
  await requireSession();
  const title = formData.get("title") as string;
  const caption = formData.get("caption") as string;
  const url = formData.get("url") as string;
  const category = formData.get("category") as string;
  await prisma.galleryItem.create({ data: { title, caption, url, category } });
  revalidatePath("/admin/gallery");
  revalidatePath("/gallery");
}

export async function deleteGalleryItem(id: string) {
  await requireSession();
  await prisma.galleryItem.delete({ where: { id } });
  revalidatePath("/admin/gallery");
  revalidatePath("/gallery");
}
