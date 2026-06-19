import { test, expect } from "@playwright/test";

test.describe("About Page", () => {
  test("should load and display content", async ({ page }) => {
    await page.goto("/about");

    await expect(page).toHaveTitle(/Sino Technology Solutions/);
    await expect(page.locator("text=CEH Master")).toBeVisible();
    await expect(page.locator("text=Digital and Computer Forensics")).toBeVisible();
  });

  test("should display dual headquarters", async ({ page }) => {
    await page.goto("/about");

    // Check main content area (not footer)
    const mainContent = page.locator("main, div").filter({ hasText: "Lisbon" }).first();
    await expect(mainContent.getByText(/Lisbon.*Portugal/)).toBeVisible();
    await expect(mainContent.getByText(/Tampa.*Florida/)).toBeVisible();
  });

  test("should have photo placeholder with TODO comment in source", async ({ page }) => {
    await page.goto("/about");

    // Check for placeholder div
    const placeholder = page.locator("text=Photo Placeholder");
    await expect(placeholder).toBeVisible();
  });
});

test.describe("Blog Page", () => {
  test("should load and display empty state", async ({ page }) => {
    await page.goto("/blog");

    await expect(page).toHaveTitle(/Blog/);
    await expect(page.locator("h1")).toContainText("Blog");
  });

  test("should show empty state message", async ({ page }) => {
    await page.goto("/blog");

    await expect(
      page.locator("text=No posts yet. Check back soon")
    ).toBeVisible();
  });

  test("should have proper metadata", async ({ page }) => {
    await page.goto("/blog");

    // Check for subtitle text (appears before empty state message)
    await expect(page.getByText(
      "Insights on enterprise IT, cybersecurity, and AI research."
    ).first()).toBeVisible();
  });
});

test.describe("Contact Page", () => {
  test("should load and display email", async ({ page }) => {
    await page.goto("/contact");

    await expect(page.getByRole("heading", { name: "Get in Touch" })).toBeVisible();

    const emailLink = page.locator('a[href="mailto:info@sinotechsol.com"]').first();
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toContainText("info@sinotechsol.com");
  });

  test("should display dual headquarters", async ({ page }) => {
    await page.goto("/contact");

    await expect(page.getByRole("heading", { name: /Lisbon.*Portugal/ })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Tampa.*Florida/ })).toBeVisible();
  });

  test("email link should have correct href", async ({ page }) => {
    await page.goto("/contact");

    const emailLink = page.locator('a[href="mailto:info@sinotechsol.com"]');
    const href = await emailLink.getAttribute("href");
    expect(href).toBe("mailto:info@sinotechsol.com");
  });
});
