// ============================================================================
// TESDEF — organisation constants + database seed sources
//
// IMPORTANT:
//   • This file holds FIXED organisation copy (name, motto, vision, mission,
//     purpose, core values, focus areas, contact config) used by the About,
//     Founder, Contact, Footer and Intro sections. These are not "content
//     records" and are intentionally static.
//   • It ALSO exports seed sources (PROGRAMMES, TEAM) used ONLY by
//     prisma/seed.ts to populate the database with official content.
//   • Public content collections (projects, news, events, gallery, impact,
//     partners, testimonials, team, featured homepage items) are DATABASE-DRIVEN.
//     Public pages/components MUST query the database and MUST NOT import content
//     arrays from here. Only records with status = "published" are shown publicly.
// ============================================================================

// ─── Organisation facts (official) ─────────────────────────────────────────

export const ORG = {
  name: "Tamarakuro Environmental and Sustainable Development Foundation",
  shortName: "TESDEF",
  motto: "Empowering Communities. Protecting Nature. Building the Future.",
  heroDescription:
    "TESDEF advances environmental sustainability, youth empowerment, digital innovation and inclusive community development to create resilient communities and lasting impact.",
  supportingStatement:
    "Working with communities to advance sustainability, innovation and inclusive development.",
  intro: [
    "The Tamarakuro Environmental and Sustainable Development Foundation (TESDEF) is a non-profit, non-governmental organization established to promote environmental sustainability, youth empowerment, digital innovation, and community development within Gbaramatu Kingdom, Delta State, the Niger Delta region, and beyond.",
    "Founded by Tamarakuro Tonfawei, TESDEF is inspired by a vision to transform vulnerable communities into resilient, environmentally responsible, and economically empowered societies.",
    "TESDEF recognizes that sustainable development is achieved when environmental conservation, education, technology, innovation, and human capital development work together to create lasting social and economic impact.",
  ],
  vision:
    "To become a leading environmental and sustainable development organization that empowers communities through innovation, environmental stewardship, education, and inclusive socio-economic development, creating resilient communities for present and future generations.",
  mission:
    "To promote environmental sustainability, youth innovation, digital inclusion, community participation, climate resilience, and sustainable livelihoods through education, capacity building, advocacy, strategic partnerships, and evidence-based community development initiatives.",
  purpose: [
    "TESDEF exists to bridge the gap between environmental sustainability and community development by equipping young people, women, and vulnerable populations with the knowledge, skills, and opportunities needed to become active contributors to sustainable development.",
    "The Foundation seeks to address pressing challenges such as environmental degradation, youth unemployment, poor waste management, climate change, and limited digital opportunities through innovative, community-led solutions.",
  ],
  founderName: "Tamarakuro Tonfawei",
  founderTitle: "Founder",
  // Official founder's statement (client-supplied, verbatim).
  // DEVELOPER/ADMIN NOTE (do not surface publicly): the statement below contains
  // the phrase "Tonfawei Environmental and Sustainable Development Foundation",
  // whereas the official organisation name is "Tamarakuro Environmental and
  // Sustainable Development Foundation". This exact wording REQUIRES CLIENT
  // CONFIRMATION. It is shown verbatim as supplied; do not silently rewrite it.
  founderStatement:
    "Growing up in Gbaramatu Kingdom, I witnessed the immense environmental and socio-economic challenges faced by our communities. My academic journey in Environmental Management at the University of Bedfordshire, supported by the Presidential Amnesty Programme, deepened my understanding of sustainable development and strengthened my resolve to give back. Through the Tonfawei Environmental and Sustainable Development Foundation (TESDEF), I envision a future where our youth are equipped with digital and entrepreneurial skills, our communities are cleaner and greener, and our natural environment is protected for generations to come. TESDEF is not just an organization—it is a commitment to transforming challenges into opportunities and building a legacy of sustainability, innovation, and community resilience.",
} as const;

// The eight official core values (official wording — keep intact on the About page).
export const CORE_VALUES = [
  { title: "Sustainability", description: "We promote responsible environmental management and sustainable development practices that safeguard natural resources for future generations." },
  { title: "Integrity", description: "We uphold the highest ethical standards in governance, accountability, transparency, and service delivery." },
  { title: "Innovation", description: "We embrace creativity, technology, research, and innovative solutions to solve environmental and developmental challenges." },
  { title: "Community Ownership", description: "We believe that lasting development is achieved when communities actively participate in identifying problems and implementing solutions." },
  { title: "Excellence", description: "We strive for professionalism, quality, continuous learning, and measurable impact in every project we undertake." },
  { title: "Partnership", description: "We value collaboration with governments, communities, academia, civil society, development agencies, and the private sector." },
  { title: "Inclusiveness", description: "We promote equal opportunities regardless of gender, ethnicity, religion, disability, or socio-economic background." },
  { title: "Accountability", description: "We remain accountable to our beneficiaries, donors, partners, and stakeholders through responsible stewardship of resources." },
] as const;

