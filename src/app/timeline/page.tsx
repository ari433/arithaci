import type { Metadata } from "next";
import { timelineData } from "@/lib/timeline-data";
import { PageHeader } from "@/components/shared/page-header";
import { Timeline } from "@/components/timeline/timeline";

export const metadata: Metadata = {
  title: "Timeline",
  description: "Birth, school, first computer, first AI product, and everything since — the whole story, in order.",
};

export default function TimelinePage() {
  return (
    <>
      <PageHeader
        eyebrow="The whole story, in order"
        title="Timeline"
        description="This page has no ending. Every year adds another entry — check back for what's next."
      />
      <div className="container-editorial pb-28">
        <Timeline entries={timelineData} />
      </div>
    </>
  );
}
