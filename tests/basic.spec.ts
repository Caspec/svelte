import { test, expect } from "@playwright/test";

test("forsiden indeholder overskrift", async ({ page }) => {
  await page.goto("http://localhost:5000");
  await expect(page.locator("h2")).toContainText("Brugere");
});

test("forsiden loader korrekt og indeholder overskrift og knap", async ({
  page,
}) => {
  await page.goto("http://localhost:5000");

  const users = page.locator("ul > li");
  await expect(users).toHaveCount(10);

  const buttons = page.getByRole("button", { name: "Dispatch User ID" });
  await expect(buttons).toHaveCount(10);
});

test("vent på klik på knap i browser", async ({ page }) => {
  await page.goto("http://localhost:5000");

  const button = page.getByRole("button", { name: "Dispatch User ID" }).nth(0);
  await expect(button).toBeVisible();

  console.log("Vent på at brugeren klikker på knappen i browseren...");

  await button.click();

  console.log("Knappen blev klikket!");
});
