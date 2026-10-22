import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { pageMeta } from "@/content/copy";
import { contactEmail, siteUrl } from "@/content/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["700", "800"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageMeta.home.title,
    template: "%s | Sino Technology Solutions",
  },
  description: pageMeta.home.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sino Technology Solutions",
              url: siteUrl,
              email: contactEmail,
              description:
                "Enterprise IT infrastructure, cybersecurity, and AI research consulting.",
              address: [
                {
                  "@type": "PostalAddress",
                  addressLocality: "Lisbon",
                  addressCountry: "Portugal",
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Tampa",
                  addressRegion: "Florida",
                  addressCountry: "United States",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}
      >
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
