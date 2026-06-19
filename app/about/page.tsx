import Link from "next/link";
import type { Metadata } from "next";
import { about } from "@/content/copy";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Eric Bell, Founder and CEO of Sino Technology Solutions. CEH Master certified with 15+ years of enterprise IT experience.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Headshot Placeholder */}
        <div className="flex justify-center mb-12">
          <div className="w-48 h-48 bg-slate rounded-full flex items-center justify-center text-gray-400">
            {/* TODO(eric): Add LinkedIn photo here - can also link to LinkedIn profile */}
            <span className="text-sm text-center px-4">Photo Placeholder</span>
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {about.name}
          </h1>
          <p className="text-xl text-gray-400">{about.title}</p>
        </div>

        {/* Professional Background */}
        <div className="space-y-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Professional Background</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                <strong className="text-white">Certifications:</strong>{" "}
                {about.certifications.join(", ")}
              </p>
              <p>
                <strong className="text-white">Education:</strong> {about.education}
              </p>
              <p>
                <strong className="text-white">Experience:</strong> 15+ years in enterprise IT including{" "}
                {about.experience.join(", ")}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Government Credentials</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                <strong className="text-white">{about.government.registry}</strong>
              </p>
              <p>
                <strong className="text-white">NAICS Codes:</strong>{" "}
                {about.government.naics.join(", ")}
              </p>
              <p className="text-sm">
                Cleared for federal, state, and local contracts
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Headquarters</h2>
            <p className="text-gray-400">{about.headquarters}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-12 border-t border-gray-600/30">
          <Link
            href="/contact"
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-hover transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </div>
  );
}
