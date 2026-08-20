import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Not Here to Make Safe Marketing | Buzzcrafterss",
  description:
    "Buzzcrafterss was built for brands that want to move people — not simply reach them. Strategy, creativity, experiences, creators, communities and technology.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f0] text-[#0a0a0a] pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-28 w-full">
      <div className="site-container">
        {/* Header */}
        <div className="mb-14 sm:mb-20 pb-8 sm:pb-12 border-b border-black/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-black" />
            <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-black/60">
              AGENCY STORY
            </span>
          </div>

          <h1 className="font-satoshi font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-black mb-6">
            Not Here to Play Safe.
          </h1>

          <p className="font-inter text-black/75 text-base sm:text-lg md:text-2xl max-w-3xl leading-relaxed">
            Buzzcrafterss was built for modern brands that want to move people — not simply broadcast at them.
          </p>
        </div>

        {/* Narrative Split */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-start mb-20 w-full">
          <div className="lg:col-span-6 space-y-5 text-black/80 font-inter text-base sm:text-lg leading-relaxed">
            <p>
              We believe traditional advertising has lost its cultural potency. Young audiences swipe past banners, skip commercials, and tune out rehearsed endorsements.
            </p>
            <p>
              What actually captures attention today is cultural immersion — physical installations you can step inside, campus leaders who introduce products authentically, and digital mechanics that turn consumers into active co-creators.
            </p>
            <p>
              We bring together strategy, spatial design, creator partnerships, and interactive software to craft campaigns that people talk about and remember.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4 w-full">
            {[
              {
                title: "Small enough to move fast.",
                body: "No endless review cycles or bureaucratic layers. We launch at internet speed.",
              },
              {
                title: "Ambitious enough to command scale.",
                body: "We architect big cultural ideas with nationwide execution capability across 50+ campuses.",
              },
              {
                title: "Built to execute 100% end-to-end.",
                body: "Strategy without physical fabrication and digital tracking is pointless. We handle the entire stack.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl border border-black/10 bg-white shadow-sm"
              >
                <h3 className="font-satoshi font-bold text-lg sm:text-xl text-black mb-1.5 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="font-inter text-xs sm:text-sm text-black/60 leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-10 rounded-2xl bg-[#0a0a0a] text-white w-full">
          {[
            { value: "6", label: "Core Service Pillars" },
            { value: "50+", label: "Campus Networks" },
            { value: "15+", label: "Cities Activated" },
            { value: "100%", label: "Turnkey Execution" },
          ].map((stat) => (
            <div key={stat.label} className="border-l-2 border-[#333] pl-4 sm:pl-6">
              <div className="font-satoshi font-black text-2xl sm:text-4xl text-[#c8f135] mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-black/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-satoshi font-black text-black text-2xl sm:text-3xl">
            Want to work with us?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4.5 bg-[#0a0a0a] text-white font-inter font-bold text-xs tracking-widest uppercase hover:bg-[#c8f135] hover:text-black transition-all duration-300 rounded-xl"
            data-cursor="explore"
          >
            <span>Start a Project</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
