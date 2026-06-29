import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export type ContentType = "projects" | "blog" | "system-design";

export interface ContentMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image?: string;
  featured?: boolean;
  github?: string;
  demo?: string;
  canonical?: string;
  category?: string;
}

export function getContentSlugs(type: ContentType): string[] {
  const dir = path.join(contentDirectory, type);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getContentBySlug(type: ContentType, slug: string) {
  const filePath = path.join(contentDirectory, type, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    meta: { slug, ...(data as Omit<ContentMeta, "slug">) },
    content,
  };
}

export function getAllContent(type: ContentType) {
  return getContentSlugs(type)
    .map((slug) => getContentBySlug(type, slug))
    .sort(
      (a, b) =>
        new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
    );
}

export function getFeaturedProjects() {
  return getAllContent("projects").filter((item) => item.meta.featured);
}

export function getLatestBlogPosts(limit = 3) {
  return getAllContent("blog").slice(0, limit);
}

export function getData<T>(filename: string): T {
  const filePath = path.join(contentDirectory, "data", filename);
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents) as T;
}
