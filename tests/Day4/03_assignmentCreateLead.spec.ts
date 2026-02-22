import { chromium, test, webkit } from "@playwright/test";
test(`Test to create the lead`, async () => {
    const browser = await chromium.launch({ headless: false, channel: "msedge", args: ['--start-maximized'] });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill(`Demosalesmanager`);
    await page.locator("#password").fill(`crmsfa`); await page.locator(".decorativeSubmit").click();
    const title = await page.title(); console.log("Title is :" + title);
    await page.locator(`xpath=(//a[contains(@href,'crmsfa')])[1]`).click();
    const afterLoginTitle = await page.title(); console.log("After login title is :" + afterLoginTitle);
    await page.locator(`xpath=//a[text()='Leads']`).click();
    await page.locator(`xpath=//a[text()='Create Lead']`).click();
    await page.locator("#createLeadForm_companyName").fill(`TCS`);
    await page.locator("#createLeadForm_firstName").fill(`Vishva`);
    await page.locator("#createLeadForm_lastName").fill(`Veera`);
    await page.locator("#createLeadForm_personalTitle").fill(`Professional`);
    await page.locator("#createLeadForm_generalProfTitle").fill(`Mr`);
    await page.locator("#createLeadForm_annualRevenue").fill(`100000`);
    await page.locator("#createLeadForm_departmentName").fill(`QA`);
    await page.locator("#createLeadForm_primaryPhoneNumber").fill(`9876543210`);
    await page.locator(".smallSubmit").click();
    const companyName = await page.locator("xpath=//span[@id='viewLead_companyName_sp']").textContent(); if (companyName?.includes("TCS")) {
        console.log("Companyname is correct :" + companyName);
    } else { console.log("Companyname is Incorrect :" + companyName); }
    const firstName = await page.locator("#viewLead_firstName_sp").textContent();
    if (firstName?.includes("Vishva")) {
        console.log("Firstname is correct :" + firstName);
    }
    else { console.log("Firstname is Incorrect :" + firstName); }
    const lastName = await page.locator("#viewLead_lastName_sp").textContent();
    if (lastName?.includes("Vishva")) {
        console.log("Lastname is correct :" + lastName);
    }
    else { console.log("Lastname is Incorrect :" + lastName); }
    const status = await page.locator("#viewLead_statusId_sp").textContent(); if (status?.includes("Assigned")) { console.log("Status is correct :" + status); }
    else {
        console.log("Status is Incorrect :" + status);
    }
    const createLeadPageTitle = await page.title();
    console.log("Create Lead Page Title is :" + createLeadPageTitle);
})