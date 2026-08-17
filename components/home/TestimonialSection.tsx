"use client";

import { Star } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="bg-[#f5f5f0] text-[#0a0a0a] py-28 md:py-44 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-5 h-px bg-black" />
          <span className="font-inter text-xs font-semibold tracking-[0.25em] uppercase text-black/50">
            Client Words
          </span>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1.5 mb-8">
          {[1, 2, 3, 4, 5].map((s) => (
            <div key={s} className="w-3 h-3 rounded-full bg-[#c8f135]" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="font-satoshi font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.25] tracking-tight mb-12">
          &ldquo;Buzzcrafterss understood the brief, moved quickly and delivered far beyond execution. They brought together strategy, people, creators and technology seamlessly.&rdquo;
        </blockquote>

        {/* Attribution */}
        <div className="flex items-center gap-5 pt-8 border-t border-black/10">
          <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm tracking-wider">
            VP
          </div>
          <div>
            <div className="font-satoshi font-bold text-black text-lg md:text-xl">
              Marketing Director
            </div>
            <div className="font-inter text-xs text-black/50 tracking-wider uppercase mt-0.5">
              Consumer Tech Brand · India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
