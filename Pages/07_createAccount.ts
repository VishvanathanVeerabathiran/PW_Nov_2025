import { AccountsPage } from "./09_accountPage";

export class CreateAccountPage extends AccountsPage {

    async enterAccountPageMandateDetails(accounname: string) {
        await this.lpPage.locator(`#accountName`).fill(accounname);
    }

    async clickCreateAccountBtn() {
        await this.lpPage.locator(`//input[@value='Create Account']`).click();
    }
} 