import { TestInfo } from "@playwright/test";
import { createJiraTikcet } from "./03_jiraIntegration";
export async function createAJiraBug(testinfo: TestInfo) {
    if (testinfo.status === "failed" || testinfo.status === "timedOut") {
        const summary = `Test status ${testinfo.status} : ${testinfo.title}`;
        const description = `Test description error ${testinfo.error}`;
        const comments = `Creating the bug with ${testinfo.status}`;
        await createJiraTikcet(summary, description, comments);
    }
    else {
        console.log(`Testcases is passed ${testinfo.status}`);
    };
}