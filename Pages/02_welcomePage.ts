import { LoginLeadPage } from "./01_loginPage";

export class WelcomePage extends LoginLeadPage {
    async clickSbtBtnWelcomePage()
     { 
        await this.lpPage.locator(`(//a[contains(text(),CRM/SFA)])[1]`).click(); }
}
