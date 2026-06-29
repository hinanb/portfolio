import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Container } from "@/components/layout/container";
import { TagList } from "@/components/sections/filter-bar";
import { Button } from "@/components/ui/button";
import { MDXContent } from "@/lib/mdx";
import { getContentBySlug, getContentSlugs } from "@/lib/content";
import { formatDate } from "@/lib/utils";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getContentSlugs("projects").map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const { meta } = getContentBySlug("projects", params.slug);
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const slugs = getContentSlugs("projects");
  if (!slugs.includes(params.slug)) notFound();

  const { meta, content } = getContentBySlug("projects", params.slug);

  return (
    <Container className="py-12">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Projects
      </Link>

      <article>
        <header className="mb-8 space-y-4">
          <h1 className="text-3xl font-bold sm:text-4xl">{meta.title}</h1>
          <p className="text-lg text-muted-foreground">{meta.description}</p>
          <div className="flex flex-wrap items-center gap-4">
            <TagList tags={meta.tags} />
            <span className="text-sm text-muted-foreground">
              {formatDate(meta.date)}
            </span>
          </div>
          <div className="flex gap-3">
            {meta.demo && (
              <Button asChild variant="outline" size="sm">
                <a href={meta.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {meta.github && (
              <Button asChild variant="outline" size="sm">
                <a href={meta.github} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        </header>

        <div className="prose-custom">
          <MDXContent source={content} />
        </div>
      </article>
    </Container>
  );
}
