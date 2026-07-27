export type VideoItem = {
  id: string;
  title: string;
  platform: "YouTube" | "Instagram" | "TikTok" | "Podcast";
  description: string;
  duration: string;
  year: string;
  hue: number;
  /** Real YouTube video ID — when set, renders a live embed instead of a placeholder card. */
  youtubeId?: string;
  url?: string;
};

export const videos: VideoItem[] = [
  {
    id: "v1",
    title: "Talking AI products on national TV",
    platform: "YouTube",
    description: "My first television appearance, talking about building AI products at 17.",
    duration: "6:42",
    year: "2024",
    hue: 18,
  },
  {
    id: "v2",
    title: "Building Agjenti AI — the demo",
    platform: "YouTube",
    description: "A walkthrough of the first working version of Agjenti AI.",
    duration: "11:05",
    year: "2024",
    hue: 32,
  },
  {
    id: "v3",
    title: "48 hours, one hackathon",
    platform: "Instagram",
    description: "Behind the scenes of the weekend that became my first public win.",
    duration: "0:58",
    year: "2024",
    hue: 300,
  },
  {
    id: "v4",
    title: "On documenting everything",
    platform: "Podcast",
    description: "A conversation about why this website exists and what it's for.",
    duration: "38 min",
    year: "2026",
    hue: 210,
  },
];
