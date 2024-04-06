import { chromium, firefox, test } from "@playwright/test";
//import test from "node:test";

test("test to launch the browser", async() => {

    //launch the browser
   // const browser = await chromium.launch(); //if promise present in the method, u've to use AWAIT //Async and Awaitboth has to be together

    //const browser = await chromium.launch({headless:false, channel:"msedge"}); //to see  browser open, Channel - to test the upper/downward testing

    //To launch ff:
    const browser = await firefox.launch(); //use either {headless:false} in launch() mth OR place {headless:false} in pw.conmfig.js

    //Create a browser Context
    const browserContext = await browser.newContext();


    const page = await browserContext.newPage();

    //Load the URL:
    //await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.goto("https://www.leafground.com");

    await page.waitForTimeout(10000); //10 seconds*1000 ...like Thread.sleep()

   //To close the browser
   await page.close(); //as it has promise

   //Close the context:
   await browserContext.close();  //as it has promise

   //Close the browser instance
   await browser.close();

})