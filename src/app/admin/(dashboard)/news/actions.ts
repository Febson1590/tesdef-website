"use server";

import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { slugify } from "@/lib/utils";

export async function createNewsPost(formData: FormData) {
  await requireSession();
  const title = formData.get("title") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const category = formData.get("category") as string;
  const coverImage = formData.get("coverImage") as string;
  const slug = slugify(title);
  await prisma.newsPost.create({
    data: { title, excerpt, content, category, coverImage: coverImage || "/images/news-placeholder.jpg", slug, publishedAt: new Date() },
  });
  revalidatePath("/admin/news");
  revalidatePath("/news");
}

export async function deleteNewsPost(id: string) {
  await requireSession();
  await prisma.newsPost.delete({ where: { id } });
  revalidatePath("/admin/news");
  revalidatePath("/news");
}
