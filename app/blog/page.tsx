import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.client";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on enterprise IT infrastructure, cybersecurity, and AI research from Sino Technology Solutions.",
};

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Blog
        </h1>
        <p className="text-xl text-gray-400 mb-16">
          Insights on enterprise IT, cybersecurity, and AI research.
        </p>

        {posts.length === 0 ? (
          <div className="bg-slate rounded-xl p-12 border border-gray-600/30 text-center">
            <p className="text-gray-400 text-lg">
              No posts yet. Check back soon for insights on enterprise IT, cybersecurity, and AI research.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="bg-slate rounded-xl overflow-hidden border border-gray-600/30 hover:border-accent/50 transition-colors group"
              >
                {post.mainImage && (
                  <div className="aspect-[16/9] bg-navy overflow-hidden">
                    <img
                      src={urlFor(post.mainImage).width(800).height(450).url()}
                      alt={post.mainImage.alt || post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <time className="text-sm text-gray-400 mb-2 block">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-gray-400 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
