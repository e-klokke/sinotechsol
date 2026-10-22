import { test, expect } from "@playwright/test";
import { diagnosticCta } from "../content/copy";
import { bookingUrl } from "../content/site";

test.describe("Contact form", () => {
  test("diagnostic and primary calls to action point at the form", async ({ page }) => {
    expect(bookingUrl).toBe("");
    expect(diagnosticCta.href).toBe("/contact?intent=diagnostic#inquiry");
    expect(diagnosticCta.href.startsWith("mailto:")).toBe(false);

    for (const path of ["/", "/about", "/contact", "/blog", "/privacy", "/terms"]) {
      await page.goto(path);
      const callsToAction = page.locator("a.bg-accent-button, button.bg-accent-button");
      const count = await callsToAction.count();
      for (let index = 0; index < count; index += 1) {
        const href = await callsToAction.nth(index).getAttribute("href");
        expect(href ?? "").not.toMatch(/^mailto:/);
      }
    }
  });

  test("submits a diagnostic request and enforces spam controls", async ({ page, request }) => {
    await page.goto("/contact?intent=diagnostic#inquiry");
    await expect(page.getByText("This request is for the free 30-minute diagnostic.")).toBeVisible();

    await page.getByRole("textbox", { name: "Name", exact: true }).fill("Ada Tester");
    await page.getByRole("textbox", { name: "Email", exact: true }).fill("ada@example.com");
    await page.getByRole("textbox", { name: "Company", exact: true }).fill("Example SA");
    await page.getByRole("textbox", { name: "What do you need?", exact: true }).fill(
      "A free 30-minute diagnostic of our network.",
    );
    await page.getByRole("button", { name: "Request diagnostic" }).click();

    await expect(page.getByRole("status")).toContainText("Thanks. We received your message and will reply by email.");
    await expect(page.getByRole("link", { name: "info@sinotechsol.com" })).toBeVisible();

    const invalid = await request.post("/api/contact", {
      data: {
        name: "Ada Tester",
        email: "not-an-email",
        company: "Example SA",
        need: "Help",
      },
    });
    expect(invalid.status()).toBe(400);

    const ip = `203.0.113.${Math.floor(Math.random() * 200) + 20}`;
    const headers = {
      "x-forwarded-for": ip,
      origin: "http://localhost:3000",
    };

    const honeypot = await request.post("/api/contact", {
      headers,
      data: {
        name: "Bot",
        email: "bot@example.com",
        company: "Spam Co",
        need: "Buy links",
        company_website: "https://spam.example",
      },
    });
    expect(honeypot.status()).toBe(200);
    expect(await honeypot.json()).toEqual({ ok: true });

    // Limit is 5 accepted requests per IP. The honeypot used one, so four more succeed.
    const statuses: number[] = [];
    for (let index = 0; index < 6; index += 1) {
      const response = await request.post("/api/contact", {
        headers,
        data: {
          name: "Rate Limit",
          email: `rate${index}@example.com`,
          company: "Example SA",
          need: `Message ${index} about infrastructure support.`,
        },
      });
      statuses.push(response.status());
      if (response.status() === 429) break;
    }

    expect(statuses.filter((status) => status === 200)).toHaveLength(4);
    expect(statuses.at(-1)).toBe(429);
  });
});