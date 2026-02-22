//String reversal
let company = "Testleaf"; console.log(`Lenghth is ${company.length}`);
let lenghIS = `${company.length}`; console.log(lenghIS);
let reverseName = ""; for (let i = lenghIS; i >= 0; i--) {
    reverseName = reverseName + "  " + company.charAt(i);
    console.log(reverseName);
} console.log(reverseName);

let place = "Mookkanur"; let splitPlace = place.split(""); let reverse = "";
function reverseFunction() {
    for (let i = splitPlace.length - 1; i >= 0; i--) {
        console.log(splitPlace[i]);
        reverse = reverse + splitPlace[i];
    }
    console.log(reverse);
} reverseFunction();
