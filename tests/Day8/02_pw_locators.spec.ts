import { test } from "@playwright/test";

test(`Learn to use playwright locators`, async ({ page }) => {

    await page.goto(`https://login.salesforce.com/?locale=in`);

    // await page.getByRole("textbox",{name:"Username"}).fill("ravindran.ramdas@testleaf.com")  
      await page.getByLabel("Username").fill("ravindran.ramdas@testleaf.com")

    await page.getByRole("textbox", { name: "Password" }).fill("RaviSalesforce#1234"); // accessibility    
    await page.getByRole("button",{name:"Log In"}).click()

    await page.getByTitle("App Launcher", { exact: true }).click(); // attribute

    await page.getByText("View All", { exact: true }).click(); // attribute

    await page.getByPlaceholder("Search apps or items...", { exact: true }).fill("Service") //attribute

    await page.waitForTimeout(3000)
})
