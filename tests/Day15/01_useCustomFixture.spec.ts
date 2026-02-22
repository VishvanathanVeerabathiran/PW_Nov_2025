

import { test } from "./fixture";
test(`Using custome fixture`, async ({ page }) => {
    const title = await page.title();
    console.log(`Page title is ==> ${title}`);

})
