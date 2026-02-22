/* To do API Testing - Following data required for service now
1. Endpoint2. Authorization3. Header4. Request Body5. CRUD Operation POST,GET,PUT,PATCH,DELETE*/
import { expect, test } from "@playwright/test";
let systemId: any // Global varaiable
let incidentID: any
test.describe.serial(`Service Now`, async () => {
    test(`Creating incident in service now using playwright API `, async ({ request }) => {
        const createResponse = await request.post(`https://dev291487.service-now.com/api/now/table/incident`,
            {
                headers: { "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C", "Content-Type": "application/json", },
                data: {
                    "short_description": "Laptop audio issue - Vishva",
                    "description": "Laptop issue",
                    "comments_and_work_notes": "Raised via postman",
                    "subcategory": "Outlook",
                    "impact": "3",
                    "urgency": "1"
                },
                ignoreHTTPSErrors: true
            });
        const createResponseBody = await createResponse.json(); // Serialization - Convertion response object into json readable format  
        console.log(createResponseBody);
        //console.log(""createResponseBody); 
        //console.log('Create Incident JSON:\n', JSON.stringify(createResponseBody, null, 2));   
        const status = createResponse.status();
        const statusCode = createResponse.statusText();
        console.log(`Create Incident status ==> ${status}`);
        console.log(`Create Incident status code ==> ${statusCode}`);
        //Asset status   
        expect(status).toBe(201);
        //Asset status code 
        expect(statusCode).toBe("Created");
        //Get sys id from response body 
        systemId = createResponseBody?.result?.sys_id; console.log(`System id : ${systemId}`);
        incidentID = createResponseBody?.result?.number; console.log(`Incident Id is : ${incidentID}`);
    })
    test(`Fetch incident in service now using playwright API `, async ({ request }) => {
        const fetchResponse = await request.get(`https://dev291487.service-now.com/api/now/table/incident/${systemId}`,
            {
                headers: { "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C", "Content-Type": "application/json", },
                ignoreHTTPSErrors: true
            }); const fetchResponseBody = await fetchResponse.json(); // Serialization - Convertion response object into json readable format    
        console.log(fetchResponseBody);
        const fetchStatus = fetchResponse.status();
        const fetchStatusCode = fetchResponse.statusText();
        console.log(`Fetch Incident status ==> ${fetchStatus}`);
        console.log(`Fetch Incident status code ==> ${fetchStatusCode}`);
        //Asset status     
        expect(fetchStatus).toBe(200);
        //Asset status code      
        expect(fetchStatusCode).toBe("OK");
    })

    test(`Modify the incident in service now using playwright API `, async ({ request }) => {
        const modifyResponse = await request.put(`https://dev291487.service-now.com/api/now/table/incident/${systemId}`, {

            headers: {
                "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C",
                "Content-Type": "application/json",
            }, data: {
                "short_description": "Laptop speaker issue - Vishva",
                "description": "Laptop issue",
                "comments_and_work_notes": "Raised via postman",
                "subcategory": "Outlook",
                "impact": "3",
                "urgency": "2"
            },
            ignoreHTTPSErrors: true
        });
        const modifyResponseBody = await modifyResponse.json(); // Serialization - Convertion response object into json readable format   
        console.log(modifyResponseBody);
        const modifyStatus = modifyResponse.status();
        const modifyStatusCode = modifyResponse.statusText();
        console.log(`Modify Incident status ==> ${modifyStatus}`);
        console.log(`Modify Incident status code ==> ${modifyStatusCode}`);
        //Asset status          
        expect(modifyStatus).toBe(200);
        //Asset status       
        expect(modifyStatusCode).toBe("OK");
    })
    test(`Update the incident in service now using playwright API `, async ({ request }) => {
        const updateResponse = await request.patch(`https://dev291487.service-now.com/api/now/table/incident/${systemId}`,
            {
                headers: {
                    "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C",
                    "Content-Type": "application/json",
                },
                data:
                {
                    "description": "All issues got resolved .Thanks Team !"
                },
                ignoreHTTPSErrors: true
            });
        const updateResponseBody = await updateResponse.json(); // Serialization - Convertion response object into json readable format              
        console.log(updateResponseBody);
        const updateStatus = updateResponse.status();
        const updateStatusCode = updateResponse.statusText();
        console.log(`Update Incident status ==> ${updateStatus}`);
        console.log(`Update Incident status code ==> ${updateStatusCode}`);
        //Asset status           
        expect(updateStatus).toBe(200);
        //  //Asset status code         
        expect(updateStatusCode).toBe("OK");
        const updatedDescription = updateResponseBody.result.description;
        console.log(`Update Desc is :  ${updatedDescription}`);
        expect(updatedDescription).toBe("All issues got resolved .Thanks Team !")
    })

    test(`Delete the incident in service now using playwright API `, async ({ request }) => {
        const deleteResponse = await request.delete(`https://dev291487.service-now.com/api/now/table/incident/${systemId}`,

            {
                headers:
                {
                    "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C",
                    "Content-Type": "application/json",
                },
                ignoreHTTPSErrors: true
            });
        // const deleteResponseBody= await deleteResponse.json(); // Serialization - Convertion response object into json readable format            
        //  console.log(`Delete Incident Json ${deleteResponseBody}`);         
        const deleteStatus = deleteResponse.status();
        const deleteStatusCode = deleteResponse.statusText();
        console.log(`Delete Incident status ==> ${deleteStatus}`);
        console.log(`Delete Incident status code ==> ${deleteStatusCode}`);
        //Asset status          
        expect(deleteStatus).toBe(204);
        //Asset status code          
        expect(deleteStatusCode).toBe("No Content");
    })
})


