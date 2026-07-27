import type { ComponentType } from "react";
import { listSlugs } from "@/lib/content";

export type TripMeta = {
  slug: string;
  city: string;
  country: string;
  countryCode: string;
  year: string;
  excerpt: string;
  coordinates: [number, number]; // [longitude, latitude]
};

export function getTripSlugs(): string[] {
  return listSlugs("travel");
}

export async function getTrip(slug: string): Promise<{
  meta: TripMeta;
  Content: ComponentType;
}> {
  const mod = await import(`@/content/travel/${slug}.mdx`);
  return { meta: mod.meta as TripMeta, Content: mod.default as ComponentType };
}

export async function getAllTrips(): Promise<TripMeta[]> {
  const slugs = getTripSlugs();
  const trips = await Promise.all(slugs.map(async (slug) => (await getTrip(slug)).meta));
  return trips.sort((a, b) => (a.year < b.year ? 1 : -1));
}
