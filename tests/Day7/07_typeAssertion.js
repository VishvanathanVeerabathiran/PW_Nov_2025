//type assertions   
//type assertion using angle bracket syntax
var accNum1 = "ACC12345";
var accNumString = accNum1;
console.log("Account Number (string): " + accNumString);
console.log("Account Number Length (angle bracket): " + accNumString.length);
//type assertion using 'as' syntax
var accNum2 = "9876543210";
var accNumNumber = accNum2;
console.log("Account Number (number): " + accNumNumber);
console.log("Account Number toFixed (as syntax): " + accNumNumber.toString().length);
