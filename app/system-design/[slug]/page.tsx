import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/container";
import { TagList } from "@/components/sections/filter-bar";
import { MDXContent } from "@/lib/mdx";
import { getContentBySlug, getContentSlugs } from "@/lib/content";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getContentSlugs("system-design").map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const { meta } = getContentBySlug("system-design", params.slug);
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function SystemDesignDetailPage({ params }: Props) {
  const slugs = getContentSlugs("system-design");
  if (!slugs.includes(params.slug)) notFound();

  const { meta, content } = getContentBySlug("system-design", params.slug);

  return (
    <Container className="py-12">
      <Link
        href="/system-design"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to System Design
      </Link>

      <article>
        <header className="mb-8 space-y-4">
          <h1 className="text-3xl font-bold sm:text-4xl">{meta.title}</h1>
          <p className="text-lg text-muted-foreground">{meta.description}</p>
          <TagList tags={meta.tags} />
        </header>

        <div className="prose-custom">
          <MDXContent source={content} />
        </div>
      </article>
    </Container>
  );
}
