"use client";

import { useRef, useEffect, useState } from "react";

const statements = [
  {
    title: "Strategy + Execution",
    body: "We don't stop at ideas.",
  },
  {
    title: "Physical + Digital",
    body: "Offline experiences become digital journeys.",
  },
  {
    title: "Creators + Communities",
    body: "We build conversations, not just impressions.",
  },
  {
    title: "Young + Fast",
    body: "Built for the pace of modern brands.",
  },
  {
    title: "Measurable",
    body: "Every campaign has an outcome.",
  },
];

export default function WhySection() {
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
      className="bg-bc-black py-28 md:py-44 px-6 sm:px-10 md:px-16 lg:px-20 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(200,241,53,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full">
        {/* Headline */}
        <div
          className="mb-16 md:mb-24 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-px bg-bc-lime" />
            <span className="font-inter text-xs font-semibold tracking-[0.25em] uppercase text-bc-lime">
              Why Buzzcrafterss
            </span>
          </div>

          <h2 className="font-satoshi font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight">
            <span className="block text-white">BUILT</span>
            <span className="block text-bc-lime">DIFFERENT.</span>
          </h2>
        </div>

        {/* 5 Statements List */}
        <div className="flex flex-col divide-y divide-bc-border border-y border-bc-border max-w-4xl">
          {statements.map((s, i) => (
            <div
              key={s.title}
              className="py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-12 transition-all duration-500 hover:pl-2 min-h-[80px]"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <h3 className="font-satoshi font-bold text-bc-white text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight shrink-0 md:w-72 leading-snug">
                {s.title}
              </h3>

              <p className="font-inter text-bc-gray text-sm md:text-base leading-relaxed flex-1">
                {s.body}
              </p>

              <div className="hidden md:flex shrink-0 w-8 h-8 rounded-full border border-bc-border items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-bc-lime" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
