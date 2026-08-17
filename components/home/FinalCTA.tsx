"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-bc-black py-28 md:py-44 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden"
    >
      {/* Radial ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(200,241,53,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        {/* Label */}
        <div
          className="flex items-center justify-center gap-3 mb-8 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <div className="w-5 h-px bg-bc-lime" />
          <span className="font-inter text-xs font-semibold tracking-[0.25em] uppercase text-bc-lime">
            Let&apos;s Build Something
          </span>
          <div className="w-5 h-px bg-bc-lime" />
        </div>

        {/* Headline in natural flow */}
        <div
          className="mb-8 transition-all duration-700 delay-100"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <h2 className="font-satoshi font-black tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]">
            <span className="block text-white">GOT A</span>
            <span className="block text-white">CAMPAIGN</span>
            <span className="block text-bc-lime">IN MIND?</span>
          </h2>
        </div>

        {/* Supporting copy */}
        <p
          className="font-inter text-bc-white/60 text-base md:text-xl max-w-xl mx-auto leading-relaxed mb-12 transition-all duration-700 delay-200"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
          }}
        >
          Let&apos;s turn the brief into something people can experience, talk about and remember.
        </p>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 transition-all duration-700 delay-300"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-9 py-4 bg-bc-lime text-bc-black font-inter font-bold text-xs tracking-widest uppercase hover:bg-bc-white transition-all duration-300 shadow-xl"
            data-cursor="explore"
          >
            <span>START A PROJECT</span>
            <span>→</span>
          </Link>
          <a
            href="mailto:hello@buzzcrafterss.com"
            className="font-inter text-sm font-medium tracking-widest uppercase text-bc-white/60 hover:text-bc-lime transition-colors duration-300 px-4 py-2"
          >
            hello@buzzcrafterss.com
          </a>
        </div>

        {/* Large down arrow */}
        <div
          className="mt-16 flex justify-center transition-all duration-700 delay-400"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
          }}
          aria-hidden="true"
        >
          <div
            className="font-satoshi font-black text-bc-lime/20 select-none text-6xl sm:text-7xl md:text-8xl animate-bounce"
          >
            ↓
          </div>
        </div>
      </div>
    </section>
  );
}
