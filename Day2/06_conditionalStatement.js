//If else Statementfunction 
function getBrowserName(browserName){
if (browserName === "Chrome") {
    console.log("Supported browser is Chrome")
} else if (browserName === "Firefox") {
    console.log("Supported browser is Firefox")
}
else {
    console.log("Not a supported browser")

}}

getBrowserName("Firefox");
//Switch cast statement
let browsernames="Edge"; //Global Declarationfunction 
function getVersion(){
    let browsernames = "Edge"; switch (browsernames) {
            case "Chrome": 
            console.log("Chrome Version is 141");
                break; c
            case "Firefox":
                console.log("Firefox Version is 131"); 
                break; 
            case "Edge":
                console.log("Edge Version is 121");
                break;
            default:
                console.log("Default version is 100");
                break;
        }
}
getVersion();


