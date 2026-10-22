import { test, expect } from "@playwright/test";

test.describe("SEO & Metadata", () => {
  test("homepage should have correct meta tags", async ({ page }) => {
    await page.goto("/");

    // Title
    await expect(page).toHaveTitle(
      "Sino Technology Solutions: IT, Cybersecurity, AI"
    );

    // Meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute(
      "content",
      /Enterprise IT infrastructure.*Lisbon.*Tampa/
    );

    // Viewport
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveAttribute("content", /width=device-width/);
  });

  test("should have OpenGraph tags", async ({ page }) => {
    await page.goto("/");

    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute("content", /.+/);

    const ogDescription = page.locator('meta[property="og:description"]');
    await expect(ogDescription).toHaveAttribute("content", /.+/);

    const ogImage = page.locator('meta[property="og:image"]');
    await expect(ogImage).toHaveAttribute("content", /og-image/);
  });

  test("should have Twitter Card tags", async ({ page }) => {
    await page.goto("/");

    const twitterCard = page.locator('meta[name="twitter:card"]');
    await expect(twitterCard).toHaveAttribute(
      "content",
      "summary_large_image"
    );

    const twitterTitle = page.locator('meta[name="twitter:title"]');
    await expect(twitterTitle).toHaveAttribute("content", /.+/);
  });

  test("should have structured data (JSON-LD)", async ({ page }) => {
    await page.goto("/");

    const structuredData = page.locator(
      'script[type="application/ld+json"]'
    );
    await expect(structuredData).toBeAttached();

    const jsonContent = await structuredData.textContent();
    expect(jsonContent).toContain("schema.org");
    expect(jsonContent).toContain("Organization");
    expect(jsonContent).toContain("Lisbon");
    expect(jsonContent).toContain("Tampa");
    expect(jsonContent).toContain("St. Petersburg");
    expect(jsonContent).toContain("JWHNQCQX9566");
    expect(jsonContent).toContain("10KG8");
  });

  test("robots.txt should be accessible", async ({ page }) => {
    const response = await page.goto("/robots.txt");
    expect(response?.status()).toBe(200);

    const content = await page.textContent("body");
    expect(content).toContain("User-Agent");
    expect(content).toContain("Sitemap: https://www.sinotechsol.com/sitemap.xml");
  });

  test("sitemap.xml should be accessible and valid", async ({ page }) => {
    const response = await page.goto("/sitemap.xml");
    expect(response?.status()).toBe(200);

    const content = await page.textContent("body");
    // Browser renders XML, so check for key content
    expect(content).toContain("urlset");
    expect(content).toContain("https://www.sinotechsol.com");
    expect(content).toContain("/about");
    expect(content).toContain("/blog");
    expect(content).toContain("/contact");
    expect(content).not.toContain("https://sinotechsol.com/");
  });

  test("every page has its own canonical and Open Graph tags", async ({ page }) => {
    const pages: { path: string; url: string; title: string }[] = [
      {
        path: "/",
        url: "https://www.sinotechsol.com",
        title: "Sino Technology Solutions: IT, Cybersecurity, AI",
      },
      {
        path: "/about",
        url: "https://www.sinotechsol.com/about",
        title: "About | Sino Technology Solutions",
      },
      {
        path: "/blog",
        url: "https://www.sinotechsol.com/blog",
        title: "Blog | Sino Technology Solutions",
      },
      {
        path: "/contact",
        url: "https://www.sinotechsol.com/contact",
        title: "Contact | Sino Technology Solutions",
      },
      {
        path: "/privacy",
        url: "https://www.sinotechsol.com/privacy",
        title: "Privacy Policy | Sino Technology Solutions",
      },
      {
        path: "/terms",
        url: "https://www.sinotechsol.com/terms",
        title: "Website Terms | Sino Technology Solutions",
      },
    ];

    const ogTitles: string[] = [];

    for (const entry of pages) {
      await page.goto(entry.path);
      const title = await page.title();
      expect(title).toBe(entry.title);
      expect(title.length).toBeLessThanOrEqual(65);

      const description = await page.locator('meta[name="description"]').getAttribute("content");
      expect(description && description.length).toBeGreaterThan(0);
      expect(description!.length).toBeLessThanOrEqual(160);

      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", entry.url);

      const ogTitle = await page.locator('meta[property="og:title"]').getAttribute("content");
      const ogUrl = await page.locator('meta[property="og:url"]').getAttribute("content");
      const ogImage = await page.locator('meta[property="og:image"]').first().getAttribute("content");
      expect(ogTitle).toBe(entry.title);
      expect(ogUrl).toBe(entry.url);
      expect(ogImage).toContain("https://www.sinotechsol.com/");
      ogTitles.push(ogTitle ?? "");
    }

    expect(new Set(ogTitles).size).toBe(pages.length);
  });

  test("responses include hardened security headers", async ({ request }) => {
    const response = await request.get("/");
    const headers = response.headers();
    expect(headers["strict-transport-security"]).toContain("includeSubDomains");
    expect(headers["content-security-policy"]).toContain("script-src");
    expect(headers["content-security-policy"]).toContain("https://va.vercel-scripts.com");
    expect(headers["content-security-policy"]).toContain("https://vitals.vercel-insights.com");
    expect(headers["permissions-policy"]).toContain("camera=()");
    expect(headers["permissions-policy"]).toContain("microphone=()");
    expect(headers["permissions-policy"]).toContain("geolocation=()");
  });
});
