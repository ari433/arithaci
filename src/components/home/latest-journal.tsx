import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllArticles } from "@/lib/journal";
import { ArticleCard } from "@/components/journal/article-card";

export async function LatestJournal() {
  const articles = (await getAllArticles()).slice(0, 3);
  if (articles.length === 0) return null;

  return (
    <section className="container-editorial py-28 md:py-36">
      <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs uppercase tracking-wider text-muted-foreground">Latest writing</span>
          <h2 className="text-display font-display italic text-foreground">From the journal</h2>
        </div>
        <Link
          href="/journal"
          className="group flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
        >
          Read the journal
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
        </Link>
      </div>

      <div>
        {articles.map((article, i) => (
          <ArticleCard key={article.slug} article={article} featured={i === 0} />
        ))}
      </div>
    </section>
  );
}
