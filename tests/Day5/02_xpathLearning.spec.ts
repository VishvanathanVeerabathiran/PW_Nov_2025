import { test } from "@playwright/test";
test(`Xpath learning`, async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
     await page.locator(`#username`).fill(`Demosalesmanager`); 
     await page.locator(`username`).first().fill(`crmsfa`); 
     await page.locator(`username`).last().click(); 
     await page.locator(`xpath=//a[contains(text(),'CRM/SFA')]`).click();
    /*     a. ======Absolute xpath======
    Starts with root node 
    /html/hesd/div[2]/div/p - NOt advisible to use and time taking

    b. ========Relative xpath=======
    1. Attribute based     syntax -  //tagName[@attributeName='attributeValue']
    //input[@id='userName']
    2. Text based xptah
    syntax -  //tagName[text()='textValue']     //input[text()='userName']
    3. Partial attribute based xpath
    contains is the keyword
    //tagName[contains(@attribute,'attributeValue')]
    //input[contains(@id,'user')]

    4. Partial text based xpath
    //tagName[contains(text(),'textvalue')]
    //input[contains(text(),'CRM/SFA')]
     5. Index or collection based path
    (//tagname[@attribute='value'])[indexvalue] --> Index starts from 1 always
    (//input[@id='username'])[2]         */


    /*         Advance based path
    1. Parent to Child
    (parent relative xpath)/childTagName
    //input[@id='name']/p 
    2. Grandparent to Child
    (Grandparent xpath)// childtagName
    //form[@id='user']//form    
    3. Child to Parent
    (Childxpath)/parent::patentTagName
    //label[@id='name']/parent::form
    4. Grandchild to GrandParent
    (grandchildTageName)/ancestor::(Grandparent tag name)
    GrandChild relative xpath/ancestor::tagName of grand parent 
    //label[@id='username']/ancestor::form
    5. Younger sibling to elder sibling
    Younger sibling relative xpath/preceding-sibling::tagName of Elder sibling
    //input[@id='user']/preceding-sibling::form
    6. Elder to younger sibling
    elder sibling xpath /following-sibling::tagNameof younger

    7. Elder cosuin to younger cousin
     Elder cousin xpath/following::tagName of younger cousin 
    8. Youger cosuin to elder cousin
    Younger cousin xpath/preceding::tagName of Elder cousin 
    */

})