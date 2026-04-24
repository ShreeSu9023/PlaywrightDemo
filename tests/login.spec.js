const{test,expect} = require("@playwright/test")
test.use({viewport:{width:1536,height:695}})

test("Valid Login",async function({page}){

    //login
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.getByPlaceholder("Username").fill("Admin",{delay:200})
await page.waitForTimeout(5000)
await page.locator("input[name='password']").fill("admin1234",{delay:200})
await page.waitForTimeout(3000)
await page.locator("(//button[@type='submit'])[1]").click()
await expect(page).toHaveURL(/login/)

//logout
await page.getByAltText("profile picture").click()
await page.getByText("Logout").click()
await expect(page).toHaveURL(/login/)
}
)