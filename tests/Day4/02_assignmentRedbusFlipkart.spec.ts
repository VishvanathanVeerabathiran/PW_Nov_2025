
import {  chromium, test, webkit} from "@playwright/test";

test(`Open the Redbus and Flipkart Url`, async() => {

  const browser=  await chromium.launch({headless:false,channel:"msedge"});
  const context =await browser.newContext();
  const page =await context.newPage();
  await page.goto("https://www.redbus.in/");
  const urlRedBus = page.url();
  const titleRedBus = await page.title();
  console.log(`Redbus url is : ` + urlRedBus);
  console.log(`Redbus page title is : ` + titleRedBus);

  const browser1=  await webkit.launch({headless:false,channel:"webkit"});
  const context1 =await browser1.newContext();
  const page1 =await context1.newPage();
  await page1.goto("https://www.flipkart.com/");
  const urlFlipKart =page1.url();
  const titleFlipkart = await page1.title();
  console.log(`Flipkart url is : ` + urlFlipKart);
  console.log(`Flipkart page title is : ` + titleFlipkart);

}
)