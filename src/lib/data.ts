// ============================================================================
// TESDEF — static content
//
// Used as seed data and as a fallback when the database is unavailable.
//
// CONTENT-ACCURACY POLICY (read before editing):
//   • Only the client's official information may be presented as fact.
//   • No invented statistics, achievements, people, partners, funding totals,
//     registration/audit claims, project outcomes, testimonials, or history.
//   • Unconfirmed items are either hidden from the public site (published:false,
//     visible only in the admin dashboard as drafts) or presented honestly as
//     PROPOSED initiatives — never as verified/active facts. No "sample" or
//     "pending confirmation" wording appears on public pages.
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
  // Official introduction (full wording — keep intact on the About page).
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

// ─── Contact configuration ──────────────────────────────────────────────────
// Verified contact details go here. Empty strings are treated as "not yet
// confirmed" and are HIDDEN on the public site. Add values only once the client
// confirms them — no component code changes are required.
export const CONTACT = {
  email: "", // e.g. "info@tesdef.org" once confirmed
  partnershipsEmail: "",
  mediaEmail: "",
  phone: "",
  address: "", // e.g. "Delta State, Nigeria" once confirmed
  socials: {
    x: "",
    facebook: "",
    instagram: "",
    linkedin: "",
  },
} as const;

// ─── Programmes (areas of work) ─────────────────────────────────────────────
// Official programme areas. These describe TESDEF's intended areas of work.

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
  },
];

// ─── Proposed initiatives (public, honestly framed as proposals) ────────────
// These are NOT active projects. They carry no verified status, funding,
// supporters, dates, locations, or outcomes — only the intended focus and
// objectives. `status: "proposed"` drives an honest "Proposed" presentation.

