export interface InsightItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  paragraphs: string[];
}

export const insights: InsightItem[] = [
  {
    id: "01",
    title: "Why Campus Marketing Still Works",
    slug: "why-campus-marketing-still-works",
    category: "Strategy",
    date: "July 2025",
    readTime: "5 min read",
    excerpt:
      "Gen Z doesn't trust ads. They trust people. Here's how campus-first campaigns turn that insight into real brand growth.",
    image: "/images/insight-01.jpg",
    paragraphs: [
      "The conventional playbook for marketing to young demographics relies heavily on programmatic display ads, paid social carousels, and generic influencer shoutouts. But anyone spending time inside modern university campuses knows the reality: students have developed near-total sensory immunity to conventional advertising.",
      "What actually captures attention in a collegiate ecosystem is cultural immersion. When a brand doesn't just interrupt a student festival, but sponsors the stage, co-creates the soundtrack, and deploys peer ambassadors who genuinely care about the product, the dynamic fundamentally changes.",
      "Campus Ambassador Programs (CAPs) are not merely distribution networks; they are localized trust bridges. A campus leader who demonstrates a product inside their hostel or student lounge carries an authenticity multiplier that no 30-second sponsored video can buy.",
      "The brands winning the next generation are those that invest in sustained campus presence rather than one-off semester pop-ups. They build communities, incentivize authentic peer-to-peer sharing, and turn students into lifelong brand evangelists.",
    ],
  },
  {
    id: "02",
    title: "How Creator Campaigns Drive Real-World Action",
    slug: "creator-campaigns-drive-action",
    category: "Creator Marketing",
    date: "June 2025",
    readTime: "6 min read",
    excerpt:
      "Impressions are vanity. We break down the architecture of creator campaigns that actually convert — from brief to execution.",
    image: "/images/insight-02.jpg",
    paragraphs: [
      "For years, creator marketing metrics were measured almost exclusively by views, impressions, and follower counts. Yet CMOs regularly discovered that millions of views failed to correlate with footfall, trial, or real revenue.",
      "The issue lies in passive consumption vs. active participation. High-performing creator campaigns are structured with clear call-to-actions, hyper-local community relevance, and tangible incentives.",
      "When we pair regional nano and micro-creators with on-ground activations, each creator becomes a regional campaign anchor. They don't just post from a studio; they invite their followers to join them at a physical installation, redeem an exclusive digital token, or challenge a leaderboard.",
      "By integrating offline presence with tracked digital mechanics (QR keys, personalized affiliate codes, geo-fenced perks), creator campaigns transform from broadcast awareness into verified conversions.",
    ],
  },
  {
    id: "03",
    title: "Why Every Activation Needs a Digital Layer",
    slug: "activation-digital-layer",
    category: "Experience",
    date: "May 2025",
    readTime: "4 min read",
    excerpt:
      "On-ground activations that don't have a digital amplification layer are leaving 80% of their value on the table.",
    image: "/images/insight-03.jpg",
    paragraphs: [
      "An experiential campaign without a digital layer is a ephemeral moment. A great booth or mall activation might directly reach 5,000 visitors over a weekend, but what happens to the data, the ongoing relationship, and the secondary network reach?",
      "Adding a purposeful digital layer — whether a lightweight mobile microsite, a gamified QR challenge, or an interactive leaderboard — converts footfall into measurable digital assets.",
      "Every attendee who scans a code to claim a prize or take an AR photo generates a touchpoint that can be re-engaged. Moreover, when the digital mechanic makes sharing frictionless, each of those 5,000 physical participants can effortlessly broadcast the experience to tens of thousands of followers.",
      "Physical makes it tangible and emotional; digital makes it scalable, measurable, and permanent.",
    ],
  },
  {
    id: "04",
    title: "The Future of Gen-Z Brand Experiences",
    slug: "future-gen-z-brand-experiences",
    category: "Trends",
    date: "April 2025",
    readTime: "7 min read",
    excerpt:
      "The next decade of youth marketing isn't about reaching Gen Z — it's about making them the campaign.",
    image: "/images/insight-04.jpg",
    paragraphs: [
      "Gen Z is the first generation to grow up entirely in a hyper-connected, participatory internet culture. They do not want brands to talk at them; they want brands to give them creative ammunition to express their own identity.",
      "The shift from passive observation to active co-creation is the single most important trend in experiential design. Interactive installations where visitors remix the visuals, vote on live outcomes, or showcase their talents outperform traditional static pavilions tenfold.",
      "Looking forward, the boundaries between physical events, social creator spaces, and interactive software are dissolving. The agency of the future cannot operate in silos of 'offline PR' versus 'digital media'.",
      "Buzzcrafterss was built from the ground up to operate at this exact intersection: where cultural relevance, physical craftsmanship, and modern technology converge.",
    ],
  },
];
