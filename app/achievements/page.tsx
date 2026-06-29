import { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getData } from "@/lib/content";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Awards, recognitions, and key career metrics.",
};

type Achievements = {
  awards: Array<{ title: string; organization: string; description: string }>;
  metrics: Array<{ label: string; value: string }>;
};

export default function AchievementsPage() {
  const achievements = getData<Achievements>("achievements.json");

  return (
    <Container className="py-12">
      <PageHeader
        title="Achievements"
        description="Recognition and milestones throughout my career."
      />

      <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
        {achievements.metrics.map((metric) => (
          <Card key={metric.label} className="text-center">
            <CardContent className="pt-6">
              <p className="text-2xl font-bold text-accent">{metric.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.awards.map((award) => (
          <Card key={award.title}>
            <CardHeader>
              <CardTitle className="text-base">{award.title}</CardTitle>
              <p className="text-sm text-accent">{award.organization}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{award.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
