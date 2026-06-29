"use client";

import { useMemo } from "react";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function FilterBar({
  tags,
  activeTag,
  onTagChange,
  search,
  onSearchChange,
  placeholder = "Search...",
}: {
  tags: string[];
  activeTag: string | null;
  onTagChange: (tag: string | null) => void;
  search: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="mb-8 space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-md border border-border bg-muted/50 py-2 pl-10 pr-4 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onTagChange(null)}
          className={cn(
            "rounded-full border px-3 py-1 text-xs transition-colors",
            activeTag === null
              ? "border-accent bg-accent/10 text-accent"
              : "border-border text-muted-foreground hover:border-accent/50"
          )}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagChange(tag === activeTag ? null : tag)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs transition-colors",
              activeTag === tag
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-muted-foreground hover:border-accent/50"
            )}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export function useContentFilter<T extends { meta: { title: string; description: string; tags: string[] } }>(
  items: T[],
  search: string,
  activeTag: string | null
) {
  return useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        !search ||
        item.meta.title.toLowerCase().includes(search.toLowerCase()) ||
        item.meta.description.toLowerCase().includes(search.toLowerCase());
      const matchesTag =
        !activeTag || item.meta.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [items, search, activeTag]);
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge key={tag}>{tag}</Badge>
      ))}
    </div>
  );
}
