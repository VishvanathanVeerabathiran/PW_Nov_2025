//type assertions   
//type assertion using angle bracket syntax
let accNum1: any = "ACC12345";
let accNumString: string = <string> accNum1;
console.log(`Account Number (string): ` + accNumString);
console.log(`Account Number Length (angle bracket): ` + accNumString.length);

//type assertion using 'as' syntax
let accNum2: any = "9876543210";
let accNumNumber: number = accNum2 as number;
console.log(`Account Number (number): ` + accNumNumber);
console.log(`Account Number toFixed (as syntax): ` + accNumNumber.toString().length);