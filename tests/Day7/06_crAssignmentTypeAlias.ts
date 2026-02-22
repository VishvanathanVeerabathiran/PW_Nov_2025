
////Classroom activity on union type : //------------------------------------
/* - Create a function that accepts only specific payment methods.

- Create a type alias called PaymentMethod that allows only "UPI", "CreditCard", or "PayPal".

- Write a function makePayment that takes a parameter of type PaymentMethod and prints which payment method is chosen.

- Call the function with "UPI" and "CreditCard" as arguments. */
type PaymentMethod = "UPI" | "CreditCard" | "PayPal";

function makePaymentMethod(payMethod: PaymentMethod, payMethod1: PaymentMethod) {
    if (payMethod1 === "UPI") { console.log("Payment method chosen: UPI"); } 
    else if (payMethod1 === "CreditCard") 
        {
             console.log("Payment method chosen: CreditCard"); 
            } 
            else { 
                console.log("Payment method chosen: Paypal"); }
}
makePaymentMethod("UPI", "CreditCard");