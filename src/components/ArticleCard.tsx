import Link from "next/link";

import type { InsightArticle } from "@/types/content";

type ArticleCardProps = {
  article: InsightArticle;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-slate-950/65 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
        {article.category}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-white">{article.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">
        {article.summary}
      </p>
      <Link
        href={`/insights/${article.slug}`}
        className="mt-6 inline-flex items-center text-sm font-semibold text-violet-300 transition hover:text-violet-200"
      >
        Read structure
      </Link>
    </article>
  );
}

