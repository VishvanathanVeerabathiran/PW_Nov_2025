

//Login page --> Welcome Page --> HomePage --> LeadPage                                        // --> AccountPage
import { chromium,firefox, test } from "@playwright/test";
test(`To Test launch chrome browser manual way of invoking`, async() =>{
// test(`To Test launch browser manual way of invoking`, async() =>{//        |Paramter|                                     |Call back function|     const browserInstance = await chromium.launch({channel:"chrome", headless: false});     console.log("Browser launched");    const browserContext  = await browserInstance.newContext();    const page = await browserContext.newPage();    await page.goto("https://www.google.com/");})