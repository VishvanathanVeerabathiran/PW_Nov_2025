

import { test } from "@playwright/test";

test(`Interactions of frames`, async ({ page }) => {

    await page.goto("https://www.oneindia.com/");

    //1.URL    //frame URl is reference of the frame which has the url   
    const frameURL = page.frame({ url: "https://www.oneindia.com/" })
    frameURL?.locator("#click").click();
    /* Question mark
  if(frame is present)   
{    frameURL?.locator("#click").click();}
  else{    frame is not present 
  }    */

    //2.Name 

    const frameName = page.frame({ name: "google_ads_iframe_/1008496/Oneindia-home-728x90_0" })
    await frameName?.locator(".user").click();





})