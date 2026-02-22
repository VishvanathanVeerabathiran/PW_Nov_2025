import { test } from "@playwright/test";
test.use({ storageState: 'Data/leafTapLoginSession.json' })
test(`Skip login using Session`, async ({ page }) => {
    await page.goto(`http://leaftaps.com/crmsfa/control/main?externalLoginKey=EL543705846874`);
     console.log(`Page title is ${await page.title()}`);
})