import { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getData } from "@/lib/content";

export const metadata: Metadata = {
  title: "Talks & Presentations",
  description: "Technical talks and conference presentations.",
};

type Talk = {
  title: string;
  event: string;
  date: string;
  description: string;
};

export default function TalksPage() {
  const talks = getData<Talk[]>("talks.json");

  return (
    <Container className="py-12">
      <PageHeader
        title="Talks & Presentations"
        description="Sharing knowledge on microservices, system design, and Java backend engineering."
      />

      <div className="space-y-6">
        {talks.map((talk, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-base">{talk.title}</CardTitle>
              <p className="text-sm text-accent">{talk.event}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{talk.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
