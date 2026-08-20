"use client";

const industries = [
  { name: "Consumer Tech", tag: "Hardware & Apps" },
  { name: "FMCG & Beverages", tag: "Sampling & Retail" },
  { name: "Fintech & Web3", tag: "Collegiate Growth" },
  { name: "Fashion & Apparel", tag: "Runway & Pop-ups" },
  { name: "Lifestyle & D2C", tag: "Direct Experiential" },
  { name: "Food & QSR", tag: "Festivals & Stalls" },
  { name: "Gaming & Esports", tag: "Tournaments & Pods" },
  { name: "EdTech & Youth", tag: "Campus Leadership" },
  { name: "Banking & BFSI", tag: "Workplace Activations" },
  { name: "Automotive & EV", tag: "Test Drives & Spatial" },
  { name: "Entertainment & OTT", tag: "Premieres & Fan Zones" },
  { name: "Hypergrowth Startups", tag: "Zero-to-One Scale" },
];

export default function IndustriesSection() {
  return (
    <section className="bg-[#f5f5f0] text-[#0a0a0a] py-20 sm:py-28 md:py-36 border-b border-black/10 w-full">
      <div className="site-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-start w-full">
          {/* Label column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-black" />
              <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-black/60">
                10 / SECTORS & DOMAIN
              </span>
            </div>
            <h2 className="font-satoshi font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-black">
              We work across industries.
            </h2>
            <p className="font-inter text-black/70 text-sm sm:text-base md:text-lg mt-4 leading-relaxed max-w-sm">
              From fast-moving consumer apps and retail brands to youth collegiate ecosystems and corporate flagship experiences.
            </p>
          </div>

          {/* Industries list */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3.5 w-full">
            {industries.map((industry, i) => (
              <div
                key={industry.name}
                className="p-5 sm:p-6 rounded-2xl border border-black/10 bg-white/80 hover:bg-[#c8f135] hover:border-black hover:shadow-md transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] text-black/40 font-semibold group-hover:text-black/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] text-black/40 uppercase group-hover:text-black/70">
                    {industry.tag}
                  </span>
                </div>
                <span className="font-satoshi font-bold text-base sm:text-lg text-black block tracking-tight">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
