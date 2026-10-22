import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { terms } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: terms.title,
  description: terms.description,
  path: "/terms",
});

export default function Page() {
  return <LegalPage content={terms} />;
}
