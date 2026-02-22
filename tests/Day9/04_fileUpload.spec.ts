import { test } from "@playwright/test"; import path from "path";
//Scenario 1 - Type is file
test(`Handling upload file`, async ({ page }) => {
  await page.goto(`https://the-internet.herokuapp.com/upload`);
  const clickUpload = page.locator(`//input[@id='file-upload' and @type='file']`);
  await clickUpload.setInputFiles(`Data/uploadText.txt`);
  await page.waitForTimeout(3000)
  await clickUpload.setInputFiles(path.join(__dirname, `../../Data/uploadText.txt`)) //Absolute file upload   
  await page.waitForTimeout(3000)
  await clickUpload.setInputFiles([`Data/uploadText.txt`, 'Data/uploadText1.txt'])
})

//Scenario 2 - type attribute value is not a file
test.only(`Handling file upload without type = file `, async ({ page }) => {
  await page.goto(`https://the-internet.herokuapp.com/upload`);
  const fileChoose = page.waitForEvent("filechooser")
  page.locator(`//div[@id='drag-drop-upload']`).click(); const fileUpload = await fileChoose
  //await fileUpload.setFiles(`Data/uploadText.txt`); //Relative path    
  //await fileUpload.setFiles([`Data/uploadText.txt`,`Data/uploadText1.txt`,`Data/file.json`]);    
  await page.waitForTimeout(3000);
  const path1 = path.join(__dirname, `../../Data/uploadText.txt`);
  const path2 = path.join(__dirname, `../../Data/uploadText1.txt`);
  const path3 = path.join(__dirname, `../../Data/file.json`);
  const path4 = path.join(__dirname, `../../Data/absolute.json`);
  const path5 = path.join('C:\\Workspace', 'fileCopy.json');
  await fileUpload.setFiles([path1, path2, path3, path4, path5]); //Absolute path

})