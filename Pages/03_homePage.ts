import { WelcomePage } from "./02_welcomePage";

export class HomePage extends WelcomePage {

    async clickOnLeadsBtn() {
        await this.lpPage.locator(`//a[text()='Leads']`).click();
    }
    async clickOnAccountsBtn() {
        await this.lpPage.locator(`//a[text()='Accounts']`).click();
    }
}