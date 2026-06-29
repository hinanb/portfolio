import { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Container, PageHeader } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getData } from "@/lib/content";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Open Source",
  description: "Open source contributions and published packages.",
};

type OpenSourceProject = {
  name: string;
  description: string;
  url: string;
  tags: string[];
  type: string;
};

export default function OpenSourcePage() {
  const projects = getData<OpenSourceProject[]>("open-source.json");

  return (
    <Container className="py-12">
      <PageHeader
        title="Open Source"
        description="Contributing to the developer community through open source packages."
      />

      <div className="mb-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name}>
            <CardHeader>
              <CardTitle className="text-base">{project.name}</CardTitle>
              <Badge variant="outline">{project.type}</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
              >
                View on PyPI
                <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">GitHub</CardTitle>
        </CardHeader>
        <CardContent>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:underline"
          >
            github.com/hinanb
            <ExternalLink className="h-3 w-3" />
          </a>
        </CardContent>
      </Card>
    </Container>
  );
}
