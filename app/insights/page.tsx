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
    <main className="min-h-screen bg-[#f5f5f0] text-[#0a0a0a] pt-36 pb-28 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-20 pb-12 border-b border-black/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-px bg-black" />
            <span className="font-inter text-xs font-semibold tracking-[0.25em] uppercase text-black/50">
              Thought Leadership
            </span>
          </div>

          <h1 className="font-satoshi font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-black mb-6">
            Thinking Out Loud.
          </h1>

          <p className="font-inter text-black/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            Essays, frameworks, and tactical breakdowns on the evolving landscape of youth marketing, experiential design, and creator distribution.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {insights.map((article) => (
            <Link
              key={article.id}
              href={`/insights/${article.slug}`}
              className="group block p-8 sm:p-10 rounded-2xl border border-black/10 bg-white hover:border-black hover:shadow-xl transition-all duration-300"
              data-cursor="explore"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-inter text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-[#0a0a0a] text-white">
                  {article.category}
                </span>
                <span className="font-inter text-xs text-black/50 font-medium">
                  {article.readTime}
                </span>
              </div>

              <h2 className="font-satoshi font-bold text-2xl sm:text-3xl text-black mb-4 tracking-tight leading-snug group-hover:text-black transition-colors">
                {article.title}
              </h2>

              <p className="font-inter text-base text-black/65 leading-relaxed mb-8">
                {article.excerpt}
              </p>

              <div className="pt-6 border-t border-black/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-black">
                <span className="text-black/40">{article.date}</span>
                <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
