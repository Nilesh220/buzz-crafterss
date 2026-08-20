"use client";

import { useState } from "react";

const philosophyWords = [
  { text: "SEE IT.", sub: "Immediate visual & spatial disruption." },
  { text: "FEEL IT.", sub: "Tactile, sensory, and on-ground presence." },
  { text: "SHARE IT.", sub: "Organic peer-to-peer amplification." },
  { text: "REMEMBER IT.", sub: "Long-term brand affinity and conversion." },
];

export default function PhilosophySection() {
  const [hoveredWord, setHoveredWord] = useState<number | null>(null);

  return (
    <section className="bg-[#fbfbfa] text-[#121113] py-20 sm:py-28 md:py-36 overflow-hidden border-b border-black/8 w-full">
      <div className="site-container">
        {/* Label */}
        <div className="flex items-center gap-3 mb-10 md:mb-14">
          <div className="w-6 h-px bg-[#ff3366]" />
          <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#ff3366]">
            08 / CORE PHILOSOPHY
          </span>
        </div>

        {/* Display Typography Rows */}
        <div className="flex flex-col divide-y divide-black/8 border-y border-black/8 w-full">
          {philosophyWords.map((word, i) => (
            <div
              key={word.text}
              onMouseEnter={() => setHoveredWord(i)}
              onMouseLeave={() => setHoveredWord(null)}
              className="py-4 sm:py-6 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-2 group transition-all w-full cursor-default"
            >
              <div
                className="font-satoshi font-black leading-[0.95] tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl select-none transition-all duration-300"
                style={{
                  color: hoveredWord === i || (hoveredWord === null && i % 2 === 0) ? "#121113" : "transparent",
                  WebkitTextStroke: hoveredWord === i || (hoveredWord === null && i % 2 === 0) ? "none" : "2px #121113",
                }}
              >
                {word.text}
              </div>

              <div className="font-inter text-xs sm:text-sm text-neutral-500 md:text-right max-w-sm uppercase font-semibold tracking-wider">
                {word.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Supporting copy */}
        <div className="mt-10 max-w-2xl">
          <p className="font-inter text-neutral-600 text-base sm:text-lg md:text-xl leading-relaxed">
            Every activation we architect is designed to be lived in, not just passively observed. That is the fundamental difference between standard advertising and cultural moments.
          </p>
        </div>
      </div>
    </section>
  );
}
