"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastScrollY.current && y > 250);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <nav
          className={`flex items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 transition-all duration-500 ${
            scrolled
              ? "py-4 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#222]"
              : "py-6 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-transparent"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-satoshi font-black text-xl tracking-tighter text-white hover:text-[#c8f135] transition-colors duration-300 flex items-center gap-2"
          >
            <span>BUZZCRAFTERSS</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-inter text-xs font-semibold tracking-widest uppercase text-neutral-300 hover:text-[#c8f135] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-inter text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full border border-[#c8f135] text-[#c8f135] hover:bg-[#c8f135] hover:text-black transition-all duration-300"
              data-cursor="explore"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white z-50 relative p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-cursor="explore"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col justify-center px-8 transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 mb-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-satoshi font-black text-4xl text-white hover:text-[#c8f135] transition-colors tracking-tight"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="font-satoshi font-black text-4xl text-[#c8f135] hover:text-white transition-colors tracking-tight"
          >
            Start a Project →
          </Link>
        </div>

        <div className="border-t border-[#222] pt-8 flex flex-col gap-2">
          <span className="font-inter text-xs tracking-widest uppercase text-neutral-500">
            Direct Contact
          </span>
          <a
            href="mailto:hello@buzzcrafterss.com"
            className="font-inter text-sm text-neutral-300 hover:text-[#c8f135] transition-colors"
          >
            hello@buzzcrafterss.com
          </a>
        </div>
      </div>
    </>
  );
}
