const {test,expect} = require('@playwright/test')

test("Keyboard Events Function",async function({page})
{
await page.goto("https://www.google.com")

//part-1
await page.locator("textarea[name='q']").focus()

await page.keyboard.type("Virat Kohli!")
await page.waitForTimeout(5000)
await page.keyboard.press("ArrowLeft")
await page.waitForTimeout(5000)
await page.keyboard.down("Shift")
await page.waitForTimeout(5000)

for(let i=0;i<5;i++)
{
    await page.keyboard.press("ArrowLeft")
}
await page.waitForTimeout(5000)
await page.keyboard.up("Shift")
await page.waitForTimeout(5000)
await page.keyboard.press("Backspace")
await page.waitForTimeout(5000)

//part-2
/*
//await page.locator("textarea[name='q']").fill("Science")
await page.keyboard.type("Science", { delay: 200 });

await page.keyboard.press("Control+A")
await page.waitForTimeout(5000)
await page.keyboard.press("Control+C")
await page.waitForTimeout(5000)
await page.keyboard.press("Backspace")
await page.waitForTimeout(5000)
await page.keyboard.press("Control+V")
await page.waitForTimeout(5000)
await page.keyboard.press("Enter")
await page.waitForTimeout(5000)
*/
});