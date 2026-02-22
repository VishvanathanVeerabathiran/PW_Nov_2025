import { test } from "@playwright/test";
import { parse } from "csv-parse/sync" // this parse is used to convert from csv to JSON
import fs from "fs" // -> filesystem to read data from your system
test.describe.serial(`Test executed in serial mode`, async () => {
    let records: any[]
    /*****************************************************************************************/
    test.beforeAll(`Read data from CSV`, async () => {
        console.log(`Before all data connectivity`);
        records = parse(fs.readFileSync("Data/login.csv"), { columns: true, skip_empty_lines: true })
    })/*****************************************************************************************/
    test.beforeEach(`Before Each test execution of lead and account module at the time of execution`, async ({ page }) => {
        console.log(`Before Each test execution of lead and account module`);
        await page.goto(`http://leaftaps.com/opentaps/control/main`)
        await page.locator(`//input[@id="username"]`).fill(records[0].username);
        await page.locator(`//input[@id="password"]`).fill(records[0].password);
        await page.locator(`//input[@class="decorativeSubmit"]`).click();
        await page.locator(`//a[contains(text(),"CRM")]`).click()
    })
    /*****************************************************************************************/
    test(`Lead Module `, async ({ page }) => {
        console.log(`Executing the lead module`); 
        await page.locator(`//a[text()="Create Lead"]`).click()
        await page.waitForTimeout(3000)
    })
    test(`Account Module `, async ({ page }) => {
        console.log(`Executing the Account module`); 
        await page.locator(`//a[text()="Create Account"]`).click()
        await page.waitForTimeout(3000)
    })
    /*****************************************************************************************/
    test.afterEach(`Fetch the test status of each test `, async ({ }, testinfo) => {
        console.log(`Executing after each test`);
        console.log(testinfo.status);
        console.log(testinfo.title);
    })
    /*****************************************************************************************/
    test.afterAll(`Upload all the attachemnets of reports`, async () => {
        console.log(`Executed after completion of all tests`);
    })

})