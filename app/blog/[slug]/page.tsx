import type { Metadata } from "next";
import Link from "next/link";
import { diagnosticCta } from "@/content/copy";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getAllPosts, getPostBySlug } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.client";
import { buildMetadata } from "@/lib/seo";
import { ctaButtonClass } from "@/lib/cta";
import type { BlogPost } from "@/lib/sanity.types";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    return posts.map((post) => ({
      slug: post.slug.current,
    }));
  } catch {
    // Sanity not configured, no blog posts to generate
    return [];
  }
}

function postImage(post: BlogPost): string | undefined {
  if (!post.mainImage || !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return undefined;
  try {
    return urlFor(post.mainImage).width(1200).height(630).url();
  } catch {
    return undefined;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getPostBySlug(params.slug);

    if (!post) {
      return buildMetadata({
        title: "Post Not Found",
        description: "That post is not available on the Sino Technology Solutions blog.",
        path: `/blog/${params.slug}`,
      });
    }

    return buildMetadata({
      title: post.seoTitle || post.title,
      description:
        post.seoDescription ||
        post.excerpt ||
        `Read ${post.title} from Sino Technology Solutions.`,
      path: `/blog/${params.slug}`,
      image: postImage(post),
    });
  } catch {
    return buildMetadata({
      title: "Blog",
      description: "Insights on enterprise IT, cybersecurity, and AI research.",
      path: "/blog",
    });
  }
}

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPostPage({ params }: Props) {
  let post;
  try {
    post = await getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <article className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors mb-8"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

        <header className="mb-12">
          <time className="text-sm text-gray-400 mb-4 block">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          {post.author && (
            <div className="flex items-center gap-3">
              {post.author.image && (
                <img
                  src={urlFor(post.author.image).width(48).height(48).url()}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full"
                />
              )}
              <span className="text-gray-400">{post.author.name}</span>
            </div>
          )}
        </header>

        {post.mainImage && (
          <div className="aspect-[16/9] bg-slate rounded-xl overflow-hidden mb-12">
            <img
              src={urlFor(post.mainImage).width(1200).height(675).url()}
              alt={post.mainImage.alt || post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-invert prose-lg max-w-none">
          <PortableText
            value={post.body}
            components={{
              block: {
                normal: ({ children }) => (
                  <p className="text-gray-400 leading-relaxed mb-6">{children}</p>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-semibold text-white mt-12 mb-6">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
                    {children}
                  </h3>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-accent pl-6 my-8 text-gray-300 italic">
                    {children}
                  </blockquote>
                ),
              },
              marks: {
                link: ({ value, children }) => {
                  const target = value?.href?.startsWith("http") ? "_blank" : undefined;
                  return (
                    <a
                      href={value?.href}
                      target={target}
                      rel={target === "_blank" ? "noopener noreferrer" : undefined}
                      className="text-accent hover:text-accent-hover transition-colors underline"
                    >
                      {children}
                    </a>
                  );
                },
                strong: ({ children }) => (
                  <strong className="text-white font-semibold">{children}</strong>
                ),
                code: ({ children }) => (
                  <code className="bg-slate text-accent px-2 py-1 rounded text-sm font-mono">
                    {children}
                  </code>
                ),
              },
              types: {
                image: ({ value }) => (
                  <div className="my-8 rounded-xl overflow-hidden">
                    <img
                      src={urlFor(value).width(1200).url()}
                      alt={value.alt || ""}
                      className="w-full"
                    />
                    {value.caption && (
                      <p className="text-sm text-gray-400 text-center mt-2">
                        {value.caption}
                      </p>
                    )}
                  </div>
                ),
              },
              list: {
                bullet: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 text-gray-400 mb-6">
                    {children}
                  </ul>
                ),
                number: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-2 text-gray-400 mb-6">
                    {children}
                  </ol>
                ),
              },
            }}
          />
        </div>
        {params.slug === diagnosticCta.slug && (
          <div className="mt-8">
            <Link
              href={diagnosticCta.href}
              className={ctaButtonClass}
            >
              {diagnosticCta.label}
            </Link>
          </div>
        )}
      </article>
    </div>
  );
}
