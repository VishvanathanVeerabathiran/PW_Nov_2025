//Function declaration
function nameCall(names) 
{ console.log("Hello " + names + "!"); 

}
nameCall("Vishva")
//Arrow Function
let double = (number) => {
    console.log(number);
}
double(1234);
//Anonymus Function
let timeout = function () 
{ setTimeout(() => 
    { console.log("Time out by 2 seconds");

     }, 
     2000); 
    }
timeout();


function getUserData(customerName, doCallCustomer) 
{ setTimeout(() => 
    { 
        onsole.log("Timeout delay 2 seconds"); 
        if (customerName === "Vishva") 
            { console.log(`Customer verified successfully ${customerName}`); 
        doCallCustomer(); 
    } }, 2000); 
}
function getCallBackCustomer() 
{ console.log(`Called customer sucessfully`); 
    
}
getUserData("Vishva", getCallBackCustomer)