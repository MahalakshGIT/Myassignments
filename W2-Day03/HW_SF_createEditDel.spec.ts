import {test  } from "@playwright/test";
//SUCCESS:
//============
/***
 *  1. Login to Salesforce application
    2. Save the storage state of login page as a separate json file
    3. Use the session information to skip the login for the test cases
    4. Implement the different Playwright Test functions in the test cases
    - Group the test cases based on Create, Edit and Delete
    - Utilize hooks to set up preconditions and clean up after your tests
    - Fail the delete test cases
 */


//3. Use the session information to skip the login for the test cases   
test.use({storageState:"creds/SFloginDetails.json"})

/*test.describe('SF_create Edit Delete Opportunity',async()=>{
    test.describe.configure({mode:'parallel'});

    test('create oppo', async({page})=>{
        await page.goto("https://abc-2b6-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home");

    })
    test('Edit oppo', async({page})=>{

        
    })
    test('delete oppo', async({page})=>{

        
    })

   
          
} )  */

test('TC001_individual ', async({page})=>{
    await page.goto('https://abc-2b6-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home');
    await page.waitForTimeout(3000);

    //Click App Launcher icon
    await page.click("//*[starts-with(@class,'appLauncher')]");
    //Click View All
    await page.getByText("View All").click();
    //Enter Individuals in the App Launcher search box
    
    await page.getByPlaceholder("Search apps or items...").fill('individuals');
    await page.waitForTimeout(1000);
    //Click Individuals link
    await page.click("//a[@data-label='Individuals']");
    await page.waitForTimeout(1000);

    //Click New button to create a new individual
    await page.getByText("New").click();
    //- Fill the mandatory fields
    await page.getByPlaceholder('Last Name').fill('Mari2');
    //- Click the Save button -- STRICT MODE VIOLATION error resolved- exact:true
    await page.getByTitle('Save',{exact:true}).click();




    

        
})