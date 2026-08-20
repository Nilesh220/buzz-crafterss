import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#121113] text-[#fbfbfa] border-t border-black/10 w-full">
      <div className="site-container py-14 sm:py-20">
        {/* Top Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 mb-12 w-full">
          {/* Brand */}
          <div className="lg:col-span-5 max-w-md">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff3366] shadow-[0_0_10px_rgba(255,51,102,0.6)]" />
              <span className="font-satoshi font-black text-2xl tracking-tighter text-white">
                BUZZCRAFTERSS
              </span>
            </div>
            <p className="font-inter text-xs sm:text-sm text-neutral-400 leading-relaxed mb-5">
              Brand Experiences. Creator Influence. Digital Impact. Built to make brands impossible to ignore.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3366] animate-pulse" />
              <span>Mumbai · Delhi NCR · Bengaluru</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#ff3366] font-semibold mb-1">
              EXPLORE
            </span>
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-inter text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#ff3366] font-semibold mb-1">
              NETWORK
            </span>
            <a
              href="https://instagram.com/buzzcrafterss"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Instagram</span>
              <ArrowUpRight size={12} />
            </a>
            <a
              href="https://linkedin.com/company/buzzcrafterss"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Direct CTA */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#ff3366] font-semibold mb-1">
              GET IN TOUCH
            </span>
            <a
              href="mailto:hello@buzzcrafterss.com"
              className="font-inter text-sm font-semibold text-white hover:text-[#ff3366] transition-colors"
            >
              hello@buzzcrafterss.com
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-inter text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-xl bg-white text-[#121113] hover:bg-[#ff3366] hover:text-white transition-all w-fit mt-1 shadow-md"
              data-cursor="explore"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-inter">
          <p>© 2026 Buzzcrafterss Agency. All rights reserved.</p>
          <p>Integrated Brand Experiences & Creator Campaigns</p>
        </div>
      </div>
    </footer>
  );
}
