"use server";

import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

function revalidate() {
  revalidatePath("/admin/hero");
  // The homepage renders the carousel; revalidate all public routes under root layout.
  revalidatePath("/", "layout");
}

export async function createHeroSlide(formData: FormData) {
  await requireSession();
  const image = (formData.get("image") as string) || "";
  const title = (formData.get("title") as string) || "";
  const caption = (formData.get("caption") as string) || "";
  const order = Number(formData.get("order") ?? 0) || 0;
  if (!image) return; // an image is required for a slide
  // New slides start as DRAFT; an admin publishes them explicitly.
  await prisma.heroSlide.create({ data: { image, title, caption, order, status: "draft" } });
  revalidate();
}

export async function updateHeroSlide(id: string, formData: FormData) {
  await requireSession();
  const title = (formData.get("title") as string) || "";
  const caption = (formData.get("caption") as string) || "";
  const order = Number(formData.get("order") ?? 0) || 0;
  await prisma.heroSlide.update({ where: { id }, data: { title, caption, order } });
  revalidate();
}

// Reorder by swapping the display order with the adjacent slide.
export async function moveHeroSlide(id: string, direction: "up" | "down") {
  await requireSession();
  const slides = await prisma.heroSlide.findMany({ orderBy: [{ order: "asc" }, { createdAt: "asc" }] });
  const i = slides.findIndex((s) => s.id === id);
  if (i === -1) return;
  const j = direction === "up" ? i - 1 : i + 1;
  if (j < 0 || j >= slides.length) return;
  const a = slides[i];
  const b = slides[j];
  // Swap order values (fall back to index if equal so the swap is meaningful).
  const aOrder = a.order === b.order ? i : a.order;
  const bOrder = a.order === b.order ? j : b.order;
  await prisma.$transaction([
    prisma.heroSlide.update({ where: { id: a.id }, data: { order: bOrder } }),
    prisma.heroSlide.update({ where: { id: b.id }, data: { order: aOrder } }),
  ]);
  revalidate();
}

export async function deleteHeroSlide(id: string) {
  await requireSession();
  await prisma.heroSlide.delete({ where: { id } });
  revalidate();
}
