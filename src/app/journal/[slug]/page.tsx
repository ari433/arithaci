import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllArticles, getArticle, getJournalSlugs } from "@/lib/journal";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { ReadingProgress } from "@/components/journal/reading-progress";
import { TableOfContents } from "@/components/journal/table-of-contents";
import { ArticleActions } from "@/components/journal/article-actions";
import { JsonLd } from "@/components/shared/json-ld";

export async function generateStaticParams() {
  return getJournalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = await getArticle(slug);
    return {
      title: meta.title,
      description: meta.excerpt,
      openGraph: { title: meta.title, description: meta.excerpt, type: "article", publishedTime: meta.date },
    };
  } catch {
    return {};
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let meta;
  let Content;
  try {
    ({ meta, Content } = await getArticle(slug));
  } catch {
    notFound();
  }

  const allArticles = await getAllArticles();
  const related = allArticles.filter((a) => a.slug !== slug && a.category === meta.category).slice(0, 2);

  return (
    <>
      <ReadingProgress />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: meta.title,
          description: meta.excerpt,
          datePublished: meta.date,
          author: { "@type": "Person", name: siteConfig.author },
          url: `${siteConfig.url}/journal/${meta.slug}`,
        }}
      />

      <article className="container-editorial py-20 md:py-28">
        <header className="mx-auto max-w-2xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
            <Link href="/journal" className="hover:text-foreground">
              Journal
            </Link>
            <span aria-hidden>·</span>
            <span>{meta.category}</span>
            <span aria-hidden>·</span>
            <span>{meta.readingTime}</span>
          </div>
          <h1 className="text-display font-display mt-4 italic text-foreground">{meta.title}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{meta.excerpt}</p>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-border py-4">
            <time dateTime={meta.date} className="text-sm text-muted-foreground">
              {formatDate(meta.date)}
            </time>
            <ArticleActions slug={meta.slug} title={meta.title} />
          </div>
        </header>

        <div className="mx-auto mt-14 flex max-w-2xl gap-16 lg:mx-0 lg:max-w-none lg:justify-center">
          <div id="article-content" className="prose-editorial min-w-0 flex-1">
            <Content />

            {meta.tags.length > 0 && (
              <div className="mt-14 flex flex-wrap gap-2 border-t border-border pt-8">
                {meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <TableOfContents containerId="article-content" />
        </div>

        {related.length > 0 && (
          <div className="mx-auto mt-24 max-w-2xl border-t border-border pt-14 lg:max-w-none">
            <h2 className="mb-6 text-sm uppercase tracking-wider text-muted-foreground">
              More in {meta.category}
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {related.map((article) => (
                <Link key={article.slug} href={`/journal/${article.slug}`} className="group">
                  <h3 className="font-display text-xl italic text-foreground transition-colors group-hover:text-accent">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                    Read article
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
