import { test, chromium, firefox } from "@playwright/test";

test("launch SF browser", async()=>{
    const browser = await chromium.launch({channel:"chrome"});

    const browserContext1 = await browser.newContext();

    const page1 = await browserContext1.newPage();

    await page1.goto("https://login.salesforce.com/");
    await page1.waitForTimeout(8000);

    await page1.close();

    await browserContext1.close();

    await browser.close();
})
