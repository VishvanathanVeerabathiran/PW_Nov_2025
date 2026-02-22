import { HomePage } from "./03_homePage";

export class AccountsPage extends HomePage {
    
    async clickonCreateAccountLink() {
        await this.lpPage.locator(`//a[text()='Create Account']`).click();
    }
}