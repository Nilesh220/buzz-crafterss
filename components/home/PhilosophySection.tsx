"use client";

import { useRef, useEffect, useState } from "react";

const philosophyWords = [
  { text: "SEE IT." },
  { text: "FEEL IT." },
  { text: "SHARE IT." },
  { text: "REMEMBER IT." },
];

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-bc-white py-28 md:py-44 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden border-b border-bc-black/10"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Label */}
        <div className="flex items-center gap-3 mb-14 md:mb-20">
          <div className="w-5 h-px bg-bc-black" />
          <span className="font-inter text-xs font-semibold tracking-[0.25em] uppercase text-bc-black/50">
            Our Philosophy
          </span>
        </div>

        {/* Display Typography */}
        <div
          className="flex flex-col divide-y divide-bc-black/10 border-y border-bc-black/10 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
          }}
        >
          {philosophyWords.map((word, i) => (
            <div key={word.text} className="py-4 md:py-6">
              <div
                className="font-satoshi font-black leading-[1.05] tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-8xl select-none"
                style={{
                  color: i % 2 === 0 ? "var(--bc-black)" : "transparent",
                  WebkitTextStroke:
                    i % 2 !== 0 ? "1.5px var(--bc-black)" : "none",
                }}
              >
                {word.text}
              </div>
            </div>
          ))}
        </div>

        {/* Supporting copy */}
        <p className="font-inter text-bc-black/60 text-base md:text-lg lg:text-xl mt-12 max-w-xl leading-relaxed">
          Every campaign we build is designed to be experienced, not just seen. That&apos;s the difference between marketing and a moment people carry with them.
        </p>
      </div>
    </section>
  );
}
