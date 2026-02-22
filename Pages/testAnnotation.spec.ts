import { test } from "@playwright/test"
test.describe.serial(`Serial`, async () => {
    test(`Login test leaf `, async ({ page }) => {
        await page.goto("http://leaftaps.com/opentaps/control/main");
        const pageUrl = page.url();
        console.log(`Page URL is : ` + pageUrl);
        await page.locator(`#username`).fill(`DemoSalesManager`);
        await page.locator(`#password`).fill(`crmsfa`);
        await page.locator(`.decorativeSubmit`).click();
    })
    test.skip(`Skip Login test leaf `, async ({ page }) => {
        await page.goto("http://leaftaps.com/opentaps/control/main");
        const pageUrl = page.url(); console.log(`Page URL is : ` + pageUrl);
        await page.locator(`#username`).fill(`DemoSalesManager`);
        await page.locator(`#password`).fill(`crmsfa`);
        await page.locator(`.decorativeSubmit`).click();
    })
    // test.fail(`Fail Login test leaf `, async({page}) =>{
    //     await page.goto("http://leaftaps.com/opentaps/control/main");//  
    //    const pageUrl= page.url();//     console.log(`Page URL is : ` + pageUrl);
    //    await page.locator(`#username`).fill(`DemoSalesManager`);
    //    await page.locator(`#password`).fill(`crmsfa`);
    //    await page.locator(`.decorativeSubmit`).click();  
    // })

    test(`Slow Login test leaf `, async ({ page }) => {
        test.slow();
        console.log(`Testcases slow`);
    })

})