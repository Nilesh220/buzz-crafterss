"use client";

const items = [
  "BTL ACTIVATIONS", "CAMPUS MARKETING", "CREATOR ECOSYSTEMS", "BRAND EXPERIENCES",
  "EXPERIENTIAL EVENTS", "DIGITAL PRODUCTS", "TECHNOLOGY", "COMMUNITY HUBS",
  "INFLUENCER CAMPAIGNS", "YOUTH CULTURE", "INTEGRATED CAMPAIGNS",
];

interface MarqueeProps {
  reverse?: boolean;
  speed?: number;
  dark?: boolean;
}

export default function Marquee({ reverse = false, speed = 35, dark = true }: MarqueeProps) {
  const content = [...items, ...items, ...items];

  return (
    <div
      className={`overflow-hidden py-4 sm:py-5 border-y select-none ${
        dark ? "bg-[#0a0a0a] border-[#222]" : "bg-[#f5f5f0] border-black/10"
      }`}
    >
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        {content.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-5 sm:gap-8 px-4 sm:px-6 font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase ${
              dark ? "text-neutral-400" : "text-black/60"
            }`}
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8f135] shadow-[0_0_8px_#c8f135]" />
          </span>
        ))}
      </div>
    </div>
  );
}
