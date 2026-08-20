"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, CheckCircle2, Sparkles } from "lucide-react";

const campaignOptions = [
  "Brand Experience & BTL",
  "Campus Marketing & CAPs",
  "Creator & Influencer Strategy",
  "Corporate & Experiential Events",
  "Digital Experiences & Microsites",
  "Full Integrated Campaign",
];

const budgetRanges = [
  "Under ₹5 Lakhs",
  "₹5L - ₹15 Lakhs",
  "₹15L - ₹50 Lakhs",
  "₹50L+ Enterprise",
];

export default function ContactPage() {
  const [selectedPills, setSelectedPills] = useState<string[]>(["Brand Experience & BTL"]);
  const [selectedBudget, setSelectedBudget] = useState<string>("₹15L - ₹50 Lakhs");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePill = (opt: string) => {
    setSelectedPills((prev) =>
      prev.includes(opt) ? prev.filter((p) => p !== opt) : [...prev, opt]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <main className="min-h-screen bg-[#fbfbfa] text-[#121113] pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-28 w-full">
      <div className="site-container">
        {/* Header */}
        <div className="mb-14 sm:mb-20 pb-8 sm:pb-12 border-b border-black/8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#ff3366]" />
            <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#ff3366]">
              PROJECT BRIEF INITIATION
            </span>
          </div>

          <h1 className="font-satoshi font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#121113] mb-6">
            Start a Project.
          </h1>

          <p className="font-inter text-neutral-600 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
            Tell us about your brand brief, target demographic, and campaign goals. Let&apos;s build something impossible to ignore.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start w-full">
          {/* Form */}
          <div className="lg:col-span-8 w-full">
            {submitted ? (
              <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#ff3366]/40 text-center flex flex-col items-center gap-4 shadow-xl">
                <div className="w-16 h-16 rounded-full bg-[#ff3366] text-white flex items-center justify-center mb-2 shadow-[0_0_25px_rgba(255,51,102,0.4)]">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-satoshi font-bold text-3xl text-[#121113]">
                  Brief Received!
                </h3>
                <p className="font-inter text-neutral-600 text-base max-w-md">
                  Thank you. Our strategy & client leadership team will review your brief and get back to you within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-3 rounded-xl bg-[#121113] text-white font-inter text-xs font-bold uppercase tracking-wider hover:bg-[#ff3366] transition-all"
                >
                  Submit Another Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-neutral-600 font-semibold block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-5 py-4 rounded-xl bg-white border border-black/10 text-[#121113] text-sm focus:outline-none focus:border-[#ff3366] transition-colors shadow-2xs"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-neutral-600 font-semibold block">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@brand.com"
                      className="w-full px-5 py-4 rounded-xl bg-white border border-black/10 text-[#121113] text-sm focus:outline-none focus:border-[#ff3366] transition-colors shadow-2xs"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-neutral-600 font-semibold block">
                      Brand / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alpha Tech"
                      className="w-full px-5 py-4 rounded-xl bg-white border border-black/10 text-[#121113] text-sm focus:outline-none focus:border-[#ff3366] transition-colors shadow-2xs"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-neutral-600 font-semibold block">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-5 py-4 rounded-xl bg-white border border-black/10 text-[#121113] text-sm focus:outline-none focus:border-[#ff3366] transition-colors shadow-2xs"
                    />
                  </div>
                </div>

                {/* Campaign Category Multi-Select Pills */}
                <div className="space-y-3">
                  <label className="font-mono text-xs uppercase tracking-wider text-neutral-600 font-semibold block">
                    What disciplines are you looking to activate?
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {campaignOptions.map((opt) => {
                      const isSelected = selectedPills.includes(opt);
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => togglePill(opt)}
                          className={`font-inter text-xs px-4.5 py-2.5 rounded-full border transition-all ${
                            isSelected
                              ? "bg-[#ff3366] text-white border-[#ff3366] font-semibold shadow-[0_4px_12px_rgba(255,51,102,0.25)]"
                              : "bg-white text-neutral-700 border-black/8 hover:border-[#ff3366]/30"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Range */}
                <div className="space-y-3">
                  <label className="font-mono text-xs uppercase tracking-wider text-neutral-600 font-semibold block">
                    Estimated Campaign Budget
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {budgetRanges.map((range) => {
                      const isSelected = selectedBudget === range;
                      return (
                        <button
                          type="button"
                          key={range}
                          onClick={() => setSelectedBudget(range)}
                          className={`py-3.5 px-3 rounded-xl border font-inter text-xs text-center transition-all ${
                            isSelected
                              ? "bg-[#121113] text-white border-[#121113] font-bold"
                              : "bg-white text-neutral-600 border-black/8 hover:border-black/20"
                          }`}
                        >
                          {range}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-neutral-600 font-semibold block">
                    Brief Outline / Key Objectives *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Objectives, target cities/colleges, estimated timeline, key deliverables..."
                    className="w-full px-5 py-4 rounded-xl bg-white border border-black/10 text-[#121113] text-sm focus:outline-none focus:border-[#ff3366] transition-colors resize-none shadow-2xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-[#ff3366] text-white font-inter font-bold text-xs tracking-widest uppercase hover:bg-[#121113] transition-all duration-300 shadow-[0_10px_25px_rgba(255,51,102,0.25)] disabled:opacity-50"
                  data-cursor="explore"
                >
                  <span>{loading ? "TRANSMITTING BRIEF..." : "TRANSMIT BRIEF"}</span>
                  <ArrowUpRight size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Right Direct Contact Info */}
          <div className="lg:col-span-4 space-y-6 bg-white border border-black/8 p-6 sm:p-8 md:p-10 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] w-full">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#ff3366] font-bold block mb-2">
                DIRECT PIPELINE
              </span>
              <h2 className="font-satoshi font-bold text-xl sm:text-2xl md:text-3xl text-[#121113]">
                Speak directly with strategy.
              </h2>
            </div>

            <div className="space-y-5 pt-4 border-t border-black/8">
              <div className="flex items-start gap-3.5">
                <Mail className="text-[#ff3366] mt-1 shrink-0" size={20} />
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 block">
                    Inquiries
                  </span>
                  <a
                    href="mailto:hello@buzzcrafterss.com"
                    className="font-inter text-sm sm:text-base text-[#121113] hover:text-[#ff3366] transition-colors font-medium"
                  >
                    hello@buzzcrafterss.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin className="text-[#ff3366] mt-1 shrink-0" size={20} />
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 block">
                    Operational Hubs
                  </span>
                  <span className="font-inter text-xs sm:text-sm text-neutral-600 leading-relaxed block">
                    Mumbai · Delhi NCR · Bengaluru · 50+ College Hubs Across India
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#fff1f4] border border-[#ff3366]/20 mt-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#ff3366] uppercase mb-1.5 font-bold">
                  <Sparkles size={14} />
                  <span>SLA GUARANTEE</span>
                </div>
                <p className="font-inter text-xs text-neutral-700 leading-relaxed">
                  Every submitted brief is reviewed by an Agency Partner within 24 business hours with initial feasibility and strategy notes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
