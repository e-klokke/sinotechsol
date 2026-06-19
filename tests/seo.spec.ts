import { test, expect } from "@playwright/test";

test.describe("SEO & Metadata", () => {
  test("homepage should have correct meta tags", async ({ page }) => {
    await page.goto("/");

    // Title
    await expect(page).toHaveTitle(
      "Sino Technology Solutions: IT Infrastructure, Cybersecurity, AI Research"
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
  });

  test("robots.txt should be accessible", async ({ page }) => {
    const response = await page.goto("/robots.txt");
    expect(response?.status()).toBe(200);

    const content = await page.textContent("body");
    expect(content).toContain("User-Agent");
    expect(content).toContain("Sitemap");
  });

  test("sitemap.xml should be accessible and valid", async ({ page }) => {
    const response = await page.goto("/sitemap.xml");
    expect(response?.status()).toBe(200);

    const content = await page.textContent("body");
    // Browser renders XML, so check for key content
    expect(content).toContain("urlset");
    expect(content).toContain("sinotechsol.com");
    expect(content).toContain("/about");
    expect(content).toContain("/blog");
    expect(content).toContain("/contact");
  });
});
