"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] text-[#f5f5f0] overflow-hidden border-b border-[#222]">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[160px] opacity-15"
          style={{ background: "#c8f135" }}
        />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Inner content — padded away from fixed navbar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-24 pt-44 md:pt-52 pb-16 md:pb-24 flex flex-col gap-16 md:gap-20 min-h-screen">

        {/* Status Badge */}
        <div
          className="transition-all duration-700"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#2a2a2a] bg-[#141414]/80 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#c8f135] animate-pulse shrink-0" />
            <span className="font-inter text-xs font-medium tracking-wider uppercase text-neutral-300">
              Brand Experiences · Creator Influence · Digital Impact
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div
          className="transition-all duration-700 delay-100"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(15px)",
          }}
        >
          <h1 className="font-satoshi font-black tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] leading-[1.02] max-w-6xl">
            <span className="block text-neutral-100">WE MAKE</span>
            <span className="block text-neutral-100">BRANDS</span>
            <span className="block text-[#c8f135]">IMPOSSIBLE</span>
            <span className="block text-neutral-100">TO IGNORE.</span>
          </h1>
        </div>

        {/* Bottom Bar: Tagline + CTAs */}
        <div
          className="border-t border-[#222] pt-10 grid md:grid-cols-2 gap-8 items-end mt-auto transition-all duration-700 delay-200"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(15px)",
          }}
        >
          <p className="font-inter text-neutral-400 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl">
            Buzzcrafterss is a brand experience and integrated marketing agency creating campaigns across campuses, communities, workplaces, social platforms and digital spaces.
          </p>

          <div className="flex flex-wrap items-center md:justify-end gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#c8f135] text-[#0a0a0a] font-inter font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
              data-cursor="explore"
            >
              <span>START A CAMPAIGN</span>
              <ArrowUpRight size={16} />
            </Link>

            <a
              href="#work"
              className="inline-flex items-center gap-2 font-inter text-xs font-semibold tracking-widest uppercase text-neutral-400 hover:text-[#c8f135] transition-colors duration-300 py-4 px-2"
              data-cursor="explore"
            >
              SELECTED WORK ↓
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