// TESDEF's areas of focus (official). Presented qualitatively — no metrics.
export const FOCUS_AREAS = [
  { title: "Environmental sustainability", icon: "leaf" },
  { title: "Climate resilience", icon: "climate" },
  { title: "Youth empowerment", icon: "academic-cap" },
  { title: "Digital innovation & inclusion", icon: "computer" },
  { title: "Education & capacity building", icon: "book" },
  { title: "Community development", icon: "home" },
  { title: "Sustainable livelihoods", icon: "livelihood" },
  { title: "Research & advocacy", icon: "megaphone" },
  { title: "Strategic partnerships", icon: "users" },
  { title: "Women & vulnerable populations", icon: "heart" },
] as const;

// The five approved programme categories (used by forms such as Volunteer).
export const PROGRAMME_CATEGORIES = [
  "Environmental Sustainability & Climate Resilience",
  "Youth Empowerment & Education",
  "Digital Innovation & Inclusion",
  "Community Development & Sustainable Livelihoods",
  "Advocacy, Research & Strategic Partnerships",
] as const;

// ─── Contact configuration ──────────────────────────────────────────────────
// Verified contact details go here. Empty strings are treated as "not yet
// confirmed" and are HIDDEN on the public site. Add values only once the client
// confirms them — no component code changes are required.
export const CONTACT = {
  email: "", // general enquiries email — add once confirmed
  partnershipsEmail: "",
  mediaEmail: "",
  phone: "",
  address: "", // office/location — add once confirmed
  socials: {
    x: "",
    facebook: "",
    instagram: "",
    linkedin: "",
  },
} as const;

// ─── SEED SOURCES (used by prisma/seed.ts ONLY — not by public components) ───
// The seed publishes the official programmes and the founder. It creates NO
// projects, news, events, gallery, impact, partners or testimonials — those are
// added and published by an authorised admin through the dashboard.

export const SEED_PROGRAMMES = [
  {
    slug: "environmental-sustainability",
    title: "Environmental Sustainability & Climate Resilience",
    tagline: "Protecting nature. Adapting to change.",
    description:
      "TESDEF works with communities on environmental stewardship — including reforestation, ecosystem restoration, improved waste management, and climate adaptation — to protect natural resources and build resilience to a changing climate.",
    icon: "leaf",
    colour: "forest",
    order: 1,
    status: "published",
  },
  {
    slug: "youth-empowerment",
    title: "Youth Empowerment & Education",
    tagline: "Investing in the next generation.",
    description:
      "Through education, capacity building, mentorship, and leadership development, TESDEF aims to equip young people — with particular attention to women and girls — with the knowledge, skills and confidence to shape their futures.",
    icon: "academic-cap",
    colour: "primary",
    order: 2,
    status: "published",
  },
  {
    slug: "digital-innovation",
    title: "Digital Innovation & Inclusion",
    tagline: "Bridging the digital divide.",
    description:
      "TESDEF promotes digital innovation and inclusion — supporting digital skills, access to technology, and youth-led innovation — so that no community is left behind in the digital economy.",
    icon: "computer-desktop",
    colour: "primary",
    order: 3,
    status: "published",
  },
  {
    slug: "community-development",
    title: "Community Development & Sustainable Livelihoods",
    tagline: "Stronger communities. Lasting change.",
    description:
      "TESDEF supports inclusive community development and sustainable livelihoods — including water, sanitation and hygiene, health, and income opportunities — co-designed with communities and prioritising vulnerable groups.",
    icon: "home",
    colour: "primary",
    order: 4,
    status: "published",
  },
  {
    slug: "advocacy-partnerships",
    title: "Advocacy, Research & Strategic Partnerships",
    tagline: "Amplifying community voices.",
    description:
      "TESDEF pursues advocacy, evidence-based research, and strategic partnerships with communities, government, civil society and other organisations to advance environmental protection, sustainable development and community rights.",
    icon: "megaphone",
    colour: "primary",
    order: 5,
    status: "published",
  },
];

export const SEED_TEAM = [
  {
    name: "Tamarakuro Tonfawei",
    role: "Founder",
    bio: "",
    image: "",
    order: 1,
    status: "published",
  },
];
