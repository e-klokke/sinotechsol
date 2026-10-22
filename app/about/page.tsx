import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { about, pageMeta } from "@/content/copy";
import { buildMetadata } from "@/lib/seo";
import { ctaButtonClass } from "@/lib/cta";

export const metadata: Metadata = buildMetadata({
  title: pageMeta.about.title,
  description: pageMeta.about.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Professional Headshot */}
        <div className="flex justify-center mb-12">
          <div className="relative w-64 h-64 rounded-full overflow-hidden ring-4 ring-accent/20">
            <Image
              src={about.photoPath}
              alt={about.photoAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {about.name}, {about.title}
          </h1>
        </div>

        {/* Biography */}
        <div className="space-y-6 text-gray-400 leading-relaxed mb-16">
          {about.biography.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-12 border-t border-gray-600/30">
          <Link
            href="/contact"
            className={ctaButtonClass}
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </div>
  );
}
