"use client";

const clients = [
  { name: "Client Alpha", initials: "CA" },
  { name: "Client Beta", initials: "CB" },
  { name: "Client Gamma", initials: "CG" },
  { name: "Client Delta", initials: "CD" },
  { name: "Client Epsilon", initials: "CE" },
  { name: "Client Zeta", initials: "CZ" },
  { name: "Client Eta", initials: "CH" },
  { name: "Client Theta", initials: "CT" },
];

export default function ClientsSection() {
  return (
    <section className="bg-[#0a0a0a] text-[#f5f5f0] py-28 md:py-44 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-[#222]">
      <div className="max-w-7xl mx-auto w-full">
        {/* Headline */}
        <div className="mb-16 md:mb-20 pb-8 border-b border-[#222]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px bg-[#c8f135]" />
            <span className="font-inter text-xs font-semibold tracking-[0.25em] uppercase text-[#c8f135]">
              Partnerships
            </span>
          </div>

          <h2 className="font-satoshi font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
            Trusted To Create With.
          </h2>
        </div>

        {/* Client logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="p-8 rounded-xl border border-[#222] bg-[#111] flex flex-col items-center justify-center text-center gap-2 hover:border-[#444] transition-all duration-300 group"
            >
              <div className="font-satoshi font-black text-3xl text-neutral-400 group-hover:text-[#c8f135] transition-colors">
                {client.initials}
              </div>
              <div className="font-inter text-xs tracking-wider uppercase text-neutral-500 font-medium">
                {client.name}
              </div>
            </div>
          ))}
        </div>

        <p className="font-inter text-xs text-neutral-500 mt-8 tracking-wide">
          * Client brands shown are placeholders — replace with authorized brand assets.
        </p>
      </div>
    </section>
  );
}
