import type { Metadata } from "next";
import { getAllArticles } from "@/lib/journal";
import { PageHeader } from "@/components/shared/page-header";
import { JournalList } from "@/components/journal/journal-list";

export const metadata: Metadata = {
  title: "Journal",
  description: "Essays on building, failing, and learning in public — the premium editorial record of everything I'm working through.",
};

export default async function JournalPage() {
  const articles = await getAllArticles();

  return (
    <>
      <PageHeader
        eyebrow="Not a blog"
        title="Journal"
        description="Long-form writing on building Agjenti AI, working with AI, and everything in between. Updated whenever I have something worth saying."
      />
      <div className="container-editorial pb-28">
        <JournalList articles={articles} />
      </div>
    </>
  );
}
