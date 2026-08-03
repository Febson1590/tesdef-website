// ============================================================================
// TESDEF — static content
//
// Used as seed data and as a fallback when the database is unavailable.
//
// CONTENT-ACCURACY POLICY (read before editing):
//   • Only the client's official information may be presented as fact.
//   • No invented statistics, achievements, people, partners, funding totals,
//     registration/audit claims, project outcomes, testimonials, or history.
//   • Illustrative example records (projects, news, events, gallery) are marked
//     `isSample: true` and labelled "Sample content — pending client
//     confirmation" so they are never shown as verified facts.
// ============================================================================

// ─── Organisation facts (official) ─────────────────────────────────────────

export const ORG = {
  name: "Tamarakuro Environmental and Sustainable Development Foundation",
  shortName: "TESDEF",
  motto: "Empowering Communities. Protecting Nature. Building the Future.",
  heroDescription:
    "TESDEF advances environmental sustainability, youth empowerment, digital innovation and inclusive community development to create resilient communities and lasting impact.",
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
} as const;

// The eight official core values.
// NOTE: value NAMES are official. The one-line explanations below are neutral
// placeholder definitions — replace with the client's official wording when
// provided (flagged for client confirmation).
export const CORE_VALUES = [
  { title: "Sustainability", description: "We design for lasting impact, protecting the environment and building capacity that endures for future generations." },
  { title: "Integrity", description: "We act with honesty, transparency and accountability in everything we do." },
  { title: "Innovation", description: "We embrace creative, context-appropriate solutions and continuously learn and improve." },
  { title: "Community Ownership", description: "We work with communities as partners so that they lead, own and sustain the change." },
  { title: "Excellence", description: "We hold ourselves to high standards in the quality and delivery of our work." },
  { title: "Partnership", description: "We build honest, collaborative relationships that amplify shared impact." },
  { title: "Inclusiveness", description: "We ensure young people, women and vulnerable groups can participate fully and benefit equally." },
  { title: "Accountability", description: "We take responsibility for our commitments and measure and share our results openly." },
] as const;

// TESDEF's areas of focus (official). Presented qualitatively — no metrics.
export const FOCUS_AREAS = [
  { title: "Environmental sustainability", icon: "leaf" },
  { title: "Youth empowerment", icon: "academic-cap" },
  { title: "Digital innovation & inclusion", icon: "computer" },
  { title: "Education & capacity building", icon: "book" },
  { title: "Climate resilience", icon: "climate" },
  { title: "Community development", icon: "home" },
  { title: "Sustainable livelihoods", icon: "livelihood" },
  { title: "Advocacy & research", icon: "megaphone" },
  { title: "Strategic partnerships", icon: "users" },
  { title: "Women & vulnerable populations", icon: "heart" },
] as const;

// ─── Programmes (areas of work) ─────────────────────────────────────────────
// These describe TESDEF's intended areas of work, not claimed achievements.

export const PROGRAMMES = [
  {
    id: "prog-1",
    slug: "environmental-sustainability",
    title: "Environmental Sustainability & Climate Resilience",
    tagline: "Protecting nature. Adapting to change.",
    description:
      "TESDEF works with communities on environmental stewardship — including reforestation, ecosystem restoration, improved waste management, and climate adaptation — to protect natural resources and build resilience to a changing climate.",
    icon: "leaf",
    colour: "forest",
    order: 1,
    published: true,
    projectCount: 1,
  },
  {
    id: "prog-2",
    slug: "youth-empowerment",
    title: "Youth Empowerment & Education",
    tagline: "Investing in the next generation.",
    description:
      "Through education, capacity building, mentorship, and leadership development, TESDEF aims to equip young people — with particular attention to women and girls — with the knowledge, skills and confidence to shape their futures.",
    icon: "academic-cap",
    colour: "primary",
    order: 2,
    published: true,
    projectCount: 1,
  },
  {
    id: "prog-3",
    slug: "digital-innovation",
    title: "Digital Innovation & Inclusion",
    tagline: "Bridging the digital divide.",
    description:
      "TESDEF promotes digital innovation and inclusion — supporting digital skills, access to technology, and youth-led innovation — so that no community is left behind in the digital economy.",
    icon: "computer-desktop",
    colour: "primary",
    order: 3,
    published: true,
    projectCount: 1,
  },
  {
    id: "prog-4",
    slug: "community-development",
    title: "Community Development & Sustainable Livelihoods",
    tagline: "Stronger communities. Lasting change.",
    description:
      "TESDEF supports inclusive community development and sustainable livelihoods — including water, sanitation and hygiene, health, and income opportunities — co-designed with communities and prioritising vulnerable groups.",
    icon: "home",
    colour: "primary",
    order: 4,
    published: true,
    projectCount: 1,
  },
  {
    id: "prog-5",
    slug: "advocacy-partnerships",
    title: "Advocacy, Research & Strategic Partnerships",
    tagline: "Amplifying community voices.",
    description:
      "TESDEF pursues advocacy, evidence-based research, and strategic partnerships with communities, government, civil society and other organisations to advance environmental protection, sustainable development and community rights.",
    icon: "megaphone",
    colour: "primary",
    order: 5,
    published: true,
    projectCount: 1,
  },
];

