import {test  } from "@playwright/test";
/***
 *  1. Login to Salesforce application
    2. Save the storage state of login page as a separate json file
    3. Use the session information to skip the login for the test cases
    4. Implement the different Playwright Test functions in the test cases
    - Group the test cases based on Create, Edit and Delete
    - Utilize hooks to set up preconditions and clean up after your tests
    - Fail the delete test cases
 */
test('To test SF using Storagestate and TC Grouping', async({page})=>{

    //2.Save the storage state of login page as a separate json file

    page.goto('https://login.salesforce.com/');
    await page.fill("#username","dani.mahalaksh@gmail.com");
    await page.fill("#password","StandUp1$");
    await page.click("#Login");

    await page.context().storageState({path:"creds/SFloginDetails.json"});

})

