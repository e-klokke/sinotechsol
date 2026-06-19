import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should display navigation with all links", async ({ page }) => {
    await page.goto("/");

    const nav = page.locator("nav");
    await expect(nav.locator("text=Services")).toBeVisible();
    await expect(nav.locator("text=Capabilities")).toBeVisible();
    await expect(nav.locator('a[href="/about"]')).toBeVisible();
    await expect(nav.locator('a[href="/blog"]')).toBeVisible();
    await expect(nav.locator('a[href="/contact"]')).toBeVisible();
  });

  test("should scroll to services section on click", async ({ page }) => {
    await page.goto("/");

    await page.locator('button:has-text("Services")').click();
    await page.waitForTimeout(500); // Wait for smooth scroll

    const servicesSection = page.locator("#services");
    await expect(servicesSection).toBeInViewport();
  });

  test("should scroll to capabilities section on click", async ({ page }) => {
    await page.goto("/");

    await page.locator('button:has-text("Capabilities")').click();
    await page.waitForTimeout(500); // Wait for smooth scroll

    const capabilitiesSection = page.locator("#capabilities");
    await expect(capabilitiesSection).toBeInViewport();
  });

  test("should navigate to About page", async ({ page }) => {
    await page.goto("/");

    await page.locator('nav a[href="/about"]').click();
    await page.waitForURL("/about");

    await expect(page).toHaveURL("/about");
    await expect(page.locator("h1")).toContainText(/About|Eric Bell/i);
  });

  test("should navigate to Blog page", async ({ page }) => {
    await page.goto("/");

    await page.locator('nav a[href="/blog"]').click();
    await page.waitForURL("/blog");

    await expect(page).toHaveURL("/blog");
    await expect(page.locator("h1")).toContainText("Blog");
  });

  test("should navigate to Contact page", async ({ page }) => {
    await page.goto("/");

    await page.locator('nav a[href="/contact"]').click();
    await page.waitForURL("/contact");

    await expect(page).toHaveURL("/contact");
    await expect(page.getByRole("heading", { name: "Get in Touch" })).toBeVisible();
  });

  test("should return to homepage when clicking logo", async ({ page }) => {
    await page.goto("/about");

    await page.locator('nav a[href="/"]').first().click();
    await page.waitForURL("/");

    await expect(page).toHaveURL("/");
  });

  test("mobile menu should toggle correctly", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Mobile menu button should be visible
    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    await expect(menuButton).toBeVisible();

    // Click to open
    await menuButton.click();
    await page.waitForTimeout(500);

    // Mobile menu items should be visible - check for button/link within nav
    const nav = page.locator("nav");
    await expect(nav.locator('button:has-text("Services")').last()).toBeVisible();
    await expect(nav.locator('a:has-text("About")').last()).toBeVisible();
    await expect(nav.locator('a:has-text("Blog")').last()).toBeVisible();
  });
});
