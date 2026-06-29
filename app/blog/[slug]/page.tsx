import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Container } from "@/components/layout/container";
import { TagList } from "@/components/sections/filter-bar";
import { Badge } from "@/components/ui/badge";
import { MDXContent } from "@/lib/mdx";
import { getContentBySlug, getContentSlugs } from "@/lib/content";
import { formatDate, readingTime } from "@/lib/utils";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getContentSlugs("blog").map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const { meta } = getContentBySlug("blog", params.slug);
  return {
    title: meta.title,
    description: meta.description,
    alternates: meta.canonical
      ? { canonical: meta.canonical }
      : undefined,
  };
}

export default function BlogDetailPage({ params }: Props) {
  const slugs = getContentSlugs("blog");
  if (!slugs.includes(params.slug)) notFound();

  const { meta, content } = getContentBySlug("blog", params.slug);

  return (
    <Container className="py-12">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      <article>
        <header className="mb-8 space-y-4">
          {meta.category && <Badge variant="outline">{meta.category}</Badge>}
          <h1 className="text-3xl font-bold sm:text-4xl">{meta.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>{formatDate(meta.date)}</span>
            <span>{readingTime(content)}</span>
          </div>
          <TagList tags={meta.tags} />
          {meta.canonical && (
            <a
              href={meta.canonical}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
            >
              <ExternalLink className="h-3 w-3" />
              Originally published on Medium
            </a>
          )}
        </header>

        <div className="prose-custom">
          <MDXContent source={content} />
        </div>
      </article>
    </Container>
  );
}
