export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
  category: "life" | "craft" | "milestone" | "future";
  featured?: boolean;
};

export const timelineData: TimelineEntry[] = [
  {
    year: "2008",
    title: "Day one",
    description: "Born. The very first page of everything that follows.",
    category: "life",
    featured: true,
  },
  {
    year: "2013",
    title: "First day of school",
    description: "Learning to read, write, and ask too many questions.",
    category: "life",
  },
  {
    year: "2018",
    title: "First computer",
    description: "An old family laptop became a portal. I never really left it.",
    category: "craft",
    featured: true,
  },
  {
    year: "2019",
    title: "Started coding",
    description: "HTML, CSS, and the addictive feeling of making something from nothing.",
    category: "craft",
  },
  {
    year: "2021",
    title: "Started building with AI",
    description: "Discovered machine learning and never looked at software the same way again.",
    category: "craft",
    featured: true,
  },
  {
    year: "2023",
    title: "Founded Agjenti AI",
    description: "Turned a year of experiments into a real company built on AI products.",
    category: "milestone",
    featured: true,
  },
  {
    year: "2024",
    title: "First TV appearance",
    description: "Talked publicly about AI and building young for the first time.",
    category: "milestone",
  },
  {
    year: "2024",
    title: "First hackathon win",
    description: "48 hours, no sleep, and a project I'm still proud of.",
    category: "craft",
  },
  {
    year: "2025",
    title: "Travels begin",
    description: "New cities, new rooms full of new ideas.",
    category: "life",
  },
  {
    year: "2026",
    title: "arithaci.com",
    description: "Building a permanent, living home for everything — this site.",
    category: "milestone",
    featured: true,
  },
  {
    year: "Now",
    title: "Still writing this chapter",
    description: "This timeline doesn't end. It grows with me — check the full timeline for what's next.",
    category: "future",
    featured: true,
  },
];
