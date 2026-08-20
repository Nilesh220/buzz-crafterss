import type { Metadata } from "next";
import { work } from "@/lib/data/work";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Work — Selected Campaigns | Buzzcrafterss",
  description:
    "Case studies from Buzzcrafterss — brand experiences, creator campaigns, campus activations and digital experiences that moved people.",
};

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

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfa] text-[#121113] pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-28 w-full">
      <div className="site-container">
        {/* Header */}
        <div className="mb-14 sm:mb-20 pb-8 sm:pb-12 border-b border-black/8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#ff3366]" />
            <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#ff3366]">
              PORTFOLIO ARCHIVE
            </span>
          </div>

          <h1 className="font-satoshi font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#121113] mb-6">
            Campaigns That Moved.
          </h1>

          <p className="font-inter text-neutral-600 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
            Real case studies of brand experiences, creator ecosystems, and campus programs executed across India.
          </p>
        </div>

        {/* Work cards */}
        <div className="flex flex-col gap-8 sm:gap-12 w-full">
          {work.map((item, index) => {
            const theme = cardThemes[index % cardThemes.length];
            return (
              <div
                key={item.id}
                className={`relative rounded-3xl overflow-hidden border border-black/10 bg-gradient-to-br ${theme.bg} p-6 sm:p-10 md:p-14 transition-all duration-500 hover:border-black/20 group shadow-[0_15px_40px_rgba(0,0,0,0.04)] w-full`}
              >
                <div
                  className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: theme.accentGlow }}
                />

                <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <div>
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

                      <span className="font-inter text-xs tracking-[0.2em] uppercase text-neutral-500 font-semibold block mb-2">
                        {item.client}
                      </span>

                      <h2 className="font-satoshi font-black text-2xl sm:text-4xl md:text-5xl text-[#121113] tracking-tight leading-tight group-hover:text-[#ff3366] transition-colors duration-300 mb-5">
                        {item.project}
                      </h2>

                      <p className="font-inter text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                        {item.description}
                      </p>
                    </div>

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
                            {metric.value}
                          </span>
                          <span className="font-inter text-xs text-neutral-500 uppercase tracking-wider mt-1">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-black/8 text-xs sm:text-sm text-neutral-700 italic">
                      &ldquo;{item.takeaway}&rdquo;
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-black/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-satoshi font-black text-[#121113] text-2xl sm:text-3xl">
            Have a campaign brief in mind?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4.5 rounded-xl bg-[#ff3366] text-white font-inter font-bold text-xs tracking-widest uppercase hover:bg-[#121113] transition-all duration-300"
            data-cursor="explore"
          >
            <span>Start a Campaign</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
