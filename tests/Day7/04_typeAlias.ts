//type of alias example//type alias declaration
import { availableParallelism } from "os"
//Two types availableParallelism
//union type aliastype StringOrNumber = string | number;
let sampleVar1: String|Number;
sampleVar1 = "Hello TypeScript"; 
console.log(`SampleVar1 value (string): ` + sampleVar1);
sampleVar1 = 100; 
console.log(`SampleVar1 value (number): ` + sampleVar1);

//types alias for data types
type accountNumber = string | number | boolean
let accNum1: accountNumber; 
accNum1 = "ACC12345";
console.log(`Account Number (string): ` + accNum1);
accNum1 = 9876543210;
 console.log(`Account Number (number): ` + accNum1);
accNum1 = true; 
console.log(`Account Number (boolean): ` + accNum1);

// type alias for values
type browser = "Chrome" | "Firefox" | "Edge" | "Safari";
let myBrowser: browser;
myBrowser = "Chrome";; 
console.log(`My Browser: ` + myBrowser);
