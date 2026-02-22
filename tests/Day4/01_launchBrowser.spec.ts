import { chromium, firefox, test, webkit } from "@playwright/test";
test(`To launch a browser`, async () => {
    // Browser, context ,page
    //Promise - 3 Stage - Pending / Resolved / Rejected
    const browser = await chromium.launch({ channel: "chrome", headless: false });    
    //step 1 - Launch a browser and await key make sure browser is launched successfully
    const context = await browser.newContext(); // creating isolated environemnt
    const page = await context.newPage(); //Creating page instance to load url
    await page.goto("http://leaftaps.com/opentaps/control/main"); 
    const pageUrl = page.url(); 
    console.log(`Page URL is : ` + pageUrl);
    const browser1 = await webkit.launch({ headless: false })   
    const context1 = await browser1.newContext(); 
    const page1 = await context1.newPage(); 
    await page1.goto("https://www.google.com/");
    console.log("Page1 URL is : " + page1.url());
})

