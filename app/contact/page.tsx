import type { Metadata } from "next";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Start a Campaign | Buzzcrafterss",
  description:
    "Brief Buzzcrafterss on your upcoming brand experience, campus activation, or creator campaign.",
};

const campaignOptions = [
  "Brand Experience & BTL",
  "Campus Marketing & CAPs",
  "Creator & Influencer Strategy",
  "Corporate & Experiential Events",
  "Digital Experiences & Microsites",
  "Full Integrated Campaign",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0] pt-36 pb-28 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-20 pb-12 border-b border-[#222]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-px bg-[#c8f135]" />
            <span className="font-inter text-xs font-semibold tracking-[0.25em] uppercase text-[#c8f135]">
              Project Kickoff
            </span>
          </div>

          <h1 className="font-satoshi font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6">
            Start a Project.
          </h1>

          <p className="font-inter text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Tell us about your brand brief, target demographic, and campaign timeline. Let&apos;s build something impossible to ignore.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Form */}
          <form className="lg:col-span-8 space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-inter text-xs uppercase tracking-widest text-neutral-400 font-semibold block">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-5 py-4 rounded-xl bg-[#111] border border-[#262626] text-white text-sm focus:outline-none focus:border-[#c8f135] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="font-inter text-xs uppercase tracking-widest text-neutral-400 font-semibold block">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="rahul@brand.com"
                  className="w-full px-5 py-4 rounded-xl bg-[#111] border border-[#262626] text-white text-sm focus:outline-none focus:border-[#c8f135] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="font-inter text-xs uppercase tracking-widest text-neutral-400 font-semibold block">
                  Company / Brand Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alpha Tech"
                  className="w-full px-5 py-4 rounded-xl bg-[#111] border border-[#262626] text-white text-sm focus:outline-none focus:border-[#c8f135] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="font-inter text-xs uppercase tracking-widest text-neutral-400 font-semibold block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-5 py-4 rounded-xl bg-[#111] border border-[#262626] text-white text-sm focus:outline-none focus:border-[#c8f135] transition-colors"
                />
              </div>
            </div>

            {/* Campaign Category Pills */}
            <div className="space-y-3">
              <label className="font-inter text-xs uppercase tracking-widest text-neutral-400 font-semibold block">
                What are you looking to activate?
              </label>
              <div className="flex flex-wrap gap-2.5">
                {campaignOptions.map((opt) => (
                  <label
                    key={opt}
                    className="cursor-pointer"
                  >
                    <input type="checkbox" className="sr-only peer" />
                    <span className="font-inter text-xs px-4 py-2.5 rounded-full border border-[#262626] bg-[#111] text-neutral-300 peer-checked:bg-[#c8f135] peer-checked:text-black peer-checked:border-[#c8f135] hover:border-[#444] transition-all block">
                      {opt}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="font-inter text-xs uppercase tracking-widest text-neutral-400 font-semibold block">
                Tell us about the campaign *
              </label>
              <textarea
                required
                rows={5}
                placeholder="Objectives, target cities/colleges, estimated timeline, budget range..."
                className="w-full px-5 py-4 rounded-xl bg-[#111] border border-[#262626] text-white text-sm focus:outline-none focus:border-[#c8f135] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-[#c8f135] text-black font-inter font-bold text-xs tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-xl"
              data-cursor="explore"
            >
              <span>SEND BRIEF</span>
              <ArrowUpRight size={16} />
            </button>
          </form>

          {/* Right Direct Contact Info */}
          <div className="lg:col-span-4 space-y-8 bg-[#111] border border-[#222] p-8 sm:p-10 rounded-2xl">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#c8f135] font-semibold block mb-2">
                DIRECT CHANNELS
              </span>
              <h2 className="font-satoshi font-bold text-2xl text-white">
                Talk directly with our team.
              </h2>
            </div>

            <div className="space-y-6 pt-4 border-t border-[#222]">
              <div className="flex items-start gap-4">
                <Mail className="text-[#c8f135] mt-1 shrink-0" size={18} />
                <div>
                  <span className="font-inter text-xs uppercase tracking-wider text-neutral-500 block">
                    Email
                  </span>
                  <a
                    href="mailto:hello@buzzcrafterss.com"
                    className="font-inter text-sm text-white hover:text-[#c8f135] transition-colors"
                  >
                    hello@buzzcrafterss.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-[#c8f135] mt-1 shrink-0" size={18} />
                <div>
                  <span className="font-inter text-xs uppercase tracking-wider text-neutral-500 block">
                    Presence
                  </span>
                  <span className="font-inter text-sm text-neutral-300">
                    Mumbai · Delhi NCR · Bengaluru · Nationwide Campus Network
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
