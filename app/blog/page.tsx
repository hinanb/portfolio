import { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/container";
import { BlogGrid } from "@/components/sections/blog-grid";
import { getAllContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical writing on Java, Spring Boot, system design, and backend engineering.",
};

export default function BlogPage() {
  const posts = getAllContent("blog");

  return (
    <Container className="py-12">
      <PageHeader
        title="Technical Blog"
        description="Notes and articles on Java, microservices, Kafka, and system design."
      />
      <BlogGrid posts={posts} />
    </Container>
  );
}
