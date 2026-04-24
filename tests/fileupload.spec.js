const {test,expect} = require('@playwright/test')

test("File Upload Functionality",async function({page})
{
await page.goto("https://the-internet.herokuapp.com/upload")
//await page.locator("#file-upload").setInputFiles("C:/Pooja/Job/Automation Tester/Nov 2025/2026 Playwright_JS_TS/Playwright/file for upload/text1.txt")
//await page.locator("#file-upload").setInputFiles("./Uploads/test2.docx")
await page.locator("#file-upload").setInputFiles('./Uploads/test2.docx','test1.txt')
await page.locator("#file-submit").click();
await page.waitForTimeout(5000)
await expect(page.locator("//h3")).toHaveText("File Uploaded!")

//const fileCount = await page.locator('#file-upload').evaluate(input => input.files.length);
//expect(fileCount).toBe(2);
//console.log(fileCount);

});