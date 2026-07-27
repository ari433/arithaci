import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Say hello — for collaborations, speaking, or just to say hi.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Say hello"
        title="Contact"
        description="For collaborations, speaking invitations, press, or just to say hi — this goes straight to me."
      />
      <div className="container-editorial grid gap-14 pb-28 md:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Elsewhere</span>
            <div className="mt-3 flex flex-col gap-2">
              <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer" className="w-fit text-foreground/80 hover:text-foreground">
                X / Twitter
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="w-fit text-foreground/80 hover:text-foreground">
                Instagram
              </a>
              <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="w-fit text-foreground/80 hover:text-foreground">
                GitHub
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="w-fit text-foreground/80 hover:text-foreground">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
