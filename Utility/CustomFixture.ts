import { test as baseTest } from "@playwright/test";
import { LoginLeadPage } from "../pages/01_loginPage";
import { WelcomePage } from "../pages/02_welcomePage";
import { HomePage } from "../pages/03_homePage";
import { LeadPage } from "../pages/04_leadPage";
import { CreateLeadPage } from "../pages/05_createLeadPage";
import { ViewLeadPage } from "../pages/06_viewLeadPage";

type myFixture = {

    loginPage: LoginLeadPage,
    welcomePage: WelcomePage,
    homePage: HomePage,
    leadPage: LeadPage,
    createLeadPage: CreateLeadPage,
    viewLeadPage: ViewLeadPage
}

export const test = baseTest.extend<myFixture>({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginLeadPage(page);
        await use(loginPage)
    },
    welcomePage: async ({ page }, use) => {
        const welcomePage = new WelcomePage(page);
        await use(welcomePage)
    },
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage)
    },
    leadPage: async ({ page }, use) => {
        const leadPage = new LeadPage(page);
        await use(leadPage)
    },
    createLeadPage: async ({ page }, use) => {
        const createLeadPage = new CreateLeadPage(page);
        await use(createLeadPage)
    },
    viewLeadPage: async ({ page }, use) => {
        const viewLeadPage = new ViewLeadPage(page);
        await use(viewLeadPage)
    }

})



