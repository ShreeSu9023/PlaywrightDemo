const { test, expect } = require('@playwright/test');

test("Wait For Load State", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");
  await page.getByText("New user? Signup").click();

  const checkboxes = page.locator("//input[@type='checkbox']");
  // Wait until all checkboxes are visible
  //await expect(checkboxes).toHaveCount(12);
  const count = await checkboxes.count();
  expect(count).toBe(12);
});