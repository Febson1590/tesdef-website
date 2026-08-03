import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import {
  PROGRAMMES,
  PROJECTS,
  NEWS,
  EVENTS,
  IMPACT_STATS,
  TESTIMONIALS,
  TEAM,
  PARTNERS,
  GALLERY_ITEMS,
} from "../src/lib/data";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Admin user
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

  // Programmes
  for (const p of PROGRAMMES) {
    await prisma.programme.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        id: p.id,
        slug: p.slug,
        title: p.title,
        tagline: p.tagline,
        description: p.description,
        icon: p.icon,
        colour: p.colour,
        order: p.order,
        published: p.published,
      },
    });
  }
  console.log(`  ✓ ${PROGRAMMES.length} programmes`);

  // Projects
  for (const p of PROJECTS) {
    await prisma.project.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        id: p.id,
        slug: p.slug,
        title: p.title,
        summary: p.summary,
        story: p.story,
        coverImage: p.coverImage,
        programmeId: p.programmeId,
        objectives: JSON.stringify(p.objectives),
        location: p.location,
        startDate: p.startDate ? new Date(p.startDate) : null,
        endDate: p.endDate ? new Date(p.endDate) : null,
        fundingGoal: p.fundingGoal,
        amountRaised: p.amountRaised,
        supporterCount: p.supporterCount,
        status: p.status,
        howFundsUsed: JSON.stringify(p.howFundsUsed),
        isSample: p.isSample,
        published: p.published,
      },
    });
    // Project updates (sample projects currently have none)
    const updates = p.updates as Array<{ date: string; title: string; content: string }>;
    for (const u of updates) {
      await prisma.projectUpdate.create({
        data: {
          projectId: p.id,
          title: u.title,
          content: u.content,
          createdAt: new Date(u.date),
        },
      });
    }
  }
  console.log(`  ✓ ${PROJECTS.length} projects`);

  // News
  for (const n of NEWS) {
    await prisma.newsPost.upsert({
      where: { slug: n.slug },
      update: {},
      create: {
        id: n.id,
        slug: n.slug,
        title: n.title,
        excerpt: n.excerpt,
        content: n.content,
        coverImage: n.coverImage,
        category: n.category,
        tags: JSON.stringify(n.tags),
        isSample: n.isSample,
        published: n.published,
        publishedAt: new Date(n.publishedAt),
      },
    });
  }
  console.log(`  ✓ ${NEWS.length} news posts`);

  // Events
  for (const e of EVENTS) {
    await prisma.event.upsert({
      where: { slug: e.slug },
      update: {},
      create: {
        id: e.id,
        slug: e.slug,
        title: e.title,
        description: e.description,
        coverImage: e.coverImage,
        location: e.location,
        isVirtual: e.isVirtual,
        startDate: new Date(e.startDate),
        endDate: e.endDate ? new Date(e.endDate) : null,
        registrationLink: e.registrationLink,
        isSample: e.isSample,
        published: e.published,
      },
    });
  }
  console.log(`  ✓ ${EVENTS.length} events`);

  // Impact stats
  for (const s of IMPACT_STATS) {
    await prisma.impactStat.upsert({
      where: { id: s.id },
      update: {},
      create: { id: s.id, label: s.label, value: s.value, suffix: s.suffix, icon: s.icon, order: s.order },
    });
  }
  console.log(`  ✓ ${IMPACT_STATS.length} impact stats`);

  // Testimonials
  for (const t of TESTIMONIALS) {
    await prisma.testimonial.upsert({
      where: { id: t.id },
      update: {},
      create: { id: t.id, quote: t.quote, name: t.name, role: t.role, location: t.location, image: t.image, order: t.order, published: t.published },
    });
  }
  console.log(`  ✓ ${TESTIMONIALS.length} testimonials`);

  // Team
  for (const m of TEAM) {
    await prisma.teamMember.upsert({
      where: { id: m.id },
      update: {},
      create: { id: m.id, name: m.name, role: m.role, bio: m.bio, image: m.image, order: m.order, published: m.published },
    });
  }
  console.log(`  ✓ ${TEAM.length} team members`);

  // Partners
  for (const p of PARTNERS) {
    await prisma.partner.upsert({
      where: { id: p.id },
      update: {},
      create: { id: p.id, name: p.name, logo: p.logo, website: p.website, category: p.category, order: p.order, published: p.published },
    });
  }
  console.log(`  ✓ ${PARTNERS.length} partners`);

  // Gallery
  for (const g of GALLERY_ITEMS) {
    const existing = await prisma.galleryItem.findFirst({ where: { id: g.id } });
    if (!existing) {
      await prisma.galleryItem.create({
        data: { id: g.id, url: g.url, caption: g.caption, category: g.category, alt: g.alt, order: g.order, published: g.published },
      });
    }
  }
  console.log(`  ✓ ${GALLERY_ITEMS.length} gallery items`);

  console.log("\n✅ Seeding complete.");
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
