

import {  chromium, Locator, test, webkit} from "@playwright/test";

test(`Test to account in sales force`, async() => {

  const browser=  await chromium.launch({headless:false,channel:"msedge",args: ['--start-maximized']});
  const context =await browser.newContext();
  const page =await context.newPage();
  await page.goto(`https://login.salesforce.com/`);
  await page.getByLabel(`username`).fill(`vishvaverizon-mf8c@force.com`);
  await page.getByLabel(`password`).fill(`Vishva@12`);
  await page.locator(`#Login`).click();
  const welcomePageTitle =await page.title();
  console.log(`Welcome page title:` + welcomePageTitle);
  const pageURL = page.url();
  if (pageURL?.includes("omputing-page-3059.lightning.force.com")) {
    console.log(`URL is correct :` + pageURL);
    
  }
  else {
    console.log(`URL is correct :` + pageURL);
  }
  await page.locator( `xpath=//span[text()='Service']`).click();
  await page.locator(`xpath=//span[text()='Accounts']`).click();
  await page.getByRole(`button`, {name : `New`}).click();
  await page.locator(`xpath=//input[@name='Name']`).fill(`Testleaf QA Veera`);
  await page.locator(`xpath=(//button[text()='Save'])[1]`).click();
  const accountName =await page.locator(`xpath=//lightning-formatted-text[@slot='primaryField']`).textContent();
  if(accountName?.includes("Veera")){
    console.log("Name verified successfully :" +accountName);
    
  }
  else{
    console.log("Name verified unsuccessfully :" +accountName);
  }

 })
