"use client";

import { useState } from "react";
import { processSteps } from "@/lib/data/process";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-[#0a0a0a] text-[#f5f5f0] py-20 sm:py-28 md:py-36 border-b border-[#222] w-full">
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-8 border-b border-[#222]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-[#c8f135]" />
              <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#c8f135]">
                06 / HOW WE WORK
              </span>
            </div>
            <h2 className="font-satoshi font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight">
              <span className="text-white">FROM IDEA</span>{" "}
              <span className="text-[#c8f135]">TO IMPACT.</span>
            </h2>
          </div>
          <p className="font-inter text-neutral-400 text-sm sm:text-base max-w-sm leading-relaxed">
            Our 3-stage execution pipeline ensures zero latency between creative strategy and on-ground deployment.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {processSteps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
                className={`relative p-6 sm:p-8 md:p-10 rounded-2xl border transition-all duration-400 flex flex-col justify-between cursor-pointer w-full ${
                  isActive
                    ? "bg-[#141414] border-[#c8f135]/50 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                    : "bg-[#0d0d0d] border-[#222] hover:border-[#333]"
                }`}
              >
                <div>
                  {/* Step Top Bar */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span
                      className={`font-mono text-xs font-bold tracking-widest uppercase transition-colors ${
                        isActive ? "text-[#c8f135]" : "text-neutral-500"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        isActive ? "bg-[#c8f135] scale-125 shadow-[0_0_8px_#c8f135]" : "bg-neutral-600"
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-satoshi font-bold mb-4 tracking-tight text-xl sm:text-2xl md:text-3xl transition-colors ${
                      isActive ? "text-white" : "text-neutral-300"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Keywords list */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {step.items.map((item) => (
                      <span
                        key={item}
                        className="font-inter text-[11px] px-3 py-1 rounded-md border border-[#262626] bg-[#0a0a0a] text-neutral-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="font-inter text-xs sm:text-sm text-neutral-300 leading-relaxed pt-4 border-t border-[#222]">
                  {step.description}
                </p>

                {/* Bottom Active Glow Accent */}
                {isActive && (
                  <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-[#c8f135] rounded-full" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
