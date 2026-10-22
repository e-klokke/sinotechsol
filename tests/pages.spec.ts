import { test, expect } from "@playwright/test";

test.describe("About Page", () => {
  test("should load and display content", async ({ page }) => {
    await page.goto("/about");

    await expect(page).toHaveTitle(/Sino Technology Solutions/);
    await expect(page.getByText("(CEH) Master")).toBeVisible();
    await expect(page.locator("text=Digital and Computer Forensics")).toBeVisible();
  });

  test("should display dual headquarters", async ({ page }) => {
    await page.goto("/about");

    // Check main content area (not footer)
    const mainContent = page.locator("main, div").filter({ hasText: "Lisbon" }).first();
    await expect(mainContent.getByText(/Lisbon.*Portugal/)).toBeVisible();
    await expect(mainContent.getByText(/Tampa.*Florida/)).toBeVisible();
  });

  test("should show Eric Bell headshot", async ({ page }) => {
    await page.goto("/about");

    await expect(page.getByRole("img", { name: /Eric Bell/ })).toBeVisible();
  });

  test("should describe the IT career as overlapping the playing years", async ({ page }) => {
    await page.goto("/about");

    await expect(page.getByText(/from 2005 to 2015/)).toBeVisible();
    await expect(page.getByText(/15\+ years in enterprise IT, during and after my playing career/)).toBeVisible();
    await expect(page.getByText(/AT&T, CenturyLink, Duke Medical Center, and Paycom/)).toBeVisible();
    await expect(page.locator("body")).not.toContainText("When I transitioned off the court");
    await expect(page.locator("body")).not.toContainText("Cleared for federal");
    await expect(page.locator("body")).not.toContainText("SAM.gov registered");

    await expect(page.getByRole("link", { name: "Let's Talk" })).toHaveAttribute("href", "/contact");
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
  test("should load the inquiry form and keep email as a fallback", async ({ page }) => {
    await page.goto("/contact");

    await expect(page.getByRole("heading", { name: "Get in Touch" })).toBeVisible();
    await expect(page.locator("#inquiry form")).toBeVisible();
    await expect(page.getByRole("button", { name: "Send message" })).toBeVisible();

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
