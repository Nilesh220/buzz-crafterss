import { notFound } from "next/navigation";
import Link from "next/link";
import { insights } from "@/lib/data/insights";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

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
  const article = insights.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const nextArticle = insights.find((a) => a.slug !== slug) || insights[0];

  return (
    <main className="min-h-screen bg-[#f5f5f0] text-[#0a0a0a] pt-36 pb-28 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto w-full">
        {/* Back Link */}
        <div className="mb-12">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-inter text-xs font-semibold tracking-widest uppercase text-black/50 hover:text-black transition-colors"
            data-cursor="explore"
          >
            <ArrowLeft size={16} />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-16 pb-10 border-b border-black/10">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-inter text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-[#0a0a0a] text-white">
              {article.category}
            </span>
            <span className="font-inter text-xs text-black/40">·</span>
            <span className="font-inter text-xs text-black/40">{article.date}</span>
            <span className="font-inter text-xs text-black/40">·</span>
            <span className="font-inter text-xs text-black/40">{article.readTime}</span>
          </div>

          <h1 className="font-satoshi font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-black mb-8 leading-[1.08]">
            {article.title}
          </h1>

          <p className="font-inter text-lg md:text-2xl text-black/75 leading-relaxed border-l-2 border-[#c8f135] pl-6 italic">
            &ldquo;{article.excerpt}&rdquo;
          </p>
        </header>

        {/* Article Body */}
        <article className="space-y-8 text-black/85 font-inter text-base md:text-lg leading-relaxed">
          {article.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>

        {/* Next Article Banner */}
        <div className="mt-24 pt-12 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-inter text-xs uppercase tracking-widest text-black/40 mb-1 block">
              Next Thought
            </span>
            <h3 className="font-satoshi font-bold text-xl sm:text-2xl text-black">
              {nextArticle.title}
            </h3>
          </div>
          <Link
            href={`/insights/${nextArticle.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#0a0a0a] text-white font-inter font-bold text-xs tracking-widest uppercase hover:bg-[#c8f135] hover:text-black transition-all"
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
