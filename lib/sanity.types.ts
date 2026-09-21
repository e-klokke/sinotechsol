import type { PortableTextBlock } from "@portabletext/react";

// Sanity blog post type
export interface BlogPost {
  _id: string;
  _createdAt: string;
  title: string;
  slug: {
    current: string;
  };
  status?: "draft" | "review" | "published";
  pillar?: "IT Infrastructure" | "Cybersecurity" | "AI Research";
  excerpt?: string;
  mainImage?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  };
  body: PortableTextBlock[];
  publishedAt: string;
  readTime?: string;
  awarenessLevel?: "awareness" | "consideration" | "decision";
  seoTitle?: string;
  seoDescription?: string;
  author?: {
    name: string;
    image?: {
      asset: {
        _ref: string;
        _type: "reference";
      };
    };
  };
}

// GROQ query types
export interface BlogListQuery {
  posts: BlogPost[];
  total: number;
}
