import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Portrait } from "@/components/shared/portrait";

export const metadata: Metadata = {
  title: "About",
  description: "The long version — who Ari Thaçi is, beyond the project list.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="The long version" title="About" />
      <div className="container-editorial grid gap-14 pb-28 md:grid-cols-[1fr_1.3fr] md:gap-20">
        <div className="md:sticky md:top-28 md:h-fit">
          <div className="aspect-[4/5] w-full max-w-sm">
            <Portrait label="Ari Thaçi" tone="current" />
          </div>
        </div>

        <div className="prose-editorial max-w-2xl">
          <p className="text-editorial text-foreground/85">
            I&rsquo;m Ari Thaçi. I&rsquo;m seventeen, I build AI products, and I run
            Agjenti AI — but none of that is really the point of this page. This is
            the part of the website where I try to explain who I am underneath the
            job titles.
          </p>

          <h2 className="font-display mt-14 mb-4 text-3xl italic text-foreground">Where it started</h2>
          <p className="text-editorial text-foreground/85">
            I grew up in Prishtina, in a house where curiosity was treated as a
            reasonable use of time. An old family laptop became my first real
            portal to anything — and I never really left it. By the time I was
            writing my first lines of HTML, I already suspected this would be the
            thing I built a life around.
          </p>

          <h2 className="font-display mt-14 mb-4 text-3xl italic text-foreground">What I actually do</h2>
          <p className="text-editorial text-foreground/85">
            Agjenti AI is where most of my working hours go — building focused
            automation products for businesses that don&rsquo;t have an engineering
            team of their own. Outside of that, I write, I speak when asked, and I
            try to document as much of the process as I can stand to make public.
          </p>

          <h2 className="font-display mt-14 mb-4 text-3xl italic text-foreground">Why this website exists</h2>
          <p className="text-editorial text-foreground/85">
            Most personal sites are built to impress a hiring manager for six
            months and then quietly rot. I wanted the opposite — a place built to
            still be true, and still be added to, twenty years from now. Every
            article, project, photo, and lesson lives here permanently. Nothing
            gets deleted just because I&rsquo;ve outgrown it.
          </p>

          <h2 className="font-display mt-14 mb-4 text-3xl italic text-foreground">Outside of work</h2>
          <p className="text-editorial text-foreground/85">
            I read more than I post about, I travel whenever the schedule allows
            it, and I&rsquo;m still deciding what I think about most things — this
            site is as much a record of that uncertainty as it is a portfolio.
          </p>

          <p className="text-editorial mt-10 text-foreground/85">
            If you want the day-to-day version of this, the{" "}
            <Link href="/now" className="underline decoration-accent/50 underline-offset-4 hover:decoration-accent">
              Now page
            </Link>{" "}
            is updated far more often than this one. If you want the receipts, the{" "}
            <Link href="/timeline" className="underline decoration-accent/50 underline-offset-4 hover:decoration-accent">
              Timeline
            </Link>{" "}
            has the whole thing in order.
          </p>
        </div>
      </div>
    </>
  );
}
