import Link from "next/link";
import type { LegalContent } from "@/content/legal";

export function LegalPage({ content }: { content: LegalContent }) {
  return (
    <main className="min-h-screen px-6 pb-24 pt-32">
      <article className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">{content.title}</h1>
        <p className="mb-12 text-sm">Last updated: {content.updated}</p>
        <div className="space-y-10">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-4 text-2xl font-semibold">{section.heading}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-6">
          <a className="text-accent underline" href="mailto:info@sinotechsol.com">
            info@sinotechsol.com
          </a>
          <Link className="text-accent underline" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="text-accent underline" href="/terms">
            Website Terms
          </Link>
        </div>
      </article>
    </main>
  );
}
