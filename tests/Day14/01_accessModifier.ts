export class EmployeeSignUP {

    /*         Public - Accessible inside and outside class    
    Private - Accessible only inside the class  
      Protected - Accessible inside class and derived the class as well   
     Readonly - constant/final - Cannot modify....   
      Static - Access through class name directly.        */

    public eName = "Tom";
    public static eID = "c12344";
    protected ePhone = 987654321;
    private eSalary = 1000000;
    printDetails() {
        console.log(`Employee Details => ${this.eName} : ${EmployeeSignUP.eID} : ${this.ePhone} : ${this.eSalary}`);
    }
    public get readData() {
        console.log(`Read data before modify ${this.eSalary}`);
        //Reading the data and it should return the value must   
        return this.eSalary;
    }
    public set writeData(salary: number) {
        this.eSalary = salary;
        console.log(`New Salary after modification ${this.eSalary}`);
    }
}
let employeeSP = new EmployeeSignUP();
employeeSP.printDetails();
//employeeSP.readData;employeeSP.writeData=200000; //Rewriting the values


