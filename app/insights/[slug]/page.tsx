import { notFound } from "next/navigation";
import Link from "next/link";
import { insights } from "@/lib/data/insights";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Sparkles, BookOpen } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);
  if (!article) return { title: "Article | Buzzcrafterss" };

  return {
    title: `${article.title} — Thinking Out Loud | Buzzcrafterss`,
    description: article.excerpt,
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const currentIndex = insights.findIndex((a) => a.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const article = insights[currentIndex];
  // Correct sequential loop: 1 -> 2 -> 3 -> 4 -> 1
  const nextArticle = insights[(currentIndex + 1) % insights.length];

  return (
    <main className="min-h-screen bg-[#f5f5f0] text-[#0a0a0a] pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-28 w-full">
      <div className="site-container-narrow">
        {/* Back Link */}
        <div className="mb-8 sm:mb-12">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase text-black/60 hover:text-black transition-colors"
            data-cursor="explore"
          >
            <ArrowLeft size={16} />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12 pb-8 border-b border-black/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-inter text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#0a0a0a] text-white">
              {article.category}
            </span>
            <span className="font-mono text-xs text-black/40">·</span>
            <span className="font-mono text-xs text-black/40">{article.date}</span>
            <span className="font-mono text-xs text-black/40">·</span>
            <span className="font-mono text-xs text-black/40">{article.readTime}</span>
          </div>

          <h1 className="font-satoshi font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-black mb-6 leading-[1.08]">
            {article.title}
          </h1>

          <p className="font-inter text-base sm:text-lg md:text-xl text-black/75 leading-relaxed border-l-2 border-[#c8f135] pl-4 sm:pl-6 italic bg-black/[0.02] py-4 rounded-r-xl">
            &ldquo;{article.excerpt}&rdquo;
          </p>
        </header>

        {/* Article Body */}
        <article className="space-y-6 text-black/85 font-inter text-base sm:text-lg md:text-xl leading-relaxed">
          {article.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>

        {/* Next Article Banner */}
        <div className="mt-16 pt-10 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-black/40 mb-1 block">
              NEXT ESSAY (0{nextArticle.id})
            </span>
            <h3 className="font-satoshi font-bold text-lg sm:text-2xl text-black">
              {nextArticle.title}
            </h3>
            <span className="font-inter text-xs sm:text-sm text-black/60">
              {nextArticle.category} · {nextArticle.readTime}
            </span>
          </div>
          <Link
            href={`/insights/${nextArticle.slug}`}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#0a0a0a] text-white font-inter font-bold text-xs tracking-widest uppercase hover:bg-[#c8f135] hover:text-black transition-all shadow-md"
            data-cursor="explore"
          >
            <span>Read Next</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
