"use client";

import { useRef, useEffect, useState } from "react";
import { processSteps } from "@/lib/data/process";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
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
      className="bg-bc-black py-28 md:py-44 px-6 sm:px-10 md:px-16 lg:px-20 text-bc-white"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
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
              How We Work
            </span>
          </div>

          <h2 className="font-satoshi font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight">
            <span className="block text-white">FROM IDEA</span>
            <span className="block text-bc-lime">TO IMPACT.</span>
          </h2>
        </div>

        {/* Steps Grid - equal-height columns via items-stretch */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-bc-border divide-y md:divide-y-0 md:divide-x lg:divide-x divide-bc-border items-stretch">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="relative p-8 md:p-12 transition-all duration-500 flex flex-col justify-between"
              style={{
                minHeight: "340px",
                backgroundColor:
                  activeStep === index
                    ? "rgba(200,241,53,0.04)"
                    : "transparent",
              }}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div>
                {/* Number */}
                <div className="flex items-center gap-4 mb-8">
                  <span
                    className="font-inter text-xs font-bold tracking-widest uppercase transition-colors duration-300"
                    style={{
                      color:
                        activeStep === index
                          ? "var(--bc-lime)"
                          : "var(--bc-gray)",
                    }}
                  >
                    {step.number}
                  </span>
                  <div
                    className="h-px flex-1 transition-all duration-500"
                    style={{
                      background:
                        activeStep === index
                          ? "var(--bc-lime)"
                          : "var(--bc-border)",
                    }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-satoshi font-bold mb-4 tracking-tight text-2xl sm:text-3xl transition-colors duration-300"
                  style={{
                    color:
                      activeStep === index
                        ? "var(--bc-lime)"
                        : "var(--bc-white)",
                  }}
                >
                  {step.title}
                </h3>

                {/* Keywords list */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {step.items.map((item) => (
                    <span
                      key={item}
                      className="font-inter text-xs px-2.5 py-1 rounded border border-bc-border text-bc-gray"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="font-inter text-sm text-bc-white/70 leading-relaxed pt-4 border-t border-bc-border/50">
                {step.description}
              </p>

              {/* Active bottom border */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500"
                style={{
                  background:
                    activeStep === index ? "var(--bc-lime)" : "transparent",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
