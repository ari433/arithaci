import type { Metadata } from "next";
import { getArticlesByCategory } from "@/lib/journal";
import { PageHeader } from "@/components/shared/page-header";
import { ArticleCard } from "@/components/journal/article-card";

export const metadata: Metadata = {
  title: "AI",
  description: "Guides, prompts, and experiments from building real AI products.",
};

export default async function AiPage() {
  const articles = await getArticlesByCategory("AI");

  return (
    <>
      <PageHeader
        eyebrow="Automation & prompt engineering"
        title="AI"
        description="Everything I've learned building AI products at Agjenti AI — guides, experiments, and the parts nobody puts in the launch tweet."
      />
      <div className="container-editorial pb-28">
        {articles.length > 0 ? (
          articles.map((article, i) => (
            <ArticleCard key={article.slug} article={article} featured={i === 0} />
          ))
        ) : (
          <p className="text-muted-foreground">New AI writing is on its way — check back soon.</p>
        )}
      </div>
    </>
  );
}
