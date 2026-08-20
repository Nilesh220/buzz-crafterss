import { notFound } from "next/navigation";
import Link from "next/link";
import { work } from "@/lib/data/work";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Sparkles, Layers, Box, Cpu, Eye } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return work.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = work.find((w) => w.id === id);
  if (!project) return { title: "Case Study | Buzzcrafterss" };

  return {
    title: `${project.project} — ${project.client} Case Study | Buzzcrafterss`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { id } = await params;
  const currentIndex = work.findIndex((w) => w.id === id);

  if (currentIndex === -1) {
    notFound();
  }

  const item = work[currentIndex];
  const nextProject = work[(currentIndex + 1) % work.length];

  return (
    <main className="min-h-screen bg-[#fbfbfa] text-[#121113] pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-28 w-full">
      <div className="site-container-narrow">
        {/* Back Link */}
        <div className="mb-8 sm:mb-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase text-neutral-500 hover:text-[#ff3366] transition-colors"
            data-cursor="explore"
          >
            <ArrowLeft size={16} />
            <span>Back to All Campaigns</span>
          </Link>
        </div>

        {/* Hero Header */}
        <header className="mb-14 sm:mb-20 pb-8 sm:pb-12 border-b border-black/8">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest mr-2">
              0{item.id} / {item.year}
            </span>
            {item.categories.map((cat) => (
              <span
                key={cat}
                className="font-inter text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-[#ff3366]/20 text-[#ff3366] bg-[#fff1f4]"
              >
                {cat}
              </span>
            ))}
          </div>

          <span className="font-inter text-xs tracking-[0.25em] uppercase text-neutral-500 font-semibold block mb-2">
            {item.client}
          </span>

          <h1 className="font-satoshi font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#121113] mb-6">
            {item.project}
          </h1>

          <p className="font-inter text-neutral-600 text-base sm:text-xl md:text-2xl max-w-4xl leading-relaxed">
            {item.description}
          </p>
        </header>

        {/* Metrics Banner */}
        <section className="border border-black/8 bg-white rounded-2xl p-6 sm:p-10 mb-16 sm:mb-20 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-sm">
          {item.metrics.map((metric) => (
            <div key={metric.label} className="border-l-2 border-black/10 pl-4">
              <div className="font-satoshi font-black text-2xl sm:text-4xl text-[#ff3366] mb-1 tracking-tight">
                {metric.value}
              </div>
              <div className="font-inter text-xs text-neutral-500 uppercase tracking-wider">
                {metric.label}
              </div>
            </div>
          ))}
        </section>

        {/* 8-Part Case Study Breakdown */}
        <div className="space-y-10 sm:space-y-14">
          {/* 1. THE CHALLENGE */}
          <section className="p-6 sm:p-10 rounded-2xl border border-black/8 bg-white shadow-2xs">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold tracking-widest text-[#ff3366] uppercase">
                01 / THE STRATEGIC BRIEF & CHALLENGE
              </span>
            </div>
            <p className="font-inter text-base sm:text-lg text-neutral-700 leading-relaxed">
              {item.challenge}
            </p>
          </section>

          {/* 2. THE IDEA */}
          <section className="p-6 sm:p-10 rounded-2xl border border-black/8 bg-white shadow-2xs">
            <span className="font-mono text-xs font-bold tracking-widest text-[#ff3366] uppercase block mb-4">
              02 / THE CORE CREATIVE IDEA
            </span>
            <p className="font-inter text-base sm:text-lg text-neutral-700 leading-relaxed">
              {item.idea}
            </p>
          </section>

          {/* 3. THE EXECUTION */}
          <section className="p-6 sm:p-10 rounded-2xl border border-black/8 bg-white shadow-2xs">
            <span className="font-mono text-xs font-bold tracking-widest text-[#ff3366] uppercase block mb-4">
              03 / ON-GROUND PHYSICAL EXECUTION
            </span>
            <p className="font-inter text-base sm:text-lg text-neutral-700 leading-relaxed">
              {item.execution}
            </p>
          </section>

          {/* 4. THE EXPERIENCE SHOWCASE */}
          <section className="p-6 sm:p-10 rounded-2xl border border-black/8 bg-white space-y-6 shadow-2xs">
            <span className="font-mono text-xs font-bold tracking-widest text-[#ff3366] uppercase block">
              04 / THE SENSORY EXPERIENCE ARCHITECTURE
            </span>
            <p className="font-inter text-base sm:text-lg text-neutral-700 leading-relaxed">
              {item.experience}
            </p>
            
            {/* Visual Spatial Activation Showcase Widget */}
            <div className="w-full rounded-2xl border border-black/8 bg-gradient-to-tr from-[#faf9f6] to-[#fff1f4] p-6 sm:p-8 flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-black/8 pb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#ff3366] uppercase font-bold">
                  <Box size={14} />
                  <span>SPATIAL BLUEPRINT PREVIEW</span>
                </div>
                <span className="font-mono text-[10px] text-neutral-500">
                  TURNKEY DEPLOYMENT
                </span>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-black/8 shadow-xs">
                  <div className="flex items-center gap-2 text-[#ff3366] mb-1.5">
                    <Layers size={14} />
                    <span className="font-satoshi font-bold text-sm text-[#121113]">Spatial Pods</span>
                  </div>
                  <p className="font-inter text-xs text-neutral-600">Custom branded structural booths with interactive sampling stations.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-black/8 shadow-xs">
                  <div className="flex items-center gap-2 text-[#ff3366] mb-1.5">
                    <Cpu size={14} />
                    <span className="font-satoshi font-bold text-sm text-[#121113]">Digital Kiosks</span>
                  </div>
                  <p className="font-inter text-xs text-neutral-600">QR scanners, interactive touch challenges, and real-time scoreboards.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-black/8 shadow-xs">
                  <div className="flex items-center gap-2 text-[#ff3366] mb-1.5">
                    <Eye size={14} />
                    <span className="font-satoshi font-bold text-sm text-[#121113]">UGC Photo Zones</span>
                  </div>
                  <p className="font-inter text-xs text-neutral-600">High-contrast aesthetic backdrops engineered for instant social sharing.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. THE DIGITAL LAYER */}
          <section className="p-6 sm:p-10 rounded-2xl border border-black/8 bg-white shadow-2xs">
            <span className="font-mono text-xs font-bold tracking-widest text-[#ff3366] uppercase block mb-4">
              05 / THE DIGITAL & INTERACTIVE LAYER
            </span>
            <p className="font-inter text-base sm:text-lg text-neutral-700 leading-relaxed">
              {item.digital}
            </p>
          </section>

          {/* 6. THE CREATOR LAYER */}
          <section className="p-6 sm:p-10 rounded-2xl border border-black/8 bg-white shadow-2xs">
            <span className="font-mono text-xs font-bold tracking-widest text-[#ff3366] uppercase block mb-4">
              06 / CREATOR & INFLUENCER AMPLIFICATION
            </span>
            <p className="font-inter text-base sm:text-lg text-neutral-700 leading-relaxed">
              {item.creatorLayer}
            </p>
          </section>

          {/* 7. THE RESULTS */}
          <section className="p-6 sm:p-10 rounded-2xl border border-black/8 bg-white shadow-2xs">
            <span className="font-mono text-xs font-bold tracking-widest text-[#ff3366] uppercase block mb-6">
              07 / AUDITED PERFORMANCE RESULTS
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {item.results.map((res) => (
                <div key={res.label} className="border-l-2 border-black/10 pl-3">
                  <div className="font-satoshi font-black text-xl sm:text-3xl text-[#ff3366] mb-1">
                    {res.value}
                  </div>
                  <div className="font-inter text-xs text-neutral-500">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 8. THE TAKEAWAY */}
          <section className="p-6 sm:p-10 rounded-2xl border border-black/8 bg-[#fff1f4] shadow-2xs">
            <span className="font-mono text-xs font-bold tracking-widest text-[#ff3366] uppercase block mb-4">
              08 / STRATEGIC TAKEAWAY
            </span>
            <blockquote className="font-satoshi font-bold text-lg sm:text-2xl text-[#121113] leading-snug border-l-2 border-[#ff3366] pl-4 sm:pl-6">
              &ldquo;{item.takeaway}&rdquo;
            </blockquote>
          </section>
        </div>

        {/* Next Project Bar */}
        <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-black/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#ff3366] mb-1 block font-bold">
              NEXT CASE STUDY (0{nextProject.id})
            </span>
            <h3 className="font-satoshi font-black text-2xl sm:text-3xl text-[#121113]">
              {nextProject.project}
            </h3>
            <span className="font-inter text-xs text-neutral-500">
              {nextProject.client}
            </span>
          </div>
          <Link
            href={`/work/${nextProject.id}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#ff3366] text-white font-inter font-bold text-xs tracking-widest uppercase hover:bg-[#121113] transition-all rounded-xl shadow-md"
            data-cursor="explore"
          >
            <span>View Next Case Study</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
