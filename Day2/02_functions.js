/* Function 
Call a function to execute the code inside the function block
*/
console.log("****************"); function addition() {
    console.log("Addition");
}
addition();
console.log("****************"); function sum() {
    let a = 10; let b = 50; c = a + b; // C wil be let data type by default    console.log(c);    }
    sum(); //Calling the method . Here we are not returning the anything. Bydefault it will return void..
    console.log("****************");//Function Arguments
    function add(x, y) {
        z = x + y; console.log(z);
    } add(50, 70); console.log("****************");
    //Function Argument with return the value
    function addCarWheel(front, back) {
        car = front + back; return car;
    }
    console.log(addCarWheel(2, 2)); //Calling the medthod to get the value from menthodconsole.log("****************");

    //Function Argument with return the value
    function multiplyCarWheel(front, back) {
        car = front * back; return car;
    }
    console.log(multiplyCarWheel(10, 10)); console.log("****************")}
