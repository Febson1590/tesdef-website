// Static content — used as seed data and as fallback when the database is unavailable.
// All dates are ISO strings. Currency amounts in NGN (Naira).

export const PROGRAMMES = [
  {
    id: "prog-1",
    slug: "environmental-sustainability",
    title: "Environmental Sustainability & Climate Action",
    tagline: "Healing ecosystems. Securing futures.",
    description:
      "TESDEF leads reforestation drives, mangrove restoration, and community-based climate-resilience programmes across the Niger Delta. We work with communities to protect natural resources, reduce carbon footprints, and adapt to changing weather patterns.",
    icon: "leaf",
    colour: "forest",
    order: 1,
    published: true,
    projectCount: 3,
  },
  {
    id: "prog-2",
    slug: "youth-empowerment",
    title: "Youth Empowerment & Education",
    tagline: "Investing in the next generation.",
    description:
      "Through scholarships, mentorship, vocational training, and leadership development, TESDEF equips young people — especially women and girls — with the knowledge and confidence to shape their communities and careers.",
    icon: "academic-cap",
    colour: "primary",
    order: 2,
    published: true,
    projectCount: 2,
  },
  {
    id: "prog-3",
    slug: "digital-inclusion",
    title: "Digital Inclusion & Innovation",
    tagline: "Bridging the technology gap.",
    description:
      "No community should be left behind in the digital age. TESDEF establishes digital hubs, delivers coding and ICT training, and supports local technology entrepreneurs to unlock economic opportunities across Gbaramatu Kingdom.",
    icon: "computer-desktop",
    colour: "primary",
    order: 3,
    published: true,
    projectCount: 2,
  },
  {
    id: "prog-4",
    slug: "community-development",
    title: "Community Development & Livelihoods",
    tagline: "Stronger communities. Lasting change.",
    description:
      "Clean water access, sanitation, health outreach, and sustainable livelihood programmes give families the foundation they need to thrive. TESDEF partners directly with community leaders to co-design and co-implement solutions.",
    icon: "home",
    colour: "primary",
    order: 4,
    published: true,
    projectCount: 2,
  },
  {
    id: "prog-5",
    slug: "advocacy-partnerships",
    title: "Advocacy & Strategic Partnerships",
    tagline: "Amplifying community voices.",
    description:
      "TESDEF advocates at local, national, and international levels for policy frameworks that protect the environment and uphold community rights. We build coalitions with government agencies, civil society, and global organisations.",
    icon: "megaphone",
    colour: "primary",
    order: 5,
    published: true,
    projectCount: 1,
  },
];

