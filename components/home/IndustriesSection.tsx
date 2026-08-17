"use client";

const industries = [
  "Consumer Tech",
  "FMCG & Beverages",
  "Fintech & Crypto",
  "Fashion & Apparel",
  "Lifestyle & D2C",
  "Food & Quick Service",
  "Gaming & Esports",
  "EdTech & Youth",
  "Banking & BFSI",
  "Automotive & Mobility",
  "Entertainment & Media",
  "High-Growth Startups",
];

export default function IndustriesSection() {
  return (
    <section className="bg-[#f5f5f0] text-[#0a0a0a] py-28 md:py-44 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-black/10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Label column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-px bg-black" />
              <span className="font-inter text-xs font-semibold tracking-[0.25em] uppercase text-black/50">
                Sectors & Domain
              </span>
            </div>
            <h2 className="font-satoshi font-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-black">
              We work across sectors.
            </h2>
            <p className="font-inter text-black/70 text-base md:text-lg mt-4 leading-relaxed max-w-sm">
              From fast-moving consumer tech to collegiate youth ecosystems and enterprise activations.
            </p>
          </div>

          {/* Industries list */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {industries.map((industry, i) => (
              <div
                key={industry}
                className="p-5 rounded-xl border border-black/10 bg-white/70 hover:bg-[#c8f135] hover:border-black transition-all duration-300 group cursor-default"
              >
                <span className="font-mono text-xs text-black/40 block mb-2 font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-satoshi font-bold text-base sm:text-lg text-black block tracking-tight">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
