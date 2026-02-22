//object literal
//import { log } from "node:console";
//object literal example
// //let | value | Data types | object literal - value declaration
let names = { //implicit object literal
    fname: "veer", lname: "vishva", ages: 56
}
console.log(names.fname)
console.log(names.lname)
console.log(names.ages);

//explicit object literal
let employee: { id: number; name: string; isPermanent: boolean } = {
    //explicit object literal   
    id: 101, name: "Alice", isPermanent: true,
};
console.log(`Employee ID: ` + employee.id); 
// Retrieving the values from the object using dot notation
console.log(`Employee Name: ` + employee.name);
console.log(`Is Permanent Employee: ` + employee.isPermanent);
//let | value | Data types | object literal - value declaration
let familyMemebr :{ "fatherName":string , motherName:string, age:number} = {
"fatherName" : "Ramesh", motherName : "Sita", age : 55
}
console.log(`Father Name : ` + familyMemebr["fatherName"]); 
// Retrieving the values from the object using square bracket notation
console.log(`Mother Name : ` + familyMemebr.motherName);
console.log(`Age : ` + familyMemebr.age);