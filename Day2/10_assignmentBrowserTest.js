//Find browser and Tests

function launchBrowser(browserName) {

    if (browserName == "Chrome") {
        console.log("Browser name is Chrome");       
    } else {
        console.log("Browser name is not a chrome");
    }
    
}

function runTests(testType) {

    switch (testType) {
        case "smoke":
            console.log("Test type is smoke");
            break;
        case "sanity":
            console.log("Test type is Sanity");
            break;
        case "regression":
            console.log("Test type is regression");
            break;            
        default:
            console.log("Test type is default smoke");
            break;
    }
    
}

launchBrowser("Chrome");
runTests("regression");

