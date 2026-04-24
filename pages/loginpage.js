
const {expect}=require("@playwright/test")


class loginPage  //class name
{
    constructor(page) //constructor accepting page as argument
    {
        this.page=page  //initialize page and locators
        this.loginHeader="//h2[normalize-space()='Sign In']"
        this.Loc_username="//input[@id='email1']"
        this.Loc_password="//input[@id='password1']"
        this.Loc_loginbutton="//button[normalize-space()='Sign in']"
    }

    async verifySuccessfulLogout()
    {
        await expect(this.page.locator(this.loginHeader)).toBeVisible();
        //await expect(this.manageOption).toBeVisible(); 
    }
    async loginToApplication(userName,password)  //function and actions using locators
    {
        await this.page.fill(this.Loc_username,userName)
        await this.page.fill(this.Loc_password,password)
        await this.page.click(this.Loc_loginbutton)
        this.page.waitForNavigation()
        
        }
}

module.exports=loginPage   //'exports' allows to use into diff classes