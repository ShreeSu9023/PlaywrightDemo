const {test,expect} = require('@playwright/test')

test("Handle Frames",async function({page})
{
await page.goto("https://docs.oracle.com/javase/8/docs/api/")
const iFrame = await page.frameLocator("//frame[@name='packageListFrame']")
await iFrame.locator("//a[text()='java.applet']").click()
await page.pause();
});