import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { SEED_PROGRAMMES, SEED_TEAM } from "../src/lib/data";

const prisma = new PrismaClient();

// Seed policy:
//   • Creates ONLY the admin user + official published content (programme areas
//     + founder). It NEVER creates mock projects, news, events, gallery, impact
//     stats, partners or testimonials — those are added/published by an admin.
//   • It is NOT part of the Vercel build (build runs `prisma generate && next
//     build` only), so production deploys never auto-create any content.
//   • As a safety net, it refuses to run against a production environment unless
//     ALLOW_PROD_SEED=1 is explicitly set.

async function main() {
  if (process.env.NODE_ENV === "production" && process.env.ALLOW_PROD_SEED !== "1") {
    console.log("⏭  Skipping seed: production environment (set ALLOW_PROD_SEED=1 to override).");
    return;
  }

  console.log("🌱 Seeding database...");

  const hashedPassword = await bcrypt.hash("Tesdef2026!", 12);
  await prisma.adminUser.upsert({
    where: { email: "admin@tesdef.org" },
    update: {},
    create: {
      email: "admin@tesdef.org",
      passwordHash: hashedPassword,
      name: "TESDEF Admin",
      role: "admin",
    },
  });
  console.log("  ✓ Admin user");

  for (const p of SEED_PROGRAMMES) {
    await prisma.programme.upsert({
      where: { slug: p.slug },
      update: {
        title: p.title,
        tagline: p.tagline,
        description: p.description,
        icon: p.icon,
        colour: p.colour,
        order: p.order,
        status: p.status,
      },
      create: {
        slug: p.slug,
        title: p.title,
        tagline: p.tagline,
        description: p.description,
        icon: p.icon,
        colour: p.colour,
        order: p.order,
        status: p.status,
      },
    });
  }
  console.log(`  ✓ ${SEED_PROGRAMMES.length} programmes (published)`);

  for (const m of SEED_TEAM) {
    const existing = await prisma.teamMember.findFirst({ where: { name: m.name } });
    if (!existing) {
      await prisma.teamMember.create({
        data: { name: m.name, role: m.role, bio: m.bio, image: m.image, order: m.order, status: m.status },
      });
    }
  }
  console.log(`  ✓ ${SEED_TEAM.length} team member (founder)`);

  console.log("\n✅ Seeding complete (admin + official programmes + founder only).");
  console.log("\nAdmin login:");
  console.log("  Email:    admin@tesdef.org");
  console.log("  Password: Tesdef2026!\n");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
