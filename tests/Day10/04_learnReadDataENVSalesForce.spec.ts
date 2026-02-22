import { test } from "@playwright/test";//import dotEnviornment from "dotenv"
//let fileName=process.env.envFile || 'qa' 
// Qa enviornment will refer if environment is not specified in terminal or during runtime
//dotEnviornment.config({path:`Data/${fileName}.env`})
//console.log(process.env);
//Read multiple data from Json array by iterating through for Of

test.only(`Learn to read multiple data from ENV `, async ({ page }) => {
    //console.log(`Testcase id is :${dataSalesForce.TcaseId}`)    
    await page.goto(process.env.BaseUrl as string);//Type assertions   
    console.log(`Login using the username | ${process.env.sf_username} | and password | ${process.env.sf_password} | `);
    await page.locator(`//input[@id='username']`).fill(process.env.sf_username as string);
    await page.locator(`//input[@id='password']`).fill(process.env.sf_password as string);
    await page.locator(`//input[@id='Login']`).click();
})