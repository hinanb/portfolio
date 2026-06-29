import { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getData } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Now",
  description: "What Hinan Bilal is currently working on, learning, and focused on.",
};

type NowData = {
  lastUpdated: string;
  workingOn: string[];
  learning: string[];
  reading: string[];
  focusAreas: string[];
};

export default function NowPage() {
  const now = getData<NowData>("now.json");

  return (
    <Container className="py-12">
      <PageHeader
        title="Now"
        description="What I'm focused on at the moment. Inspired by the /now page movement."
      />
      <p className="mb-8 text-sm text-muted-foreground">
        Last updated: {formatDate(now.lastUpdated)}
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Working On</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {now.workingOn.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {now.learning.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Reading</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {now.reading.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Focus Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {now.focusAreas.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
