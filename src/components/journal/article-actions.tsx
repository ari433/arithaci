"use client";

import { useEffect, useState } from "react";
import { Bookmark, Check, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "arithaci:bookmarks";

function readBookmarks(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function ArticleActions({ slug, title }: { slug: string; title: string }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read of localStorage on mount
    setBookmarked(readBookmarks().includes(slug));
  }, [slug]);

  function toggleBookmark() {
    const current = readBookmarks();
    const next = current.includes(slug)
      ? current.filter((s) => s !== slug)
      : [...current, slug];
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setBookmarked(next.includes(slug));
  }

  async function share() {
    const url = `${window.location.origin}/journal/${slug}`;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // user cancelled — fall through to clipboard
      }
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={toggleBookmark}
        aria-pressed={bookmarked}
        className={cn(
          "flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors",
          bookmarked ? "border-accent text-accent" : "border-border text-muted-foreground hover:text-foreground",
        )}
      >
        <Bookmark className="h-4 w-4" strokeWidth={1.5} fill={bookmarked ? "currentColor" : "none"} />
        {bookmarked ? "Saved" : "Save"}
      </button>
      <button
        type="button"
        onClick={share}
        className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {copied ? <Check className="h-4 w-4" strokeWidth={1.5} /> : <Share2 className="h-4 w-4" strokeWidth={1.5} />}
        {copied ? "Copied" : "Share"}
      </button>
    </div>
  );
}
