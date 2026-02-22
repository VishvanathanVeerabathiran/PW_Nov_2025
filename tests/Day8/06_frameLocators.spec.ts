import { test } from "@playwright/test";

test(`Interactions of frames`, async ({ page }) => {

    await page.goto("https://www.oneindia.com/");

    //1.URL    //frame URl is reference of the frame which has the url   
    const frameURL = page.frame({ url: "https://www.oneindia.com/" })
    frameURL?.locator("#click").click();
    /* Question mark
 if(frame is present)    {    frameURL?.locator("#click").click();}
 else{    frame is not present 
 }    */

    //2.Name 
    const frameName = page.frame({ name: "google_ads_iframe_/1008496/Oneindia-home-728x90_0" })
    await frameName?.locator(".user").click();
    const frameRer = page.frameLocator(`#google_ads_iframe_/1008496/oneindia-home-eng-right-rail_0`);
    frameRer.locator("#user").click();
})
test.only(`Interactions of frames locators `, async ({ page }) => {

    //test.only - to execute only particular tescases
    // Single page frame using frame locators   
    const frameRef = page.frameLocator("#username");
    await frameRef.locator(".username").fill(`veera`);
    await page.waitForTimeout(3000);

    //Nested frames - Inside the frames one more frames   
    const outerFrame = page.frameLocator("#click");
    const innerFrame = outerFrame.frameLocator("#username");
    await innerFrame.locator(".username").fill(`veera`);

})