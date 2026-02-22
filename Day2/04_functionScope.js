//Function Scope
/* function scope
Var - Function scope is inside the function .Not on outside the function

    Let and Const - Scope is applicable only inside the function
*/
   
    console.log("*******Var function*********");function add(a,b){
c = a + b; if (true) {
    var compName = "TCS"; console.log(compName); //var can access inside the block  
      }    console.log(compName);// var can acces outside the block    
    return c;}
    console.log(compName); 
    
    //Cannot access the var outside the block
    console.log(add(20,30));
    console.log("*******Var Function end*********");

    console.log("*****Let Function***********"); function sum(a, b) {
        d = a + b; if (true) {
            let lastName = "Veera"; console.log(lastName); //let can access inside the block   
             }    console.log(lastName);// let cannot access outside the block   
             return d;}
             console.log(lastName); //Cannot access the let outside the block
             console.log(sum(70,30));
             console.log("******Let function end**********");

            console.log("******Const Function Start**********"); function sum(a, b) {
                d = a + b; if (true) {
                    const middleName = "Nathan"; console.log(middleName); //const can access inside the block    
                    }  console.log(middleName);
                    // const cannot access outside the block
                    return d;
                }
                console.log(middleName); //Cannot access the const outside the block
                console.log(sum(100,30));
                console.log("*********Const Function end*******");
