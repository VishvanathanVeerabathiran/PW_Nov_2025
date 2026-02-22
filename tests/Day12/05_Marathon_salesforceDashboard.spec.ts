import { expect, test } from "@playwright/test";
let accessToken: any;
let instanceURL: any;
let tokenType: any;
let dashboardID: any;
test.use({ storageState: "Data/salesforceLogin.json" })
test.describe.serial(`Sales Force Dashboard`, async () => {
    test(`Create Dashboard in saleforce using playwright`, async ({ page }) => {
        await page.goto(`https://orgfarm-554300c533-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome`);
        await page.waitForTimeout(3000);
        await page.locator(`//div[@class='slds-icon-waffle']`).click();
        await page.waitForTimeout(3000);
        await page.locator(`//button[text()='View All']`).click();
        await page.locator(`//input[@placeholder='Search apps or items...']`).fill(`Dashboards`);
        await page.locator(`//mark[text()='Dashboards']`).click();
        await page.waitForTimeout(3000);
        await page.locator(`//div[text()='New Dashboard']`).click();
        await page.waitForTimeout(3000);
        const frameRef = page.frameLocator(`//iframe[@title='dashboard']`);
        await frameRef.locator(`//input[@id='dashboardNameInput']`).fill(`Salesforce Automation By Vishvanathan`);
        await frameRef.locator(`//button[@id='submitBtn']`).click();
        await page.waitForTimeout(3000);
        const pageTitle = await page.title();
        console.log(`Dashboard title is confirmed ==> ${pageTitle}`);
        expect(pageTitle).toBe(`Salesforce Automation By Vishvanathan | Salesforce`);
    })
    test(`Generate Auth token in saleforce`, async ({ request }) => {
        const genAuthResponse = await request.post(`https://login.salesforce.com/services/oauth2/token`,
            {
                form:
                {
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
    test(`Fetch dashboard in Sales Force`, async ({ request }) => {
        const fetchLeadResponse = await request.get(`${instanceURL}/services/data/v59.0/sobjects/Dashboard`,
            {
                headers:
                {
                    "Authorization": `${tokenType} ${accessToken}`,
                    "Content-Type": "application/json",
                }
            });
        const fetchLeadResponseBody = await fetchLeadResponse.json()
        dashboardID = await fetchLeadResponseBody.recentItems[0].Id
        console.log(`Dashboard Id ==> ${dashboardID}`);
        const fetchLeadStatus = fetchLeadResponse.status();
        const fetchLeadStatusCode = fetchLeadResponse.statusText();
        console.log(`fetchDashboardStatus ==> ${fetchLeadStatus}`);
        console.log(`fetchDashboardStatusCode ==> ${fetchLeadStatusCode}`);
        expect(fetchLeadStatus).toBe(200);
        expect(fetchLeadStatusCode).toBe("OK");
    })
    test(`Delete dashboard in Sales Force`, async ({ request }) => {
        const deleteDashboardResponse = await request.delete(`${instanceURL}/services/data/v59.0/sobjects/Dashboard/${dashboardID}`,
            {
                headers:
                {
                    "Authorization": `${tokenType} ${accessToken}`,
                    "Content-Type": "application/json",
                }
            });
        const deleteDashboardStatus = deleteDashboardResponse.status();
        const deleteDashboardStatusCode = deleteDashboardResponse.statusText();
        console.log(`deleteDashboardStatus ==> ${deleteDashboardStatus}`);
        console.log(`deleteDashboardStatusCode ==> ${deleteDashboardStatusCode}`);
        expect(deleteDashboardStatus).toBe(204);
        expect(deleteDashboardStatusCode).toBe("No Content");
    })

})
