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

    // Direct RAF hardware accelerated translation
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
      className="relative min-h-[90vh] lg:min-h-screen bg-[#fbfbfa] text-[#121113] overflow-hidden border-b border-black/8 flex items-center pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-24 w-full"
    >
      {/* Background Interactive Ambient Rose & Champagne Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* Soft Pink Glow Sphere 1 */}
        <div
          ref={glow1Ref}
          className="absolute top-1/4 -left-32 w-[650px] h-[650px] rounded-full blur-[160px] opacity-45 will-change-transform"
          style={{
            background: "radial-gradient(circle, #ffd6e0 0%, #fce7f3 40%, rgba(253,242,248,0) 75%)",
            transform: "translate3d(0,0,0)",
          }}
        />
        {/* Soft Champagne Glow Sphere 2 */}
        <div
          ref={glow2Ref}
          className="absolute bottom-10 right-0 w-[750px] h-[750px] rounded-full blur-[180px] opacity-35 will-change-transform"
          style={{
            background: "radial-gradient(circle, #fde2e4 0%, #fff1f2 40%, rgba(255,255,255,0) 75%)",
            transform: "translate3d(0,0,0)",
          }}
        />

        {/* Blueprint Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
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
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-black/10 bg-white/90 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff3366] animate-pulse shrink-0 shadow-[0_0_10px_rgba(255,51,102,0.6)]" />
                <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-neutral-600">
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
              <h1 className="font-satoshi font-black tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[5.5rem] 2xl:text-[6.25rem] leading-[0.98] text-[#121113]">
                <span>WE MAKE</span>{" "}
                <span>BRANDS</span>
                <span className="block text-[#ff3366] drop-shadow-[0_4px_30px_rgba(255,51,102,0.2)]">
                  IMPOSSIBLE
                </span>
                <span className="block text-[#121113]">TO IGNORE.</span>
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
              <p className="font-inter text-neutral-600 text-base sm:text-lg md:text-xl leading-relaxed">
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
                className="inline-flex items-center gap-3 px-8 py-4.5 rounded-xl bg-[#ff3366] text-white font-inter font-bold text-xs tracking-widest uppercase hover:bg-[#121113] transition-all duration-300 shadow-[0_10px_25px_rgba(255,51,102,0.25)] group"
                data-cursor="explore"
              >
                <span>START A CAMPAIGN</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href="#work"
                className="inline-flex items-center gap-2 px-7 py-4.5 rounded-xl border border-black/10 bg-white/80 font-inter text-xs font-semibold tracking-widest uppercase text-neutral-700 hover:text-[#ff3366] hover:border-[#ff3366]/40 transition-all duration-300 shadow-sm"
                data-cursor="explore"
              >
                SELECTED WORK ↓
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div
              className="pt-8 border-t border-black/10 grid grid-cols-3 gap-6 transition-all duration-500 delay-250 max-w-xl"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <div>
                <div className="font-satoshi font-black text-2xl sm:text-4xl text-[#121113]">50+</div>
                <div className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">Campuses</div>
              </div>
              <div>
                <div className="font-satoshi font-black text-2xl sm:text-4xl text-[#ff3366]">15+</div>
                <div className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">Top Cities</div>
              </div>
              <div>
                <div className="font-satoshi font-black text-2xl sm:text-4xl text-[#121113]">100%</div>
                <div className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">Turnkey</div>
              </div>
            </div>

          </div>

          {/* Right Column: Luxury Frosted Agency Live Engine */}
          <div
            ref={cardRef}
            className="lg:col-span-5 transition-all duration-500 delay-200 w-full will-change-transform"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translate3d(0,0,0)" : "translateY(20px)",
            }}
          >
            <div className="relative rounded-2xl border border-black/10 bg-white/90 backdrop-blur-2xl p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden group hover:border-[#ff3366]/40 transition-all w-full">
              
              {/* Top Bar with Live Operations Indicator */}
              <div className="flex items-center justify-between pb-6 border-b border-black/10">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff3366] animate-ping shrink-0" />
                  <span className="font-mono text-xs text-[#ff3366] uppercase tracking-wider font-semibold">
                    AGENCY LIVE ENGINE
                  </span>
                </div>
                <div className="font-mono text-xs text-neutral-600 bg-[#f6f5f0] px-3 py-1 rounded-md border border-black/5">
                  <LiveClock />
                </div>
              </div>

              {/* Status Header */}
              <div className="py-6 border-b border-black/10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 block mb-1">
                  CURRENT AVAILABILITY
                </span>
                <h3 className="font-satoshi font-bold text-2xl sm:text-3xl text-[#121113] flex items-center gap-2">
                  <span>Accepting Q3 / Q4 Briefs</span>
                  <Sparkles size={20} className="text-[#ff3366]" />
                </h3>
                <p className="font-inter text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed">
                  Direct pipeline open for BTL activations, collegiate networks, creator scaling, and experiential installations.
                </p>
              </div>

              {/* Active Disciplines Interactive List */}
              <div className="py-6 space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest">
                    ACTIVE DEPLOYMENT CHANNELS
                  </span>
                  <span className="font-mono text-[10px] text-[#ff3366] font-bold">LIVE STATUS</span>
                </div>

                {[
                  { name: "Collegiate & Campus Activations", status: "Active", count: "50+ Hubs" },
                  { name: "Creator & Influencer Distribution", status: "Active", count: "Tier 1-3" },
                  { name: "Spatial & Experiential Fabrications", status: "Turnkey", count: "Nationwide" },
                  { name: "Interactive Digital & Web Experiences", status: "Active", count: "Custom Tech" },
                ].map((cap) => (
                  <div
                    key={cap.name}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#fdfdfc] border border-black/8 hover:border-[#ff3366]/40 transition-colors shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff3366]" />
                      <span className="font-inter text-xs sm:text-sm font-semibold text-neutral-800">
                        {cap.name}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-neutral-600 px-2.5 py-1 rounded bg-[#f6f5f0] border border-black/5">
                      {cap.count}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Direct CTA */}
              <div className="pt-5 border-t border-black/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <MapPin size={14} className="text-[#ff3366]" />
                  <span>HQ Mumbai · Delhi · BLR</span>
                </div>

                <Link
                  href="/contact"
                  className="font-inter text-xs font-bold uppercase tracking-wider text-[#ff3366] hover:text-[#121113] transition-colors flex items-center gap-1.5 group/link"
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
