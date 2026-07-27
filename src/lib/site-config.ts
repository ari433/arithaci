export const siteConfig = {
  name: "Ari Thaçi",
  title: "Ari Thaçi — Digital Home",
  description:
    "The digital home of Ari Thaçi — founder of Agjenti AI, developer, speaker, writer. A living record of a life, from the first day to everything still being built.",
  url: "https://arithaci.com",
  author: "Ari Thaçi",
  birthYear: 2008,
  keywords: [
    "Ari Thaçi",
    "Agjenti AI",
    "AI products",
    "developer",
    "founder",
    "digital home",
  ],
  social: {
    twitter: "https://twitter.com/arithaci",
    github: "https://github.com/arithaci",
    instagram: "https://instagram.com/arithaci",
    linkedin: "https://linkedin.com/in/arithaci",
    youtube: "https://youtube.com/@arithaci",
  },
};

export type NavSection = {
  label: string;
  href: string;
  description: string;
};

export const primaryNav: NavSection[] = [
  { label: "Journal", href: "/journal", description: "Essays, notes, and lessons." },
  { label: "Projects", href: "/projects", description: "What I've built." },
  { label: "Travel", href: "/travel", description: "Everywhere I've been." },
  { label: "Photography", href: "/photography", description: "Moments, captured." },
  { label: "AI", href: "/ai", description: "Guides, prompts, experiments." },
  { label: "Timeline", href: "/timeline", description: "The whole story, in order." },
];

export const secondaryNav: NavSection[] = [
  { label: "Videos", href: "/videos", description: "Talks, reels, and podcasts." },
  { label: "Resources", href: "/resources", description: "Free tools and templates." },
  { label: "Now", href: "/now", description: "What I'm doing right now." },
  { label: "Uses", href: "/uses", description: "The tools behind the work." },
  { label: "About", href: "/about", description: "The long version." },
  { label: "Contact", href: "/contact", description: "Say hello." },
];

export const allNav = [...primaryNav, ...secondaryNav];
