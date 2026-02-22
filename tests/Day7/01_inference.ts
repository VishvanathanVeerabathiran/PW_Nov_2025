

//intference
//* implict inferece examplelet 
let a = 10;
//let a = "hello"; 
// // Error: Type 'string' is not assignable to type 'number'.
//explicit inference example
let b: number = 20;
b = 30;
// Valid
function addNumbers(x: number, y: number): number {
    return x + y;
} 
const sum = addNumbers(5, 10); 
console.log(`Sum is: ` + sum);
