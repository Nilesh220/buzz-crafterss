"use client";

import { useState } from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

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
    <section className="bg-[#fbfbfa] text-[#121113] py-20 sm:py-28 md:py-36 border-b border-black/8 w-full">
      <div className="site-container">
        {/* Label */}
        <div className="flex items-center gap-3 mb-10 md:mb-14">
          <div className="w-6 h-px bg-[#ff3366]" />
          <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#ff3366]">
            12 / CLIENT VALIDATION
          </span>
        </div>

        {/* Luxury Soft Light Testimonial Box */}
        <div className="bg-white text-[#121113] rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-black/10 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
            {/* Quote Left */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <Quote size={48} className="text-[#ff3366] mb-6 opacity-85" />

              <blockquote className="font-satoshi font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-[#121113] leading-relaxed mb-8">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-black/8">
                <div>
                  <div className="font-satoshi font-bold text-lg sm:text-xl text-[#121113]">
                    {current.author}
                  </div>
                  <div className="font-inter text-xs sm:text-sm text-neutral-500">
                    {current.company}
                  </div>
                </div>

                {/* Nav Arrows */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    aria-label="Previous quote"
                    className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:border-[#ff3366] hover:text-[#ff3366] transition-colors"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <span className="font-mono text-xs text-neutral-400 px-2">
                    0{activeIdx + 1} / 0{testimonials.length}
                  </span>
                  <button
                    onClick={next}
                    aria-label="Next quote"
                    className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:border-[#ff3366] hover:text-[#ff3366] transition-colors"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Impact Metric Right */}
            <div className="lg:col-span-4 bg-[#fff1f4] border border-[#ff3366]/20 rounded-2xl p-6 sm:p-10 flex flex-col justify-center items-center text-center shadow-xs w-full">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#ff3366] mb-2 font-bold">
                AUDITED RESULT
              </span>
              <div className="font-satoshi font-black text-4xl sm:text-5xl lg:text-6xl text-[#121113] mb-2">
                {current.metric}
              </div>
              <div className="font-inter text-xs sm:text-sm text-neutral-600">
                {current.metricLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
