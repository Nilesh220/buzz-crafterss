"use client";

const words = [
  "EXPERIENCE",
  "INFLUENCE",
  "COMMUNITY",
  "TECHNOLOGY",
  "IMPACT",
];

export default function BrandStatement() {
  return (
    <section className="bg-[#f5f5f0] text-[#0a0a0a] py-28 md:py-44 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10">
      <div className="max-w-7xl mx-auto w-full">
        {/* Label */}
        <div className="flex items-center gap-3 mb-10 md:mb-16">
          <div className="w-5 h-px bg-black" />
          <span className="font-inter text-xs font-semibold tracking-[0.25em] uppercase text-black/50">
            Agency Manifesto
          </span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column — Big Headline */}
          <div className="lg:col-span-7">
            <h2 className="font-satoshi font-black text-black tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              <span className="block">Brands don&apos;t need</span>
              <span className="block text-black/60">more noise.</span>
              <span className="block mt-2">They need attention</span>
              <span className="block text-black">that moves.</span>
            </h2>
          </div>

          {/* Right Column — Narrative & Keywords */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-8">
            <p className="font-inter text-black/75 text-base md:text-lg lg:text-xl leading-relaxed">
              We build ideas that don&apos;t just sit on screens. They happen in campuses, streets, stores, workplaces, events, feeds and interactive digital experiences.
            </p>

            {/* Keyword badges */}
            <div className="flex flex-wrap gap-2.5">
              {words.map((word) => (
                <span
                  key={word}
                  className="font-inter text-xs font-semibold tracking-[0.18em] uppercase px-4 py-2.5 rounded-full border border-black/15 text-black bg-white/60 hover:bg-[#c8f135] hover:border-black transition-all duration-300 shadow-sm"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
