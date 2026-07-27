export type Resource = {
  slug: string;
  title: string;
  description: string;
  type: "Template" | "Checklist" | "Prompt pack" | "Guide";
  available: boolean;
};

export const resources: Resource[] = [
  {
    slug: "ai-product-launch-checklist",
    title: "AI product launch checklist",
    description: "The exact checklist I run before shipping any AI feature to real users.",
    type: "Checklist",
    available: false,
  },
  {
    slug: "prompt-engineering-starter-pack",
    title: "Prompt engineering starter pack",
    description: "A set of reusable prompt templates for production AI products.",
    type: "Prompt pack",
    available: false,
  },
  {
    slug: "editorial-nextjs-starter",
    title: "Editorial Next.js starter",
    description: "A stripped-down version of this site's design system, free to build on.",
    type: "Template",
    available: false,
  },
];
