const {test,expect} = require('@playwright/test');
const LoginPage = require('../pages/loginpage');
const HomePage  = require('../pages/homepage');


test("Login to Application using POM Desing Pattern",async function({page})
{
await page.goto("https://freelance-learn-automation.vercel.app/login")

const appLoginPage = new LoginPage(page)
await appLoginPage.loginToApplication("admin@email.com","admin@123")
await appLoginPage.verifySuccessfulLogout()
await page.waitForTimeout(3000)

const appHomePage = new HomePage(page)
await appHomePage.logOutFromApplication();
await appHomePage.verifyManageOption();
await page.waitForTimeout(3000)
});