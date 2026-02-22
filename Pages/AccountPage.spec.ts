
import { test } from "@playwright/test";
import { VerifyAccountPage } from "./08_verifyAccountPage";
import dotenv from "dotenv";
import path from "node:path";
import credentials from "../Data/login.json";
import { parse } from "csv-parse/sync"; // This parse used to convert data from CSV to Json
import fileSystem from "fs"; // file system used to read the data from systemimport { Certificate } from "crypto";
let recordsCVSParse: any[] = parse(fileSystem.readFileSync("Data/account.csv"), { trim: true, columns: true, skip_empty_lines: true })
//columns - Consider first row as colummndotenv.config({path:"Data/prod.env"})
for (let dataSalesForce of recordsCVSParse) {
    test(`Create Account page and Tescases no is ==> ${dataSalesForce.TcaseId}`, async ({ page }) => {
        const va = new VerifyAccountPage(page);
        await va.loadURL(process.env.lf_BaseUrl as string);
        await va.enterCredentials(credentials[0].username, credentials[0].password);
        await va.clickLogin();
        await va.clickSbtBtnWelcomePage();
        await va.clickOnAccountsBtn();
        await va.clickonCreateAccountLink()
        await va.enterAccountPageMandateDetails(dataSalesForce.accoutName);
        await va.clickCreateAccountBtn();
        await va.verifyAccountName();
        await va.closeBrowser();
    })
}