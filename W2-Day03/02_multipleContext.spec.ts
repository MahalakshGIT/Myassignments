import{test,chromium} from "@playwright/test";

test("Testing Multiple instances", async () => {

    const browser = await chromium.launch();

    const browserContext1 = await browser.newContext();
    const browserContext2 = await browser.newContext();
    const browserContext3 = await browser.newContext();
    const broserContextt4 = await browser.newContext();

    const page1 = await browserContext1.newPage();
    const page2 = await browserContext1.newPage();
    await page1.goto("https://www.leafground.com/dashboard.xhtml");
    await page2.goto("https://www.amazon.com");
    await page1.waitForTimeout(10000);


    const page3 = await browserContext2.newPage();
    await page3.goto("https://www.facebook.com");
    await page3.waitForTimeout(10000);




    
})