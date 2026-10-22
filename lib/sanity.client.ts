import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

let cached: SanityClient | null | undefined;

export function getSanityClient(): SanityClient | null {
  if (cached !== undefined) return cached;

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  if (!projectId) {
    cached = null;
    return cached;
  }

  cached = createClient({
    projectId,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2024-01-01",
    useCdn: true,
  });
  return cached;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  const client = getSanityClient();
  if (!client) {
    throw new Error("Sanity is not configured");
  }
  return imageUrlBuilder(client).image(source);
}
