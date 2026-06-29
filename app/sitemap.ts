import { MetadataRoute } from "next";
import { getContentSlugs } from "@/lib/content";
import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = [
    "",
    "/about",
    "/experience",
    "/projects",
    "/system-design",
    "/blog",
    "/resume",
    "/contact",
    "/now",
    "/achievements",
    "/certifications",
    "/open-source",
    "/talks",
    "/mentoring",
    "/reading-list",
    "/faq",
  ];

  const projectSlugs = getContentSlugs("projects");
  const blogSlugs = getContentSlugs("blog");
  const designSlugs = getContentSlugs("system-design");

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...projectSlugs.map((slug) => ({
      url: `${baseUrl}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...designSlugs.map((slug) => ({
      url: `${baseUrl}/system-design/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
