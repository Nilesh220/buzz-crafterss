"use client";

import { useState } from "react";
import { objectives } from "@/lib/data/process";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CampaignObjectives() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="bg-[#fbfbfa] text-[#121113] py-20 sm:py-28 md:py-36 border-b border-black/8 w-full">
      <div className="site-container">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-8 border-b border-black/8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-[#ff3366]" />
              <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#ff3366]">
                04 / STRATEGY SIMULATOR
              </span>
            </div>
            <h2 className="font-satoshi font-black text-[#121113] tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.05]">
              <span className="block">You don&apos;t need another vendor.</span>
              <span className="block text-black/40">You need a campaign that works.</span>
            </h2>
          </div>
          <p className="font-inter text-neutral-600 text-sm sm:text-base max-w-sm">
            Select your high-priority commercial objective below to see our recommended blueprint.
          </p>
        </div>

        {/* 2-Column Interactive Solution Explorer */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start w-full">
          {/* Left: Objectives Selector */}
          <div className="lg:col-span-5 flex flex-col gap-2.5 w-full">
            {objectives.map((obj, i) => (
              <button
                key={obj.label}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                  activeIndex === i
                    ? "bg-[#121113] text-white border-[#121113] shadow-xl translate-x-1.5"
                    : "bg-white text-[#121113] border-black/8 hover:border-[#ff3366]/30 hover:bg-[#fff9fb]"
                }`}
                data-cursor="explore"
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className={`font-mono text-xs font-bold ${
                      activeIndex === i ? "text-[#ff3366]" : "text-neutral-400"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span className="font-satoshi font-bold text-base sm:text-lg tracking-tight">
                    {obj.label}
                  </span>
                </div>
                <ArrowRight
                  size={16}
                  className={`transition-transform duration-300 ${
                    activeIndex === i ? "text-[#ff3366] translate-x-1" : "text-neutral-400"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right: Active Campaign Strategy Pane */}
          <div className="lg:col-span-7 bg-white text-[#121113] p-6 sm:p-10 rounded-2xl border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] w-full">
            <div className="flex items-center justify-between border-b border-black/8 pb-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#ff3366] uppercase font-semibold">
                <Sparkles size={14} />
                <span>RECOMMENDED BLUEPRINT</span>
              </div>
              <span className="font-mono text-xs text-neutral-400">
                MODULE 0{activeIndex + 1}
              </span>
            </div>

            <h3 className="font-satoshi font-black text-2xl sm:text-3xl md:text-4xl text-[#121113] mb-6 tracking-tight">
              {objectives[activeIndex].label}
            </h3>

            <div className="p-5 sm:p-6 rounded-xl bg-[#fff1f4] border border-[#ff3366]/20 mb-6">
              <span className="font-mono text-[11px] text-[#ff3366] uppercase tracking-wider font-bold block mb-2">
                STRATEGIC EXECUTION PROTOCOL
              </span>
              <p className="font-inter text-neutral-800 text-sm sm:text-base leading-relaxed">
                {objectives[activeIndex].solution}
              </p>
            </div>

            {/* Quick Metrics preview */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-[#f7f6f2] border border-black/5">
                <div className="font-mono text-[10px] text-neutral-500 uppercase">Deployment</div>
                <div className="font-satoshi font-bold text-[#121113] text-sm sm:text-base mt-1">2-3 Weeks</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#f7f6f2] border border-black/5">
                <div className="font-mono text-[10px] text-neutral-500 uppercase">Channels</div>
                <div className="font-satoshi font-bold text-[#ff3366] text-sm sm:text-base mt-1">Omnichannel</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#f7f6f2] border border-black/5">
                <div className="font-mono text-[10px] text-neutral-500 uppercase">Reporting</div>
                <div className="font-satoshi font-bold text-[#121113] text-sm sm:text-base mt-1">Live Audit</div>
              </div>
            </div>

            {/* Brief CTA */}
            <div className="pt-6 border-t border-black/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="font-inter text-xs text-neutral-600">
                Ready to execute this campaign model?
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ff3366] text-white font-inter font-bold text-xs tracking-wider uppercase hover:bg-[#121113] transition-all shadow-md"
                data-cursor="explore"
              >
                <span>Brief us now</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
