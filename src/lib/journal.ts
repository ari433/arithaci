import type { ComponentType } from "react";
import { listSlugs } from "@/lib/content";

export type ArticleMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: string;
  cover?: string;
};

export function getJournalSlugs(): string[] {
  return listSlugs("journal");
}

export async function getArticle(slug: string): Promise<{
  meta: ArticleMeta;
  Content: ComponentType;
}> {
  const mod = await import(`@/content/journal/${slug}.mdx`);
  return { meta: mod.meta as ArticleMeta, Content: mod.default as ComponentType };
}

export async function getAllArticles(): Promise<ArticleMeta[]> {
  const slugs = getJournalSlugs();
  const articles = await Promise.all(slugs.map(async (slug) => (await getArticle(slug)).meta));
  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getArticlesByCategory(category: string): Promise<ArticleMeta[]> {
  const all = await getAllArticles();
  return all.filter((a) => a.category.toLowerCase() === category.toLowerCase());
}
