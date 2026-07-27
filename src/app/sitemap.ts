import type { MetadataRoute } from "next";
import { siteConfig, allNav } from "@/lib/site-config";
import { getAllArticles } from "@/lib/journal";
import { getAllProjects } from "@/lib/projects";
import { getAllTrips } from "@/lib/travel";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, projects, trips] = await Promise.all([
    getAllArticles(),
    getAllProjects(),
    getAllTrips(),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    ...allNav.map((item) => ({
      url: `${siteConfig.url}${item.href}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${siteConfig.url}/journal/${a.slug}`,
    lastModified: a.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${siteConfig.url}/projects/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const tripRoutes: MetadataRoute.Sitemap = trips.map((t) => ({
    url: `${siteConfig.url}/travel/${t.slug}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...articleRoutes, ...projectRoutes, ...tripRoutes];
}
