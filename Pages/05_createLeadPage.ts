import { LeadPage } from "./04_leadPage";
export class CreateLeadPage extends LeadPage {
    async enterMandatoryFields() {
        await this.lpPage.locator(`#createLeadForm_companyName`).fill(`Testleaf`);
        await this.lpPage.locator(`#createLeadForm_firstName`).fill(`Vishva`);
        await this.lpPage.locator(`#createLeadForm_lastName`).fill(`Veera`);
    }
    async clickCreateLeadSubmitBtn() {
        await this.lpPage.locator(`//input[@name='submitButton']`).click();
    }
}