import { Page, chromium } from "@playwright/test";
class LoginSalesforcePage {
    loginPage: Page;
    constructor
        (
            TempPage: Page) { // Tpage is reference varaiable for page constructor.. Tpage page instance assigned to Tpage        
        // Tpage (Local variable) == page that is passed as a argument      
        this.loginPage = TempPage; // this.lppage = Tpage (means lppage === page (instance)   
    }
    async loadURL() {
        await this.loginPage.goto(`https://login.salesforce.com/`)
    }
    async enterCredentials() {
        await this.loginPage.fill("#username", "vishvaverizon980@agentforce.com")
        await this.loginPage.fill("#password", "Vishva@12")
    }
    async clickLogin() { await this.loginPage.click('#Login') }
    async verifyTitle() {
        const title = await this.loginPage.title();
        console.log(`Page title is ==> ${title}`);
    }
    async closeBrowser() { await this.loginPage.close(); }
}

async function doLogin() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = context.newPage();
    const lp = new LoginSalesforcePage(await page);
    await lp.loadURL();
    await lp.enterCredentials();
    await lp.clickLogin();
    await lp.verifyTitle();
    await lp.closeBrowser();
}
doLogin();
