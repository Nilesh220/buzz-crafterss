"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 sm:py-32 md:py-44 overflow-hidden w-full">
      {/* Radial ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(200,241,53,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="site-container relative z-10 flex flex-col items-center text-center">
        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-6 h-px bg-[#c8f135]" />
          <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#c8f135]">
            LET&apos;S BUILD TOGETHER
          </span>
          <div className="w-6 h-px bg-[#c8f135]" />
        </div>

        {/* Headline */}
        <h2 className="font-satoshi font-black tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] mb-6">
          <span className="block text-white">GOT A CAMPAIGN</span>
          <span className="block text-[#c8f135] drop-shadow-[0_0_35px_rgba(200,241,53,0.4)]">
            IN MIND?
          </span>
        </h2>

        {/* Supporting copy */}
        <p className="font-inter text-neutral-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed mb-10">
          Turn your brief into something audiences can step inside, participate in, and remember.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-9 py-5 rounded-2xl bg-[#c8f135] text-black font-inter font-bold text-xs tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(200,241,53,0.35)] group"
            data-cursor="explore"
          >
            <span>START A CAMPAIGN</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          
          <a
            href="mailto:hello@buzzcrafterss.com"
            className="font-inter text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-400 hover:text-[#c8f135] transition-colors duration-300 px-6 py-4 rounded-2xl border border-[#222] bg-[#111]"
          >
            hello@buzzcrafterss.com
          </a>
        </div>
      </div>
    </section>
  );
}
