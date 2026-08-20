import type { Metadata } from "next";
import { insights } from "@/lib/data/insights";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights — Thinking Out Loud | Buzzcrafterss",
  description:
    "Strategy, frameworks, and thinking from Buzzcrafterss on campus marketing, creator ecosystems, brand experiences and Gen-Z marketing.",
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfa] text-[#121113] pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-28 w-full">
      <div className="site-container">
        {/* Header */}
        <div className="mb-14 sm:mb-20 pb-8 sm:pb-12 border-b border-black/8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#ff3366]" />
            <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#ff3366]">
              THOUGHT LEADERSHIP
            </span>
          </div>

          <h1 className="font-satoshi font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#121113] mb-6">
            Thinking Out Loud.
          </h1>

          <p className="font-inter text-neutral-600 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
            Essays, frameworks, and tactical breakdowns on the evolving landscape of youth marketing, experiential design, and creator distribution.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 w-full">
          {insights.map((article) => (
            <Link
              key={article.id}
              href={`/insights/${article.slug}`}
              className="group block p-6 sm:p-8 md:p-10 rounded-2xl border border-black/8 bg-white hover:border-[#ff3366]/40 hover:shadow-lg transition-all duration-300 w-full shadow-2xs"
              data-cursor="explore"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-inter text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#fff1f4] text-[#ff3366] border border-[#ff3366]/20">
                  {article.category}
                </span>
                <span className="font-mono text-xs text-neutral-400 font-medium">
                  {article.readTime}
                </span>
              </div>

              <h2 className="font-satoshi font-bold text-xl sm:text-2xl md:text-3xl text-[#121113] mb-3 tracking-tight leading-snug group-hover:text-[#ff3366] transition-colors">
                {article.title}
              </h2>

              <p className="font-inter text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
                {article.excerpt}
              </p>

              <div className="pt-4 border-t border-black/8 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#121113]">
                <span className="text-neutral-400 font-mono">{article.date}</span>
                <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform text-[#ff3366]">
                  <span>Read Article</span>
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
