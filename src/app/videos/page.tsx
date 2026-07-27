import type { Metadata } from "next";
import { videos } from "@/lib/videos";
import { PageHeader } from "@/components/shared/page-header";
import { VideoCard } from "@/components/videos/video-card";

export const metadata: Metadata = {
  title: "Videos",
  description: "Talks, reels, and podcast episodes — the moving-image record.",
};

export default function VideosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Talks, reels, podcasts"
        title="Videos"
        description="TV appearances, product demos, and conversations — everything that didn't happen in writing."
      />
      <div className="container-editorial grid gap-x-6 gap-y-12 pb-28 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </>
  );
}
