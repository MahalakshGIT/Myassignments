import {chromium, webkit, firefox, test  } from "@playwright/test";
import { title } from "process";

test.only("test to launch SF in Chrome", async()=>{

    const browser_chrome= await chromium.launch({headless:false, channel:"chrome"});

    const browserContext_ch1 = await browser_chrome.newContext(); //if u didnt mention AWAIT in launch() in line above, 
                                                           //Property 'newContext' does not exist on type 'Promise<Browser>'.

    const browserContext_ch2 = await browser_chrome.newContext();//for PARALLEL testing in another browser.
                                                        
    
    const page_ch1 =  await browserContext_ch1.newPage();    //if u didnt mention AWAIT in launch() in line above, 
                                                          //Property 'newPage' does not exist on type 'Promise<BrowserContext>'.

    const page_ch2 = await browserContext_ch2.newPage();   

    //Chrome 1    
    await page_ch1.goto("https://login.salesforce.com/");                                                
    await page_ch1.locator("#username").fill("dani.mahalaksh@gmail.com");
    await page_ch1.locator("#password").fill("StandUp1$");
    await page_ch1.locator("#Login").click();
    await page_ch1.waitForTimeout(12000);

    const title_ch_Is = await page_ch1.title();
    console.log("Title of the page landed is: ", title_ch_Is);

    const url_ch_Is = page_ch1.url();
    console.log("After Login, the landed page URL is: ", url_ch_Is);

    //Chrome 2
    await page_ch2.goto("https://www.amazon.com/");
    await page_ch2.waitForTimeout(12000);

    const title_ch2_Is = await page_ch2.title();
    console.log("Title of the page landed is: ", title_ch2_Is);

    const url_ch2_Is = page_ch2.url();
    console.log("After Login, the landed page URL is: ", url_ch2_Is);


    await page_ch1.close();
    await browserContext_ch1.close();
    //await browser_chrome.close();

    await page_ch2.close();
    await browserContext_ch2.close();
    await browser_chrome.close();

})

test.only("test to launch browser in Ms Edge",async () => {
    const browser_edge= await chromium.launch({"headless":false,channel: "msedge"})
    const browserContext_edge= await browser_edge.newContext();
    const page_edge = await browserContext_edge.newPage();
    await page_edge.goto("https://login.salesforce.com/");
   // await page_edge.locator("#username").fill("dani.mahalaksh@gmail.com"); OR 

    await page_edge.fill("#username","dani.mahalaksh@gmail.com");//mtd overloading
    await page_edge.locator("#password").fill("StandUp1$");
    await page_edge.locator("#Login").click();
    await page_edge.waitForTimeout(12000);

    const title_edge_Is = await page_edge.title();
    console.log("Title of the page landed is: ", title_edge_Is);

    const url_edge_Is = page_edge.url();
    console.log("After Login, the landed page URL is: ", url_edge_Is);
    
})


test.only("test to Launch SF in Safari", async () => {
    const browser_safari = await webkit.launch({headless:false});

    const browserContext_safari = await browser_safari.newContext ();

    const page_safari = await browserContext_safari.newPage();

    await page_safari.goto("https://login.salesforce.com/");
    await page_safari.locator("#username").fill("dani.mahalaksh@gmail.com");
    await page_safari.locator("#password").fill("StandUp1$");
    await page_safari.locator("#Login").click();
    page_safari.setDefaultTimeout(12000);

   const titleInSafari = await page_safari.title();
   console.log("Title in Safari after landed to :" ,titleInSafari);

   const urlInSafari= page_safari.url();
   console.log("After Login, the landed page URL is: ",urlInSafari);    
})

test.only("Test to launch SF in Firefox",async () => {

   const browser_ff = await firefox.launch({"headless":false});
   const browserContext_ff = await browser_ff.newContext();
   const page_ff = await browserContext_ff.newPage();

   await page_ff.goto("https://login.salesforce.com/");
   await page_ff.locator("#username").fill("dani.mahalaksh@gmail.com");
   await page_ff.locator("#password").fill("StandUp1$");
   await page_ff.locator("#Login").click();
   await page_ff.waitForTimeout(10000);

   const title_ff_Is = await  page_ff.title();
   console.log(title_ff_Is);

   const url_ff_Is = await page_ff.url();
    console.log("After Login, the landed page URL is: ",url_ff_Is);
    
})