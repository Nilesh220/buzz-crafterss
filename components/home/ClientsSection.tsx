"use client";

import { ShieldCheck } from "lucide-react";

const clientLogos = [
  { name: "Brand Alpha", category: "Fintech Leader" },
  { name: "Brand Beta", category: "D2C Beverage" },
  { name: "Brand Gamma", category: "Enterprise Tech" },
  { name: "Brand Delta", category: "Consumer App" },
  { name: "Brand Epsilon", category: "Lifestyle & Apparel" },
  { name: "Brand Zeta", category: "Gaming & Esports" },
  { name: "Brand Eta", category: "EV & Mobility" },
  { name: "Brand Theta", category: "EdTech Unicorn" },
];

export default function ClientsSection() {
  return (
    <section className="bg-[#f7f6f2] text-[#121113] py-20 sm:py-28 md:py-36 border-b border-black/8 w-full">
      <div className="site-container">
        {/* Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-8 border-b border-black/8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-[#ff3366]" />
              <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#ff3366]">
                11 / PARTNERSHIPS
              </span>
            </div>

            <h2 className="font-satoshi font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#121113]">
              Trusted To Create With.
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
            <ShieldCheck size={16} className="text-[#ff3366]" />
            <span>CONFIDENTIAL & HIGH-GROWTH BRANDS</span>
          </div>
        </div>

        {/* Client cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full">
          {clientLogos.map((client, i) => (
            <div
              key={client.name}
              className="p-6 sm:p-8 md:p-10 rounded-2xl border border-black/8 bg-white flex flex-col items-center justify-center text-center gap-2 hover:border-[#ff3366]/40 hover:bg-[#fff9fb] hover:shadow-sm transition-all duration-300 group shadow-2xs"
            >
              <div className="font-satoshi font-black text-2xl sm:text-3xl md:text-4xl text-neutral-700 group-hover:text-[#ff3366] transition-colors">
                {client.name.split(" ")[1]}
              </div>
              <div className="font-mono text-[11px] tracking-wider uppercase text-neutral-400 font-medium mt-1">
                {client.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
