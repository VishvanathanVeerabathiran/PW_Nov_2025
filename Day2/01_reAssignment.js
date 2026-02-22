/* Chaaracteristics of Var let and const

Var - Redeclaration and reassignment is allowed

let -
Reclaration - not allowedReassignmet - Allowed
Const - Redelcation and Reassignment not allowed

var x ; declaration without initialization is allowed
let a ; declaration without initialization is allowed
const x ; declaration without initialization is not allowed

*/
console.log("*******VAR*********");var username ="Vishvanathan" // Declarationvar username ="Gomathi" //Reassignmentconsole.log(username);console.log("****************");

console.log("*******Let*********");let password ="pwd123" //Declaration    password ="pwd4567" //Reassignment// let password ="pwd7657575" // Not allowed   console.log(password);console.log("****************");

console.log("********Const********");
const companyName1 ="TCS"; //Declaration//const companyName="Infy"; //Reassignment not allowedconsole.log(companyName);console.log("****************");
