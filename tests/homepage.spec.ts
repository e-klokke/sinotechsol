import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should load homepage successfully", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Sino Technology Solutions/);
  });

  test("should display new hero message", async ({ page }) => {
    await page.goto("/");

    // Check for new problem-solution hero copy
    await expect(page.locator("h1")).toContainText(
      "Your IT shouldn't be the problem"
    );
    await expect(page.locator("text=Enterprise infrastructure")).toBeVisible();
    await expect(page.locator("text=No complexity. No excuses.")).toBeVisible();
  });

  test("should have email CTA button", async ({ page }) => {
    await page.goto("/");

    const ctaButton = page.locator('a[href="mailto:info@sinotechsol.com"]').first();
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toContainText("Get Started");
  });

  test("should display all three service cards", async ({ page }) => {
    await page.goto("/");

    const servicesSection = page.locator("#services");
    await expect(servicesSection.locator("text=IT Infrastructure")).toBeVisible();
    await expect(servicesSection.locator("text=Cybersecurity")).toBeVisible();
    await expect(servicesSection.locator("text=AI Research")).toBeVisible();
  });

  test("should display all three capability cards", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("text=IT Consulting and Sourcing")).toBeVisible();
    await expect(page.locator("text=Government Contracting")).toBeVisible();
    await expect(page.locator("text=VAR: Value Added Reseller")).toBeVisible();
  });

  test("should display partner logos", async ({ page }) => {
    await page.goto("/");

    // Partner section is between capabilities and contact - no ID, so scroll past capabilities
    await page.locator("#capabilities").scrollIntoViewIfNeeded();

    // Check for all partner logos (should be visible after capabilities)
    await expect(page.getByText("Cisco", { exact: true }).last()).toBeVisible();
    await expect(page.getByText("Dell", { exact: true }).last()).toBeVisible();
    await expect(page.getByText("Oracle", { exact: true }).last()).toBeVisible();
    await expect(page.getByText("HP", { exact: true }).last()).toBeVisible();
    await expect(page.getByText("Lenovo", { exact: true }).last()).toBeVisible();
  });

  test("should display email in contact section", async ({ page }) => {
    await page.goto("/");

    // Scroll to contact section
    await page.locator("#contact").scrollIntoViewIfNeeded();

    const emailLink = page.locator('#contact a[href="mailto:info@sinotechsol.com"]');
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toContainText("info@sinotechsol.com");
  });

  test("should display dual headquarters (Lisbon + Tampa)", async ({ page }) => {
    await page.goto("/");

    // Check contact section
    const contactSection = page.locator("#contact");
    await contactSection.scrollIntoViewIfNeeded();
    await expect(contactSection.getByRole("heading", { name: /Lisbon.*Portugal/ })).toBeVisible();
    await expect(contactSection.getByRole("heading", { name: /Tampa.*Florida/ })).toBeVisible();

    // Check footer
    const footer = page.locator("footer");
    await expect(footer.getByText(/Lisbon.*Portugal.*Tampa.*Florida/)).toBeVisible();
  });

  test("should have no em or en dashes in visible text", async ({ page }) => {
    await page.goto("/");

    const bodyText = await page.locator("body").textContent();

    // Check for em dash (—) and en dash (–)
    expect(bodyText).not.toContain("—");
    expect(bodyText).not.toContain("–");
  });
});
