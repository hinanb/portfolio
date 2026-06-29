import { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getData } from "@/lib/content";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name} — ${siteConfig.title}`,
};

type Skills = Record<string, string[]>;

export default function AboutPage() {
  const skills = getData<Skills>("skills.json");

  return (
    <Container className="py-12">
      <PageHeader
        title="About Me"
        description="Senior Java Full Stack Engineer building scalable enterprise systems."
      />

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="space-y-4 text-muted-foreground">
            <p>
              I&apos;m a Senior Java Full Stack Engineer with 5+ years of experience
              building scalable, high-performance enterprise systems across banking,
              telecom, government, and media domains.
            </p>
            <p>
              I specialize in microservices architecture, event-driven systems with
              Kafka, and cloud-native solutions on AWS. I&apos;ve delivered production
              systems at scale — including a centralized ELK stack processing 1TB+
              logs, retail banking platforms serving 375+ branches, and backend
              infrastructure for a US media platform with 150M+ monthly users.
            </p>
            <p>
              Beyond engineering, I lead teams. At Confiz I serve as both Senior
              Engineer and Line Manager, defining KPIs, mentoring engineers, and
              driving architectural decisions across government transformation projects.
            </p>
            <p>
              Entrepreneur at heart — I built PakistanTravelAdvisor.com from scratch,
              grew it to 10,000+ visits and 7,000+ community members, and sold it
              to a Swedish entrepreneur in 2022.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold">Career Highlights</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Designed ELK stack processing 1TB+ logs across government systems</li>
              <li>• Built banking modules for 375+ branch retail platform</li>
              <li>• Backend for US media platform with 150M+ monthly users</li>
              <li>• Conducted 50+ technical interviews</li>
              <li>• Startup acquired in 2022</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Location</p>
                <p>{siteConfig.location}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">Education</p>
                <p>B.S. Computer Science, NAMAL University</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-2xl font-semibold">Tech Stack</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="text-sm capitalize">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}
