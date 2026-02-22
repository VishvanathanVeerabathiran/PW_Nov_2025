
import axios from "axios";
import https from "https";
//const endPoint="https://manual-testing-demoproject.atlassian.net/rest/api/2/issue";
//const username="ravindranr90@gmail.com";
//const apiKey="ATATT3xFfGF0CpieBrSs-zKR6_yz8Rqgr-mu9eoCU5pHEkpdDdnQPBRlEFf1m9UKxpauphsMVLaoKd4DEk2owX_y_vbcOvV7ZiVn0NCUdqZ5SVSowc25COfkFtfCeAbKkOX0t9wOykCNyOHIBtTcoXqE69QgwuSB5q0Zfxl7A-dYmC6SfwnnJ9g=8E70FDF2";
//const projectId="PN"
const endPoint = "https://vishvanathan.atlassian.net/rest/api/2/issue";
const username = "vishvavg@gmail.com";
const apiKey = "ATATT3xFfGF0N_HZVe94wTfS-2Tm3GVBkTKa_PzNI-hgvPOk8jYk2exL_TZ8IKQOqG2RM6Oh9J8k1F_GkpWh3p06tW68LzbvhqCckR1PigCqYNnnJe7mGcjG5ff22u-82Aqxr1oOZoqPie9ruiRNs0ba6j-ps1zup_ggiDvprhoO4f68u_5l1R0=E1D67371";
const projectId = "PLAYW" //PLAYW VIS
const httpsAgent = new https.Agent({ rejectUnauthorized: false });
export async function createJiraTikcet(summary: string, description: string, comments: string) {
    const issueRequestJson = {
        "fields":
        {
            "project":
            {
                "key": projectId
            },
            "summary": summary,
            "description": description,
            "issuetype":
            {
                "name": "Bug"

            }
        }

    }
    await axios.post(endPoint, issueRequestJson, {
        auth: {
            username: username,
            password: apiKey
        }, headers: {
            'Content-Type': `application/json`
        },
        httpsAgent
    });
}


