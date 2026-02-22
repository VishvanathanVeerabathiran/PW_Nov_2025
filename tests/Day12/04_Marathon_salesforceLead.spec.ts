import { expect, test } from "@playwright/test";
let accessToken: any;
let instanceURL: any;
let tokenType: any;
let leadID: any;
test.use({ storageState: "Data/salesforceLogin.json" })
test.describe.serial(`Sales Force Lead Creation`, async () => {
    test(`Generate Auth token in saleforce`, async ({ request }) => {
        const genAuthResponse = await request.post(`https://login.salesforce.com/services/oauth2/token`,
            {
                form: {
                    "grant_type": "password",
                    "client_id": "3MVG9rZjd7MXFdLhVLuVn.Z_MfzIS_k1AILc1hm2Fo4gAM7u8ZJldBwcEXIBA8PYr6E6xegsmKReE0bp.gCDR",
                    "client_secret": "CDC4DFD8E75599878434881C878A8BD3960AA7BD7C22E621BCA46E5B8175ABB8",
                    "username": "vishvaverizon980@agentforce.com",
                    "password": "Vishva@12is9RQh00ashK4CReWo6h9GjY9"
                }
            });
        const genAuthResponseBody = await genAuthResponse.json()
        instanceURL = await genAuthResponseBody.instance_url;
        accessToken = await genAuthResponseBody.access_token;
        tokenType = await genAuthResponseBody.token_type;
        const genAuthStatus = genAuthResponse.status();
        console.log(`genAuthStatus ==> ${genAuthStatus}`);
        const genAuthStatusCode = genAuthResponse.statusText();
        console.log(`genAuthStatusCode ==> ${genAuthStatusCode}`);
        expect(genAuthStatus).toBe(200);
        expect(genAuthStatusCode).toBe("OK");
    })
    test(`Create Lead in Sales Force`, async ({ request }) => {
        const createLeadResponse = await request.post(`${instanceURL}/services/data/v59.0/sobjects/Lead`,
            {
                headers:
                {
                    "Authorization": `${tokenType} ${accessToken}`,
                    "Content-Type": "application/json",
                },
                data:
                {
                    "Salutation": "Mr",
                    "LastName": "Curran4",
                    "Company": "Testleaf"
                }
            });
        const createLeadResponseBody = await createLeadResponse.json()
        leadID = await createLeadResponseBody.id; console.log(`Created Lead Id ==> ${leadID}`);
        const createLeadStatus = createLeadResponse.status();
        const createLeadStatusCode = createLeadResponse.statusText();
        console.log(`createLeadStatus ==> ${createLeadStatus}`);
        console.log(`createLeadStatusCode ==> ${createLeadStatusCode}`);
        expect(createLeadStatus).toBe(201);
        expect(createLeadStatusCode).toBe("Created");
    })
    test(`Update Lead in Sales Force`, async ({ request }) => {
        const updateLeadResponse = await request.patch(`${instanceURL}/services/data/v59.0/sobjects/Lead/${leadID}`,
            {
                headers:
                {
                    "Authorization": `${tokenType} ${accessToken}`,
                    "Content-Type": "application/json",
                },
                data:
                {
                    "FirstName": "Tom",
                    "Title": "Quality"
                }
            });
        //const updateLeadResponseBody =await updateLeadResponse.json()
        const updateLeadStatus = updateLeadResponse.status();
        const updateLeadStatusCode = updateLeadResponse.statusText();
        console.log(`updateLeadStatus ==> ${updateLeadStatus}`);
        console.log(`updateLeadStatusCode ==> ${updateLeadStatusCode}`);
        expect(updateLeadStatus).toBe(204);
        expect(updateLeadStatusCode).toBe("No Content");
    })
    test(`Delete lead using playwright`, async ({ page }) => {
        await page.goto(`https://orgfarm-554300c533-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome`);
        await page.waitForTimeout(3000);
        await page.locator(`//div[@class='slds-icon-waffle']`).click();
        await page.waitForTimeout(3000);
        await page.locator(`//button[text()='View All']`).click();
        await page.locator(`//input[@placeholder='Search apps or items...']`).fill(`Leads`);
        await page.locator(`//mark[text()='Leads']`).click();
        await page.waitForTimeout(3000);
        const serachBoxLocator = page.locator(`//input[@name='Lead-search-input']`);
        serachBoxLocator.fill(`Curran4`);
        serachBoxLocator.press(`Enter`);
        const leadName = await page.locator(`//a[@class='slds-truncate']/slot/span`).first().innerText();
        console.log(`Lead name is => ${leadName}`);
        expect(leadName).toBe(`Tom Curran4`);
        await page.locator(`//button[@class='slds-button slds-button_icon-border slds-button_icon-x-small']`).first().click();
        await page.locator(`//div[@title='Delete']`).click();
        await page.locator(`//span[text()='Delete']`).click();
        const serachBoxLocator1 = page.locator(`//input[@name='Lead-search-input']`);
        serachBoxLocator1.fill(`Curran4`);
        serachBoxLocator1.press(`Enter`);
        const deleteLeadConfirm = await page.locator(`//h3[text()='Nothing to see here']`).innerText();
        console.log(`No Records to display confirm message is => ${deleteLeadConfirm}`);
        expect(deleteLeadConfirm).toBe(`Nothing to see here`);


    })
})