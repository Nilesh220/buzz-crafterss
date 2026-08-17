"use client";

const items = [
  "BTL", "CAMPUS MARKETING", "CREATOR MARKETING", "BRAND EXPERIENCES",
  "EVENTS", "DIGITAL", "TECHNOLOGY", "COMMUNITY", "ACTIVATIONS",
  "INFLUENCER", "YOUTH MARKETING", "INTEGRATED CAMPAIGNS",
];

interface MarqueeProps {
  reverse?: boolean;
  speed?: number;
  dark?: boolean;
}

export default function Marquee({ reverse = false, speed = 40, dark = false }: MarqueeProps) {
  const content = [...items, ...items];

  return (
    <div
      className={`overflow-hidden py-5 md:py-7 border-y ${
        dark ? "bg-bc-black border-bc-border" : "bg-bc-white border-bc-black/10"
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
            className={`inline-flex items-center gap-6 px-6 font-inter text-[11px] font-semibold tracking-[0.2em] uppercase ${
              dark ? "text-bc-gray" : "text-bc-black/40"
            }`}
          >
            {item}
            <span className={dark ? "text-bc-lime" : "text-bc-lime"}>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
