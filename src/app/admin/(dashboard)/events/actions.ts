"use server";

import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { slugify } from "@/lib/utils";

export async function createEvent(formData: FormData) {
  await requireSession();
  const title = formData.get("title") as string;
  const excerpt = formData.get("excerpt") as string;
  const description = formData.get("description") as string;
  const location = formData.get("location") as string;
  const startDate = formData.get("startDate") as string;
  const coverImage = formData.get("coverImage") as string;
  const registrationLink = formData.get("registrationLink") as string;
  const slug = slugify(title);
  await prisma.event.create({
    data: { title, excerpt: excerpt || "", description, location, startDate: new Date(startDate), coverImage: coverImage || "", registrationLink: registrationLink || "", slug, status: "published", published: true },
  });
  revalidatePath("/admin/events");
  revalidatePath("/events");
}

export async function deleteEvent(id: string) {
  await requireSession();
  await prisma.event.delete({ where: { id } });
  revalidatePath("/admin/events");
  revalidatePath("/events");
}
