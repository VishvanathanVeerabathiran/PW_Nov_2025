/* Typescript Data Types
1. Number
2. String
3. Boolean  
4. Array
5. Tuple
6. Enum
7. Any
8. Void
9. Null and Undefined
10. Never
11. Object */
import { types } from "util";
//any data types example
let randomValue: any = 10;
console.log(`Initial value (number): ` + randomValue);
//unknown data types example
let value: unknown; value = 240; value = "Hello World!";
if (typeof value === "string") {
    console.log(`String value length is : ` + value.length);
    console.log(`String value uppercase is : ` + value.toUpperCase());
    console.log(`String value lower case is : ` + value.toLowerCase());
}
//never data type example
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}//generateError("An error occurred!", 500);

//tuple data type example
let user: [number, string, boolean];
user = [1, "John Doe", true];
console.log(`User ID: ` + user[0]);
console.log(`User Name: ` + user[1]); console.log(`Is Active: ` + user[2]);