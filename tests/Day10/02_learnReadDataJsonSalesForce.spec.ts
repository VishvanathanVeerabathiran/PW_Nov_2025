
import { test } from "@playwright/test";
import credentialsSalesForce from "../../Data/login_salesforce.json"; import { Certificate } from "crypto";

//Read multiple data from Json array by iterating through for Off
for (let dataSalesForce of credentialsSalesForce) {
    test.only(`Learn to read multiple data from JSON ${dataSalesForce.TcaseId}`, async ({ page }) => {
        console.log(`Testcase id is :${dataSalesForce.TcaseId}`)
        await page.goto(dataSalesForce.url);
        console.log(`Login using the username | ${dataSalesForce.username} | and password | ${dataSalesForce.password} | `);
        await page.locator(`//input[@id='username']`).fill(dataSalesForce.username);
        await page.locator(`//input[@id='password']`).fill(dataSalesForce.password);
        await page.locator(`//input[@id='Login']`).click();
    })
}