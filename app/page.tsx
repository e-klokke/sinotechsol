import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Capabilities } from "@/components/sections/Capabilities";
import { Partners } from "@/components/sections/Partners";
import { Contact } from "@/components/sections/Contact";
import { pageMeta } from "@/content/copy";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: pageMeta.home.title,
  description: pageMeta.home.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Capabilities />
      <Partners />
      <Contact />
    </>
  );
}
