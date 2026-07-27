import { HeroMorph } from "@/components/home/hero-morph";
import { IntroReveal } from "@/components/home/intro-reveal";
import { StatsStrip } from "@/components/home/stats-strip";
import { TimelinePreview } from "@/components/home/timeline-preview";
import { SectionsGrid } from "@/components/home/sections-grid";
import { LatestJournal } from "@/components/home/latest-journal";
import { JsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: siteConfig.author,
          url: siteConfig.url,
          jobTitle: "Founder, Agjenti AI",
          sameAs: Object.values(siteConfig.social),
        }}
      />
      <HeroMorph />
      <IntroReveal />
      <StatsStrip />
      <TimelinePreview />
      <LatestJournal />
      <SectionsGrid />
    </>
  );
}
