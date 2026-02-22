/* Arrays in Javascript
 1. Dynamic in size     
-Arrays grow and shrink size
 2. Heterogenous     
-Arrays in JS can store different data types like numbers, string , boolean
   List of methods
   push() - To add element end of the array    
    pop() -  To remove element end of the array   
    shift() - To remove only one element from first part of the array     
    unshift() - To add only one element from first part of the array    
     slice() - Extract section of array without modifying original array
*/
console.log(`======Push=====`);
let letters =["a","b","c","d"];
letters.push("10");
console.log(letters);
console.log(`======Pop=====`);
letters.pop();
console.log(letters);
console.log(`======shift=====`);
letters.shift();
console.log(letters);
console.log(`======unshift=====`);
letters.unshift("a","10");
console.log(letters);
console.log(`======slice=====`);
let sliceVlaue =letters.slice(2,4);
console.log(sliceVlaue);
console.log(`======Spready Array =====`);//SpreadArray - To concat the two arrayslet a =["1","2"];let b =["3","4"];
let spreadArray=[...a,...b];
console.log(spreadArray);

console.log(`======Concat=====`);//Concat 
let concatination = a.concat(b);
console.log(concatination);
console.log(`======Sorting of Arrays Alphabets=====`);// Sorting of array//sort will work for only for Alphabets
companyName=["TCS","Infosysis","CVS","CTS"];
let softCompanyName =companyName.sort();
console.log(softCompanyName);
console.log(`======Sorting of Arrays Numbers Ascedning=====`);
let numberOfArray=["10","1","5","4","100"];
//to sort numbers => For number we should use arrow(=>) function
let sortaArrays =numberOfArray.sort((num1,num2) => num1-num2);console.log(sortaArrays);

console.log(`======Sorting of Arrays Numbers Descedning=====`);
let numberOfArray1=["10","1","5","4","100"];
//to sort numbers => For number we should use arrow(=>) function
let sortaArrays1 =numberOfArray.sort((a,b) => b-a);
console.log(sortaArrays1);
