
/* To do API Testing - Following data required for service now
1. Endpoint2. Authorization3. Header4. Request Body5. CRUD Operation POST,GET,PUT,PATCH,DELETE*/
import { expect, test } from "@playwright/test";
let crsystemId: any // Global varaiable
let changeRequestID: any
test.describe.serial(`Service Now`, async () => {
    test(`Creating Change Request in service now using playwright API `, async ({ request }) => {
        const createResponse = await request.post(`https://dev291487.service-now.com/api/now/table/change_request`,
            {
                headers:
                {
                    "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C",
                    "Content-Type": "application/json",
                }, data:
                {
                    "short_description": "Laptop audio issue - Vishva",
                    "description": "Laptop issue",
                    "comments_and_work_notes": "Raised via postman",
                    "subcategory": "Outlook",
                    "impact": "3",
                    "urgency": "1"
                }, ignoreHTTPSErrors: true
            });
        const createResponseBody = await createResponse.json(); // Serialization - Convertion response object into json readable format       
        console.log(createResponseBody);
        const status = createResponse.status();
        const statusCode = createResponse.statusText();
        console.log(`Create Change request status ==> ${status}`); console.log(`Create Change request status code ==> ${statusCode}`);
        //Asset status      
        expect(status).toBe(201);
        //Asset status code      
        expect(statusCode).toBe("Created");
        //Get sys id from response body    
        crsystemId = createResponseBody.result.sys_id;
        console.log(`System id : ${crsystemId}`);
        changeRequestID = createResponseBody.result.number;
        console.log(`Incident Id is : ${changeRequestID}`);
    })
    test(`Fetch Newly created change request in service now using playwright API `, async ({ request }) => {
        const fetchCRResponse = await request.get(`https://dev291487.service-now.com/api/now/table/change_request/${crsystemId}`,
            {
                headers: {
                    "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C",
                    "Content-Type": "application/json",
                },
                ignoreHTTPSErrors: true
            });
        const fetchCRResponseBody = await fetchCRResponse.json(); // Serialization - Convertion response object into json readable format     
        console.log(fetchCRResponseBody);
        const fetchStatus = fetchCRResponse.status();
        const fetchStatusCode = fetchCRResponse.statusText();
        console.log(`Fetch Change Request status ==> ${fetchStatus}`);
        console.log(`Fetch Change Request status code ==> ${fetchStatusCode}`);
        //Asset status      
        expect(fetchStatus).toBe(200);
        //Asset status code     
        expect(fetchStatusCode).toBe("OK");
    })

    test(`Modify the change request in service now using playwright API `, async ({ request }) => {
        const modifyResponse = await request.put(`https://dev291487.service-now.com/api/now/table/change_request/${crsystemId}`,
            {
                headers: {
                    "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C",
                    "Content-Type": "application/json",
                }, data:
                {
                    "short_description": "Modifying the Clear BGP sessions on a Cisco router"

                },
                ignoreHTTPSErrors: true
            });
        const modifyResponseBody = await modifyResponse.json(); // Serialization - Convertion response object into json readable format      
        console.log(modifyResponseBody);
        const modifyStatus = modifyResponse.status();
        const modifyStatusCode = modifyResponse.statusText();
        console.log(`Modify Change Request status ==>  ${modifyStatus}`);
        console.log(`Modify Change Request code ==> ${modifyStatusCode}`);
        //Asset status        
        expect(modifyStatus).toBe(200);
        //Asset status code       
        expect(modifyStatusCode).toBe("OK");
    })
    test(`Update the Change Request in service now using playwright API `, async ({ request }) => {
        const updateResponse = await request.patch(`https://dev291487.service-now.com/api/now/table/change_request/${crsystemId}`,
            {
                headers:
                {
                    "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C",
                    "Content-Type": "application/json",
                }, data:
                {
                    "short_description": "Updates - Clear BGP sessions on a Cisco router - All issues got resolved .Thanks Team !"
                }, ignoreHTTPSErrors: true
            });
        const updateResponseBody = await updateResponse.json(); // Serialization - Convertion response object into json readable format            
        console.log(updateResponseBody);
        const updateStatus = updateResponse.status();
        const updateStatusCode = updateResponse.statusText();
        console.log(`Update Change Request status ==> ${updateStatus}`);
        console.log(`Update Change Request code ==> ${updateStatusCode}`);
        //Asset status        
        expect(updateStatus).toBe(200);
        //Asset status code          
        expect(updateStatusCode).toBe("OK");
        const updatedShortDescription = updateResponseBody.result.short_description;
        console.log(`Update Desc is :  ${updatedShortDescription}`);
        expect(updatedShortDescription).toBe("Updates - Clear BGP sessions on a Cisco router - All issues got resolved .Thanks Team !")
    })

    test(`Delete the Change Request in service now using playwright API `, async ({ request }) => {
        const deleteResponse = await request.delete(`https://dev291487.service-now.com/api/now/table/change_request/${crsystemId}`,
            {
                headers:
                {
                    "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C",
                    "Content-Type": "application/json",
                }, ignoreHTTPSErrors: true
            });
        const deleteStatus = deleteResponse.status();
        const deleteStatusCode = deleteResponse.statusText();
        console.log(`Delete Change Request status ==> ${deleteStatus}`);
        console.log(`Delete Change Request code ==> ${deleteStatusCode}`);
        //Asset status         
        expect(deleteStatus).toBe(204);
        //Asset status code            
        expect(deleteStatusCode).toBe("No Content");
    })
})
