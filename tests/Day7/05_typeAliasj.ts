//type alias has two types//Union type//Intersection type 

import { log } from "node:console";

let username: string | number; // union

username = "ravi@testleaf.com"
username = 9890809

//aliaz name for datatypes

type productDataType = number | string | boolean  //Here the productDataType is an alias name to handle 3 different datatypes

let accountNumber: 
productDataType = 45634
accountNumber = "#1232345423"
accountNumber = true

//alias name for values
type supportedBrowser = "Chrome" | "Firefox" | "msedge" ;

function invokeBrowsers(browserName:supportedBrowser) {

    if (browserName === "Chrome") { console.log("Launch Chrome"); } else { console.log("Firefox Browser"); }
}

invokeBrowsers("Firefox")


//Intersection type - & - We have to mandatorily use all the values that are declared


type Admin = { adminName: string, privileges: string[] }

type Employee = { name: string, empId: number, date: string }

type QA = Admin & Employee

const userProfile: QA = { adminName: "Testleaf", privileges: ['server'], name: "Ravindran", empId: 1001, date: "06/12/25" }

console.log(userProfile.adminName); console.log(userProfile.privileges);
