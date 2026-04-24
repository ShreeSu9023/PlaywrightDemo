const{test,expect} = require("@playwright/test")

test("Valid Login",async function({page}){
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {
  waitUntil: 'domcontentloaded',
  timeout: 60000
});

console.log(await page.viewportSize().width)
console.log(await page.viewportSize().height)

await page.getByPlaceholder("Username").fill("Admin")
await page.getByPlaceholder("Password").fill("adminnnnn")
await page.locator("//button[normalize-space()='Login']").click()
const ErrorMsg = await page.getByText("Invalid credentials").textContent()
console.log("Error msg is :",ErrorMsg);
expect(ErrorMsg.includes("Invalid")).toBeTruthy()
expect(ErrorMsg==="Invalid credentials").toBeTruthy()
}
)