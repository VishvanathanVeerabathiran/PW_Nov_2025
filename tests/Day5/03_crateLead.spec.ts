import { test } from "@playwright/test";
test(`Xpath learning`, async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
     await page.locator(`//input[@id='username']`).fill('DemoSalesManager');
     await page.locator(`//input[@id='password']`).fill('crmsfa'); 
     await page.locator(`//input[@class='decorativeSubmit']`).click();
     await page.locator(`//a[contains(text(),'CRM/SFA')]`).click(); 
     await page.locator(`//a[(text()='Leads')]`).click(); 
     await page.locator(`//a[(text()='Create Lead')]`).click(); 
     await page.locator(`//input[@id='createLeadForm_companyName']`).fill('Testleaf'); 
     await page.locator(`//input[@id='createLeadForm_firstName']`).fill('Vishva');
     await page.locator(`//input[@id='createLeadForm_lastName']`).fill('Veera');    
     //Drop down handling 
     //Value based    
     await page.selectOption("#createLeadForm_dataSourceId",{value:"LEAD_EMPLOYEE"});
    //Label based    
    await page.selectOption("#createLeadForm_marketingCampaignId",{label:"eCommerce Site Internal Campaign"});
    //Index based   
     await page.selectOption("#createLeadForm_industryEnumId",{index:14});
    // value based      
    await page.selectOption("//select[@id='createLeadForm_ownershipEnumId']",{value:"OWN_PUBLIC_CORP"});
    await page.locator(`//input[@class='smallSubmit']`).click();





})