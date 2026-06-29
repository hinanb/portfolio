import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Hero, Stats } from "@/components/sections/hero";
import { ProjectCard, BlogCard } from "@/components/sections/cards";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects, getLatestBlogPosts } from "@/lib/content";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 4);
  const latestPosts = getLatestBlogPosts(3);

  return (
    <Container>
      <Hero />
      <Stats />

      <Section
        title="Featured Projects"
        description="Selected work across banking, government, travel, and open source."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.meta.slug} meta={project.meta} />
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      <Section
        title="Latest Blog Posts"
        description="Technical writing on Java, system design, and backend engineering."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.meta.slug} meta={post.meta} />
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/blog">
              Read All Posts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </Container>
  );
}
