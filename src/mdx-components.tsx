import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ className, ...props }) => (
      <h2
        className={cn("font-display mt-14 mb-4 text-3xl italic text-foreground scroll-mt-28", className)}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn("font-display mt-10 mb-3 text-2xl italic text-foreground scroll-mt-28", className)}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p className={cn("text-editorial text-foreground/85", className)} {...props} />
    ),
    a: ({ className, href, ...props }) => {
      if (href?.startsWith("/")) {
        return (
          <Link
            href={href}
            className={cn("text-foreground underline decoration-accent/50 underline-offset-4 hover:decoration-accent", className)}
            {...props}
          />
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className={cn("text-foreground underline decoration-accent/50 underline-offset-4 hover:decoration-accent", className)}
          {...props}
        />
      );
    },
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "font-display my-8 border-l-2 border-accent pl-6 text-xl italic text-foreground/80",
          className,
        )}
        {...props}
      />
    ),
    ul: ({ className, ...props }) => (
      <ul className={cn("text-editorial my-6 list-disc space-y-2 pl-6 text-foreground/85", className)} {...props} />
    ),
    ol: ({ className, ...props }) => (
      <ol className={cn("text-editorial my-6 list-decimal space-y-2 pl-6 text-foreground/85", className)} {...props} />
    ),
    hr: ({ className, ...props }) => (
      <hr className={cn("my-14 border-border", className)} {...props} />
    ),
    code: ({ className, ...props }) => (
      <code
        className={cn(
          "rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground",
          className,
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }) => (
      <pre
        className={cn(
          "my-8 overflow-x-auto rounded-xl border border-border bg-muted p-5 font-mono text-sm leading-relaxed",
          className,
        )}
        {...props}
      />
    ),
    img: ({ className, alt, src, ...props }) => (
      <span className="my-10 block overflow-hidden rounded-2xl border border-border">
        {/* eslint-disable-next-line @next/next/no-img-element -- MDX content images are arbitrary remote URLs */}
        <img src={typeof src === "string" ? src : undefined} alt={alt ?? ""} className={cn("w-full", className)} {...props} />
      </span>
    ),
    ...components,
  };
}
