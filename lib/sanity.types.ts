import type { PortableTextBlock } from "@portabletext/react";

// Sanity blog post type
export interface BlogPost {
  _id: string;
  _createdAt: string;
  title: string;
  slug: {
    current: string;
  };
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
