import { client } from "./sanity.client";
import type { BlogPost } from "./sanity.types";

// Sanity non-draft records without a status field are legacy published posts.
// Explicit draft/review statuses and Sanity draft documents remain excluded.
// Get all published blog posts
export async function getAllPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post" && !( _id in path("drafts.**") ) && (status == "published" || !defined(status))] | order(publishedAt desc) {
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
    pillar,
    readTime,
    awarenessLevel,
    seoTitle,
    seoDescription,
    author {
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

// Get a single published post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug && !( _id in path("drafts.**") ) && (status == "published" || !defined(status))][0] {
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
    pillar,
    readTime,
    awarenessLevel,
    seoTitle,
    seoDescription,
    author {
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

// Get recent published posts (for homepage or sidebar)
export async function getRecentPosts(limit: number = 3): Promise<BlogPost[]> {
  const query = `*[_type == "post" && !( _id in path("drafts.**") ) && (status == "published" || !defined(status))] | order(publishedAt desc)[0...${limit}] {
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
    pillar,
    readTime
  }`;

  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return [];
  }
}
