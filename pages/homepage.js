const {expect}=require("@playwright/test")



class homePage{
    constructor(page)
    {
        this.page=page;
        this.menu="//img[@alt='menu']"
        this.logoutBtn="//button[normalize-space()='Sign out']"  
        this.manageOption="//span[normalize-space()='Manage']" 
        //this.manageOption = page.getByText('Manage');  
        //this.manageOption = "//span[text()='Manage']";    
    }

async verifyManageOption()
{
    await expect(this.page.locator(this.manageOption)).toBeVisible();
    //await expect(this.manageOption).toBeVisible(); 
}


    async logOutFromApplication()  //function and actions using locators
    {
        await this.page.click(this.menu)
        await this.page.click(this.logoutBtn)
        
    }
}

module.exports=homePage