"use client";

import { useState } from "react";
import { services } from "@/lib/data/services";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      id="services"
      className="bg-[#0a0a0a] text-[#f5f5f0] py-28 md:py-44 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-[#222]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-20 pb-10 border-b border-[#222]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-[#c8f135]" />
              <span className="font-inter text-xs font-semibold tracking-[0.25em] uppercase text-[#c8f135]">
                What We Do
              </span>
            </div>
            <h2 className="font-satoshi font-black text-white tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
              Six Ways We Operate.
            </h2>
          </div>
          <p className="font-inter text-neutral-400 text-base md:text-lg max-w-md md:text-right leading-relaxed">
            Each service is designed to stand on its own or orchestrate seamlessly as an integrated multi-channel campaign.
          </p>
        </div>

        {/* Vertical Services List */}
        <div className="divide-y divide-[#222] border-y border-[#222]">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href="/services"
              className="block relative group py-8 sm:py-10 md:py-12 transition-all duration-300"
              onMouseEnter={() => setActiveIndex(index)}
              data-cursor="explore"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12">
                {/* Left: Number & Title */}
                <div className="flex items-center gap-6 sm:gap-10">
                  <span
                    className="font-mono text-sm sm:text-base font-bold text-neutral-500 w-8 shrink-0 transition-colors duration-300"
                    style={{
                      color: activeIndex === index ? "#c8f135" : undefined,
                    }}
                  >
                    {service.id}
                  </span>

                  <h3
                    className="font-satoshi font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] leading-snug transition-colors duration-300"
                    style={{
                      color: activeIndex === index ? "#c8f135" : "#f5f5f0",
                    }}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Right: Tagline & Button Arrow */}
                <div className="flex items-center gap-6 pl-14 lg:pl-0 justify-between lg:justify-end">
                  <span className="font-inter text-sm text-neutral-400 max-w-sm lg:text-right leading-relaxed hidden sm:block">
                    {service.tagline}
                  </span>

                  <div
                    className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center transition-all duration-300 shrink-0 group-hover:border-[#c8f135] group-hover:bg-[#c8f135] group-hover:text-black"
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>

              {/* Deliverable Badges */}
              <div className="pl-14 pt-4 pb-2 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <span
                    key={item}
                    className="font-inter text-xs px-3 py-1.5 rounded-full border border-[#222] bg-[#111] text-neutral-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
