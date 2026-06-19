import { test, expect } from "@playwright/test";

test.describe("Responsive Design", () => {
  test("should render correctly on mobile (iPhone SE)", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Hero should be visible
    await expect(page.locator("h1")).toBeVisible();

    // Mobile menu button should be visible
    await expect(
      page.locator('button[aria-label="Toggle menu"]')
    ).toBeVisible();

    // Desktop nav should be hidden
    await expect(page.locator("nav >> text=Services").first()).not.toBeVisible();
  });

  test("should render correctly on tablet (iPad)", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto("/");

    await expect(page.locator("h1")).toBeVisible();

    // Service cards should stack or be in grid
    const serviceCards = page.locator(
      '#services [class*="grid"] > div'
    );
    const count = await serviceCards.count();
    expect(count).toBe(3);
  });

  test("should render correctly on desktop (1440px)", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    // Desktop nav should be visible
    await expect(page.locator("nav >> text=Services").first()).toBeVisible();

    // Mobile menu button should be hidden
    await expect(
      page.locator('button[aria-label="Toggle menu"]')
    ).not.toBeVisible();

    // Hero should be full width
    await expect(page.locator("h1")).toBeVisible();
  });

  test("service cards should display in grid on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    const servicesSection = page.locator("#services");
    await servicesSection.scrollIntoViewIfNeeded();

    const cards = page.locator('#services [class*="grid"] > div');
    const count = await cards.count();
    expect(count).toBe(3);
  });

  test("footer should adapt to mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    const footer = page.locator("footer");
    await expect(footer.locator("text=© 2026")).toBeVisible();
    await expect(footer.locator("text=Lisbon")).toBeVisible();
    await expect(footer.locator("text=Tampa")).toBeVisible();
  });
});
