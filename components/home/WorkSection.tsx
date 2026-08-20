"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { work } from "@/lib/data/work";
import { ArrowUpRight, Sparkles, Filter } from "lucide-react";

function CountUp({ target }: { target: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;
            const numMatch = target.match(/[\d.]+/);
            const num = numMatch ? parseFloat(numMatch[0]) : 0;
            const suffix = target.replace(/[\d.]+/, "");
            const duration = 1200;
            const startTime = performance.now();
            const tick = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(eased * num);
              if (ref.current) ref.current.textContent = current + suffix;
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{target}</span>;
}

const cardThemes = [
  {
    bg: "from-[#ffffff] via-[#fff5f7] to-[#fce7f3]",
    accentGlow: "rgba(255, 51, 102, 0.12)",
    tagBg: "border-[#ff3366]/20 text-[#ff3366] bg-[#fff1f4]",
  },
  {
    bg: "from-[#ffffff] via-[#f5f8ff] to-[#e8f0fe]",
    accentGlow: "rgba(56, 189, 248, 0.12)",
    tagBg: "border-sky-500/20 text-sky-600 bg-sky-50",
  },
  {
    bg: "from-[#ffffff] via-[#fffbf2] to-[#fef3c7]",
    accentGlow: "rgba(245, 158, 11, 0.12)",
    tagBg: "border-amber-500/20 text-amber-600 bg-amber-50",
  },
];

const filterCategories = ["All", "Campus", "Creator", "Experiential", "Digital"];

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredWork = work.filter((item) => {
    if (activeFilter === "All") return true;
    return item.categories.some((cat) => cat.toLowerCase().includes(activeFilter.toLowerCase()));
  });

  return (
    <section
      id="work"
      className="bg-[#f7f6f2] text-[#121113] py-20 sm:py-28 md:py-36 border-b border-black/8 w-full"
    >
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-8 border-b border-black/8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-[#ff3366]" />
              <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#ff3366]">
                05 / SELECTED PORTFOLIO
              </span>
            </div>
            <h2 className="font-satoshi font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-[#121113]">
              We Make Things Happen.
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <p className="font-inter text-neutral-600 text-sm sm:text-base max-w-sm leading-relaxed">
              Explore case studies engineered for cultural relevance, on-ground footfall, and direct digital conversion.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-4">
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider mr-2 flex items-center gap-1.5">
            <Filter size={12} /> Filter:
          </span>
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full font-inter text-xs font-semibold tracking-wider uppercase transition-all ${
                activeFilter === cat
                  ? "bg-[#ff3366] text-white shadow-[0_4px_15px_rgba(255,51,102,0.25)] font-bold"
                  : "bg-white text-neutral-700 border border-black/8 hover:border-[#ff3366]/30 hover:text-[#ff3366]"
              }`}
              data-cursor="explore"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Study Cards Stack */}
        <div className="flex flex-col gap-8 sm:gap-12 w-full">
          {filteredWork.map((item, index) => {
            const theme = cardThemes[index % cardThemes.length];
            return (
              <div
                key={item.id}
                className={`relative rounded-3xl overflow-hidden border border-black/10 bg-gradient-to-br ${theme.bg} p-6 sm:p-10 md:p-14 transition-all duration-500 hover:border-black/20 group shadow-[0_15px_40px_rgba(0,0,0,0.04)] w-full`}
              >
                {/* Ambient glow */}
                <div
                  className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: theme.accentGlow }}
                />

                <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
                  {/* Left Column: Project Overview */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      {/* Meta Tags */}
                      <div className="flex flex-wrap items-center gap-2 mb-5">
                        <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest mr-2">
                          0{item.id} / {item.year}
                        </span>
                        {item.categories.map((cat) => (
                          <span
                            key={cat}
                            className={`font-inter text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full border ${theme.tagBg}`}
                          >
                            {cat}
                          </span>
                        ))}
                      </div>

                      {/* Client & Title */}
                      <div className="mb-5">
                        <span className="font-inter text-xs tracking-[0.2em] uppercase text-neutral-500 font-semibold block mb-2">
                          {item.client}
                        </span>
                        <h3 className="font-satoshi font-black text-2xl sm:text-4xl md:text-5xl text-[#121113] tracking-tight leading-tight group-hover:text-[#ff3366] transition-colors duration-300">
                          {item.project}
                        </h3>
                      </div>

                      {/* Brief Pitch */}
                      <p className="font-inter text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                        {item.description}
                      </p>
                    </div>

                    {/* View CTA Button */}
                    <div>
                      <Link
                        href={`/work/${item.id}`}
                        className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#121113] text-white font-inter font-bold text-xs tracking-widest uppercase hover:bg-[#ff3366] transition-all duration-300 shadow-md group/btn"
                        data-cursor="explore"
                      >
                        <span>VIEW FULL CASE STUDY</span>
                        <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Key Metrics Showcase */}
                  <div className="lg:col-span-5 bg-white/95 backdrop-blur-xl border border-black/8 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 w-full shadow-sm">
                    <div className="flex items-center justify-between border-b border-black/8 pb-4">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#ff3366] font-bold flex items-center gap-1.5">
                        <Sparkles size={14} /> VERIFIED METRICS
                      </span>
                      <span className="text-[11px] text-neutral-400 font-mono">
                        IMPACT AUDIT
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      {item.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="flex flex-col border-l-2 border-black/10 pl-4 hover:border-[#ff3366] transition-colors duration-300"
                        >
                          <span className="font-satoshi font-black text-3xl sm:text-4xl text-[#121113] tracking-tight">
                            <CountUp target={metric.value} />
                          </span>
                          <span className="font-inter text-xs text-neutral-500 uppercase tracking-wider mt-1">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Strategic Insight Takeaway */}
                    <div className="pt-4 border-t border-black/8 text-xs sm:text-sm text-neutral-700 italic">
                      &ldquo;{item.takeaway}&rdquo;
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Work Link */}
        <div className="mt-14 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-inter text-xs font-bold tracking-widest uppercase text-[#ff3366] hover:text-[#121113] transition-colors"
            data-cursor="explore"
          >
            <span>View All Detailed Case Studies</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
