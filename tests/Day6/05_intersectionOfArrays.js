var ar1 = ["1", "3", "10", "22", "56", "99", "88"];
var ar2 = ["11", "10", "56", "12", "33", "88"];

console.log(ar1.length);
console.log(ar2.length);
function intersectionOfArrays(ar1, ar2) {
    var array = [];
    var array1 = []; 
    for (let i = 0; i < ar1.length; i++) {
         for (let j = 0; j < ar2.length; j++) { 
            if (ar1[i] === ar2[j]) { 
                array.push(ar1[i]); }
             } 
            } 
         return array;   
          console.log(array);   
           }
    console.log(intersectionOfArrays(ar1, ar2));
