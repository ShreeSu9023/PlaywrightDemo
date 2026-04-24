
const {test,expect} = require('@playwright/test')

test("Select values from Drodown",async function({page}){

    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await page.locator("#state").selectOption({label:"Goa"})
    await page.waitForTimeout(1000)
    await page.locator("#state").selectOption({value:"Himachal Pradesh"})
    await page.waitForTimeout(3000)
    await page.locator("#state").selectOption({index:3})
    await page.waitForTimeout(3000)

   //way 1 to print all dropdowns
    /*const AllDropdownValues = await page.locator("#state").textContent()
    console.log("All dropdown values are :",AllDropdownValues);
    await expect(AllDropdownValues.includes("Assam")).toBeTruthy()
    */

    //way 2 to print all dropdowns
    let state = await page.$("#state")
    let allElements = await state.$$("option")
    let ddstatus = false
for(let i=0;i<allElements.length;i++)
{
 let element =  allElements[i]
 let value = await element.textContent()
console.log("Printing dropdown values using for loop:", value);
 if(value.includes("Rajasthan"))
 {
    ddstatus=true
    break
 } 
}
await expect(ddstatus).toBeTruthy
//multiple option selection
await page.locator("#hobbies").selectOption(['Playing','Reading'])
await page.waitForTimeout(3000)
} )