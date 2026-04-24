const {test,expect} = require('@playwright/test')

test("Handle auto suggestions1",async function({page})
{
await page.goto("https://www.google.com")

await page.locator("//textarea[@id='APjFqb']").fill("Selenium")

await page.waitForSelector("//li[@role='presentation']")

await page.keyboard.press("ArrowDown")
await page.keyboard.press("ArrowDown")
await page.keyboard.press("ArrowDown")
await page.keyboard.press("ArrowDown")

});


/*test("Handle auto suggestions", async function ({ page }) {

  await page.goto("https://www.google.com");

  const searchBox = page.locator("textarea[name='q']");
  await searchBox.fill("Selenium");

  const suggestions = page.getByRole('option');    // Correct locator

  await expect(suggestions.first()).toBeVisible();

  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");

  await page.keyboard.press("Enter");
await page.waitForTimeout(5000)

});


test.only("Select dropdown using loop", async function ({ page }) 
{

await page.goto("https://www.google.com");

page.locator("textarea[name='q']").fill("Selenium");
  
await page.waitForSelector("//li[@role='presentation']");

const elements = await page.$$("//li[@role='presentation']")


for(let i=0;i<elements.length;i++)
{
  const text = await elements[i].textContent()
if(text.includes('ide'))
{
await elements[i].click()
break;
}
}
});
*/

test("Select dropdown using loop", async function ({ page }) {

  await page.goto("https://www.google.com");

  const searchBox = page.locator("textarea[name='q']");
  await searchBox.fill("Selenium"); // ✅ awaited

  const suggestions = page.getByRole('option'); // ✅ correct locator
  await expect(suggestions.first()).toBeVisible();

  const count = await suggestions.count();

  for (let i = 0; i < count; i++) {
    const text = await suggestions.nth(i).textContent();

    if (text && text.toLowerCase().includes('ide')) {
      await suggestions.nth(i).click();
        await page.waitForTimeout(5000);
      break;
    }
  }
});