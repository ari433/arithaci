import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { MasonryGallery } from "@/components/photography/masonry-gallery";

export const metadata: Metadata = {
  title: "Photography",
  description: "Moments worth keeping — travel, street, and the ordinary days in between.",
};

export default function PhotographyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Moments, captured"
        title="Photography"
        description="A collection of frames from the trips, the late nights, and the people around them. Click any photo for the full frame and details."
      />
      <div className="container-editorial pb-28">
        <MasonryGallery />
      </div>
    </>
  );
}
