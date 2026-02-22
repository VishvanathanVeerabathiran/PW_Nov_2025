import { expect, test } from "@playwright/test";
let accessToken: any;
let tokenType: any;
let instanceURL: any;
let leadID: any;
let authorizationBearer: any;
test.describe.serial(`Sales Force Lead`, async () => {
    test(`Sales force Generate Auth using playwright API`, async ({ request }) => {
        const genAuthTokenResponse = await request.post(`https://login.salesforce.com/services/oauth2/token`, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            form: {
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
    test(`Sales force Create Lead using playwright API`, async ({ request }) => {
        const createLeadResponse = await request.post(`${instanceURL}/services/data/v65.0/sobjects/Lead`, {
            headers: {
                //"Authorization" :`${tokenType} ${accessToken} `        
                "Authorization": `${authorizationBearer}`,
                "Content-Type": "application/json"
            },
            data: {
                "Salutation": "Mr",
                "FirstName": "Vishvanathan",
                "LastName": "Veera",
                "Company": "Testleaf"
            }
        });
        const createLeadResponseBody = await createLeadResponse.json();
        console.log(createLeadResponseBody);
        const createLeadStatus = createLeadResponse.status();
        console.log(`Create Lead Status is ==> ${createLeadStatus}`);
        const createLeadStatusCode = createLeadResponse.statusText();
        console.log(`Create Lead Status code is ==> ${createLeadStatusCode}`);
        leadID = createLeadResponseBody.id;
        console.log(`Lead Id is ==> ${leadID}`);
        expect(createLeadStatus).toBe(201);
        expect(createLeadStatusCode).toBe("Created")
    })
    test(`Fetch Lead using playwright API`, async ({ request }) => {
        const fetchLeadResponse = await request.get(`${instanceURL}/services/data/v65.0/sobjects/Lead/${leadID}`, {
            headers: {
                "Authorization": `${authorizationBearer}`,
                "Content-Type": "application/json"
            }
        });
        const fetchLeadResponseBody = await fetchLeadResponse.json();
        console.log(fetchLeadResponseBody);
        const fetchLeadStatus = fetchLeadResponse.status();
        console.log(`Fetch Lead Status is ==> ${fetchLeadStatus}`);
        const fetchLeadStatusCode = fetchLeadResponse.statusText();
        console.log(`Fetch Lead Status code is ==> ${fetchLeadStatusCode}`);
        expect(fetchLeadStatus).toBe(200);
        expect(fetchLeadStatusCode).toBe("OK")
    })
    test(`Update Lead using playwright API`, async ({ request }) => {
        const updateLeadResponse = await request.patch(`${instanceURL}/services/data/v65.0/sobjects/Lead/${leadID}`, {
            headers: {
                "Authorization": `${authorizationBearer}`,
                "Content-Type": "application/json"
            },
            data: {
                "Salutation": "Mr",
                "FirstName": "VishvanathanNew1",
                "LastName": "VeeraNew1",
                "Company": "Testleaf/Qeagle"
            }
        });
        try {
            const updateLeadResponseBody = await updateLeadResponse.json();
        }
        catch (error) {
            // console.error("Error parsing JSON:", error);  
            //  Handle empty or malformed JSON 
        }
        const updateLeadStatus = updateLeadResponse.status();
        console.log(`Update Lead Status is ==> ${updateLeadStatus}`);
        const updateLeadStatusCode = updateLeadResponse.statusText();
        console.log(`Update Lead Status code is ==> ${updateLeadStatusCode}`);
        expect(updateLeadStatus).toBe(204);
        expect(updateLeadStatusCode).toBe("No Content")
    })
    test(`Delete Lead using playwright API`, async ({ request }) => {
        const deleteLeadResponse = await request.delete(`${instanceURL}/services/data/v65.0/sobjects/Lead/${leadID}`, {
            headers: {
                "Authorization": `${authorizationBearer}`,
                "Content-Type": "application/json"
            }
        });

        try {
            const deleteLeadResponseBody = await deleteLeadResponse.json();

        } catch (error) {
            // console.error("Error parsing JSON:", error);  
              // Handle empty or malformed JSON  
        }
        const deleteLeadStatus = deleteLeadResponse.status();
        console.log(`Delete Lead Status is ==> ${deleteLeadStatus}`);
        const deleteLeadStatusCode = deleteLeadResponse.statusText();
        console.log(`Delete Lead Status code is ==> ${deleteLeadStatusCode}`);
        expect(deleteLeadStatus).toBe(204); expect(deleteLeadStatusCode).toBe("No Content")
    })
})
