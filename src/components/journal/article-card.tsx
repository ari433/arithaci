import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ArticleMeta } from "@/lib/journal";
import { formatDate } from "@/lib/utils";

export function ArticleCard({ article, featured = false }: { article: ArticleMeta; featured?: boolean }) {
  return (
    <Link
      href={`/journal/${article.slug}`}
      className="group flex flex-col gap-3 border-b border-border py-8 first:pt-0"
    >
      <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
        <span>{article.category}</span>
        <span aria-hidden>·</span>
        <time dateTime={article.date}>{formatDate(article.date)}</time>
        <span aria-hidden>·</span>
        <span>{article.readingTime}</span>
      </div>
      <h3
        className={
          featured
            ? "font-display text-3xl italic text-foreground transition-colors group-hover:text-accent md:text-4xl"
            : "font-display text-2xl italic text-foreground transition-colors group-hover:text-accent"
        }
      >
        {article.title}
      </h3>
      <p className="max-w-2xl text-muted-foreground">{article.excerpt}</p>
      <span className="flex items-center gap-1.5 text-sm text-foreground/70 transition-colors group-hover:text-foreground">
        Read
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
      </span>
    </Link>
  );
}
