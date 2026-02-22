import { expect, test } from "@playwright/test";

test(`Merge lead`, async ({ context, page }) => {
    page.on('dialog', async (alert) => {
        const alrtMessage = alert.message();
        if (alert.type() == `confirm`) { alert.accept(); }
    });
    //const newPage =context.waitForEvent('page');  
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`//input[@id='username']`).fill('DemoSalesManager');
    await page.locator(`//input[@id='password']`).fill('crmsfa');
    await page.locator(`//input[@class='decorativeSubmit']`).click();
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
    await page.locator(`//a[(text()='Leads')]`).click();
    await page.waitForTimeout(2000);
    await page.locator(`//a[(text()='Merge Leads')]`).click();
    await page.waitForTimeout(2000);
    console.log(`Parent page title is ${await page.title()}`);
    await page.waitForTimeout(2000);
    const [childPage] = await Promise.all([context.waitForEvent(`page`), page.locator(`(//img[@alt='Lookup'])[1]`).click()]);
    const chPage = childPage;
    await page.waitForTimeout(2000);
    console.log(`Child page title for first lead is ${await chPage.title()}`);
    await chPage.locator(`(//div[contains(@class,'x-grid3-cell-inner x-grid3-col-partyId')]/a)[1]`).click();
    // // console.log(`Child page title for first lead is ${ await chPage.title()}`);  
    await page.waitForTimeout(2000);
    await page.bringToFront();
    console.log(`Parent page title after selecting first lead is ${await page.title()}`);
    const [childPage1] = await Promise.all([context.waitForEvent(`page`), page.locator(`(//img[@alt='Lookup'])[2]`).click()]);
    const chPage1 = childPage1
    await page.waitForTimeout(2000);
    console.log(`Child page title for second lead is ${await chPage1.title()}`);
    await chPage1.locator(`(//div[contains(@class,'x-grid3-cell-inner x-grid3-col-partyId')]/a)[2]`).click();
    await page.bringToFront();
    console.log(`Parent page title after selecting second lead is ${await page.title()}`);
    await page.waitForTimeout(2000); await page.locator(`//a[text()='Merge']`).click();
    await page.waitForTimeout(2000); console.log(`Merge title page is ${await page.title()}`);
    const mergeTiltle = await page.title();
    expect(mergeTiltle).toContain("View Lead | opentaps CRM");









})