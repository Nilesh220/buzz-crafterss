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

export default function Marquee({ reverse = false, speed = 35, dark = false }: MarqueeProps) {
  const content = [...items, ...items, ...items];

  return (
    <div
      className={`overflow-hidden py-4 sm:py-5 border-y select-none ${
        dark ? "bg-[#121113] border-white/10" : "bg-[#f6f5f0] border-black/8"
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
              dark ? "text-neutral-300" : "text-neutral-700"
            }`}
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3366] shadow-[0_0_8px_rgba(255,51,102,0.6)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
