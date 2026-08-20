"use client";

import { useEffect, useState, useRef, memo } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, MapPin } from "lucide-react";

// Isolated zero-re-render Live Clock component
const LiveClock = memo(function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(now.toLocaleTimeString("en-US", options) + " IST");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span>{time || "10:30:00 PM IST"}</span>;
});

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Direct RAF hardware accelerated translation - Zero React state re-renders!
    requestAnimationFrame(() => {
      if (glow1Ref.current) {
        glow1Ref.current.style.transform = `translate3d(${x * -30}px, ${y * -30}px, 0)`;
      }
      if (glow2Ref.current) {
        glow2Ref.current.style.transform = `translate3d(${x * 40}px, ${y * 40}px, 0)`;
      }
      if (cardRef.current) {
        cardRef.current.style.transform = `translate3d(${x * 12}px, ${y * 12}px, 0)`;
      }
    });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] lg:min-h-screen bg-[#0a0a0a] text-[#f5f5f0] overflow-hidden border-b border-[#222] flex items-center pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-24 w-full"
    >
      {/* Background Interactive Ambient Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* Dynamic Glow Sphere 1 */}
        <div
          ref={glow1Ref}
          className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full blur-[160px] opacity-25 will-change-transform"
          style={{
            background: "radial-gradient(circle, #c8f135 0%, rgba(200,241,53,0) 70%)",
            transform: "translate3d(0,0,0)",
          }}
        />
        {/* Dynamic Glow Sphere 2 */}
        <div
          ref={glow2Ref}
          className="absolute bottom-10 right-0 w-[700px] h-[700px] rounded-full blur-[180px] opacity-20 will-change-transform"
          style={{
            background: "radial-gradient(circle, #38bdf8 0%, rgba(56,189,248,0) 70%)",
            transform: "translate3d(0,0,0)",
          }}
        />

        {/* Blueprint Grid */}
        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 site-container flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-18 items-center w-full">
          
          {/* Left Column: Bold Kinetic Typography & Action */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
            
            {/* Status Pill Badge */}
            <div
              className="transition-all duration-500"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(12px)",
              }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#2a2a2a] bg-[#141414]/90 backdrop-blur-md shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c8f135] animate-pulse shrink-0 shadow-[0_0_10px_#c8f135]" />
                <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-neutral-300">
                  Brand Experiences · Creator Influence · Digital Impact
                </span>
              </div>
            </div>

            {/* Kinetic Title */}
            <div
              className="transition-all duration-500 delay-100"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <h1 className="font-satoshi font-black tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[5.5rem] 2xl:text-[6.25rem] leading-[0.98] text-white">
                <span>WE MAKE</span>{" "}
                <span>BRANDS</span>
                <span className="block text-[#c8f135] drop-shadow-[0_0_30px_rgba(200,241,53,0.35)]">
                  IMPOSSIBLE
                </span>
                <span className="block text-white">TO IGNORE.</span>
              </h1>
            </div>

            {/* Narrative Tagline */}
            <div
              className="transition-all duration-500 delay-150 max-w-2xl"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <p className="font-inter text-neutral-300 text-base sm:text-lg md:text-xl leading-relaxed">
                Buzzcrafterss is an integrated experience agency creating high-voltage campaigns across campuses, communities, workplaces, and digital ecosystems.
              </p>
            </div>

            {/* Action Buttons */}
            <div
              className="flex flex-wrap items-center gap-4 pt-2 transition-all duration-500 delay-200"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4.5 rounded-xl bg-[#c8f135] text-[#0a0a0a] font-inter font-bold text-xs tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(200,241,53,0.35)] group"
                data-cursor="explore"
              >
                <span>START A CAMPAIGN</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href="#work"
                className="inline-flex items-center gap-2 px-7 py-4.5 rounded-xl border border-[#2a2a2a] bg-[#141414]/60 font-inter text-xs font-semibold tracking-widest uppercase text-neutral-300 hover:text-[#c8f135] hover:border-[#c8f135]/50 transition-all duration-300"
                data-cursor="explore"
              >
                SELECTED WORK ↓
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div
              className="pt-8 border-t border-[#222] grid grid-cols-3 gap-6 transition-all duration-500 delay-250 max-w-xl"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <div>
                <div className="font-satoshi font-black text-2xl sm:text-4xl text-white">50+</div>
                <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider mt-1">Campuses</div>
              </div>
              <div>
                <div className="font-satoshi font-black text-2xl sm:text-4xl text-[#c8f135]">15+</div>
                <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider mt-1">Top Cities</div>
              </div>
              <div>
                <div className="font-satoshi font-black text-2xl sm:text-4xl text-white">100%</div>
                <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider mt-1">Turnkey</div>
              </div>
            </div>

          </div>

          {/* Right Column: Expansive Agency Live Engine */}
          <div
            ref={cardRef}
            className="lg:col-span-5 transition-all duration-500 delay-200 w-full will-change-transform"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translate3d(0,0,0)" : "translateY(20px)",
            }}
          >
            <div className="relative rounded-2xl border border-[#2a2a2a] bg-[#121212]/90 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden group hover:border-[#444] transition-all w-full">
              
              {/* Top Bar with Live Operations Indicator */}
              <div className="flex items-center justify-between pb-6 border-b border-[#222]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c8f135] animate-ping shrink-0" />
                  <span className="font-mono text-xs text-[#c8f135] uppercase tracking-wider font-semibold">
                    AGENCY LIVE ENGINE
                  </span>
                </div>
                <div className="font-mono text-xs text-neutral-400 bg-[#0a0a0a] px-3 py-1 rounded-md border border-[#222]">
                  <LiveClock />
                </div>
              </div>

              {/* Status Header */}
              <div className="py-6 border-b border-[#222]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">
                  CURRENT AVAILABILITY
                </span>
                <h3 className="font-satoshi font-bold text-2xl sm:text-3xl text-white flex items-center gap-2">
                  <span>Accepting Q3 / Q4 Briefs</span>
                  <Sparkles size={20} className="text-[#c8f135]" />
                </h3>
                <p className="font-inter text-xs sm:text-sm text-neutral-400 mt-2.5 leading-relaxed">
                  Direct pipeline open for BTL activations, collegiate networks, creator scaling, and experiential installations.
                </p>
              </div>

              {/* Active Disciplines Interactive List */}
              <div className="py-6 space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest">
                    ACTIVE DEPLOYMENT CHANNELS
                  </span>
                  <span className="font-mono text-[10px] text-[#c8f135]">LIVE STATUS</span>
                </div>

                {[
                  { name: "Collegiate & Campus Activations", status: "Active", count: "50+ Hubs" },
                  { name: "Creator & Influencer Distribution", status: "Active", count: "Tier 1-3" },
                  { name: "Spatial & Experiential Fabrications", status: "Turnkey", count: "Nationwide" },
                  { name: "Interactive Digital & Web Experiences", status: "Active", count: "Custom Tech" },
                ].map((cap) => (
                  <div
                    key={cap.name}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#181818]/90 border border-[#242424] hover:border-[#c8f135]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c8f135]" />
                      <span className="font-inter text-xs sm:text-sm font-semibold text-neutral-200">
                        {cap.name}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-neutral-300 px-2.5 py-1 rounded bg-[#0a0a0a] border border-[#2a2a2a]">
                      {cap.count}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Direct CTA */}
              <div className="pt-5 border-t border-[#222] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <MapPin size={14} className="text-[#c8f135]" />
                  <span>HQ Mumbai · Delhi · BLR</span>
                </div>

                <Link
                  href="/contact"
                  className="font-inter text-xs font-bold uppercase tracking-wider text-[#c8f135] hover:text-white transition-colors flex items-center gap-1.5 group/link"
                >
                  <span>Submit Brief</span>
                  <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
