import { expect, test } from "@playwright/test"; import { url } from "inspector";
test(`Alert Assignment W3 Scools`, async ({ page }) => {

    page.on(`dialog`, async (alert) => {
        alert.message();
        const alertType = alert.type()
        console.log(`Alert type is ${alertType}`); 
        if (
            alertType == "confirm") 
            { 
                const messages = alert.message();
                 console.log(`Message from alert ${messages}`); 
                 alert.accept(); 
                } 
                else 
                    {
                         alert.dismiss(); 
                        }
    })

    await page.goto(`https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_alert`);
    const frameSelec = page.frameLocator(`//iframe[@name='iframeResult']`); 
    await frameSelec.getByRole("button", { name: "Try it" }).click();
    await page.goto(`https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm`); 
    const frameSelec1 = page.frameLocator(`//iframe[@name='iframeResult']`); 
    await frameSelec1.getByRole("button", { name: "Try it" }).click(); 
    const pressedOk = await frameSelec1.locator(`//p[text()='You pressed OK!']`).innerText(); 
    console.log(`Text is: ${pressedOk}`); 
    expect(pressedOk).toContain("You pressed OK!");
})

