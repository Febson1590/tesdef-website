"use server";

import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { slugify } from "@/lib/utils";

export async function createProject(formData: FormData) {
  await requireSession();
  const title = formData.get("title") as string;
  const summary = formData.get("summary") as string;
  const story = (formData.get("story") as string) || "";
  const location = (formData.get("location") as string) || "";
  const type = (formData.get("type") as string) || "initiative";
  const coverImage = formData.get("coverImage") as string;
  const programmeId = formData.get("programmeId") as string;
  const slug = slugify(title);
  // New content is created as DRAFT; an admin publishes it explicitly.
  await prisma.project.create({
    data: {
      title,
      summary,
      story,
      location,
      type,
      status: "draft",
      featured: false,
      coverImage: coverImage || "",
      slug,
      objectives: "[]",
      howFundsUsed: "[]",
      programmeId: programmeId || null,
    },
  });
  revalidatePath("/admin/projects");
  // Revalidate every public route that can show projects (home, /projects, programme pages).
  revalidatePath("/", "layout");
}

export async function deleteProject(id: string) {
  await requireSession();
  await prisma.project.delete({ where: { id } });
  revalidatePath("/admin/projects");
  revalidatePath("/", "layout");
}
