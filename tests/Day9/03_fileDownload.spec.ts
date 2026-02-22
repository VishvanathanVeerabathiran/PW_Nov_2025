
import { test } from "@playwright/test"; import path from "path";
test(`Handling download file`, async ({ page }) => {
    await page.goto(`https://the-internet.herokuapp.com/download`);
    const fileDownload = page.waitForEvent(`download`);
    await page.getByRole(`link`, { name: 'file.json' }).click();
    const fDown = await fileDownload //Resolving the promise  
    await fDown.saveAs(`Data/file.json`);
    await fDown.saveAs(`Data/${fDown.suggestedFilename()}`); // Suggested filename from playwright  
    await fDown.saveAs(path.join(__dirname, `../../Data/absolute.json`)) //Absolute path  
    await fDown.saveAs(`C:\\Workspace\\fileCopy.json`)
})


