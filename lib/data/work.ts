export interface WorkItem {
  id: string;
  client: string;
  project: string;
  categories: string[];
  description: string;
  metrics: { value: string; label: string }[];
  image: string;
  color: string;
  year: string;
  challenge: string;
  idea: string;
  execution: string;
  experience: string;
  digital: string;
  creatorLayer: string;
  results: { value: string; label: string }[];
  takeaway: string;
}

export const work: WorkItem[] = [
  {
    id: "01",
    client: "Brand Alpha",
    project: "Digital India Campaign",
    categories: ["Campus", "Influencer", "Activation"],
    description:
      "A nationwide campus and influencer campaign connecting a tech brand with India's student community across 15 cities.",
    metrics: [
      { value: "15+", label: "Cities" },
      { value: "80K+", label: "Students Reached" },
      { value: "120+", label: "Creators" },
      { value: "2.4M", label: "Interactions" },
    ],
    image: "/images/work-01.jpg",
    color: "#c8f135",
    year: "2025",
    challenge:
      "The brand needed to establish authentic credibility with India's 18–25 college demographic — a generation that instinctively swipes past traditional display ads and demands real participation.",
    idea:
      "We built a campus-first strategy: embedding the brand organically into college cultural ecosystems through student ambassadors, creator-led challenges, and high-energy interactive zones.",
    execution:
      "A multi-phase 15-city rollout across 60+ tier-1 and tier-2 colleges. We mobilized 80+ campus leaders and 120+ micro-creators who turned regular campus footfall into high-conversion engagement zones.",
    experience:
      "Custom-designed interactive experience pods featuring tactile product demo stations, collaborative beat-making / photo walls, and live leaderboard stations that drew perpetual crowds.",
    digital:
      "A progressive web app microsite powered QR-based check-ins, automated student leaderboard point calculations, dynamic referral links, and instant digital vouchers.",
    creatorLayer:
      "Hyper-local creator sourcing across regional languages. Nano and micro creators produced 400+ organic reels showcasing real student reactions rather than rehearsed brand endorsements.",
    results: [
      { value: "15+", label: "Cities activated" },
      { value: "80K+", label: "Students directly engaged" },
      { value: "120+", label: "Creators mobilized" },
      { value: "2.4M", label: "Total digital interactions" },
    ],
    takeaway:
      "Campus marketing works when it feels like a celebrated chapter of student life — never an interruption.",
  },
  {
    id: "02",
    client: "Brand Beta",
    project: "City Launch Activation",
    categories: ["BTL", "Events", "Digital"],
    description:
      "A multi-city retail activation series turning product sampling into a shareable social moment.",
    metrics: [
      { value: "8+", label: "Cities" },
      { value: "45K+", label: "Samples Distributed" },
      { value: "60+", label: "Retail Touchpoints" },
      { value: "900K", label: "Social Reach" },
    ],
    image: "/images/work-02.jpg",
    color: "#ffffff",
    year: "2025",
    challenge:
      "Launching into an overcrowded consumer goods segment with high customer acquisition costs and low attention spans at retail shelves.",
    idea:
      "Transform product sampling from a passive transaction into an aesthetic, highly photographable brand immersion that invites immediate UGC sharing.",
    execution:
      "Modular architectural pop-up pavilions positioned in high-density shopping destinations across 8 metropolitan cities, staffed by trained brand storytellers.",
    experience:
      "Sensory tasting booths, multi-angle selfie mirrors with instant custom filters, and interactive scent and flavor discovery consoles.",
    digital:
      "QR-enabled digital passport allowing consumers to unlock exclusive launch perks, redeem instant coupons, and participate in city-wide giveaways with live social verification.",
    creatorLayer:
      "Strategic partnership with food, lifestyle, and city culture influencers who hosted live drop sessions at the pavilions, driving footfall spikes.",
    results: [
      { value: "8+", label: "Metropolitan hubs" },
      { value: "45K+", label: "Direct samples handed out" },
      { value: "900K", label: "Organic social impressions" },
      { value: "60+", label: "Retail touchpoints synced" },
    ],
    takeaway:
      "Physical experiences engineered with a built-in digital share mechanic turn every consumer into an authentic distribution channel.",
  },
  {
    id: "03",
    client: "Brand Gamma",
    project: "Corporate Engagement Campaign",
    categories: ["Corporate", "Digital", "Community"],
    description:
      "An employee engagement campaign designed to build internal community and generate external brand advocacy.",
    metrics: [
      { value: "5K+", label: "Employees" },
      { value: "12+", label: "Office Locations" },
      { value: "3M+", label: "Impressions" },
      { value: "88%", label: "Participation Rate" },
    ],
    image: "/images/work-03.jpg",
    color: "#c8f135",
    year: "2024",
    challenge:
      "A multi-city enterprise expanding rapidly needed an energetic initiative to unify distributed teams, celebrate company culture, and turn employees into organic brand ambassadors.",
    idea:
      "Gamified workplace storytelling: combining physical office installations with interactive digital challenges that celebrated individual team superpowers.",
    execution:
      "Simultaneous rollout across 12 corporate hubs with live cross-office syncs, interactive game zones, employee recognition ceremonies, and branded creator kits.",
    experience:
      "Transforming office atriums into dynamic arena lounges with digital leaderboards, live DJ sets, interactive quiz kiosks, and custom photo studios.",
    digital:
      "An internal engagement portal with team-vs-team challenges, peer kudos mechanisms, live photo streams, and automated rewards distribution.",
    creatorLayer:
      "Equipping internal champions with employee advocacy toolkits, leading to organic LinkedIn and Instagram posts that drove unprecedented employer branding reach.",
    results: [
      { value: "5K+", label: "Employees actively participating" },
      { value: "88%", label: "Engagement rate achieved" },
      { value: "3M+", label: "LinkedIn & social impressions" },
      { value: "12+", label: "Major regional campuses" },
    ],
    takeaway:
      "When people are empowered to co-create the culture, internal enthusiasm transforms naturally into formidable external advocacy.",
  },
];
