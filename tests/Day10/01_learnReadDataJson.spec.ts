import { test } from "@playwright/test";
import credentials from "../../Data/login.json";
import { Certificate } from "crypto";

//Using single set of data from json array
test(`Learn to read one set of data from JSON ${credentials[0].TcaseId}`, async ({ page }) => {
    console.log(`Testcase id is :${credentials[0].TcaseId}`);
    await page.goto(credentials[0].url);
    await page.locator(`//input[@id='username']`).fill(credentials[0].username);
    await page.locator(`//input[@id='password']`).fill(credentials[0].password);
    await page.locator(`//input[@class='decorativeSubmit']`).click();
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
    await page.locator(`//a[(text()='Leads')]`).click();
})

//Read multiple data from Json array by iterating through for Of
for (let data of credentials) {
    test.only(`Learn to read multiple data from JSON ${data.TcaseId}`, async ({ page }) => {
        console.log(`Testcase id is :${data.TcaseId}`)
        await page.goto(data.url);
        console.log(`Login using the username | ${data.username} | and password | ${data.password} | `);
        await page.locator(`//input[@id='username']`).fill(data.username);
        await page.locator(`//input[@id='password']`).fill(data.password);
        await page.locator(`//input[@class='decorativeSubmit']`).click();
        await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
        await page.locator(`//a[(text()='Leads')]`).click();
    })
}


