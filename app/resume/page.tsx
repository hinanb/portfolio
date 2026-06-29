import { Metadata } from "next";
import Link from "next/link";
import { Download, Mail, MapPin } from "lucide-react";
import { Container, PageHeader } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getData } from "@/lib/content";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Hinan Bilal — Senior Java Full Stack Engineer.",
};

type Experience = {
  company: string;
  title: string;
  startDate: string;
  endDate: string | null;
  highlights: string[];
  techStack: string[];
};

export default function ResumePage() {
  const experiences = getData<Experience[]>("experience.json");

  return (
    <Container className="py-12">
      <PageHeader
        title="Resume"
        description="Senior Java Full Stack Engineer with 5+ years of enterprise experience."
      />

      <div className="mb-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/resume.pdf" target="_blank">
            <Download className="h-4 w-4" />
            Download PDF
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Me</Link>
        </Button>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>{siteConfig.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p className="text-base font-medium text-foreground">
              {siteConfig.title}
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {siteConfig.location}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                {siteConfig.email}
              </a>
            </p>
          </CardContent>
        </Card>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Professional Summary</h2>
          <p className="text-muted-foreground">
            Senior Java Full Stack Engineer with 5+ years of experience building
            scalable, high-performance enterprise systems using Java, Spring Boot,
            and Angular. Expertise in microservices architecture, event-driven
            systems with Kafka, and cloud-native solutions on AWS. Proven track
            record of designing systems handling large-scale data (1TB+ logs) and
            high user traffic across banking, telecom, and government domains.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-base">{exp.title}</CardTitle>
                  <p className="text-accent">{exp.company}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {exp.highlights.slice(0, 4).map((h, j) => (
                      <li key={j}>• {h}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Education</h2>
          <p className="text-muted-foreground">
            Bachelor of Computer Science, NAMAL University
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Certifications</h2>
          <ul className="space-y-1 text-muted-foreground">
            <li>• AWS Certified Solutions Architect – Associate (Dec 2025)</li>
            <li>• AWS Certified Cloud Practitioner (Nov 2022)</li>
          </ul>
        </section>
      </div>
    </Container>
  );
}
