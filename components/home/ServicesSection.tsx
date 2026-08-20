"use client";

import { useState } from "react";
import { services } from "@/lib/data/services";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section
      id="services"
      className="bg-[#f7f6f2] text-[#121113] py-20 sm:py-28 md:py-36 border-b border-black/8 w-full"
    >
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-8 border-b border-black/8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-[#ff3366]" />
              <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#ff3366]">
                03 / CAPABILITIES
              </span>
            </div>
            <h2 className="font-satoshi font-black text-[#121113] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05]">
              Six Ways We Operate.
            </h2>
          </div>
          <p className="font-inter text-neutral-600 text-sm sm:text-base md:text-lg max-w-md md:text-right leading-relaxed">
            Each discipline works as a standalone specialist unit or orchestrates into an omnichannel master campaign.
          </p>
        </div>

        {/* Vertical Services List */}
        <div className="divide-y divide-black/8 border-y border-black/8 w-full">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 w-full cursor-pointer ${
                  isActive ? "bg-white border-l-4 border-l-[#ff3366] shadow-sm" : "bg-transparent hover:bg-white/60"
                }`}
              >
                <div className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 flex flex-col gap-4">
                  {/* Top Bar: Number, Title, Arrow */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 sm:gap-8">
                      <span
                        className="font-mono text-sm sm:text-base font-bold transition-colors"
                        style={{ color: isActive ? "#ff3366" : "#999" }}
                      >
                        {service.id}
                      </span>
                      <h3
                        className="font-satoshi font-bold tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-colors"
                        style={{ color: isActive ? "#ff3366" : "#121113" }}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-6">
                      <span className="font-inter text-xs text-neutral-500 hidden lg:block max-w-xs text-right">
                        {service.tagline}
                      </span>
                      <div
                        className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
                          isActive
                            ? "border-[#ff3366] bg-[#ff3366] text-white shadow-[0_0_15px_rgba(255,51,102,0.3)]"
                            : "border-black/15 text-neutral-500"
                        }`}
                      >
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Items Pills */}
                  <div
                    className={`transition-all duration-400 overflow-hidden ${
                      isActive ? "max-h-32 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-wrap gap-2 pl-8 sm:pl-12">
                      {service.items.map((item) => (
                        <span
                          key={item}
                          className="font-inter text-xs px-3.5 py-1.5 rounded-full border border-black/8 bg-[#fbfbfa] text-neutral-700 font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-black/8">
          <span className="font-inter text-sm text-neutral-600">
            Need a bespoke combination of these capabilities?
          </span>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-inter text-xs font-bold tracking-widest uppercase text-[#ff3366] hover:text-[#121113] transition-colors"
            data-cursor="explore"
          >
            <span>Explore Full Services Index</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
