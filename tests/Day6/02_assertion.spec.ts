import { expect, test } from "@playwright/test";
test(`Xpath learning`, async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    // toBeEditable() - field is editable  
    await expect(page.locator(`//input[@id='username']`)).toBeEditable();
    await page.locator(`//input[@id='username']`).fill('DemoSalesManager', { timeout: 5000 });
    await page.locator(`//input[@id='password']`).fill('crmsfa');
    const submitBtn = page.locator(`//input[@class='decorativeSubmit']`);
    await expect(submitBtn).toBeEnabled();
    //locator based assertion   
    await page.locator(`//input[@class='decorativeSubmit']`).click();
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
    const leadsBtn = page.locator(`//a[(text()='Leads')]`);
    //Soft Assertion - It will not give hard stop    
    //toBeDisbaled()   
    await expect.soft(leadsBtn).toBeDisabled();
    await page.locator(`//a[(text()='Leads')]`).click();
    await page.locator(`//a[(text()='Create Lead')]`).click();
    await page.locator(`//input[@id='createLeadForm_companyName']`).fill('Testleaf');
    await page.locator(`//input[@id='createLeadForm_firstName']`).fill('Vishva');
    await page.locator(`//input[@id='createLeadForm_lastName']`).fill('Veera');
    //Drop down handling
    //Value based  
    await page.selectOption("#createLeadForm_dataSourceId", { value: "LEAD_EMPLOYEE" });
    //Label based 
    await page.selectOption("#createLeadForm_marketingCampaignId", { label: "eCommerce Site Internal Campaign" });
    //Index based   
    await page.selectOption("#createLeadForm_industryEnumId", { index: 14 });
    // value based       
    await page.selectOption("//select[@id='createLeadForm_ownershipEnumId']", { value: "OWN_PUBLIC_CORP" });

    const dropDownLocator = page.locator(`//select[@id='createLeadForm_generalStateProvinceGeoId']/option`);
    const dropDownCount = await dropDownLocator.count();
    console.log(`Dropdwon count is : ${dropDownCount}`);
    for (let i = 0; i < dropDownCount; i++) {
        const eachDropDown = await dropDownLocator.nth(i).innerText(); console.log(eachDropDown);
    } await page.locator(`//input[@class='smallSubmit']`).click();
    //CSS based locator    
    const statusLocator = page.locator(`#viewLead_statusId_sp`);
    expect(statusLocator).toContainText("Assigned")
    // Locator based assertion and Retry assertion
    const statusValue = await statusLocator.innerText();
    expect(statusValue).toContain("Assigned")//Global assertion - Non Retry. Static text validation

})