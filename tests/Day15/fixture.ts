import { test as baseT } from "@playwright/test";
//baseT - Keeping alias name to avoid confusion with name
export const test = baseT.extend({
    page: async ({ browser }, use) => {
        const page = await browser.newPage(); 
        await page.goto("http://leaftaps.com/opentaps/control/main");
         await page.locator(`#username`).fill(`DemoSalesManager`);
          await page.locator(`#password`).fill(`crmsfa`); 
          await page.locator(`.decorativeSubmit`).click(); 
          await page.locator(`(//a[contains(text(),CRM/SFA)])[1]`).click(); 
          await use(page);
    }
})