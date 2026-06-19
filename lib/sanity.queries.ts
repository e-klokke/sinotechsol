import { client } from "./sanity.client";
import type { BlogPost } from "./sanity.types";

// Get all blog posts
export async function getAllPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage {
      asset->,
      alt
    },
    publishedAt,
    author-> {
      name,
      image
    }
  }`;

  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage {
      asset->,
      alt
    },
    body,
    publishedAt,
    author-> {
      name,
      image
    }
  }`;

  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

// Get recent posts (for homepage or sidebar)
export async function getRecentPosts(limit: number = 3): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...${limit}] {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage {
      asset->,
      alt
    },
    publishedAt
  }`;

  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return [];
  }
}