export const PROJECTS = [
  {
    id: "proj-1",
    slug: "niger-delta-reforestation",
    title: "Niger Delta Reforestation Drive",
    summary:
      "Restoring tree cover to degraded land across five communities in Gbaramatu Kingdom through community-led planting and long-term stewardship.",
    story: `The Niger Delta's forests are among the most biodiverse on the continent, but decades of oil extraction and agricultural pressure have stripped vast areas of their tree cover. Exposed land erodes during rains, fish stocks decline as rivers silt up, and communities lose the shade, fuel, and food that forests once provided.

TESDEF's Niger Delta Reforestation Drive began in 2022 as a direct response to community requests in five Gbaramatu villages. We train local planting crews, supply native saplings from our community nursery, and establish three-year stewardship agreements that pay community members to monitor and protect each grove.

To date we have planted over 5,000 trees — including mangrove, iroko, and raphia palm — and created 120 part-time stewardship jobs. Soil moisture in replanted zones is already measurably higher, and community leaders report early signs of returning bird species.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    programmeId: "prog-1",
    programmeName: "Environmental Sustainability & Climate Action",
    programmeSlug: "environmental-sustainability",
    objectives: [
      "Plant 10,000 native trees across Gbaramatu Kingdom by end of 2026",
      "Train 200 community members as certified tree stewards",
      "Establish a permanent community nursery producing 2,000 saplings per year",
      "Reduce soil erosion by 40% in target zones",
    ],
    location: "Gbaramatu Kingdom, Delta State, Nigeria",
    startDate: "2022-03-01",
    endDate: null,
    fundingGoal: 5000000,
    amountRaised: 3250000,
    supporterCount: 245,
    status: "active",
    howFundsUsed: [
      "45% — Sapling production and planting materials",
      "30% — Community stewardship stipends",
      "15% — Training and capacity building",
      "10% — Monitoring, evaluation and reporting",
    ],
    updates: [
      {
        date: "2026-05-20",
        title: "Milestone: 5,000 trees in the ground",
        content:
          "This month our teams planted the 5,000th tree in the project — a young iroko sapling at the edge of Okerenkoko community forest. Local schoolchildren joined the celebration and each took home a seedling to care for at home.",
      },
      {
        date: "2026-02-14",
        title: "Community nursery fully operational",
        content:
          "Our Ogidigben nursery is now producing 300 seedlings per month. The nursery employs four full-time community members and is self-sustaining from the sale of surplus saplings to neighbouring projects.",
      },
    ],
    published: true,
  },
  {
    id: "proj-2",
    slug: "clean-water-gbaramatu",
    title: "Clean Water Access: Gbaramatu Communities",
    summary:
      "Installing borehole water systems and community hygiene infrastructure across eight underserved communities in Gbaramatu Kingdom.",
    story: `In much of Gbaramatu Kingdom, families walk up to two kilometres each day to collect water from rivers shared with livestock and often contaminated by upstream activity. Waterborne illness is among the leading causes of child mortality in the area.

TESDEF's Clean Water Access Programme partners with local engineers, community water boards, and the Delta State Government to install solar-powered borehole systems. Each borehole serves 500–800 residents and includes a women-led management committee responsible for maintenance and low-cost water fees that fund repairs.

Eight boreholes have been installed since 2023. Over 4,000 people now have access to safe water within 200 metres of their homes. Attendance at the local health clinic dropped significantly in communities served, confirming the link between water access and health outcomes.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    programmeId: "prog-4",
    programmeName: "Community Development & Livelihoods",
    programmeSlug: "community-development",
    objectives: [
      "Install 15 solar-powered borehole systems by December 2026",
      "Provide safe water access to 8,000 community members",
      "Train 30 community water technicians",
      "Reduce waterborne illness rates by 60%",
    ],
    location: "Gbaramatu Kingdom, Delta State, Nigeria",
    startDate: "2023-01-15",
    endDate: null,
    fundingGoal: 8000000,
    amountRaised: 5600000,
    supporterCount: 312,
    status: "active",
    howFundsUsed: [
      "55% — Borehole drilling and solar infrastructure",
      "20% — Community water board training",
      "15% — Maintenance reserves and spare parts",
      "10% — Health education and hygiene promotion",
    ],
    updates: [
      {
        date: "2026-04-10",
        title: "Partnership with Delta State Government confirmed",
        content:
          "The Delta State Ministry of Water Resources has agreed to co-fund three additional boreholes and provide ongoing technical supervision. This partnership will allow us to reach our target of 15 boreholes ahead of schedule.",
      },
    ],
    published: true,
  },
  {
    id: "proj-3",
    slug: "digital-skills-hub",
    title: "Digital Skills Training Hub",
    summary:
      "A dedicated training centre delivering coding, ICT, and digital entrepreneurship skills to 500 young people per year in Warri, Delta State.",
    story: `Technology is reshaping every sector of the global economy, but young people in rural and peri-urban communities across the Niger Delta are being left behind. Without digital skills, they face an increasingly narrow range of economic opportunities.

The TESDEF Digital Skills Hub opened in Warri in late 2024 and has since trained over 500 young people in web development, data entry, graphic design, digital marketing, and mobile money operations. Courses run over 8–12 weeks and are free for qualifying participants.

Seventy-two percent of graduates are now earning income from digital work — either employed in local businesses or freelancing for clients across Nigeria and internationally. Seven have launched their own micro-enterprises.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    programmeId: "prog-3",
    programmeName: "Digital Inclusion & Innovation",
    programmeSlug: "digital-inclusion",
    objectives: [
      "Train 500 young people per year",
      "Achieve 70%+ employment or income rate for graduates",
      "Establish 3 satellite hubs in underserved communities",
      "Partner with 20 local employers for direct recruitment",
    ],
    location: "Warri, Delta State, Nigeria",
    startDate: "2024-09-01",
    endDate: null,
    fundingGoal: 3500000,
    amountRaised: 3500000,
    supporterCount: 189,
    status: "completed",
    howFundsUsed: [
      "40% — Equipment and software licences",
      "35% — Trainer salaries and curriculum development",
      "15% — Student stipends and transport",
      "10% — Hub operations and overheads",
    ],
    updates: [
      {
        date: "2026-05-05",
        title: "500th graduate — funding goal met",
        content:
          "We celebrated the graduation of our 500th trainee this month, reaching our funding goal entirely through community and diaspora support. Phase 2 planning — including three satellite locations — is now underway.",
      },
    ],
    published: true,
  },
  {
    id: "proj-4",
    slug: "mangrove-restoration",
    title: "Mangrove Ecosystem Restoration",
    summary:
      "Rehabilitating degraded mangrove forests along the Warri River estuary to protect coastlines, support fisheries, and sequester carbon.",
    story: `Mangroves are extraordinary ecosystems — nurseries for fish, barriers against coastal erosion, and among the most effective natural carbon stores on Earth. The Niger Delta once had one of the world's largest mangrove forests. Today, oil spills, urban encroachment, and climate change have degraded vast stretches of this irreplaceable habitat.

TESDEF's Mangrove Restoration Project works with fishing communities along the Warri River estuary, who depend directly on healthy mangrove forests for their livelihoods. We combine ecological restoration with community livelihoods: families receive training and payment to plant and protect mangrove propagules, while improved fish catches are expected as the ecosystem recovers.

The project is in its first full year. 50 hectares of degraded shoreline have been prepared, and 80,000 mangrove propagules are in the ground.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    programmeId: "prog-1",
    programmeName: "Environmental Sustainability & Climate Action",
    programmeSlug: "environmental-sustainability",
    objectives: [
      "Restore 200 hectares of mangrove forest by 2028",
      "Plant 500,000 mangrove propagules",
      "Train 150 community rangers",
      "Achieve VERRA-verified carbon credit certification",
    ],
    location: "Warri River Estuary, Delta State, Nigeria",
    startDate: "2025-06-01",
    endDate: null,
    fundingGoal: 6000000,
    amountRaised: 1800000,
    supporterCount: 134,
    status: "active",
    howFundsUsed: [
      "50% — Community ranger employment and training",
      "25% — Propagule sourcing and planting",
      "15% — Ecological monitoring and mapping",
      "10% — Community engagement and reporting",
    ],
    updates: [
      {
        date: "2026-01-20",
        title: "50 hectares prepared, planting underway",
        content:
          "The first major planting phase began in January. Thirty community rangers are working full-time and early ecological surveys show the site is recovering faster than projected.",
      },
    ],
    published: true,
  },
  {
    id: "proj-5",
    slug: "women-in-tech-gbaramatu",
    title: "Women in Tech: Gbaramatu Cohort",
    summary:
      "An intensive 12-week programme equipping 100 young women from Gbaramatu Kingdom with technology skills and mentorship to launch careers in the digital economy.",
    story: `Women in rural communities face compounding barriers to economic participation: limited education access, cultural expectations, and distance from urban job markets. Technology offers a pathway that can be pursued from anywhere — but only if women have the skills and confidence to access it.

TESDEF's Women in Tech programme brings together 100 participants per cohort for an intensive programme covering web development, data literacy, UI/UX design, and digital business. Participants receive mentoring from professional women in technology, a laptop on loan, and a structured internship at the end of the programme.

The second cohort has begun. Of the 98 women who completed the first cohort, 84 are now employed or self-employed in digital fields. Twelve are mentoring the current cohort — a circle of support that TESDEF expects to grow with every graduation.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    programmeId: "prog-2",
    programmeName: "Youth Empowerment & Education",
    programmeSlug: "youth-empowerment",
    objectives: [
      "Train 100 women per cohort, two cohorts per year",
      "Achieve 80%+ employment rate for graduates",
      "Establish a 200-person alumnae network",
      "Support 20 women to launch technology micro-enterprises",
    ],
    location: "Gbaramatu Kingdom, Delta State / Remote-hybrid",
    startDate: "2025-03-01",
    endDate: null,
    fundingGoal: 2500000,
    amountRaised: 2100000,
    supporterCount: 267,
    status: "active",
    howFundsUsed: [
      "40% — Trainer fees and curriculum",
      "30% — Equipment loans (laptops)",
      "20% — Stipends and transport support",
      "10% — Mentorship events and graduation",
    ],
    updates: [
      {
        date: "2026-05-30",
        title: "Cohort 2 enrolment begins",
        content:
          "Applications for the second cohort closed with 340 applicants for 100 places. Selection is complete. The new cohort begins on 15 June, with six alumnae from Cohort 1 joining as junior trainers.",
      },
    ],
    published: true,
  },
  {
    id: "proj-6",
    slug: "solar-energy-schools",
    title: "Solar Energy for Schools Initiative",
    summary:
      "Equipping 12 off-grid schools in Gbaramatu with solar power systems to enable evening study, computer labs, and reliable lighting for teachers and students.",
    story: `When the school day ends, learning stops — not because students lose motivation, but because there is no light. In communities without reliable electricity, children study by candlelight or not at all, and school facilities that could serve as community hubs sit empty after dark.

TESDEF's Solar Energy for Schools Initiative changes this. Each installation powers lights, fans, and a six-computer lab that serves the school during the day and the broader community in the evenings. A local technician, trained by TESDEF, manages maintenance.

Six schools have been powered to date. Headteachers report improved teacher retention, longer school hours in harmattan season, and — in three communities — adult literacy classes using the newly lit facilities.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    programmeId: "prog-3",
    programmeName: "Digital Inclusion & Innovation",
    programmeSlug: "digital-inclusion",
    objectives: [
      "Install solar systems in 12 off-grid schools",
      "Provide 6 computers per school",
      "Train 12 community solar technicians",
      "Enable evening community learning in all 12 sites",
    ],
    location: "Gbaramatu Kingdom, Delta State, Nigeria",
    startDate: "2024-01-10",
    endDate: "2026-12-31",
    fundingGoal: 4500000,
    amountRaised: 2250000,
    supporterCount: 178,
    status: "active",
    howFundsUsed: [
      "60% — Solar panels, batteries and installation",
      "20% — Computer equipment",
      "12% — Technician training",
      "8% — Warranty maintenance and project management",
    ],
    updates: [
      {
        date: "2026-03-18",
        title: "School #6 powered in Okerenkoko",
        content:
          "The sixth solar installation was completed at the Community Primary School in Okerenkoko. Over 400 pupils and the wider community now have access to reliable lighting and a new computer lab.",
      },
    ],
    published: true,
  },
  {
    id: "proj-7",
    slug: "climate-youth-campaign",
    title: "Climate Awareness Youth Campaign",
    summary:
      "A nationwide campaign using storytelling, social media, and community events to mobilise young Nigerians to take climate action in their communities.",
    story: `Nigeria's young people are inheriting a climate crisis they did not create. TESDEF believes they deserve both the truth about what is happening to their environment and the tools to respond. The Climate Awareness Youth Campaign uses radio broadcasts, social media storytelling, community drama, and school visits to build climate literacy among 10–25-year-olds across the Niger Delta and beyond.

The campaign reached over 50,000 young people in its first year. Youth Climate Ambassadors — young people trained and supported by TESDEF — are now active in 12 secondary schools and three universities, leading their own awareness events and green clubs.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    programmeId: "prog-5",
    programmeName: "Advocacy & Strategic Partnerships",
    programmeSlug: "advocacy-partnerships",
    objectives: [
      "Reach 100,000 young people with climate literacy content by end of 2026",
      "Train and support 50 Youth Climate Ambassadors",
      "Establish green clubs in 20 schools",
      "Produce and distribute 3 community documentary films",
    ],
    location: "Niger Delta Region, Nigeria (and nationwide digital reach)",
    startDate: "2025-01-01",
    endDate: "2026-12-31",
    fundingGoal: 1500000,
    amountRaised: 1500000,
    supporterCount: 423,
    status: "completed",
    howFundsUsed: [
      "35% — Content creation and media production",
      "30% — Ambassador training and events",
      "20% — School outreach programme",
      "15% — Coordination and reporting",
    ],
    updates: [
      {
        date: "2026-06-01",
        title: "50,000 young people reached — goal met",
        content:
          "The campaign has officially met its Year 1 target. Phase 2 — focused on national documentary distribution — is now funded and in pre-production.",
      },
    ],
    published: true,
  },
  {
    id: "proj-8",
    slug: "community-health-sanitation",
    title: "Community Health & Sanitation Drive",
    summary:
      "Building latrines, handwashing stations, and community health posts in six communities, paired with a network of trained community health volunteers.",
    story: `Open defecation and poor sanitation cause preventable deaths across rural Nigeria. TESDEF's Community Health & Sanitation Drive combines physical infrastructure — latrines, handwashing stations, waste disposal points — with sustained behaviour change support delivered through a network of 60 trained Community Health Volunteers.

Each volunteer receives a kit, a mobile phone with health reporting tools, and a small monthly stipend. They report disease outbreaks, promote hygiene in homes and schools, and refer patients to the nearest clinic. Three communities have already achieved Open Defecation Free status since the project began.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    programmeId: "prog-4",
    programmeName: "Community Development & Livelihoods",
    programmeSlug: "community-development",
    objectives: [
      "Build 200 household latrines and 30 public sanitation facilities",
      "Train 60 Community Health Volunteers",
      "Achieve ODF status in 6 communities",
      "Reduce diarrhoeal illness rates by 50%",
    ],
    location: "Gbaramatu Kingdom, Delta State, Nigeria",
    startDate: "2025-07-01",
    endDate: null,
    fundingGoal: 3000000,
    amountRaised: 900000,
    supporterCount: 87,
    status: "active",
    howFundsUsed: [
      "50% — Latrine construction and materials",
      "25% — Community Health Volunteer stipends and kits",
      "15% — Training and health education materials",
      "10% — Monitoring and coordination",
    ],
    updates: [
      {
        date: "2026-02-28",
        title: "First ODF community certified",
        content:
          "Ogidigben community has been formally certified as Open Defecation Free by the Delta State Government — the first in Gbaramatu Kingdom to achieve this status. A celebration brought together community leaders, health officials, and TESDEF team members.",
      },
    ],
    published: true,
  },
];

