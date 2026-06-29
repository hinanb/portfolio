import { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Container, PageHeader } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getData } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Professional certifications in AWS and cloud architecture.",
};

type Certification = {
  name: string;
  issuer: string;
  date: string;
  verifyUrl: string;
};

export default function CertificationsPage() {
  const certifications = getData<Certification[]>("certifications.json");

  return (
    <Container className="py-12">
      <PageHeader
        title="Certifications"
        description="Validated expertise in cloud architecture and AWS services."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {certifications.map((cert) => (
          <Card key={cert.name}>
            <CardHeader>
              <CardTitle className="text-base">{cert.name}</CardTitle>
              <Badge variant="secondary">{cert.issuer}</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Issued: {formatDate(cert.date + "-01")}
              </p>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
              >
                Verify Credential
                <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
