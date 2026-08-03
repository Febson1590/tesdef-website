"use server";

import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { slugify } from "@/lib/utils";

export async function createProject(formData: FormData) {
  await requireSession();
  const title = formData.get("title") as string;
  const summary = formData.get("summary") as string;
  const story = formData.get("story") as string;
  const location = formData.get("location") as string;
  const status = formData.get("status") as string;
  const fundingGoal = Number(formData.get("fundingGoal") ?? 0);
  const amountRaised = Number(formData.get("amountRaised") ?? 0);
  const coverImage = formData.get("coverImage") as string;
  const programmeId = formData.get("programmeId") as string;
  const slug = slugify(title);
  await prisma.project.create({
    data: {
      title, summary, story, location, status: status || "proposed",
      fundingGoal, amountRaised,
      coverImage: coverImage || "/images/project-placeholder.jpg",
      slug,
      objectives: "[]",
      howFundsUsed: "[]",
      programmeId: programmeId || null,
      published: true,
    },
  });
  revalidatePath("/admin/projects");
  revalidatePath("/projects");
}

export async function deleteProject(id: string) {
  await requireSession();
  await prisma.project.delete({ where: { id } });
  revalidatePath("/admin/projects");
  revalidatePath("/projects");
}
