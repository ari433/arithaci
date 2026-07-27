import Link from "next/link";
import { allNav, siteConfig } from "@/lib/site-config";
import { NewsletterForm } from "@/components/shared/newsletter-form";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-editorial grid gap-16 py-20 md:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col gap-6">
          <p className="font-display max-w-md text-2xl italic leading-snug text-foreground md:text-3xl">
            &ldquo;Everything started here — and it&rsquo;s still being written.&rdquo;
          </p>
          <NewsletterForm />
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {allNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="container-editorial flex flex-col gap-4 border-t border-border py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {siteConfig.birthYear}–{year} {siteConfig.author}. Built by hand, one page at a time.
        </span>
        <div className="flex gap-5">
          <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="hover:text-foreground">
            Instagram
          </a>
          <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer" className="hover:text-foreground">
            X
          </a>
          <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer" className="hover:text-foreground">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}
