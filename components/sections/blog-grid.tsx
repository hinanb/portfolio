"use client";

import { useState } from "react";
import { BlogCard } from "@/components/sections/cards";
import { FilterBar, useContentFilter } from "@/components/sections/filter-bar";
import { ContentMeta } from "@/lib/content";

export function BlogGrid({
  posts,
}: {
  posts: Array<{ meta: ContentMeta; content: string }>;
}) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(posts.flatMap((p) => p.meta.tags))
  ).sort();

  const filtered = useContentFilter(posts, search, activeTag);

  return (
    <>
      <FilterBar
        tags={allTags}
        activeTag={activeTag}
        onTagChange={setActiveTag}
        search={search}
        onSearchChange={setSearch}
        placeholder="Search blog posts..."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard key={post.meta.slug} meta={post.meta} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground">No posts found.</p>
      )}
    </>
  );
}
