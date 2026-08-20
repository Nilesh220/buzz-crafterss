"use client";

import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const keywords = [
  { word: "EXPERIENCE", desc: "Physical activations people can touch and feel." },
  { word: "INFLUENCE", desc: "Creators that shape cultural momentum." },
  { word: "COMMUNITY", desc: "Grassroots campus and collegiate ecosystems." },
  { word: "TECHNOLOGY", desc: "Interactive web and gamified mechanics." },
  { word: "IMPACT", desc: "Measurable commercial growth and engagement." },
];

export default function BrandStatement() {
  const [activeWord, setActiveWord] = useState<number | null>(null);

  return (
    <section className="bg-[#f5f5f0] text-[#0a0a0a] py-20 sm:py-28 md:py-36 border-b border-black/10 w-full">
      <div className="site-container">
        {/* Label */}
        <div className="flex items-center gap-3 mb-10 md:mb-14">
          <div className="w-6 h-px bg-black" />
          <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-black/60">
            02 / AGENCY MANIFESTO
          </span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column — Big Headline */}
          <div className="lg:col-span-7">
            <h2 className="font-satoshi font-black text-black tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05]">
              <span className="block">Brands don&apos;t need</span>
              <span className="block text-black/50">more empty noise.</span>
              <span className="block mt-2">They need attention</span>
              <span className="block text-black bg-[#c8f135] px-3 py-1 w-fit rounded-xl shadow-sm mt-2">
                that actually moves.
              </span>
            </h2>

            <p className="font-inter text-black/75 text-base sm:text-lg md:text-xl leading-relaxed mt-8 max-w-2xl">
              We build ideas that don&apos;t just sit on static screens. They happen live in campuses, streets, retail flagship stores, workplaces, events, viral feeds, and bespoke digital mechanics.
            </p>
          </div>

          {/* Right Column — Interactive Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 w-full">
            <span className="font-mono text-xs text-black/50 uppercase tracking-widest mb-1">
              FIVE CORE FORCES
            </span>

            {keywords.map((item, idx) => (
              <div
                key={item.word}
                onMouseEnter={() => setActiveWord(idx)}
                onMouseLeave={() => setActiveWord(null)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-default ${
                  activeWord === idx
                    ? "bg-[#0a0a0a] text-white border-[#0a0a0a] shadow-xl translate-x-1.5"
                    : "bg-white/80 text-black border-black/10 hover:border-black/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-mono text-xs font-bold ${
                        activeWord === idx ? "text-[#c8f135]" : "text-black/40"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="font-satoshi font-black text-lg sm:text-xl tracking-tight">
                      {item.word}
                    </span>
                  </div>
                  <Sparkles
                    size={18}
                    className={`transition-colors ${
                      activeWord === idx ? "text-[#c8f135]" : "text-black/20"
                    }`}
                  />
                </div>
                <p
                  className={`font-inter text-xs sm:text-sm mt-2 transition-colors ${
                    activeWord === idx ? "text-neutral-300" : "text-black/60"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
