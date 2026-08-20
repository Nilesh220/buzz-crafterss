"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? y / docHeight : 0;

          if (progressBarRef.current) {
            progressBarRef.current.style.transform = `scaleX(${progress})`;
          }

          const isScrolled = y > 30;
          const isHidden = y > lastScrollY.current && y > 280 && !menuOpen;

          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          setHidden((prev) => (prev !== isHidden ? isHidden : prev));

          lastScrollY.current = y;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Rose & Pink Scroll Progress Bar */}
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#ff3366] via-[#f43f5e] to-[#ec4899] z-[60] origin-left pointer-events-none will-change-transform"
        style={{
          transform: "scaleX(0)",
        }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-400 ease-in-out ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="site-container pt-3 sm:pt-4">
          <nav
            className={`flex items-center justify-between px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl transition-all duration-300 w-full ${
              scrolled
                ? "bg-white/90 backdrop-blur-2xl border border-black/10 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                : "bg-white/70 backdrop-blur-md border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
            }`}
          >
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group relative"
              data-cursor="explore"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff3366] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(255,51,102,0.6)]" />
              <span className="font-satoshi font-black text-lg sm:text-xl tracking-tighter text-[#121113] group-hover:text-[#ff3366] transition-colors duration-300">
                BUZZCRAFTERSS
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1.5 bg-[#f6f5f0]/90 px-3 py-1.5 rounded-full border border-black/5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-full font-inter text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                      isActive
                        ? "text-[#ff3366] bg-white shadow-sm font-bold border border-[#ff3366]/20"
                        : "text-[#555] hover:text-[#121113] hover:bg-white/60"
                    }`}
                    data-cursor="explore"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right Action CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-inter text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded-full bg-[#121113] text-white hover:bg-[#ff3366] transition-all duration-300 shadow-sm group"
                data-cursor="explore"
              >
                <span>Start a Project</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              className="md:hidden text-[#121113] p-2 rounded-xl bg-white border border-black/10 hover:border-[#ff3366] transition-colors relative z-50 flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              data-cursor="explore"
            >
              {menuOpen ? <X size={20} className="text-[#ff3366]" /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#fbfbfa]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col gap-6">
          <span className="font-mono text-xs text-[#ff3366] tracking-widest uppercase font-semibold">
            NAVIGATION MENU
          </span>

          <div className="flex flex-col gap-4">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-satoshi font-black text-3xl sm:text-4xl tracking-tight transition-all duration-300 flex items-center justify-between ${
                    isActive ? "text-[#ff3366] pl-2" : "text-[#121113] hover:text-[#ff3366]"
                  }`}
                  style={{
                    transitionDelay: menuOpen ? `${idx * 50}ms` : "0ms",
                  }}
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-sm text-neutral-400">0{idx + 1}</span>
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="font-satoshi font-black text-3xl sm:text-4xl text-[#ff3366] tracking-tight hover:text-[#121113] transition-colors mt-2"
            >
              Start a Project →
            </Link>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="border-t border-black/10 pt-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff3366] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-600">
              Mumbai · Delhi NCR · Bengaluru
            </span>
          </div>

          <a
            href="mailto:hello@buzzcrafterss.com"
            className="font-inter text-sm text-neutral-700 hover:text-[#ff3366] transition-colors"
          >
            hello@buzzcrafterss.com
          </a>
        </div>
      </div>
    </>
  );
}