// ─── Projects (SAMPLE / illustrative) ───────────────────────────────────────
// Every entry below is illustrative example content only. It carries no
// verified outcomes, funding figures, or supporter counts. `isSample: true`
// drives a visible "Sample content — pending client confirmation" label.

const SAMPLE_NOTE = "Sample content — pending client confirmation.";

export const PROJECTS = [
  {
    id: "proj-1",
    slug: "community-reforestation-initiative",
    title: "Community Reforestation Initiative",
    summary:
      "An illustrative example of how TESDEF intends to support community-led planting and stewardship to restore tree cover. " + SAMPLE_NOTE,
    story: `${SAMPLE_NOTE}

Loss of tree cover contributes to soil erosion, declining biodiversity, and reduced resilience to a changing climate. TESDEF's intended approach to reforestation is community-led: working alongside residents to plant native species and to establish long-term stewardship of the land.

The details below are illustrative placeholders. Verified objectives, locations, timelines and results will be provided by TESDEF and confirmed before publication.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    programmeId: "prog-1",
    programmeName: "Environmental Sustainability & Climate Resilience",
    programmeSlug: "environmental-sustainability",
    objectives: [
      "Support community-led planting of native tree species",
      "Train community members in long-term tree stewardship",
      "Encourage local nurseries and seedling production",
    ],
    location: "Niger Delta, Nigeria",
    startDate: null,
    endDate: null,
    fundingGoal: 0,
    amountRaised: 0,
    supporterCount: 0,
    status: "active",
    howFundsUsed: [
      "Seedlings and planting materials",
      "Community stewardship and training",
      "Monitoring and reporting",
    ],
    updates: [],
    isSample: true,
    published: true,
  },
  {
    id: "proj-2",
    slug: "clean-water-and-sanitation-initiative",
    title: "Clean Water & Sanitation Initiative",
    summary:
      "An illustrative example of TESDEF's intended work on safe water access and community hygiene. " + SAMPLE_NOTE,
    story: `${SAMPLE_NOTE}

Access to safe water and sanitation is fundamental to community health and wellbeing. TESDEF's intended approach combines community-managed water infrastructure with hygiene education, prioritising underserved and vulnerable populations.

The details below are illustrative placeholders. Verified objectives, locations, timelines and results will be provided by TESDEF and confirmed before publication.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    programmeId: "prog-4",
    programmeName: "Community Development & Sustainable Livelihoods",
    programmeSlug: "community-development",
    objectives: [
      "Improve access to safe water in underserved communities",
      "Support community water management and maintenance",
      "Promote hygiene and sanitation education",
    ],
    location: "Delta State, Nigeria",
    startDate: null,
    endDate: null,
    fundingGoal: 0,
    amountRaised: 0,
    supporterCount: 0,
    status: "active",
    howFundsUsed: [
      "Water infrastructure and installation",
      "Community management and training",
      "Health and hygiene education",
    ],
    updates: [],
    isSample: true,
    published: true,
  },
  {
    id: "proj-3",
    slug: "digital-skills-initiative",
    title: "Digital Skills Initiative",
    summary:
      "An illustrative example of TESDEF's intended digital skills and inclusion work for young people. " + SAMPLE_NOTE,
    story: `${SAMPLE_NOTE}

Digital skills open access to education, work and enterprise. TESDEF's intended approach is to deliver practical digital training and improve access to technology so that young people — including those in underserved communities — can participate in the digital economy.

The details below are illustrative placeholders. Verified objectives, locations, timelines and results will be provided by TESDEF and confirmed before publication.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    programmeId: "prog-3",
    programmeName: "Digital Innovation & Inclusion",
    programmeSlug: "digital-innovation",
    objectives: [
      "Deliver practical digital and ICT training to young people",
      "Improve access to technology in underserved communities",
      "Support youth-led digital enterprise and innovation",
    ],
    location: "Delta State, Nigeria",
    startDate: null,
    endDate: null,
    fundingGoal: 0,
    amountRaised: 0,
    supporterCount: 0,
    status: "active",
    howFundsUsed: [
      "Equipment and learning materials",
      "Training and facilitation",
      "Programme operations",
    ],
    updates: [],
    isSample: true,
    published: true,
  },
  {
    id: "proj-4",
    slug: "young-women-in-technology-initiative",
    title: "Young Women in Technology Initiative",
    summary:
      "An illustrative example of TESDEF's intended work to support young women in technology. " + SAMPLE_NOTE,
    story: `${SAMPLE_NOTE}

Women and girls often face additional barriers to participating in the digital economy. TESDEF's intended approach is to provide technology training, mentorship and support that help young women build skills and confidence and pursue opportunities in technology.

The details below are illustrative placeholders. Verified objectives, locations, timelines and results will be provided by TESDEF and confirmed before publication.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    programmeId: "prog-2",
    programmeName: "Youth Empowerment & Education",
    programmeSlug: "youth-empowerment",
    objectives: [
      "Provide technology training and mentorship to young women",
      "Build confidence and readiness for the digital economy",
      "Grow a supportive peer and mentor network",
    ],
    location: "Delta State, Nigeria",
    startDate: null,
    endDate: null,
    fundingGoal: 0,
    amountRaised: 0,
    supporterCount: 0,
    status: "active",
    howFundsUsed: [
      "Training and mentorship",
      "Equipment and access support",
      "Programme operations",
    ],
    updates: [],
    isSample: true,
    published: true,
  },
  {
    id: "proj-5",
    slug: "climate-awareness-and-advocacy-initiative",
    title: "Climate Awareness & Advocacy Initiative",
    summary:
      "An illustrative example of TESDEF's intended climate awareness, research and advocacy work. " + SAMPLE_NOTE,
    story: `${SAMPLE_NOTE}

Building climate awareness and advocating for community-centred solutions is central to TESDEF's mission. The intended approach combines education, evidence-based research, and advocacy — supporting young people to understand and respond to environmental challenges in their communities.

The details below are illustrative placeholders. Verified objectives, locations, timelines and results will be provided by TESDEF and confirmed before publication.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    programmeId: "prog-5",
    programmeName: "Advocacy, Research & Strategic Partnerships",
    programmeSlug: "advocacy-partnerships",
    objectives: [
      "Raise climate and environmental awareness among young people",
      "Support evidence-based research on community priorities",
      "Advocate for community-centred environmental solutions",
    ],
    location: "Niger Delta, Nigeria",
    startDate: null,
    endDate: null,
    fundingGoal: 0,
    amountRaised: 0,
    supporterCount: 0,
    status: "active",
    howFundsUsed: [
      "Awareness and education activities",
      "Research and documentation",
      "Advocacy and coordination",
    ],
    updates: [],
    isSample: true,
    published: true,
  },
];

// ─── News (SAMPLE / illustrative) ───────────────────────────────────────────
// Generic placeholder posts. No quotes, statistics, named partners, or events
// are asserted as fact. Replace with verified news via the admin dashboard.

export const NEWS = [
  {
    id: "news-1",
    slug: "welcome-to-tesdef",
    title: "Welcome to TESDEF",
    excerpt:
      "An introduction to the Tamarakuro Environmental and Sustainable Development Foundation and its areas of focus. " + SAMPLE_NOTE,
    content: `${SAMPLE_NOTE}

The Tamarakuro Environmental and Sustainable Development Foundation (TESDEF) works to advance environmental sustainability, youth empowerment, digital innovation and inclusive community development.

This is a placeholder announcement. TESDEF's verified news and updates will be published here once confirmed.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    category: "Announcements",
    tags: ["TESDEF", "about"],
    publishedAt: "2026-08-01",
    isSample: true,
    published: true,
  },
  {
    id: "news-2",
    slug: "our-areas-of-focus",
    title: "Our Areas of Focus",
    excerpt:
      "A look at the themes that guide TESDEF's work, from environmental sustainability to digital inclusion. " + SAMPLE_NOTE,
    content: `${SAMPLE_NOTE}

TESDEF's work spans environmental sustainability, youth empowerment, digital innovation and inclusion, education and capacity building, climate resilience, community development, sustainable livelihoods, advocacy, research, and strategic partnerships.

This is a placeholder article. Verified programme updates will be published here once confirmed.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    category: "Programmes",
    tags: ["focus areas", "programmes"],
    publishedAt: "2026-07-15",
    isSample: true,
    published: true,
  },
  {
    id: "news-3",
    slug: "get-involved-with-tesdef",
    title: "Get Involved with TESDEF",
    excerpt:
      "Ways to support TESDEF's mission — as a volunteer, partner or supporter. " + SAMPLE_NOTE,
    content: `${SAMPLE_NOTE}

There are several ways to support TESDEF's mission, including volunteering, partnering, and contributing to our work.

This is a placeholder article. Verified opportunities and calls to action will be published here once confirmed.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    category: "Get involved",
    tags: ["volunteer", "partnership"],
    publishedAt: "2026-07-01",
    isSample: true,
    published: true,
  },
];

