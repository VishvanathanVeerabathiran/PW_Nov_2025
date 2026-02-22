

import {  chromium, Locator, test, webkit} from "@playwright/test";

test(`Test to edit the lead details`, async() => {

  const browser=  await chromium.launch({headless:false,channel:"msedge",args: ['--start-maximized']});
  const context =await browser.newContext();
  const page =await context.newPage();
  await page.goto("http://leaftaps.com/opentaps/control/main");
  await page.locator("#username").fill(`Demosalesmanager`);
  await page.locator("#password").fill(`crmsfa`);
  await page.locator(".decorativeSubmit").click();
  const title = await page.title();
  console.log("Title is :"+ title);
  await page.locator(`xpath=(//a[contains(@href,'crmsfa')])[1]`).click();
  const afterLoginTitle = await page.title();
  console.log("After login title is :"+ afterLoginTitle);
  await page.locator(`xpath=//a[text()='Leads']`).click();
  await page.locator(`xpath=//a[text()='Find Leads']`).click();
  await page.locator(`xpath=(//input[@name='firstName'])[3]`).fill(`Vishva`);
  await page.locator(`xpath=//button[text()='Find Leads']`).click();
  await page.waitForTimeout(3000); //Hard stop for 3 seconds
  const findLeadId = await page.locator(`xpath=(//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a)[1]`);
  const leadId =findLeadId.textContent();
  console.log(`Find Lead Id : `+ leadId);
  findLeadId.click();
  await page.locator(`xpath=//a[text()='Edit']`).click();
  await page.locator(`#updateLeadForm_companyName`).fill("TCS New");
  await page.locator(`#updateLeadForm_annualRevenue`).fill("15000000");
  await page.locator(`#updateLeadForm_departmentName`).fill("Quality");
  await page.locator(`#updateLeadForm_description`).fill("Edit lead updated");
  await page.locator(`xpath=(//input[@name='submitButton'])[1]`).click();
  const pageTitle =await page.title();
  console.log("Edit Lead Page Title is :" + pageTitle);
  
   const companyName= await page.locator("xpath=//span[@id='viewLead_companyName_sp']").textContent();
 if(companyName?.includes("TCS New")){
  console.log("Companyname is correct :" + companyName);
 }
 else{
  console.log("Companyname is Incorrect :" + companyName);
 }
 })