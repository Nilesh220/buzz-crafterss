"use client";

import { useState } from "react";

const statements = [
  {
    title: "Strategy + On-Ground Execution",
    body: "We don't stop at slide decks. We build, staff, fabricate, and measure live in the field.",
    tag: "TURNKEY",
  },
  {
    title: "Physical + Digital Bridge",
    body: "Offline activations feed directly into digital viral loops, UGC leaderboards, and conversion funnels.",
    tag: "OMNICHANNEL",
  },
  {
    title: "Creators + Community Hubs",
    body: "We engineer genuine cultural conversations through peer campus ambassadors and authentic creators.",
    tag: "CULTURE-FIRST",
  },
  {
    title: "Young + High Velocity",
    body: "Built natively for internet speed — rapid sprints, agile pivots, and real-time community engagement.",
    tag: "AGILE",
  },
  {
    title: "Measurable Business Outcomes",
    body: "Every single campaign is tracked with verified reach, footfall, scan-throughs, and commercial ROI.",
    tag: "ROI-DRIVEN",
  },
];

export default function WhySection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="bg-[#f7f6f2] py-20 sm:py-28 md:py-36 relative overflow-hidden border-b border-black/8 w-full text-[#121113]">
      {/* Background ambient light */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] opacity-35 pointer-events-none"
        style={{ background: "#ffd6e0" }}
      />

      <div className="site-container relative z-10">
        {/* Headline */}
        <div className="mb-12 md:mb-16 pb-8 border-b border-black/8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-[#ff3366]" />
            <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#ff3366]">
              07 / WHY BUZZCRAFTERSS
            </span>
          </div>

          <h2 className="font-satoshi font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight">
            <span className="text-[#121113]">BUILT</span>{" "}
            <span className="text-[#ff3366]">DIFFERENT.</span>
          </h2>
        </div>

        {/* 5 Statements List */}
        <div className="flex flex-col divide-y divide-black/8 border-y border-black/8 w-full">
          {statements.map((s, i) => (
            <div
              key={s.title}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 transition-all duration-300 w-full ${
                hoveredIdx === i ? "bg-white shadow-sm translate-x-1.5" : "bg-transparent"
              }`}
            >
              <div className="flex items-center gap-4 md:w-96 shrink-0">
                <span className="font-mono text-xs text-[#ff3366] font-bold">0{i + 1}</span>
                <h3 className="font-satoshi font-bold text-[#121113] text-lg sm:text-xl md:text-2xl tracking-tight">
                  {s.title}
                </h3>
              </div>

              <p className="font-inter text-neutral-600 text-sm sm:text-base leading-relaxed flex-1 max-w-2xl">
                {s.body}
              </p>

              <div className="shrink-0 flex items-center gap-2">
                <span className="font-mono text-[10px] text-neutral-700 uppercase px-3 py-1.5 rounded-lg bg-white border border-black/8 shadow-2xs font-semibold">
                  {s.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
