import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { pageMeta } from "@/content/copy";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: pageMeta.contact.title,
  description: pageMeta.contact.description,
  path: "/contact",
});

export default function ContactPage() {
  return <Contact standalone />;
}
