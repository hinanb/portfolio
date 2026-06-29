"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/sections/cards";
import { FilterBar, useContentFilter } from "@/components/sections/filter-bar";
import { ContentMeta } from "@/lib/content";

export function ProjectsGrid({
  projects,
}: {
  projects: Array<{ meta: ContentMeta; content: string }>;
}) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(projects.flatMap((p) => p.meta.tags))
  ).sort();

  const filtered = useContentFilter(projects, search, activeTag);

  return (
    <>
      <FilterBar
        tags={allTags}
        activeTag={activeTag}
        onTagChange={setActiveTag}
        search={search}
        onSearchChange={setSearch}
        placeholder="Search projects..."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.meta.slug} meta={project.meta} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground">No projects found.</p>
      )}
    </>
  );
}
