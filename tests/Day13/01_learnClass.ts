class Browser {
    //declaring the property   
    browserType: string = "Chrome";

    //Public access modifier/ access inside the class    
    browserVersion: number = 141;
    launchBrowser() {
        console.log("launching the browser");

    }
    closeBrowser() {
        console.log("Closing the browser");
    }

}
let browser = new Browser();
browser.launchBrowser();
browser.closeBrowser();
console.log(browser.browserType);
console.log(browser.browserVersion)