export const PROJECTS = [
  {
    id: "proj-1",
    slug: "community-reforestation-initiative",
    title: "Community Reforestation Initiative",
    summary:
      "A proposed initiative to support community-led planting and stewardship that helps restore tree cover and strengthen local ecosystems.",
    story: `Loss of tree cover contributes to soil erosion, declining biodiversity, and reduced resilience to a changing climate. Through this proposed initiative, TESDEF intends to work alongside residents to plant native species and establish long-term community stewardship of the land.

Final project details — including locations, timelines and delivery plans — will be published following approval.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    programmeId: "prog-1",
    programmeName: "Environmental Sustainability & Climate Resilience",
    programmeSlug: "environmental-sustainability",
    objectives: [
      "Support community-led planting of native tree species",
      "Build local capacity for long-term tree stewardship",
      "Encourage local nurseries and seedling production",
    ],
    location: "",
    startDate: null,
    endDate: null,
    fundingGoal: 0,
    amountRaised: 0,
    supporterCount: 0,
    status: "proposed",
    howFundsUsed: [] as string[],
    updates: [] as { date: string; title: string; content: string }[],
    isSample: false,
    published: true,
  },
  {
    id: "proj-2",
    slug: "clean-water-and-sanitation-initiative",
    title: "Clean Water & Sanitation Initiative",
    summary:
      "A proposed initiative to improve access to safe water and community hygiene, prioritising underserved and vulnerable populations.",
    story: `Access to safe water and sanitation is fundamental to community health and wellbeing. Through this proposed initiative, TESDEF intends to combine community-managed water infrastructure with hygiene education, prioritising underserved and vulnerable populations.

Final project details — including locations, timelines and delivery plans — will be published following approval.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    programmeId: "prog-4",
    programmeName: "Community Development & Sustainable Livelihoods",
    programmeSlug: "community-development",
    objectives: [
      "Improve access to safe water in underserved communities",
      "Support community water management and maintenance",
      "Promote hygiene and sanitation education",
    ],
    location: "",
    startDate: null,
    endDate: null,
    fundingGoal: 0,
    amountRaised: 0,
    supporterCount: 0,
    status: "proposed",
    howFundsUsed: [] as string[],
    updates: [] as { date: string; title: string; content: string }[],
    isSample: false,
    published: true,
  },
  {
    id: "proj-3",
    slug: "digital-skills-initiative",
    title: "Digital Skills Initiative",
    summary:
      "A proposed initiative to deliver practical digital skills and improve access to technology for young people.",
    story: `Digital skills open access to education, work and enterprise. Through this proposed initiative, TESDEF intends to deliver practical digital training and improve access to technology so that young people — including those in underserved communities — can participate in the digital economy.

Final project details — including locations, timelines and delivery plans — will be published following approval.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    programmeId: "prog-3",
    programmeName: "Digital Innovation & Inclusion",
    programmeSlug: "digital-innovation",
    objectives: [
      "Deliver practical digital and ICT training to young people",
      "Improve access to technology in underserved communities",
      "Support youth-led digital enterprise and innovation",
    ],
    location: "",
    startDate: null,
    endDate: null,
    fundingGoal: 0,
    amountRaised: 0,
    supporterCount: 0,
    status: "proposed",
    howFundsUsed: [] as string[],
    updates: [] as { date: string; title: string; content: string }[],
    isSample: false,
    published: true,
  },
  {
    id: "proj-4",
    slug: "young-women-in-technology-initiative",
    title: "Young Women in Technology Initiative",
    summary:
      "A proposed initiative to support young women with technology training, mentorship and opportunities in the digital economy.",
    story: `Women and girls often face additional barriers to participating in the digital economy. Through this proposed initiative, TESDEF intends to provide technology training, mentorship and support that help young women build skills and confidence and pursue opportunities in technology.

Final project details — including locations, timelines and delivery plans — will be published following approval.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    programmeId: "prog-2",
    programmeName: "Youth Empowerment & Education",
    programmeSlug: "youth-empowerment",
    objectives: [
      "Provide technology training and mentorship to young women",
      "Build confidence and readiness for the digital economy",
      "Grow a supportive peer and mentor network",
    ],
    location: "",
    startDate: null,
    endDate: null,
    fundingGoal: 0,
    amountRaised: 0,
    supporterCount: 0,
    status: "proposed",
    howFundsUsed: [] as string[],
    updates: [] as { date: string; title: string; content: string }[],
    isSample: false,
    published: true,
  },
  {
    id: "proj-5",
    slug: "climate-awareness-and-advocacy-initiative",
    title: "Climate Awareness & Advocacy Initiative",
    summary:
      "A proposed initiative combining education, research and advocacy to support community-centred environmental action.",
    story: `Building climate awareness and advocating for community-centred solutions is central to TESDEF's mission. Through this proposed initiative, TESDEF intends to combine education, evidence-based research, and advocacy — supporting young people to understand and respond to environmental challenges in their communities.

Final project details — including locations, timelines and delivery plans — will be published following approval.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    programmeId: "prog-5",
    programmeName: "Advocacy, Research & Strategic Partnerships",
    programmeSlug: "advocacy-partnerships",
    objectives: [
      "Raise climate and environmental awareness among young people",
      "Support evidence-based research on community priorities",
      "Advocate for community-centred environmental solutions",
    ],
    location: "",
    startDate: null,
    endDate: null,
    fundingGoal: 0,
    amountRaised: 0,
    supporterCount: 0,
    status: "proposed",
    howFundsUsed: [] as string[],
    updates: [] as { date: string; title: string; content: string }[],
    isSample: false,
    published: true,
  },
];

// ─── News ───────────────────────────────────────────────────────────────────
// No verified news yet. These remain as admin DRAFTS (published:false) and are
// NOT shown on the public site (which displays a professional empty state).
export type NewsItem = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  publishedAt: string;
  status: string;
  isSample: boolean;
  published: boolean;
};
export const NEWS: NewsItem[] = [];

// ─── Events ─────────────────────────────────────────────────────────────────
// No confirmed events yet. Public site shows a professional empty state.
export type EventItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  location: string;
  isVirtual: boolean;
  startDate: string;
  endDate: string | null;
  registrationLink: string;
  status: string;
  isSample: boolean;
  published: boolean;
};
export const EVENTS: EventItem[] = [];

// ─── Impact statistics ──────────────────────────────────────────────────────
// Intentionally empty: TESDEF has no verified public metrics to display yet.
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
// Only the verified founder is listed. No other staff names are confirmed.
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

// ─── Gallery ────────────────────────────────────────────────────────────────
// No verified programme photographs yet. Public site shows an empty state.
export type GalleryItem = {
  id: string;
  url: string;
  caption: string;
  category: string;
  alt: string;
  order: number;
  published: boolean;
};
export const GALLERY_ITEMS: GalleryItem[] = [];

// ─── Type exports ───────────────────────────────────────────────────────────
export type Programme = (typeof PROGRAMMES)[0];
export type Project = (typeof PROJECTS)[0];
