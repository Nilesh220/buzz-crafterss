"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#f7f6f2] text-[#121113] py-20 sm:py-28 md:py-36 border-b border-black/8 w-full"
    >
      <div className="site-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-start w-full">
          {/* Left — Headline */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#ff3366]" />
              <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#ff3366]">
                09 / AGENCY IDENTITY
              </span>
            </div>

            <h2 className="font-satoshi font-black text-[#121113] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05]">
              <span className="block">WE&apos;RE NOT</span>
              <span className="block text-black/40">HERE TO MAKE</span>
              <span className="block text-[#121113]">SAFE MARKETING.</span>
            </h2>

            <p className="font-inter text-neutral-600 text-base sm:text-lg md:text-xl leading-relaxed mt-6 max-w-xl">
              Buzzcrafterss was engineered from the ground up for modern brands that want to move people — not simply broadcast at them.
            </p>
          </div>

          {/* Right — Body & Stats */}
          <div className="lg:col-span-6 flex flex-col gap-6 w-full">
            <p className="font-inter text-neutral-700 text-base sm:text-lg md:text-xl leading-relaxed">
              We bring together strategic rigor, spatial craftsmanship, creator partnerships, and interactive software to engineer campaigns that audiences step inside, celebrate, and share.
            </p>

            <div className="flex flex-col gap-3.5">
              {[
                { title: "Small enough to move at culture speed.", desc: "Zero bureaucratic layers. We launch fast." },
                { title: "Ambitious enough to command national scale.", desc: "Pan-India college network & city activations." },
                { title: "Built to execute 100% turnkey.", desc: "From concept design to on-ground fabrication." },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-2xl border border-black/8 bg-white shadow-xs">
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[#ff3366] shrink-0" />
                    <span className="font-satoshi font-bold text-[#121113] text-base sm:text-lg">
                      {item.title}
                    </span>
                  </div>
                  <p className="font-inter text-xs sm:text-sm text-neutral-500 pl-4.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-black/8 mt-2">
              {[
                { value: "6", label: "Core Disciplines" },
                { value: "50+", label: "Colleges Activated" },
                { value: "100%", label: "Turnkey Execution" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-satoshi font-black text-2xl sm:text-4xl text-[#121113]">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-neutral-500 tracking-wide mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
