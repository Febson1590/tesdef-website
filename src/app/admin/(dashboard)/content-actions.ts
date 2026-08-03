"use server";

import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

// Generic content status controls shared by all content types.
// status: "draft" | "published" | "archived" — only "published" is public.

export type ContentModel =
  | "programme"
  | "project"
  | "newsPost"
  | "event"
  | "galleryItem"
  | "impactStat"
  | "testimonial"
  | "teamMember"
  | "partner";

type StatusClient = Record<ContentModel, { update: (args: { where: { id: string }; data: Record<string, unknown> }) => Promise<unknown> }>;

async function revalidateAll(adminPath: string) {
  revalidatePath(adminPath);
  // Public pages share the root layout; revalidate so status changes show immediately.
  revalidatePath("/", "layout");
}

export async function setStatus(model: ContentModel, id: string, status: string, adminPath: string) {
  await requireSession();
  const client = prisma as unknown as StatusClient;
  await client[model].update({ where: { id }, data: { status } });
  await revalidateAll(adminPath);
}

export async function setFeatured(id: string, featured: boolean, adminPath: string) {
  await requireSession();
  await prisma.project.update({ where: { id }, data: { featured } });
  await revalidateAll(adminPath);
}
