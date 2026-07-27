import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm building, learning, and thinking about right now.",
};

const lastUpdated = "July 2026";

const sections = [
  {
    title: "Building",
    items: [
      "Rebuilding arithaci.com into a permanent, living archive.",
      "Shipping the next version of Agjenti AI's core automation engine.",
    ],
  },
  {
    title: "Learning",
    items: [
      "Going deeper on evaluation methods for production AI systems.",
      "Studying editorial design systems from Stripe, Linear, and Vercel.",
    ],
  },
  {
    title: "Reading",
    items: ["A rotating stack — see the full list on the Uses page."],
  },
  {
    title: "Current goals",
    items: [
      "Get Agjenti AI to its next real milestone, not just its next feature.",
      "Publish something in the journal at least twice a month.",
    ],
  },
  {
    title: "Current challenges",
    items: [
      "Balancing depth of writing with the pace of actually shipping.",
      "Saying no to good ideas that aren't the right idea right now.",
    ],
  },
];

export default function NowPage() {
  return (
    <>
      <PageHeader
        eyebrow={`Last updated ${lastUpdated}`}
        title="Now"
        description="A snapshot of what's actually happening, updated whenever it stops being true. Inspired by nownownow.com."
      />
      <div className="container-editorial grid gap-14 pb-28 sm:grid-cols-2">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-display text-2xl italic text-foreground">{section.title}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
