import type { Metadata } from "next";
import { services } from "@/lib/data/services";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Six Ways We Operate | Buzzcrafterss",
  description:
    "Brand experiences, creator influence, campus marketing, events, digital experiences and integrated campaigns — six ways Buzzcrafterss operates.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0] pt-36 pb-28 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-20 pb-12 border-b border-[#222]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-px bg-[#c8f135]" />
            <span className="font-inter text-xs font-semibold tracking-[0.25em] uppercase text-[#c8f135]">
              Capabilities
            </span>
          </div>

          <h1 className="font-satoshi font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6">
            Six Ways We Operate.
          </h1>

          <p className="font-inter text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Each capability operates as a standalone discipline or coordinates as an integrated campaign machinery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 sm:p-10 rounded-2xl border border-[#222] bg-[#111] flex flex-col justify-between hover:border-[#444] transition-all duration-300 group min-h-[420px]"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-sm font-bold text-[#c8f135]">
                    {service.id}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#333] flex items-center justify-center text-neutral-400 group-hover:border-[#c8f135] group-hover:text-[#c8f135] transition-colors">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                <h2 className="font-satoshi font-bold text-2xl sm:text-3xl text-white tracking-tight leading-snug mb-4 group-hover:text-[#c8f135] transition-colors">
                  {service.title}
                </h2>

                <p className="font-inter text-sm text-neutral-400 leading-relaxed mb-6">
                  {service.tagline}
                </p>
              </div>

              {/* Deliverable pills */}
              <div className="pt-6 border-t border-[#222] flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <span
                    key={item}
                    className="font-inter text-xs px-3 py-1 rounded-full border border-[#262626] bg-[#0a0a0a] text-neutral-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 pt-16 border-t border-[#222] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-satoshi font-black text-white text-2xl sm:text-3xl">
            Need a tailored campaign strategy?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c8f135] text-black font-inter font-bold text-xs tracking-widest uppercase hover:bg-white transition-all duration-300"
            data-cursor="explore"
          >
            <span>Start a Campaign</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
