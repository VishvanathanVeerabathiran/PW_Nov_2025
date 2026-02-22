import { test } from "@playwright/test";
test(`locators`, async ({ page }) => {
    await page.goto(`https://www.oneindia.com/`);

    const allFrames = page.frames(); 
    console.log(allFrames); 
    console.log(`Number of frames :` + allFrames.length);
    for (let i = 0; i < allFrames.length; i++) 
        { 
            const eachTitle = await allFrames[i].title(); 
            console.log(`Title of ${i} frame is : ${eachTitle}`);
         }
    for (const tempValue of allFrames) 
        { 
        const titles = await tempValue.title(); 
        console.log(`Title is ${titles}`); }


    //     //Get by Role//     await page.getByRole("textbox",{name:"Username"}).fill("vishvaverizon980@agentforce.com"); // accessibility
    //     //Get by label//     await page.getByLabel("Password").fill("Vishva@12"); //    // await page.getByRole("textbox",{name:"Password"}).fill("Vishva@12");
    //     await page.getByRole("button",{name:"Log In"}).click(); 
    //     await page.waitForTimeout(3000);    //     //getByTitle
    //     await page.getByTitle("App Launcher",{exact:true}).click(); //attribute
    //     await page.waitForTimeout(3000);
    //     //getByText
    //    // await page.getByText("View All",{exact:true}).click();
    //    //get by label;
    //    await page.getByLabel("View All Applications",{exact:true}).click(); //attribute
    //     //place holder
    //     await page.getByPlaceholder("Search apps or items...",{exact:true}).click(); //attribute
    //     //


})