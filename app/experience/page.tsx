import { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/container";
import { ExperienceTimeline, type Experience } from "@/components/sections/experience-timeline";
import { getData } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience across banking, telecom, government, and media.",
};

export default function ExperiencePage() {
  const experiences = getData<Experience[]>("experience.json");

  return (
    <Container className="py-12">
      <PageHeader
        title="Experience"
        description="5+ years building enterprise systems across banking, telecom, government, and media."
      />
      <ExperienceTimeline experiences={experiences} />
    </Container>
  );
}
