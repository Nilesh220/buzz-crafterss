"use client";

import { useState } from "react";
import { objectives } from "@/lib/data/process";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CampaignObjectives() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="bg-[#f5f5f0] text-[#0a0a0a] py-28 md:py-44 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20 pb-8 border-b border-black/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-black" />
              <span className="font-inter text-xs font-semibold tracking-[0.25em] uppercase text-black/50">
                Campaigns, Not Services
              </span>
            </div>
            <h2 className="font-satoshi font-black text-black tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1]">
              <span className="block">You don&apos;t need another agency.</span>
              <span className="block text-black/60">You need a campaign that works.</span>
            </h2>
          </div>
        </div>

        {/* 2-Column Interactive Solution Explorer */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left: Objectives Selector */}
          <div className="flex flex-col gap-2">
            {objectives.map((obj, i) => (
              <button
                key={obj.label}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                  activeIndex === i
                    ? "bg-[#0a0a0a] text-white border-[#0a0a0a] shadow-lg"
                    : "bg-white/60 text-black border-black/10 hover:border-black/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-mono text-xs font-semibold ${
                      activeIndex === i ? "text-[#c8f135]" : "text-black/40"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-satoshi font-bold text-lg sm:text-xl tracking-tight">
                    {obj.label}
                  </span>
                </div>
                <ArrowRight
                  size={18}
                  className={`transition-transform duration-300 ${
                    activeIndex === i
                      ? "text-[#c8f135] translate-x-1"
                      : "text-black/30"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right: Active Campaign Strategy Pane */}
          <div className="lg:sticky lg:top-28 bg-[#0a0a0a] text-white p-8 sm:p-10 rounded-2xl border border-[#222] shadow-2xl self-start">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#c8f135] uppercase mb-4">
              <Sparkles size={14} />
              <span>RECOMMENDED BLUEPRINT</span>
            </div>

            <h3 className="font-satoshi font-black text-2xl sm:text-3xl text-white mb-6 tracking-tight">
              {objectives[activeIndex].label}
            </h3>

            <div className="p-6 rounded-xl bg-[#141414] border border-[#262626] mb-8">
              <span className="font-inter text-xs text-neutral-400 uppercase tracking-wider font-semibold block mb-2">
                STRATEGIC EXECUTION
              </span>
              <p className="font-inter text-neutral-200 text-base md:text-lg leading-relaxed">
                {objectives[activeIndex].solution}
              </p>
            </div>

            <div className="pt-6 border-t border-[#222] flex items-center justify-between">
              <span className="font-inter text-xs text-neutral-400">
                Ready to execute this campaign?
              </span>
              <a
                href="/contact"
                className="font-inter text-xs font-bold tracking-wider uppercase text-[#c8f135] hover:text-white transition-colors"
              >
                Brief us now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
