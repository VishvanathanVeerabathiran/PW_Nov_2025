//Alert
/* Modal - cannot be inspected..
Non-Modal Alert - Can inspect and sweet alert
*/
import { test } from "@playwright/test";
test(`Alert Handling using page.on listener`, async ({ page }) => {//page.on is kind of listener for respective test only
    page.on(`dialog`, async (alert) => {
        //dialog is alert
        const alertMessage = alert.message();
        console.log(`The alert message is ${alertMessage}`);
        const alertType = alert.type();
        console.log(`The alert type is ${alertType}`);
        if (alertType == "confirm") {
            await alert.accept();

        } else if
            (
            alertType == "prompt") {
            await alert.accept("Hello World!");
            const promptAlertText = await page.locator(`//div[@id='text']/p`).textContent();
            console.log(`Prompt alert text entered : ${promptAlertText}`);
        } else {
            alert.dismiss();
        }
    })
    await page.goto(`https://www.selenium.dev/selenium/web/alerts.html#`);
    await page.locator(`//a[@id='alert']`).click(); //Simple alert
    // await page.locator(`//a[@id='confirm']`).click();// confirm alert - by default cancel will be clicked
    await page.locator(`//a[@id='prompt']`).click();//promt alter - by default cancel will be clicked
    const promptAlertText = await page.locator(`//div[@id='text']/p`).textContent();
    console.log(`Prompt alert text entered : ${promptAlertText}`);

})