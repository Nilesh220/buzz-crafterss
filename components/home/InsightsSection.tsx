"use client";

import { insights } from "@/lib/data/insights";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function InsightsSection() {
  return (
    <section className="bg-[#f5f5f0] text-[#0a0a0a] py-20 sm:py-28 md:py-36 border-b border-black/10 w-full">
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-8 border-b border-black/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-black" />
              <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-black/60">
                13 / THOUGHT LEADERSHIP
              </span>
            </div>
            <h2 className="font-satoshi font-black text-black tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05]">
              Thinking Out Loud.
            </h2>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-inter text-xs font-bold tracking-widest uppercase text-black hover:text-[#9bc21a] transition-colors"
            data-cursor="explore"
          >
            <span>EXPLORE ALL ESSAYS</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 w-full">
          {insights.slice(0, 4).map((article, i) => (
            <Link
              key={article.id}
              href={`/insights/${article.slug}`}
              className="group block p-6 sm:p-8 md:p-10 rounded-2xl border border-black/10 bg-white hover:border-black/40 hover:shadow-xl transition-all duration-300 w-full"
              data-cursor="explore"
            >
              {/* Category & Read Time */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-inter text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#0a0a0a] text-white">
                  {article.category}
                </span>
                <span className="font-mono text-xs text-black/50 font-medium">
                  {article.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-satoshi font-bold text-xl sm:text-2xl md:text-3xl text-black mb-3 tracking-tight leading-snug group-hover:text-black transition-colors">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="font-inter text-xs sm:text-sm text-black/70 leading-relaxed line-clamp-2 mb-6">
                {article.excerpt}
              </p>

              {/* Bottom Row */}
              <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-black">
                <span className="text-black/40 font-mono">{article.date}</span>
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
