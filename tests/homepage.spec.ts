import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should load homepage successfully", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Sino Technology Solutions/);
  });

  test("should display new hero message", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("h1")).toContainText(
      "We implement IT that sustains and scales."
    );
    await expect(page.locator("text=Enterprise infrastructure")).toBeVisible();
  });

  test("should link the primary CTA to the contact form", async ({ page }) => {
    await page.goto("/");

    const ctaButton = page.getByRole("link", { name: "Get Started" });
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveAttribute("href", "#contact");
    await expect(ctaButton).not.toHaveAttribute("href", /^mailto:/);
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
    await expect(page.getByRole("heading", { name: "Hardware and Software" })).toBeVisible();
    await expect(page.getByText("Available for federal, state, and local contract work.")).toBeVisible();
    await expect(page.getByText("UEI and CAGE assigned.")).toBeVisible();
    await expect(page.getByText("UEI: JWHNQCQX9566 · CAGE: 10KG8").first()).toBeVisible();
    await expect(page.getByText("7901 4th St N, Ste 300, St. Petersburg, FL 33702").first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Pricing on request" })).toHaveAttribute(
      "href",
      "/contact#inquiry",
    );
    await expect(page.getByText(/We source, deploy, and support hardware and software/)).toBeVisible();
    await expect(page.locator("body")).not.toContainText("Cleared for federal");
    await expect(page.locator("body")).not.toContainText("Authorized reseller");
    await expect(page.locator("body")).not.toContainText("SAM.gov");
    await expect(page.locator("body")).not.toContainText("DUNS");
    await expect(page.locator("body")).not.toContainText("EIN");
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

  test("should display the contact form and an email fallback", async ({ page }) => {
    await page.goto("/");

    await page.locator("#contact").scrollIntoViewIfNeeded();

    await expect(page.locator("#inquiry")).toBeVisible();
    await expect(page.getByLabel("Name")).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Company", exact: true })).toBeVisible();
    await expect(page.getByLabel("What do you need?")).toBeVisible();

    const emailLink = page.locator('#contact a[href="mailto:info@sinotechsol.com"]');
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toContainText("info@sinotechsol.com");
    await expect(page.getByRole("link", { name: "Book a time" })).toHaveCount(0);
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
