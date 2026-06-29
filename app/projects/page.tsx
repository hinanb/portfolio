import { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/container";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { getAllContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects across banking, government, travel, and open source.",
};

export default function ProjectsPage() {
  const projects = getAllContent("projects");

  return (
    <Container className="py-12">
      <PageHeader
        title="Projects"
        description="Building systems that scale — from startups to enterprise."
      />
      <ProjectsGrid projects={projects} />
    </Container>
  );
}
