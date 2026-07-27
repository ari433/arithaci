import type { Metadata } from "next";
import { getAllTrips } from "@/lib/travel";
import { PageHeader } from "@/components/shared/page-header";
import { WorldMap } from "@/components/travel/world-map";
import { DestinationCard } from "@/components/travel/destination-card";

export const metadata: Metadata = {
  title: "Travel",
  description: "Every city that changed how I think — an interactive map of the places behind the work.",
};

export default async function TravelPage() {
  const trips = await getAllTrips();

  return (
    <>
      <PageHeader
        eyebrow="Everywhere I've been"
        title="Travel"
        description="Every destination here opens into its own story — the history, the photos, and what it actually changed in how I think."
      />
      <div className="container-editorial pb-28">
        <WorldMap trips={trips} />
        <div className="mt-16">
          {trips.map((trip) => (
            <DestinationCard key={trip.slug} trip={trip} />
          ))}
        </div>
      </div>
    </>
  );
}
