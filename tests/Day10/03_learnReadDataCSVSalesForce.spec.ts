
import { test } from "@playwright/test";
//port credentialsSalesForce from "../../Data/logi"
import { parse } from "csv-parse/sync";  // This parse used to convert data from CSV to Json
import fileSystem from "fs"; // file system used to read the data from system
import { Certificate } from "crypto";
let recordsCVSParse: any[] = parse(fileSystem.readFileSync("Data/login_salesforce.csv"), { trim: true, columns: true, skip_empty_lines: true })
//columns - Consider first row as colummn
//Read multiple data from Json array by iterating through for Of
for (let dataSalesForce of recordsCVSParse) {
    test.only(`Learn to read multiple data from JSON ${dataSalesForce.TcaseId}`, async ({ page }) => {
        console.log(`Testcase id is :${dataSalesForce.TcaseId}`)
        await page.goto(dataSalesForce.url);
        console.log(`Login using the username | ${dataSalesForce.username} | and password | ${dataSalesForce.password} | `);
        await page.locator(`//input[@id='username']`).fill(dataSalesForce.username);
        await page.locator(`//input[@id='password']`).fill(dataSalesForce.password);
        await page.locator(`//input[@id='Login']`).click();
    })
}