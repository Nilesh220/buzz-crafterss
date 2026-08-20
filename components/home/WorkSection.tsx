"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { work } from "@/lib/data/work";
import { ArrowUpRight, Sparkles, Filter, CheckCircle2 } from "lucide-react";

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
    bg: "from-[#0f172a] via-[#090d16] to-[#05080e]",
    accentGlow: "rgba(56, 189, 248, 0.15)",
    tagBg: "border-sky-500/30 text-sky-400 bg-sky-500/10",
  },
  {
    bg: "from-[#201017] via-[#12080d] to-[#070305]",
    accentGlow: "rgba(244, 63, 94, 0.15)",
    tagBg: "border-rose-500/30 text-rose-400 bg-rose-500/10",
  },
  {
    bg: "from-[#102015] via-[#08130b] to-[#030704]",
    accentGlow: "rgba(200, 241, 53, 0.15)",
    tagBg: "border-[#c8f135]/30 text-[#c8f135] bg-[#c8f135]/10",
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
      className="bg-[#0a0a0a] text-[#f5f5f0] py-20 sm:py-28 md:py-36 border-b border-[#222] w-full"
    >
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-8 border-b border-[#222]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-[#c8f135]" />
              <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#c8f135]">
                05 / SELECTED PORTFOLIO
              </span>
            </div>
            <h2 className="font-satoshi font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-white">
              We Make Things Happen.
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <p className="font-inter text-neutral-400 text-sm sm:text-base max-w-sm leading-relaxed">
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
                  ? "bg-[#c8f135] text-black shadow-[0_0_15px_rgba(200,241,53,0.3)]"
                  : "bg-[#141414] text-neutral-400 border border-[#2a2a2a] hover:border-white/20 hover:text-white"
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
                className={`relative rounded-3xl overflow-hidden border border-[#262626] bg-gradient-to-br ${theme.bg} p-6 sm:p-10 md:p-14 transition-all duration-500 hover:border-[#444] group shadow-2xl w-full`}
              >
                {/* Ambient glow */}
                <div
                  className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-700"
                  style={{ background: theme.accentGlow }}
                />

                <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
                  {/* Left Column: Project Overview */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      {/* Meta Tags */}
                      <div className="flex flex-wrap items-center gap-2 mb-5">
                        <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest mr-2">
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
                        <span className="font-inter text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold block mb-2">
                          {item.client}
                        </span>
                        <h3 className="font-satoshi font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight group-hover:text-[#c8f135] transition-colors duration-300">
                          {item.project}
                        </h3>
                      </div>

                      {/* Brief Pitch */}
                      <p className="font-inter text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                        {item.description}
                      </p>
                    </div>

                    {/* View CTA Button */}
                    <div>
                      <Link
                        href={`/work/${item.id}`}
                        className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-white text-black font-inter font-bold text-xs tracking-widest uppercase hover:bg-[#c8f135] transition-all duration-300 shadow-md group/btn"
                        data-cursor="view"
                      >
                        <span>VIEW FULL CASE STUDY</span>
                        <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Key Metrics Showcase */}
                  <div className="lg:col-span-5 bg-[#0a0a0a]/75 backdrop-blur-xl border border-[#222] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 w-full">
                    <div className="flex items-center justify-between border-b border-[#222] pb-4">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#c8f135] font-semibold flex items-center gap-1.5">
                        <Sparkles size={14} /> VERIFIED METRICS
                      </span>
                      <span className="text-[11px] text-neutral-500 font-mono">
                        IMPACT AUDIT
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      {item.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="flex flex-col border-l-2 border-[#333] pl-4 hover:border-[#c8f135] transition-colors duration-300"
                        >
                          <span className="font-satoshi font-black text-3xl sm:text-4xl text-white tracking-tight">
                            <CountUp target={metric.value} />
                          </span>
                          <span className="font-inter text-xs text-neutral-400 uppercase tracking-wider mt-1">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Strategic Insight Takeaway */}
                    <div className="pt-4 border-t border-[#222] text-xs sm:text-sm text-neutral-300 italic">
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
            className="inline-flex items-center gap-2 font-inter text-xs font-bold tracking-widest uppercase text-[#c8f135] hover:text-white transition-colors"
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
