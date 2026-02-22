
import { test } from "@playwright/test";
import leadData from "../../Data/createLead.json";
//import dotenv from {"dotenv"}
for (let leadDatas of leadData) {
    test(`Create lead using data parameterization ${leadDatas.TestcaseNo}`, async ({ page }) => {
        await page.goto(process.env.lf_BaseUrl as string);
     console.log(`login with ${process.env.lf_username as string}`); 
     await page.locator(`//input[@id='username']`).fill(process.env.lf_username as string);
      await page.locator(`//input[@id='password']`).fill(process.env.lf_password as string); 
      await page.locator(`//input[@class='decorativeSubmit']`).click(); 
      await page.locator(`//a[contains(text(),'CRM/SFA')]`).click(); 
      await page.locator(`//a[(text()='Leads')]`).click();
       await page.locator(`//a[(text()='Create Lead')]`).click();
        await page.locator(`//input[@id='createLeadForm_companyName']`).fill(leadDatas.companyname); 
        await page.locator(`//input[@id='createLeadForm_firstName']`).fill(leadDatas.firstname); 
        await page.locator(`//input[@id='createLeadForm_lastName']`).fill(leadDatas.lastname);
        //Select direct mail 
        await page.selectOption(`//select[@id='createLeadForm_dataSourceId']`,{label:leadDatas.sourceDropDown}); 
     //Select marketing campaign 
     await page.selectOption(`//select[@id='createLeadForm_marketingCampaignId']`,{value:leadDatas.marketingCampaign});
        //Print all values from marketing campaign
        const marketLoc = page.locator(`//select[@id='createLeadForm_marketingCampaignId']/option`);
         const markCount = await marketLoc.count();
         console.log(`Market campaign dropdown count ${markCount}`); 
         for (let i = 0; i < markCount; i++) {
            const eachDropDown = await marketLoc.nth(i).innerText();   
            // console.log(`Each Dropdown marketing value ${eachDropDown}`);     }    
            // //industry options from index 
               await page.selectOption(`//select[@id='createLeadForm_industryEnumId']`,{index:leadDatas.industryIndex});
            //inr from currency dropdown   
             await page.selectOption(`//select[@name='currencyUomId']`,{value:leadDatas.currency});
            //india from country dropdown
            await page.selectOption(`//select[@name='generalCountryGeoId']`, { label: leadDatas.country });   
             //State from dropdown   
              await page.selectOption(`//select[@name='generalStateProvinceGeoId']`,{label:leadDatas.state});       
                //Print all values from state
            const stateLoc = page.locator(`//select[@name='generalStateProvinceGeoId']/option`); 
            const stateCount = await stateLoc.count(); 
            console.log(`State dropdown count ${stateCount}`); 
        for (let i = 0; i < stateCount; i++) {
             const eachState = await stateLoc.nth(i).innerText();
             console.log(`Each Dropdown state value is : ${eachState}`); }
            //  //Drop down handling//  //Value based//  await page.selectOption("#createLeadForm_dataSourceId",{value:"LEAD_EMPLOYEE"});
            //  //Label based//  await page.selectOption("#createLeadForm_marketingCampaignId",{label:"eCommerce Site Internal Campaign"});
            //  //Index based//  await page.selectOption("#createLeadForm_industryEnumId",{index:14});
            //  // value based //  await page.selectOption("//select[@id='createLeadForm_ownershipEnumId']",{value:"OWN_PUBLIC_CORP"});

            //  const dropDownLocator = page.locator(`//select[@id='createLeadForm_generalStateProvinceGeoId']/option`);//  const dropDownCount = await dropDownLocator.count();//  console.log(`Dropdwon count is : ${dropDownCount}`);
            //  for (let i = 0; i < dropDownCount; i++ ) {
            //      const eachDropDown =await dropDownLocator.nth(i).innerText();//      console.log(eachDropDown);          //  
            }
            await page.locator(`//input[@class='smallSubmit']`).click();

        })
}
