import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentMeta } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export function ProjectCard({
  meta,
  basePath = "/projects",
}: {
  meta: ContentMeta;
  basePath?: string;
}) {
  return (
    <Link href={`${basePath}/${meta.slug}`}>
      <Card className="card-glow h-full">
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-base">{meta.title}</CardTitle>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {meta.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {meta.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export function BlogCard({ meta }: { meta: ContentMeta }) {
  return (
    <Link href={`/blog/${meta.slug}`}>
      <Card className="card-glow h-full">
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-base">{meta.title}</CardTitle>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
          </div>
          {meta.category && (
            <Badge variant="outline" className="w-fit">
              {meta.category}
            </Badge>
          )}
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {meta.description}
          </p>
          <p className="text-xs text-muted-foreground">{formatDate(meta.date)}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export function SystemDesignCard({ meta }: { meta: ContentMeta }) {
  return (
    <Link href={`/system-design/${meta.slug}`}>
      <Card className="card-glow h-full">
        <CardHeader>
          <CardTitle className="text-base">{meta.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">{meta.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {meta.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
