class Employee {
    public trainerName: string;
    public trainerId: number;
    //Default constructor

    constructor(trId: number, trName: string) {
        // Which invokes immediately when objected is created for class  
        this.trainerId = trId; //Dynamically assigning the values    
        this.trainerName = trName;
    }
    //Simple method
    payrollProcess() {
        console.log(`Payroll processed`);

    }
    //Method using arguments with local variables
    employeeDetails(empID: string, empName: string) {
        console.log(`Employee Id : ${empID} | Employee Name is : ${empName}`);
    }
    //Method using arguments and accessing the variables globally 
    trainerDetails() {
        console.log(`Trainer details ${this.trainerId} : ${this.trainerName}`);
    }
}
let employee = new Employee(9867, "Veera"); //objecte created - default construtor called when objected created
let employee1 = new Employee(98671, "Vishva"); //objecte created - default construtor called when objected created
employee.payrollProcess();
employee.employeeDetails("emp1234", "Vishva");
employee.trainerDetails();
employee1.trainerDetails();
