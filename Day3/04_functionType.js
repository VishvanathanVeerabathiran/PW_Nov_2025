//Named function

function add(x, y) {
    z = x + y;
    console.log(z);
}
add(50, 70);
console.log("****************");
//Function Expresson / Anonymous function
let funName = function () {
    console.log("Function expression");
}
funName();
//Arrow Function // Fat arrow replace the function keyword
let funName1 = () => {
    console.log("Arrow function");
}
funName1();
//Single line arrow function
const value = (a, b) => a + b; console.log(value(10, 30));