// ─── Events (SAMPLE / illustrative) ─────────────────────────────────────────

export const EVENTS = [
  {
    id: "evt-1",
    slug: "community-environmental-day-sample",
    title: "Community Environmental Day (Sample)",
    description:
      "An illustrative example of a community environmental engagement event. Date, location and details are placeholders. " + SAMPLE_NOTE,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    location: "To be confirmed",
    isVirtual: false,
    startDate: "2026-09-15T09:00:00Z",
    endDate: "2026-09-15T15:00:00Z",
    registrationLink: "#",
    isSample: true,
    published: true,
  },
  {
    id: "evt-2",
    slug: "digital-skills-workshop-sample",
    title: "Digital Skills Workshop (Sample)",
    description:
      "An illustrative example of a youth digital skills workshop. Date, location and details are placeholders. " + SAMPLE_NOTE,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    location: "To be confirmed",
    isVirtual: false,
    startDate: "2026-10-05T10:00:00Z",
    endDate: "2026-10-05T16:00:00Z",
    registrationLink: "#",
    isSample: true,
    published: true,
  },
  {
    id: "evt-3",
    slug: "community-forum-sample",
    title: "Community Forum (Sample)",
    description:
      "An illustrative example of a community forum bringing together residents and stakeholders. Date, location and details are placeholders. " + SAMPLE_NOTE,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    location: "To be confirmed",
    isVirtual: false,
    startDate: "2026-11-12T09:00:00Z",
    endDate: "2026-11-12T17:00:00Z",
    registrationLink: "#",
    isSample: true,
    published: true,
  },
];

