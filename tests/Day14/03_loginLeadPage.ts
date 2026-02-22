import { Page, chromium } from "@playwright/test";
class LoginLeadPage {
    lpPage: Page;
    constructor(
        TPage: Page) {
        // Tpage is reference varaiable for page constructor.. Tpage page instance assigned to Tpage     
        //    Tpage (Local variable) == page that is passed as a argument    
        this.lpPage = TPage;
        // this.lppage = Tpage (means lppage === page (instance)    
        }
async loadURL(){
            await this.lpPage.goto(`http://leaftaps.com/opentaps/control/main`)
        }
async enterCredentials(){
            await this.lpPage.locator(`input`).nth(0).fill(`DemoSalesManager`);
            await this.lpPage.locator(`input`).nth(1).fill(`crmsfa`)
        }
async clickLogin(){
            await this.lpPage.locator(".decorativeSubmit").click();
        }
async closeBrowser()
        {
            await this.lpPage.close();
        }
    }

async function doLogin() {
    const browser = await chromium.launch(
        {
            headless: false
        });
    const context = await browser.newContext();
    const page = context.newPage();
    const lp = new LoginLeadPage(await page);
    await lp.loadURL();
    await lp.enterCredentials();
    await lp.clickLogin();
    await lp.closeBrowser();
}
doLogin();