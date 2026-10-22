import type { Metadata } from "next";
import { siteUrl } from "@/content/site";

const BRAND = "Sino Technology Solutions";
const TITLE_LIMIT = 65;
const DESCRIPTION_LIMIT = 160;
const SUFFIX = ` | ${BRAND}`;

export function absoluteUrl(path: string): string {
  if (path === "/" || path === "") return siteUrl;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized}`;
}

export function renderedTitle(pageTitle: string): string {
  const full = pageTitle.includes(BRAND) ? pageTitle.trim() : `${pageTitle.trim()}${SUFFIX}`;
  if (full.length <= TITLE_LIMIT) return full;

  const budget = TITLE_LIMIT - SUFFIX.length - 3;
  let cut = pageTitle.replace(SUFFIX, "").trim().slice(0, Math.max(budget, 1)).trimEnd();
  const lastSpace = cut.lastIndexOf(" ");
  if (lastSpace > 12) cut = cut.slice(0, lastSpace);
  const trimmed = `${cut}...${SUFFIX}`;
  return trimmed.length <= TITLE_LIMIT ? trimmed : trimmed.slice(0, TITLE_LIMIT);
}

export function renderedDescription(description: string): string {
  const clean = description.replace(/\s+/g, " ").trim();
  if (clean.length <= DESCRIPTION_LIMIT) return clean;

  let cut = clean.slice(0, DESCRIPTION_LIMIT - 3).trimEnd();
  const lastSpace = cut.lastIndexOf(" ");
  if (lastSpace > 40) cut = cut.slice(0, lastSpace);
  const trimmed = `${cut}...`;
  return trimmed.length <= DESCRIPTION_LIMIT ? trimmed : trimmed.slice(0, DESCRIPTION_LIMIT);
}

export function buildMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const documentTitle = renderedTitle(title);
  const documentDescription = renderedDescription(description);
  const url = absoluteUrl(path);
  const ogImage = image ?? `${siteUrl}/og-image.png`;
  const templateTitle = `${title.trim()}${SUFFIX}`;
  const titleField: Metadata["title"] =
    documentTitle === templateTitle ? title.trim() : { absolute: documentTitle };

  return {
    title: titleField,
    description: documentDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: BRAND,
      title: documentTitle,
      description: documentDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: documentTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: documentTitle,
      description: documentDescription,
      images: [ogImage],
    },
  };
}
