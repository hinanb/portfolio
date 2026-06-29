"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type Experience = {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string | null;
  domain: string;
  highlights: string[];
  techStack: string[];
};

const domains = ["All", "Banking", "Government", "Telecom", "Media", "Various"];

function formatPeriod(start: string, end: string | null) {
  const startFormatted = new Date(start).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  if (!end) return `${startFormatted} — Present`;
  const endFormatted = new Date(end).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  return `${startFormatted} — ${endFormatted}`;
}

export function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  const [activeDomain, setActiveDomain] = useState("All");

  const filtered =
    activeDomain === "All"
      ? experiences
      : experiences.filter((exp) => exp.domain === activeDomain);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {domains.map((domain) => (
          <button
            key={domain}
            onClick={() => setActiveDomain(domain)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs transition-colors",
              activeDomain === domain
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-muted-foreground hover:border-accent/50"
            )}
          >
            {domain}
          </button>
        ))}
      </div>

      <div className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
        {filtered.map((exp) => (
          <div key={exp.id} className="relative pl-8">
            <div className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background" />
            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <p className="mt-1 text-accent">{exp.company}</p>
                  </div>
                  <Badge variant="outline">{exp.domain}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {formatPeriod(exp.startDate, exp.endDate)} · {exp.location}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>• {highlight}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
