import { CreateAccountPage } from "./07_createAccount";

export class VerifyAccountPage extends CreateAccountPage {

    async verifyAccountName() 
    { const accountName = await this.lpPage.locator(`(//span[text()='Account Name']/following::span)[1]`).innerText();
     console.log(`Account name is ==> ${accountName}`); }
}