import { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Mentoring",
  description: "Engineering mentorship, team leadership, and technical interview experience.",
};

export default function MentoringPage() {
  return (
    <Container className="py-12">
      <PageHeader
        title="Mentoring"
        description="Helping engineers grow through code reviews, guidance, and technical leadership."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Philosophy</h2>
            <p className="text-muted-foreground">
              I believe great engineers are built through consistent mentorship,
              constructive code reviews, and exposure to real-world system design
              challenges. My approach focuses on teaching how to think about
              problems, not just how to solve them.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Experience</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Line Manager at Confiz — mentoring engineers across multiple teams</li>
              <li>• Conducted 50+ technical interviews</li>
              <li>• Led team of 3 developers during freelance period</li>
              <li>• Regular code reviews and architecture discussions</li>
            </ul>
          </section>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Areas I Mentor On</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Java & Spring Boot backend development</li>
                <li>• Microservices architecture & system design</li>
                <li>• Kafka & event-driven systems</li>
                <li>• Career growth for mid-level engineers</li>
                <li>• Technical interview preparation</li>
              </ul>
            </CardContent>
          </Card>

          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
