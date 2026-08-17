import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = ["Work", "Services", "About", "Insights", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#f5f5f0] border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-24">
        {/* Top Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-5 max-w-sm">
            <div className="font-satoshi font-black text-2xl tracking-tighter text-white mb-3">
              BUZZCRAFTERSS
            </div>
            <p className="font-inter text-sm text-neutral-400 leading-relaxed mb-6">
              Brand Experiences. Creator Influence. Digital Impact. An agency built to make brands impossible to ignore.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase">
              <span>● Mumbai · Delhi NCR · Bengaluru</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-1">
              EXPLORE
            </span>
            {footerLinks.map((link) => (
              <Link
                key={link}
                href={link === "Contact" ? "/contact" : `/${link.toLowerCase()}`}
                className="font-inter text-sm text-neutral-400 hover:text-[#c8f135] transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-1">
              SOCIAL
            </span>
            <a
              href="https://instagram.com/buzzcrafterss"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-sm text-neutral-400 hover:text-[#c8f135] transition-colors flex items-center gap-1"
            >
              <span>Instagram</span>
              <ArrowUpRight size={12} />
            </a>
            <a
              href="https://linkedin.com/company/buzzcrafterss"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-sm text-neutral-400 hover:text-[#c8f135] transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Direct CTA */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-1">
              GET IN TOUCH
            </span>
            <a
              href="mailto:hello@buzzcrafterss.com"
              className="font-inter text-sm font-semibold text-[#c8f135] hover:text-white transition-colors"
            >
              hello@buzzcrafterss.com
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-inter text-xs font-bold tracking-widest uppercase px-5 py-3 rounded-lg bg-white text-black hover:bg-[#c8f135] transition-all w-fit"
              data-cursor="explore"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#222] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-inter">
          <p>© 2026 Buzzcrafterss. All rights reserved.</p>
          <p>Brand Experiences · Creator Influence · Digital Impact</p>
        </div>
      </div>
    </footer>
  );
}
