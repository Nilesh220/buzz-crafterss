"use client";

import { useRef, useEffect, useState } from "react";

export default function AboutSection() {
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
      id="about"
      ref={sectionRef}
      className="bg-bc-white py-28 md:py-44 px-6 sm:px-10 md:px-16 lg:px-20 border-b border-bc-black/10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left — Headline */}
          <div
            className="lg:col-span-6 transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-5 h-px bg-bc-black" />
              <span className="font-inter text-xs font-semibold tracking-[0.25em] uppercase text-bc-black/50">
                About Buzzcrafterss
              </span>
            </div>

            <h2 className="font-satoshi font-black text-bc-black tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08]">
              <span className="block">WE&apos;RE NOT</span>
              <span className="block text-bc-black/60">HERE TO MAKE</span>
              <span className="block text-bc-black">SAFE MARKETING.</span>
            </h2>
          </div>

          {/* Right — Body */}
          <div
            className="lg:col-span-6 flex flex-col justify-center gap-8 lg:pt-2 transition-all duration-700 delay-150"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <p className="font-inter text-bc-black/80 text-lg md:text-xl leading-relaxed">
              Buzzcrafterss was built for brands that want to move people — not simply reach them.
            </p>
            <p className="font-inter text-bc-black/70 text-base md:text-lg leading-relaxed">
              We bring together strategy, creativity, experiences, creators, communities and technology to build campaigns that people can see, participate in, share and remember.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              {[
                "Small enough to move fast.",
                "Ambitious enough to think big.",
                "Built to execute.",
              ].map((line) => (
                <div key={line} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-bc-lime shrink-0" />
                  <span className="font-satoshi font-bold text-bc-black text-lg md:text-xl">
                    {line}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-bc-black/10 mt-4">
              {[
                { value: "6", label: "Service Pillars" },
                { value: "50+", label: "Colleges Activated" },
                { value: "100%", label: "Campaign-First" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-satoshi font-black text-2xl sm:text-3xl md:text-4xl text-bc-black mb-1">
                    {stat.value}
                  </div>
                  <div className="font-inter text-xs text-bc-black/50 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
