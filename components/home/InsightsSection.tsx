"use client";

import { insights } from "@/lib/data/insights";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

const cardGradients = [
  "from-[#131b2e] via-[#0b101c] to-[#05080e]",
  "from-[#221019] via-[#140a0f] to-[#070305]",
  "from-[#112417] via-[#0b160f] to-[#040905]",
  "from-[#251f0f] via-[#161208] to-[#080603]",
];

export default function InsightsSection() {
  return (
    <section className="bg-[#f5f5f0] text-[#0a0a0a] py-28 md:py-44 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20 pb-8 border-b border-black/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-black" />
              <span className="font-inter text-xs font-semibold tracking-[0.25em] uppercase text-black/50">
                Insights & Strategy
              </span>
            </div>
            <h2 className="font-satoshi font-black text-black tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
              Thinking Out Loud.
            </h2>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-inter text-xs font-bold tracking-widest uppercase text-black hover:text-[#c8f135] transition-colors"
          >
            <span>ALL ARTICLES</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {insights.slice(0, 4).map((article, i) => (
            <Link
              key={article.id}
              href={`/insights/${article.slug}`}
              className="group block p-8 rounded-2xl border border-black/10 bg-white hover:border-black/30 hover:shadow-xl transition-all duration-300"
              data-cursor="explore"
            >
              {/* Category & Read Time */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-inter text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#0a0a0a] text-white">
                  {article.category}
                </span>
                <span className="font-inter text-xs text-black/50 font-medium">
                  {article.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-satoshi font-bold text-2xl sm:text-3xl text-black mb-4 tracking-tight leading-snug group-hover:text-black transition-colors">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="font-inter text-sm md:text-base text-black/60 leading-relaxed line-clamp-3 mb-6">
                {article.excerpt}
              </p>

              {/* Bottom Row */}
              <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-black">
                <span className="text-black/50">{article.date}</span>
                <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
