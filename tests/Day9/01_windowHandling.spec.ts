//Window Handling
import { test } from "@playwright/test";
test(`Handling window`, async ({ context, page }) => {
    await page.goto(`https://www.flipkart.com/`);
    const serachBox = page.locator(`//input[@class='Pke_EE']`);
    await serachBox.fill(`Samsung mobiles`)
    await serachBox.press(`Enter`);
    const newPage = context.waitForEvent(`page`); //listener
    await page.locator(`//div[text()='Samsung Galaxy S24 5G Snapdragon (Marble Gray, 128 GB)']`).click();
    const childPage = await newPage; //go new child page and resolving the promise 
    console.log(`Parent page title"` + await page.title());
    console.log(`Child page title"` + await childPage.title());
    await page.bringToFront();
    console.log(`Parent page title after brining back"` + await page.title());
})

test(`Window handling POCO Mobile`, async ({ context, page }) => {
    await page.goto(`https://www.flipkart.com/`); 
    const serachBox = page.locator(`//input[@class='Pke_EE']`); 
    await serachBox.fill(`Mobiles`)    
    await serachBox.press(`Enter`); 
    const newPage = context.waitForEvent(`page`);
     await page.locator(`//div[text()='POCO C71 (Desert Gold, 64 GB)']`).click(); 
     const childpage = await newPage; 
     console.log(`Parent page title is :"` + await page.title()); 
     console.log(`Child page title is :"` + await childpage.title()); 
     const mobileEle = childpage.locator(`//div[@class='hZ3P6w bnqy13' and text()='₹6,199']`); 
     const mobPrice = await mobileEle.innerText()   
      console.log(`Child Page - Mobile Price:` + mobPrice); 
      await page.bringToFront(); console.log(`Bring back to the parent page -Parent Page title is:` + await page.title());
       await page.locator(`//div[text()='POCO C71 (Desert Gold, 64 GB)']`).isVisible();
})

test.only(`Window handling concurrently POCO Mobile`, async ({ context, page }) => {
    await page.goto(`https://www.flipkart.com/`); 
    const serachBox = page.locator(`//input[@class='Pke_EE']`);
     await serachBox.fill(`Mobiles`)   
     await serachBox.press(`Enter`);
    const [newPage] = await Promise.all([context.waitForEvent(`page`), page.locator(`//div[text()='POCO C71 (Desert Gold, 64 GB)']`).click()]); 
    const childpage = newPage; 
    console.log(`Parent page title is :"` + await page.title());
     console.log(`Child page title is :"` + await childpage.title()); 
     const mobileEle = childpage.locator(`//div[@class='hZ3P6w bnqy13' and text()='₹6,199']`); 
     const mobPrice = await mobileEle.innerText()    
     console.log(`Child Page - Mobile Price:` + mobPrice); 
     await page.bringToFront(); 
     console.log(`Bring back to the parent page -Parent Page title is :` + await page.title());
      await page.locator(`//div[text()='POCO C71 (Desert Gold, 64 GB)']`).isVisible(); 
      await page.waitForTimeout(3000);
})
