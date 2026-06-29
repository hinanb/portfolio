import { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { Container, PageHeader } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Hinan Bilal for senior engineering roles and collaborations.",
};

export default function ContactPage() {
  return (
    <Container className="py-12">
      <PageHeader
        title="Contact"
        description="Open to senior engineering and lead roles — remote, hybrid, or onsite. Targeting GCC and global opportunities."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              action="https://formspree.io/f/xplaceholder"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md border border-border bg-muted/50 px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-border bg-muted/50 px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-md border border-border bg-muted/50 px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
              <Button type="submit">Send Message</Button>
              <p className="text-xs text-muted-foreground">
                Replace the Formspree endpoint in contact page with your own form ID.
              </p>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-accent"
              >
                <Mail className="h-5 w-5" />
                {siteConfig.email}
              </a>
              <p className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                {siteConfig.location}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Connect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent"
              >
                GitHub
              </a>
              <a
                href={siteConfig.links.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent"
              >
                Medium
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}
