import { expect, test } from "@playwright/test";
let accessToken: any;
let tokenType: any;
let instanceURL: any;
let conactId: any;
let authorizationBearer: any;
let userName: any;
test.use({ storageState: "Data/salesforceLogin.json" })
test.describe.serial(`Sales Force Contact`, async () => {
    test(`Create new contact in saleforce using playwright`, async ({ page }) => {
        await page.goto(`https://orgfarm-554300c533-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome`);
        await page.waitForTimeout(3000);
        await page.locator(`//*[local-name()='svg' and @class='slds-icon slds-icon_x-small']`).first().click();
        await page.locator(`//span[text()='New Contact']`).click();
        await page.locator(`//a[text()='--None--']`).first().click();
        await page.locator(`//a[text()='Mr.']`).click();
        await page.locator(`//input[@placeholder='First Name']`).fill(`Mouneesh`);
        await page.locator(`//input[@placeholder='Last Name']`).fill(`Sreenish`);
        await page.locator(`//input[@inputmode='email']`).fill(`Veera@testleaf.com`);
        await page.locator(`//input[@placeholder='Search Accounts...']`).click();
        await page.locator(`//span[text()='New Account']`).click();
        await page.waitForTimeout(3000);
        await page.locator(`(//label[@class='label inputLabel uiLabel-left form-element__label uiLabel'])[5]/following-sibling::input`).fill(`Credits`);
        await page.locator(`(//span[text()='Save'])[3]`).click();
        await page.waitForTimeout(3000);
        await page.locator(`(//span[text()='Save'])[2]`).click();
        const verifyName = await page.locator(`//div[text()='Contact "Mouneesh Sreenish" was created.']`).innerText(); console.log(`Created Contact name is ==> ${verifyName}`);
    })


    test(`Sales force Generate Auth using playwright API`, async ({ request }) => {
        const genAuthTokenResponse = await request.post(`https://login.salesforce.com/services/oauth2/token`, {
            headers:
            {
                "Content-Type": "application/x-www-form-urlencoded"

            },
            form:
            {
                "client_id": "3MVG9rZjd7MXFdLhVLuVn.Z_MfzIS_k1AILc1hm2Fo4gAM7u8ZJldBwcEXIBA8PYr6E6xegsmKReE0bp.gCDR",
                "client_secret": "CDC4DFD8E75599878434881C878A8BD3960AA7BD7C22E621BCA46E5B8175ABB8",
                "username": "vishvaverizon980@agentforce.com",
                "password": "Vishva@12is9RQh00ashK4CReWo6h9GjY9",
                "grant_type": "password"
            }
        });
        const genAuthTokenResponseBody = await genAuthTokenResponse.json();
        console.log(genAuthTokenResponseBody);
        const genAuthTokenStatus = genAuthTokenResponse.status();
        console.log(`Generate Auth Token Status is ==> ${genAuthTokenStatus}`);
        const genAuthTokenStatusCode = genAuthTokenResponse.statusText();
        console.log(`Generate Auth Token Status Code is ==> ${genAuthTokenStatusCode}`);
        accessToken = genAuthTokenResponseBody.access_token;
        console.log(`Generate Auth Access Token ==> ${accessToken}`);
        instanceURL = genAuthTokenResponseBody.instance_url;
        console.log(`Instance Url is ==> ${instanceURL}`);
        tokenType = genAuthTokenResponseBody.token_type;
        console.log(`Token Type is ==> ${tokenType}`);
        authorizationBearer = tokenType.concat(" ").concat(accessToken)
        console.log(`${authorizationBearer}`)

    })

    test(`Fetch contact using playwright API`, async ({ request }) => {
        const fetchConactResponse = await request.get(`${instanceURL}/services/data/v59.0/sobjects/Contact`, {
            headers: {
                "Authorization": `${authorizationBearer}`,
                "Content-Type": "application/json"
            }
        });
        const fetchConactResponseBody = await fetchConactResponse.json();
        console.log(fetchConactResponseBody);
        const fetchContactStatus = fetchConactResponse.status();
        console.log(`Fetch Contact Status is ==> ${fetchContactStatus}`);
        const fetchContactStatusCode = fetchConactResponse.statusText();
        console.log(`Fetch Contact Status code is ==> ${fetchContactStatusCode}`);
        expect(fetchContactStatus).toBe(200);
        expect(fetchContactStatusCode).toBe("OK")
        conactId = fetchConactResponseBody.recentItems[0].Id;
        console.log(`Fetch contact id is ==> ${conactId}`);
        userName = fetchConactResponseBody.recentItems[0].Name;
        console.log(`Fetch contact username is ==> ${userName}`);
    })
    test(`Update Lead using playwright API`, async ({ request }) => {
        const updateContactResponse = await request.patch(`${instanceURL}/services/data/v59.0/sobjects/Contact/${conactId}`, {
            headers: {
                "Authorization": `${authorizationBearer}`,
                "Content-Type": "application/json"
            },
            data: {
                "Phone": "9876543211",
                "Email": "veer@testleaf.com",
                "Department": "Quality Engineering Team",
                "Title": "Quality"
            }
        });
        try {
            const updateContactResponseBody = await updateContactResponse.json();
            console.log(updateContactResponseBody);
        }
        catch (error) {
            console.error("Error parsing JSON:", error);
            // Handle empty or malformed JSON 
        }
        const updateContactStatus = updateContactResponse.status();
        console.log(`Update Contact Status is ==> ${updateContactStatus}`);
        const updateContactStatusCode = updateContactResponse.statusText();
        console.log(`Update Contact Status code is ==> ${updateContactStatusCode}`);
        expect(updateContactStatus).toBe(204);
        expect(updateContactStatusCode).toBe("No Content")
    })
    test(`Delete Lead using playwright API`, async ({ request }) => {
        const deleteContactResponse = await request.delete(`${instanceURL}/services/data/v59.0/sobjects/Contact/${conactId}`, {
            headers: {
                "Authorization": `${authorizationBearer}`,
                "Content-Type": "application/json"
            }
        });

        try {

            const deleteContactResponseBody = await deleteContactResponse.json();
        } catch (error) {
            // console.error("Error parsing JSON:", error);    
            // Handle empty or malformed JSON  
        } const deletecontactStatus = deleteContactResponse.status();
        console.log(`Delete contact Status is ==> ${deletecontactStatus}`);
        const deleteContactStatusCode = deleteContactResponse.statusText();
        console.log(`Delete contact Status code is ==> ${deleteContactStatusCode}`);
        expect(deletecontactStatus).toBe(204);
        expect(deleteContactStatusCode).toBe("No Content")
    })
})