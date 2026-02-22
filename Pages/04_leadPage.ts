import { HomePage } from "./03_homePage";

export class LeadPage extends HomePage {
    
    async clickOnCreateLeadBtn() {
        await this.lpPage.locator(`//a[text()='Create Lead']`).click();
    }
}