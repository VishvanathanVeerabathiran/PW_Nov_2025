//Two way of declaration
//Two way of declaratio
/* 
1. String literal2. Object literal
*/
//String literal
let compName = "TCS"; let fNAme = "TCS";
console.log(compName === fNAme); //true
//String literal
let companyName = new String("CVS"); let firstName = new String("CVS");
console.log(companyName === firstName); //false - Both are referrig different memory address

//String methods
// 1.Escape Sequence
let name = 'it\'s a name'; console.log(name);

//2. concatenation
let fname = "Vishva"; let firstname = "Vishva"; let num = "989"; let num1 = 1234;
let result = fNAme.concat(num)
console.log(result);
let resultPlus = num1.toString().concat(firstName)
let resultPlus2 = String(num1).concat(firstName)
console.log("Concatenation of number and String:" + resultPlus); console.log("Concatenation of number and String2:" + resultPlus2);
//3. Template based string
function testCasesCount(noOfTestcases) { console.log(`No of Testcases ${noOfTestcases} passed`); }
testCasesCount("1400");
//4.Length let course ="Playwright"; //length starts with 1
console.log(`Lenghth of String ${course.length}`); 
 //5 Index //Index starts with 0
let place = "Mookkanur";

//Slice
let outputslice1 = course.slice(3, 10); //Start index and end intex console.log(outputslice1);
let outputslice2 = course.slice(-10, -2); //Start index and end intex console.log(outputslice2);
let outputslice3 = course.slice(6);//print values from 6 console.log(outputslice3);
//subString
let outputString = course.substring(3, 10); //Start index and end intex console.log(outputString);
let outputString1 = course.substring(-10, -2); //empty space console.log(outputString1);
let outputString2 = course.substring(6, -2);//print values from 6 to 0... minus will be considered as 0 console.log(outputString2);
let outputString3 = course.substring(-3);//print all values in negative values console.log(outputString3);