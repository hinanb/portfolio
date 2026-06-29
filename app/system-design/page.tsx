import { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/container";
import { SystemDesignCard } from "@/components/sections/cards";
import { getAllContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "System Design",
  description: "Architecture case studies and system design patterns from production experience.",
};

export default function SystemDesignPage() {
  const designs = getAllContent("system-design");

  return (
    <Container className="py-12">
      <PageHeader
        title="System Design"
        description="Architecture gallery showcasing distributed systems expertise at scale."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {designs.map((design) => (
          <SystemDesignCard key={design.meta.slug} meta={design.meta} />
        ))}
      </div>
    </Container>
  );
}
