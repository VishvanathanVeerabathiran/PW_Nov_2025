import { test } from "@playwright/test"; import { createAJiraBug } from "./02_afterHooksJira"
test(`Create a bug in Jira - Vishvanathan`, async ({ page }) => {
    await page.goto('https://login.salesforce.com')
    await page.fill("#username", "vishvaverizon980@agentforce.com")
    await page.fill("#password", "Vishva@1211")
    await page.click('#Login');
    await page.locator(`//div[@class='slds-icon-waffle']`).click();
});
test.afterAll(async ({ }, testinfo) => {
    console.log(testinfo.status)
    await createAJiraBug(testinfo)
})
