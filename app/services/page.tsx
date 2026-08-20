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
    <main className="min-h-screen bg-[#fbfbfa] text-[#121113] pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-28 w-full">
      <div className="site-container">
        {/* Header */}
        <div className="mb-14 sm:mb-20 pb-8 sm:pb-12 border-b border-black/8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#ff3366]" />
            <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#ff3366]">
              CORE CAPABILITIES
            </span>
          </div>

          <h1 className="font-satoshi font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#121113] mb-6">
            Six Ways We Operate.
          </h1>

          <p className="font-inter text-neutral-600 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
            Each capability functions as a dedicated specialist discipline or integrates into an omnichannel brand campaign.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 md:p-10 rounded-2xl border border-black/8 bg-white flex flex-col justify-between hover:border-[#ff3366]/40 hover:shadow-md transition-all duration-300 group min-h-[380px] shadow-2xs w-full"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-[#ff3366]">
                    {service.id}
                  </span>
                  <div className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-neutral-500 group-hover:border-[#ff3366] group-hover:text-[#ff3366] group-hover:bg-[#fff1f4] transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <h2 className="font-satoshi font-bold text-2xl md:text-3xl text-[#121113] tracking-tight leading-snug mb-3 group-hover:text-[#ff3366] transition-colors">
                  {service.title}
                </h2>

                <p className="font-inter text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  {service.tagline}
                </p>
              </div>

              {/* Deliverable pills */}
              <div className="pt-6 border-t border-black/8 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <span
                    key={item}
                    className="font-inter text-xs px-3 py-1.5 rounded-full border border-black/8 bg-[#fbfbfa] text-neutral-700 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-12 border-t border-black/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-satoshi font-black text-[#121113] text-2xl sm:text-3xl">
            Need a tailored campaign strategy?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4.5 bg-[#ff3366] text-white font-inter font-bold text-xs tracking-widest uppercase hover:bg-[#121113] transition-all duration-300 rounded-xl shadow-md"
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
