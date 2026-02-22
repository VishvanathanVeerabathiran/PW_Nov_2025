import { CreateLeadPage } from "./05_createLeadPage";

export class ViewLeadPage extends CreateLeadPage {
    async verifyTitle() {
        const verifyTitle = await this.lpPage.title(); 
        console.log(`View lead page title ==>  ${verifyTitle}`);
    }
    async verifyFirstName() 
    { 
        const fName = await this.lpPage.locator(`//span[@id='viewLead_firstName_sp']`).innerText(); 
        console.log(`Verify first name ==> ${fName}`); }
}
