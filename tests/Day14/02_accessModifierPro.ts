import { EmployeeSignUP } from "./01_accessModifier"
class HR extends EmployeeSignUP {
    constructor() {
        super();
        this.eName = "Tom Curran";
    }
    empUpdate() {
        this.ePhone = 952424242092 //We can reassign the values in derived the class as well  
        console.log(`Updated Phone Number ${this.ePhone}`);
        console.log(`Update emp details ${EmployeeSignUP.eID} : ${this.eName} : ${this.ePhone}`);
    }
}
let hr = new HR(); 
hr.empUpdate();