import type { Metadata } from "next";
import { work } from "@/lib/data/work";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Work — Selected Campaigns | Buzzcrafterss",
  description:
    "Case studies from Buzzcrafterss — brand experiences, creator campaigns, campus activations and digital experiences that moved people.",
};

const cardThemes = [
  {
    bg: "from-[#0f172a] via-[#090d16] to-[#05080e]",
    accentGlow: "rgba(56, 189, 248, 0.12)",
    tagBg: "border-sky-500/30 text-sky-400 bg-sky-500/10",
  },
  {
    bg: "from-[#201017] via-[#12080d] to-[#070305]",
    accentGlow: "rgba(244, 63, 94, 0.12)",
    tagBg: "border-rose-500/30 text-rose-400 bg-rose-500/10",
  },
  {
    bg: "from-[#102015] via-[#08130b] to-[#030704]",
    accentGlow: "rgba(200, 241, 53, 0.12)",
    tagBg: "border-[#c8f135]/30 text-[#c8f135] bg-[#c8f135]/10",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0] pt-36 pb-28 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-20 pb-12 border-b border-[#222]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-px bg-[#c8f135]" />
            <span className="font-inter text-xs font-semibold tracking-[0.25em] uppercase text-[#c8f135]">
              Portfolio Index
            </span>
          </div>

          <h1 className="font-satoshi font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6">
            Campaigns That Moved.
          </h1>

          <p className="font-inter text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Real case studies of brand experiences, creator ecosystems, and campus programs executed across India.
          </p>
        </div>

        {/* Work cards */}
        <div className="flex flex-col gap-12 md:gap-16">
          {work.map((item, index) => {
            const theme = cardThemes[index % cardThemes.length];
            return (
              <div
                key={item.id}
                className={`relative rounded-2xl overflow-hidden border border-[#262626] bg-gradient-to-br ${theme.bg} p-8 sm:p-10 md:p-14 transition-all duration-500 hover:border-[#444] group`}
              >
                <div
                  className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                  style={{ background: theme.accentGlow }}
                />

                <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-6">
                        <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest mr-2">
                          {String(index + 1).padStart(2, "0")} / {item.year}
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

                      <span className="font-inter text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold block mb-2">
                        {item.client}
                      </span>

                      <h2 className="font-satoshi font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight group-hover:text-[#c8f135] transition-colors duration-300 mb-6">
                        {item.project}
                      </h2>

                      <p className="font-inter text-neutral-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                        {item.description}
                      </p>
                    </div>

                    <div>
                      <Link
                        href={`/work/${item.id}`}
                        className="inline-flex items-center gap-3 px-6 py-3.5 rounded-lg bg-white text-black font-inter font-bold text-xs tracking-widest uppercase hover:bg-[#c8f135] transition-all duration-300 shadow-md"
                        data-cursor="explore"
                      >
                        <span>VIEW FULL CASE STUDY</span>
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-[#0a0a0a]/60 backdrop-blur-xl border border-[#222] rounded-xl p-6 sm:p-8 flex flex-col gap-6">
                    <div className="flex items-center justify-between border-b border-[#222] pb-4">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#c8f135] font-semibold">
                        VERIFIED METRICS
                      </span>
                      <span className="text-xs text-neutral-500 font-mono">
                        IMPACT REPORT
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      {item.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="flex flex-col border-l-2 border-[#333] pl-4 hover:border-[#c8f135] transition-colors duration-300"
                        >
                          <span className="font-satoshi font-black text-3xl sm:text-4xl text-white tracking-tight">
                            {metric.value}
                          </span>
                          <span className="font-inter text-xs text-neutral-400 uppercase tracking-wider mt-1">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-2 pt-4 border-t border-[#222] text-xs text-neutral-400 italic">
                      &ldquo;{item.takeaway}&rdquo;
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-24 pt-16 border-t border-[#222] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-satoshi font-black text-white text-2xl sm:text-3xl">
            Have a campaign brief in mind?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c8f135] text-black font-inter font-bold text-xs tracking-widest uppercase hover:bg-white transition-all duration-300"
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
