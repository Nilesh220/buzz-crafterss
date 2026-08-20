"use client";

import { useState } from "react";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Buzzcrafterss executed our 20-city campus tour seamlessly. The physical pods became viral TikTok & Reels magnets, driving 3.2M organic impressions and our highest student adoption month on record.",
    author: "Head of Growth & Marketing",
    company: "Tier-1 Consumer Tech Unicorn",
    metric: "3.2M+",
    metricLabel: "Organic Impressions",
  },
  {
    quote:
      "They aren't like other agencies who outsource everything to third parties. Buzzcrafterss handled fabrication, staffing, on-ground VIP management, and the digital leaderboard under one roof.",
    author: "VP Brand & Communications",
    company: "National D2C Beverage Brand",
    metric: "45,000+",
    metricLabel: "Direct Live Samplings",
  },
  {
    quote:
      "The creator strategy coupled with experiential installations gave our enterprise brand a cool, culturally-relevant voice. The execution speed was truly world-class.",
    author: "Director of Integrated Marketing",
    company: "Global SaaS & Cloud Provider",
    metric: "4.8x",
    metricLabel: "Campaign Engagement vs Benchmark",
  },
];

export default function TestimonialSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[activeIdx];

  return (
    <section className="bg-[#f5f5f0] text-[#0a0a0a] py-20 sm:py-28 md:py-36 border-b border-black/10 w-full">
      <div className="site-container">
        {/* Label */}
        <div className="flex items-center gap-3 mb-10 md:mb-14">
          <div className="w-6 h-px bg-black" />
          <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-black/60">
            12 / CLIENT VALIDATION
          </span>
        </div>

        {/* Testimonial Box */}
        <div className="bg-[#0a0a0a] text-white rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
            {/* Quote Left */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <Quote size={48} className="text-[#c8f135] mb-6 opacity-85" />

              <blockquote className="font-satoshi font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-white leading-relaxed mb-8">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#262626]">
                <div>
                  <div className="font-satoshi font-bold text-lg sm:text-xl text-white">
                    {current.author}
                  </div>
                  <div className="font-inter text-xs sm:text-sm text-neutral-400">
                    {current.company}
                  </div>
                </div>

                {/* Nav Arrows */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    aria-label="Previous quote"
                    className="w-11 h-11 rounded-full border border-[#333] flex items-center justify-center hover:border-[#c8f135] hover:text-[#c8f135] transition-colors"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <span className="font-mono text-xs text-neutral-500 px-2">
                    0{activeIdx + 1} / 0{testimonials.length}
                  </span>
                  <button
                    onClick={next}
                    aria-label="Next quote"
                    className="w-11 h-11 rounded-full border border-[#333] flex items-center justify-center hover:border-[#c8f135] hover:text-[#c8f135] transition-colors"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Impact Metric Right */}
            <div className="lg:col-span-4 bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-10 flex flex-col justify-center items-center text-center shadow-lg w-full">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#c8f135] mb-2 font-semibold">
                AUDITED RESULT
              </span>
              <div className="font-satoshi font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-2">
                {current.metric}
              </div>
              <div className="font-inter text-xs sm:text-sm text-neutral-400">
                {current.metricLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