export const NEWS = [
  {
    id: "news-1",
    slug: "mangrove-restoration-phase-2",
    title: "TESDEF Launches Second Phase of Mangrove Restoration Project",
    excerpt:
      "With 50 hectares already restored, TESDEF expands its mangrove rehabilitation work along the Warri River estuary — scaling to 200 hectares by 2028.",
    content: `TESDEF has officially launched the second phase of its Mangrove Ecosystem Restoration Project along the Warri River estuary in Delta State, Nigeria.

The first phase, which ran through 2025, saw 50 hectares of degraded shoreline rehabilitated and over 80,000 mangrove propagules established. Ecological surveys conducted in early 2026 confirmed that the site is recovering faster than projected, with juvenile fish stocks already measurably higher in restored zones.

Phase 2 will expand the project to 200 hectares and introduce a VERRA-verified carbon credit programme that will generate sustainable funding for community ranger employment beyond the project's initial grant period.

"Mangroves are the lungs and the larder of the Niger Delta coast," said the Foundation's Executive Director. "Every hectare we restore protects thousands of lives and livelihoods — and buys us time against rising seas."

Phase 2 is supported by a new partnership with an international climate finance organisation announced alongside the launch.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    category: "Projects",
    tags: ["mangroves", "environment", "Niger Delta", "climate"],
    publishedAt: "2026-06-15",
    published: true,
  },
  {
    id: "news-2",
    slug: "digital-skills-500-graduates",
    title: "500 Young People Graduate from TESDEF Digital Skills Hub",
    excerpt:
      "The Digital Skills Training Hub in Warri celebrates its 500th graduate, with 72% of alumni now earning income from digital work.",
    content: `The TESDEF Digital Skills Training Hub in Warri, Delta State, has celebrated the graduation of its 500th participant — a milestone that reflects two years of sustained investment in the digital futures of young Nigerians.

The Hub has run 10 cohorts since its 2024 launch, training young people in web development, graphic design, data entry, digital marketing, and mobile money operations. Courses are free for qualifying participants and supported by corporate and diaspora funding.

An independent evaluation conducted in April 2026 found that 72% of alumni are now earning income from digital work, either in formal employment or as freelancers serving clients across Nigeria and internationally. Seven graduates have launched their own digital micro-enterprises.

"When I came here I didn't own a smartphone," said Precious, a 21-year-old graduate from Warri who now earns freelancing from a client in London. "Now I am building websites from my room and saving to start my own studio."

Phase 2 of the programme — including three satellite hubs in underserved rural communities — is now in planning, with an expected launch date of early 2027.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    category: "Impact",
    tags: ["digital skills", "youth", "training", "technology"],
    publishedAt: "2026-05-12",
    published: true,
  },
  {
    id: "news-3",
    slug: "clean-water-state-partnership",
    title: "TESDEF Partners with Delta State Government on Clean Water Initiative",
    excerpt:
      "A new partnership with the Delta State Ministry of Water Resources will fund three additional borehole systems, extending safe water access to over 2,000 more residents.",
    content: `TESDEF and the Delta State Ministry of Water Resources have formalised a partnership to co-fund and co-implement three additional solar-powered borehole water systems across Gbaramatu Kingdom.

The partnership, signed in April 2026, adds government technical supervision and grant funding to TESDEF's existing donor-funded Clean Water Access Programme, which has already installed eight borehole systems serving over 4,000 residents.

Under the agreement, TESDEF will manage community engagement, training of water board committees, and long-term maintenance support, while the Ministry contributes capital funding and regulatory oversight.

"This is exactly how development should work," said Comfort, chair of one of the newly established community water boards. "The government brings resources. TESDEF brings community trust. We bring commitment."

The three new boreholes are expected to be operational before the end of the 2026 wet season.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    category: "Partnerships",
    tags: ["water", "government", "partnership", "community"],
    publishedAt: "2026-04-08",
    published: true,
  },
  {
    id: "news-4",
    slug: "founder-lagos-climate-summit",
    title: "TESDEF Founder Speaks at Lagos Climate Summit",
    excerpt:
      "At the West Africa Climate Leadership Forum in Lagos, our Founder delivered a keynote on community-centred approaches to Niger Delta environmental recovery.",
    content: `TESDEF's Founder and Executive Director delivered the opening keynote at the West Africa Climate Leadership Forum in Lagos in March 2026, addressing over 300 policy-makers, civil society leaders, and climate finance specialists from across the region.

The speech drew on TESDEF's decade of community-led programming to challenge the assumption that climate action must flow from global institutions downward to local communities. Instead, the Founder argued, the most durable solutions are built from community need upward — designed by those whose lives depend on the outcome.

"The communities of Gbaramatu have been the stewards of this land for generations," she told the Forum. "When we support them to lead restoration, they don't just plant trees — they change the culture of stewardship for generations to come."

The Forum resulted in a joint declaration committing signatory organisations to increase community co-design in climate projects to a minimum of 50% of programme budgets by 2028. TESDEF was invited to participate in the technical drafting committee.`,
    coverImage: "/images/hero/hero-tree-planting.jpg",
    category: "Advocacy",
    tags: ["climate", "advocacy", "leadership", "conference"],
    publishedAt: "2026-03-22",
    published: true,
  },
];

export const EVENTS = [
  {
    id: "evt-1",
    slug: "community-tree-planting-day-2026",
    title: "Community Tree-Planting Day 2026",
    description:
      "Join thousands of volunteers across Gbaramatu Kingdom for our annual mass tree-planting day. Families, schools, and businesses are all welcome. Saplings, tools, and refreshments provided.",
    coverImage: "/images/hero/hero-tree-planting.jpg",
    location: "Okerenkoko Community Ground, Gbaramatu Kingdom, Delta State",
    isVirtual: false,
    startDate: "2026-09-15T08:00:00Z",
    endDate: "2026-09-15T15:00:00Z",
    registrationLink: "#",
    published: true,
  },
  {
    id: "evt-2",
    slug: "digital-innovation-hackathon-2026",
    title: "Digital Innovation Hackathon 2026",
    description:
      "Two days of intense problem-solving as teams of 3–5 young people build technology solutions to real community challenges. Prizes totalling ₦1,000,000 and direct mentorship from leading Nigerian technology professionals.",
    coverImage: "/images/hero/hero-tree-planting.jpg",
    location: "TESDEF Digital Skills Hub, Warri, Delta State",
    isVirtual: false,
    startDate: "2026-10-05T09:00:00Z",
    endDate: "2026-10-06T18:00:00Z",
    registrationLink: "#",
    published: true,
  },
  {
    id: "evt-3",
    slug: "gbaramatu-environmental-forum-2026",
    title: "Gbaramatu Environmental Forum 2026",
    description:
      "An annual gathering of community leaders, environmental scientists, civil society organisations, and government representatives to review the state of the Niger Delta environment and chart collaborative action.",
    coverImage: "/images/hero/hero-tree-planting.jpg",
    location: "Warri, Delta State (in-person and virtual)",
    isVirtual: false,
    startDate: "2026-11-12T09:00:00Z",
    endDate: "2026-11-12T17:00:00Z",
    registrationLink: "#",
    published: true,
  },
];

export const IMPACT_STATS = [
  { id: "stat-1", label: "Trees planted", value: "5,000+", suffix: "", icon: "leaf", order: 1 },
  { id: "stat-2", label: "Youth trained", value: "2,500+", suffix: "", icon: "academic-cap", order: 2 },
  { id: "stat-3", label: "Communities reached", value: "18", suffix: "", icon: "home", order: 3 },
  { id: "stat-4", label: "Active projects", value: "8", suffix: "", icon: "folder", order: 4 },
  { id: "stat-5", label: "Funds mobilised", value: "₦25M+", suffix: "", icon: "currency", order: 5 },
  { id: "stat-6", label: "Years of impact", value: "10+", suffix: "", icon: "calendar", order: 6 },
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    quote:
      "Before TESDEF drilled the borehole, my daughters walked forty minutes every morning to fetch water that made them sick. Today they go to school on time and have never been healthier.",
    name: "Patience Ejiro",
    role: "Mother, community water board member",
    location: "Ogidigben, Gbaramatu Kingdom",
    image: "",
    order: 1,
    published: true,
  },
  {
    id: "test-2",
    quote:
      "I enrolled in the digital skills programme not knowing what a browser was. Four months later I was building websites for clients. TESDEF changed the direction of my life.",
    name: "Emmanuel Eferebo",
    role: "Digital Skills Graduate — web developer, freelancer",
    location: "Warri, Delta State",
    image: "",
    order: 2,
    published: true,
  },
  {
    id: "test-3",
    quote:
      "The reforestation work is restoring something we thought was lost forever. Our fishermen are already noticing more fish near the mangrove zones that TESDEF replanted last year.",
    name: "Chief Tonye Ogbogbo",
    role: "Community leader, Okerenkoko",
    location: "Gbaramatu Kingdom, Delta State",
    image: "",
    order: 3,
    published: true,
  },
];

export const TEAM = [
  {
    id: "team-1",
    name: "Tamarakuro Kuroye",
    role: "Founder & Executive Director",
    bio: "A passionate environmental advocate with over fifteen years of experience in sustainable development, community mobilisation, and conservation. Tamarakuro founded TESDEF to bring lasting change to Gbaramatu Kingdom and the wider Niger Delta region.",
    image: "",
    order: 1,
    published: true,
  },
  {
    id: "team-2",
    name: "Sarah Ekoh",
    role: "Director of Programmes",
    bio: "Sarah oversees TESDEF's five programme areas, ensuring each project is community-designed, evidence-based, and accountable to the people it serves. She holds a Master's degree in International Development from the University of Ibadan.",
    image: "",
    order: 2,
    published: true,
  },
  {
    id: "team-3",
    name: "Daniel Akpan",
    role: "Digital Innovation Lead",
    bio: "Daniel leads TESDEF's technology and digital inclusion work, managing the Digital Skills Hub and overseeing partnerships with the technology sector. He is a certified software engineer and former NGO technology consultant.",
    image: "",
    order: 3,
    published: true,
  },
  {
    id: "team-4",
    name: "Mercy Tonye",
    role: "Community Outreach Manager",
    bio: "Mercy is the bridge between TESDEF and the communities it serves. She leads community engagement for all projects in Gbaramatu Kingdom and manages TESDEF's network of 60 Community Health Volunteers.",
    image: "",
    order: 4,
    published: true,
  },
  {
    id: "team-5",
    name: "Emmanuel Owei",
    role: "Finance & Operations Manager",
    bio: "Emmanuel ensures that every naira entrusted to TESDEF is used with maximum impact and full accountability. He manages financial reporting, donor relations, and operational systems, and has 12 years of NGO finance experience.",
    image: "",
    order: 5,
    published: true,
  },
];

export const PARTNERS = [
  { id: "part-1", name: "Niger Delta Development Commission", logo: "", website: "#", category: "Government", order: 1, published: true },
  { id: "part-2", name: "Delta State Government", logo: "", website: "#", category: "Government", order: 2, published: true },
  { id: "part-3", name: "UNDP Nigeria", logo: "", website: "#", category: "International", order: 3, published: true },
  { id: "part-4", name: "Ford Foundation", logo: "", website: "#", category: "International", order: 4, published: true },
  { id: "part-5", name: "MacArthur Foundation", logo: "", website: "#", category: "International", order: 5, published: true },
  { id: "part-6", name: "Greening Nigeria Initiative", logo: "", website: "#", category: "Civil Society", order: 6, published: true },
  { id: "part-7", name: "Tech4Africa", logo: "", website: "#", category: "Technology", order: 7, published: true },
  { id: "part-8", name: "Global Environmental Facility", logo: "", website: "#", category: "International", order: 8, published: true },
];

export const GALLERY_ITEMS = [
  { id: "gal-1", url: "/images/hero/hero-tree-planting.jpg", caption: "Volunteers planting saplings during the 2025 Community Tree-Planting Day", category: "Reforestation", alt: "TESDEF volunteers planting trees", order: 1, published: true },
  { id: "gal-2", url: "/images/hero/hero-tree-planting.jpg", caption: "Clean Water Inauguration — Ogidigben Community, March 2026", category: "Clean Water", alt: "Borehole inauguration ceremony", order: 2, published: true },
  { id: "gal-3", url: "/images/hero/hero-tree-planting.jpg", caption: "Digital Skills Hub graduation ceremony, May 2026", category: "Digital Skills", alt: "Young graduates at the Digital Skills Hub", order: 3, published: true },
  { id: "gal-4", url: "/images/hero/hero-tree-planting.jpg", caption: "Mangrove propagule planting along the Warri estuary", category: "Mangroves", alt: "Mangrove planting in progress", order: 4, published: true },
  { id: "gal-5", url: "/images/hero/hero-tree-planting.jpg", caption: "Women in Tech Cohort 1 — graduation day", category: "Women in Tech", alt: "Women in Tech graduates", order: 5, published: true },
  { id: "gal-6", url: "/images/hero/hero-tree-planting.jpg", caption: "Solar panels installed at Okerenkoko Community Primary School", category: "Solar Energy", alt: "Solar energy installation on school roof", order: 6, published: true },
];

// Type exports for use across the app
export type Programme = (typeof PROGRAMMES)[0];
export type Project = (typeof PROJECTS)[0];
export type NewsItem = (typeof NEWS)[0];
export type EventItem = (typeof EVENTS)[0];
export type ImpactStat = (typeof IMPACT_STATS)[0];
export type Testimonial = (typeof TESTIMONIALS)[0];
export type TeamMember = (typeof TEAM)[0];
export type Partner = (typeof PARTNERS)[0];
export type GalleryItem = (typeof GALLERY_ITEMS)[0];
