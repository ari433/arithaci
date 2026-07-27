import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTrip, getTripSlugs } from "@/lib/travel";

export async function generateStaticParams() {
  return getTripSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = await getTrip(slug);
    return { title: `${meta.city}, ${meta.country}`, description: meta.excerpt };
  } catch {
    return {};
  }
}

export default async function TripPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let meta;
  let Content;
  try {
    ({ meta, Content } = await getTrip(slug));
  } catch {
    notFound();
  }

  return (
    <article className="container-editorial py-20 md:py-28">
      <header className="mx-auto max-w-2xl">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">{meta.year}</span>
        <h1 className="text-display font-display mt-3 italic text-foreground">
          {meta.city}, {meta.country}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">{meta.excerpt}</p>
      </header>

      <div className="prose-editorial mx-auto mt-14">
        <Content />
      </div>
    </article>
  );
}
