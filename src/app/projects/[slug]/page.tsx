import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Code2, Globe } from "lucide-react";
import { getProject, getProjectSlugs } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/shared/json-ld";

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = await getProject(slug);
    return { title: meta.title, description: meta.excerpt };
  } catch {
    return {};
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let meta;
  let Content;
  try {
    ({ meta, Content } = await getProject(slug));
  } catch {
    notFound();
  }

  return (
    <article className="container-editorial py-20 md:py-28">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: meta.title,
          description: meta.excerpt,
          creator: { "@type": "Person", name: siteConfig.author },
          url: `${siteConfig.url}/projects/${meta.slug}`,
        }}
      />

      <header className="mx-auto max-w-2xl">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">
          {meta.year} — {meta.role}
        </span>
        <h1 className="text-display font-display mt-3 italic text-foreground">{meta.title}</h1>
        <p className="mt-5 text-lg text-muted-foreground">{meta.excerpt}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3 border-y border-border py-5">
          {meta.url && (
            <a
              href={meta.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-foreground/40"
            >
              <Globe className="h-4 w-4" strokeWidth={1.5} />
              Visit site
            </a>
          )}
          {meta.github && (
            <a
              href={meta.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-foreground/40"
            >
              <Code2 className="h-4 w-4" strokeWidth={1.5} />
              GitHub
            </a>
          )}
          <div className="flex flex-wrap gap-2">
            {meta.stack.map((tech) => (
              <span key={tech} className="rounded-full bg-muted px-3 py-1.5 text-xs text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="prose-editorial mx-auto mt-14">
        <Content />
      </div>
    </article>
  );
}
