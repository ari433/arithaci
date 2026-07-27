"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { ArticleMeta } from "@/lib/journal";
import { ArticleCard } from "@/components/journal/article-card";
import { cn } from "@/lib/utils";

export function JournalList({ articles }: { articles: ArticleMeta[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(articles.map((a) => a.category)))],
    [articles],
  );

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = category === "All" || article.category === category;
      const matchesQuery =
        query.trim() === "" ||
        `${article.title} ${article.excerpt} ${article.tags.join(" ")}`
          .toLowerCase()
          .includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [articles, category, query]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                category === cat
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 rounded-full border border-border px-4 py-2 sm:w-64">
          <Search className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the journal…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-muted-foreground">No articles match your search.</p>
      ) : (
        <div>
          {filtered.map((article, i) => (
            <ArticleCard key={article.slug} article={article} featured={i === 0 && category === "All" && query === ""} />
          ))}
        </div>
      )}
    </div>
  );
}
