import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacy } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: privacy.title,
  description: privacy.description,
  path: "/privacy",
});

export default function Page() {
  return <LegalPage content={privacy} />;
}
