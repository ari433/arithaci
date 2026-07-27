import type { ComponentType } from "react";
import { listSlugs } from "@/lib/content";

export type ProjectMeta = {
  slug: string;
  title: string;
  excerpt: string;
  year: string;
  role: string;
  stack: string[];
  status: "live" | "archived" | "building";
  url?: string;
  github?: string;
};

export function getProjectSlugs(): string[] {
  return listSlugs("projects");
}

export async function getProject(slug: string): Promise<{
  meta: ProjectMeta;
  Content: ComponentType;
}> {
  const mod = await import(`@/content/projects/${slug}.mdx`);
  return { meta: mod.meta as ProjectMeta, Content: mod.default as ComponentType };
}

export async function getAllProjects(): Promise<ProjectMeta[]> {
  const slugs = getProjectSlugs();
  const projects = await Promise.all(slugs.map(async (slug) => (await getProject(slug)).meta));
  return projects.sort((a, b) => (a.year < b.year ? 1 : -1));
}
