import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Not Here to Make Safe Marketing | Buzzcrafterss",
  description:
    "Buzzcrafterss was built for brands that want to move people — not simply reach them. Strategy, creativity, experiences, creators, communities and technology.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f0] text-[#0a0a0a] pt-36 pb-28 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-20 pb-12 border-b border-black/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-px bg-black" />
            <span className="font-inter text-xs font-semibold tracking-[0.25em] uppercase text-black/50">
              Agency Story
            </span>
          </div>

          <h1 className="font-satoshi font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-black mb-6">
            Not Here to Play Safe.
          </h1>

          <p className="font-inter text-black/70 text-lg md:text-2xl max-w-3xl leading-relaxed">
            Buzzcrafterss was built for brands that want to move people — not simply broadcast at them.
          </p>
        </div>

        {/* Narrative Split */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
          <div className="lg:col-span-6 space-y-6 text-black/80 font-inter text-base md:text-lg leading-relaxed">
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

          <div className="lg:col-span-6 space-y-6">
            {[
              {
                title: "Small enough to move fast.",
                body: "No endless review cycles. We launch at the speed of internet culture.",
              },
              {
                title: "Ambitious enough to think big.",
                body: "We never accept a brief at face value. We always architect the bigger cultural idea.",
              },
              {
                title: "Built to execute end-to-end.",
                body: "Strategy without on-ground fabrication and digital tracking is pointless. We handle the entire stack.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="p-8 rounded-2xl border border-black/10 bg-white shadow-sm"
              >
                <h3 className="font-satoshi font-bold text-xl sm:text-2xl text-black mb-2 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="font-inter text-sm md:text-base text-black/60 leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 sm:p-12 rounded-2xl bg-[#0a0a0a] text-white">
          {[
            { value: "6", label: "Core Service Pillars" },
            { value: "50+", label: "Campus Networks" },
            { value: "15+", label: "Cities Activated" },
            { value: "100%", label: "Campaign Execution" },
          ].map((stat) => (
            <div key={stat.label} className="border-l-2 border-[#333] pl-6">
              <div className="font-satoshi font-black text-3xl sm:text-5xl text-[#c8f135] mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="font-inter text-xs text-neutral-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 pt-16 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-satoshi font-black text-black text-2xl sm:text-3xl">
            Want to work with us?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0a0a0a] text-white font-inter font-bold text-xs tracking-widest uppercase hover:bg-[#c8f135] hover:text-black transition-all duration-300"
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