// ─── Impact statistics ──────────────────────────────────────────────────────
// Intentionally empty: TESDEF has no verified public metrics to display yet.
// Do not add numbers here without client confirmation. The public site shows
// qualitative FOCUS_AREAS instead of unverified figures.
export type ImpactStat = {
  id: string;
  label: string;
  value: string;
  suffix: string;
  icon: string;
  order: number;
};
export const IMPACT_STATS: ImpactStat[] = [];

// ─── Testimonials ───────────────────────────────────────────────────────────
// Intentionally empty: no verified testimonials. Add real, consented quotes
// via the admin dashboard when available.
export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  image: string;
  order: number;
  published: boolean;
};
export const TESTIMONIALS: Testimonial[] = [];

// ─── Team ───────────────────────────────────────────────────────────────────
// Only the verified founder is listed. Do not add staff names unless confirmed
// by the client. Additional team profiles are pending client confirmation.
export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  order: number;
  published: boolean;
};
export const TEAM: TeamMember[] = [
  {
    id: "team-1",
    name: "Tamarakuro Tonfawei",
    role: "Founder",
    bio: "",
    image: "",
    order: 1,
    published: true,
  },
];

// ─── Partners ───────────────────────────────────────────────────────────────
// Intentionally empty: no partners are named until confirmed by the client.
export type Partner = {
  id: string;
  name: string;
  logo: string;
  website: string;
  category: string;
  order: number;
  published: boolean;
};
export const PARTNERS: Partner[] = [];

// ─── Gallery (SAMPLE / illustrative) ────────────────────────────────────────
// Placeholder images pending the client's own photographs. Captions do not
// assert specific dated events.
export const GALLERY_ITEMS = [
  { id: "gal-1", url: "/images/hero/hero-tree-planting.jpg", caption: "Community tree planting (sample image — pending client photos)", category: "Environment", alt: "Community members planting a tree sapling", order: 1, published: true },
  { id: "gal-2", url: "/images/hero/hero-tree-planting.jpg", caption: "Community engagement (sample image — pending client photos)", category: "Community", alt: "Community engagement activity", order: 2, published: true },
  { id: "gal-3", url: "/images/hero/hero-tree-planting.jpg", caption: "Environmental stewardship (sample image — pending client photos)", category: "Environment", alt: "Environmental stewardship activity", order: 3, published: true },
];

// ─── Type exports ───────────────────────────────────────────────────────────
export type Programme = (typeof PROGRAMMES)[0];
export type Project = (typeof PROJECTS)[0];
export type NewsItem = (typeof NEWS)[0];
export type EventItem = (typeof EVENTS)[0];
export type GalleryItem = (typeof GALLERY_ITEMS)[0];
