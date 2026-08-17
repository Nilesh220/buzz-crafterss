import { notFound } from "next/navigation";
import Link from "next/link";
import { work } from "@/lib/data/work";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

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
  const item = work.find((w) => w.id === id);

  if (!item) {
    notFound();
  }

  const nextProject = work.find((w) => w.id !== id) || work[0];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0] pt-36 pb-28 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto w-full">
        {/* Back Link */}
        <div className="mb-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-inter text-xs font-semibold tracking-widest uppercase text-neutral-400 hover:text-[#c8f135] transition-colors"
            data-cursor="explore"
          >
            <ArrowLeft size={16} />
            <span>Back to All Campaigns</span>
          </Link>
        </div>

        {/* Hero Header */}
        <header className="mb-20 pb-12 border-b border-[#222]">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest mr-2">
              0{item.id} / {item.year}
            </span>
            {item.categories.map((cat) => (
              <span
                key={cat}
                className="font-inter text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-[#c8f135]/30 text-[#c8f135] bg-[#c8f135]/10"
              >
                {cat}
              </span>
            ))}
          </div>

          <span className="font-inter text-xs tracking-[0.25em] uppercase text-neutral-400 font-semibold block mb-3">
            {item.client}
          </span>

          <h1 className="font-satoshi font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-8">
            {item.project}
          </h1>

          <p className="font-inter text-neutral-300 text-lg md:text-2xl max-w-4xl leading-relaxed">
            {item.description}
          </p>
        </header>

        {/* Metrics Banner */}
        <section className="border border-[#222] bg-[#111] rounded-2xl p-8 sm:p-12 mb-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {item.metrics.map((metric) => (
            <div key={metric.label} className="border-l-2 border-[#333] pl-4">
              <div className="font-satoshi font-black text-3xl sm:text-5xl text-[#c8f135] mb-2 tracking-tight">
                {metric.value}
              </div>
              <div className="font-inter text-xs text-neutral-400 uppercase tracking-wider">
                {metric.label}
              </div>
            </div>
          ))}
        </section>

        {/* 8-Part Case Study Breakdown */}
        <div className="space-y-16 md:space-y-24">
          {/* 1. THE CHALLENGE */}
          <section className="p-8 sm:p-12 rounded-2xl border border-[#222] bg-[#0d0d0d]">
            <span className="font-mono text-xs font-bold tracking-widest text-[#c8f135] uppercase block mb-4">
              01 / THE CHALLENGE
            </span>
            <p className="font-inter text-lg md:text-xl text-neutral-200 leading-relaxed">
              {item.challenge}
            </p>
          </section>

          {/* 2. THE IDEA */}
          <section className="p-8 sm:p-12 rounded-2xl border border-[#222] bg-[#0d0d0d]">
            <span className="font-mono text-xs font-bold tracking-widest text-[#c8f135] uppercase block mb-4">
              02 / THE STRATEGIC IDEA
            </span>
            <p className="font-inter text-lg md:text-xl text-neutral-200 leading-relaxed">
              {item.idea}
            </p>
          </section>

          {/* 3. THE EXECUTION */}
          <section className="p-8 sm:p-12 rounded-2xl border border-[#222] bg-[#0d0d0d]">
            <span className="font-mono text-xs font-bold tracking-widest text-[#c8f135] uppercase block mb-4">
              03 / THE ON-GROUND EXECUTION
            </span>
            <p className="font-inter text-lg md:text-xl text-neutral-200 leading-relaxed">
              {item.execution}
            </p>
          </section>

          {/* 4. THE EXPERIENCE */}
          <section className="p-8 sm:p-12 rounded-2xl border border-[#222] bg-[#0d0d0d] space-y-6">
            <span className="font-mono text-xs font-bold tracking-widest text-[#c8f135] uppercase block">
              04 / THE SENSORY EXPERIENCE
            </span>
            <p className="font-inter text-lg md:text-xl text-neutral-200 leading-relaxed">
              {item.experience}
            </p>
            <div className="w-full h-64 sm:h-80 rounded-xl border border-[#262626] bg-gradient-to-tr from-[#141414] to-[#1f1f1f] flex flex-col items-center justify-center p-6 text-center">
              <span className="font-satoshi font-bold text-xl text-[#c8f135] mb-1">
                Spatial Activation Showcase
              </span>
              <span className="font-inter text-xs text-neutral-500 uppercase tracking-widest">
                Interactive Booths · Campus Pods · Brand Installations
              </span>
            </div>
          </section>

          {/* 5. THE DIGITAL LAYER */}
          <section className="p-8 sm:p-12 rounded-2xl border border-[#222] bg-[#0d0d0d]">
            <span className="font-mono text-xs font-bold tracking-widest text-[#c8f135] uppercase block mb-4">
              05 / THE DIGITAL & TECH LAYER
            </span>
            <p className="font-inter text-lg md:text-xl text-neutral-200 leading-relaxed">
              {item.digital}
            </p>
          </section>

          {/* 6. THE CREATOR LAYER */}
          <section className="p-8 sm:p-12 rounded-2xl border border-[#222] bg-[#0d0d0d]">
            <span className="font-mono text-xs font-bold tracking-widest text-[#c8f135] uppercase block mb-4">
              06 / THE CREATOR & UGC LAYER
            </span>
            <p className="font-inter text-lg md:text-xl text-neutral-200 leading-relaxed">
              {item.creatorLayer}
            </p>
          </section>

          {/* 7. THE RESULTS */}
          <section className="p-8 sm:p-12 rounded-2xl border border-[#222] bg-[#0d0d0d]">
            <span className="font-mono text-xs font-bold tracking-widest text-[#c8f135] uppercase block mb-8">
              07 / VERIFIED RESULTS
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {item.results.map((res) => (
                <div key={res.label} className="border-l-2 border-[#333] pl-4">
                  <div className="font-satoshi font-black text-2xl sm:text-4xl text-[#c8f135] mb-1">
                    {res.value}
                  </div>
                  <div className="font-inter text-xs text-neutral-400">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 8. THE TAKEAWAY */}
          <section className="p-8 sm:p-12 rounded-2xl border border-[#222] bg-[#111]">
            <span className="font-mono text-xs font-bold tracking-widest text-[#c8f135] uppercase block mb-4">
              08 / STRATEGIC TAKEAWAY
            </span>
            <blockquote className="font-satoshi font-bold text-xl sm:text-3xl text-white leading-snug border-l-2 border-[#c8f135] pl-6">
              &ldquo;{item.takeaway}&rdquo;
            </blockquote>
          </section>
        </div>

        {/* Next Project Bar */}
        <div className="mt-24 pt-16 border-t border-[#222] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-inter text-xs uppercase tracking-widest text-neutral-500 mb-1 block">
              Next Campaign
            </span>
            <h3 className="font-satoshi font-black text-2xl sm:text-4xl text-white">
              {nextProject.project}
            </h3>
          </div>
          <Link
            href={`/work/${nextProject.id}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c8f135] text-black font-inter font-bold text-xs tracking-widest uppercase hover:bg-white transition-all rounded-lg"
            data-cursor="explore"
          >
            <span>View Case Study</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
