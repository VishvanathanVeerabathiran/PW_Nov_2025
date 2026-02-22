//import { test } from "@playwright/test";//import { ViewLeadPage } from "./06_viewLeadPage";
import { test } from "../Utility/CustomFixture";
import dotenv from "dotenv";
import path from "node:path";
import credentials from "../Data/login.json"
dotenv.config({ path: "Data/prod.env" })

test(`Create Lead page`, async ({
    loginPage, welcomePage, homePage, leadPage, createLeadPage, viewLeadPage }) => {

    // const vp = new ViewLeadPage(page);   
    await loginPage.loadURL(process.env.lf_BaseUrl as string);
    await loginPage.enterCredentials(credentials[0].username, credentials[0].password);
    await loginPage.clickLogin();
    await welcomePage.clickSbtBtnWelcomePage();
    await homePage.clickOnLeadsBtn();
    await leadPage.clickOnCreateLeadBtn();
    await createLeadPage.enterMandatoryFields();
    await createLeadPage.clickCreateLeadSubmitBtn();
    await viewLeadPage.verifyTitle();
    await viewLeadPage.verifyFirstName();
    await viewLeadPage.closeBrowser();
})
