import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/sanity.queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://sinotechsol.com";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // Try to get blog posts, but gracefully handle if Sanity isn't configured
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await getAllPosts();
    blogPages = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug.current}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    // Sanity not configured, skip blog posts in sitemap
  }

  return [...staticPages, ...blogPages];
}
