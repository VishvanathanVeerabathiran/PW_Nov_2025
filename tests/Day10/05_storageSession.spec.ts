
import { test } from "@playwright/test";
test(`Storeage Session`, async ({ page }) => {
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`//input[@id='username']`).fill('DemoSalesManager');
    await page.locator(`//input[@id='password']`).fill(`crmsfa`);
    await page.locator(`//input[@class='decorativeSubmit']`).click();
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
    await page.context().storageState({ path: 'Data/leafTapLoginSession.json' });
})

