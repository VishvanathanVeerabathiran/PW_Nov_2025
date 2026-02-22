import { RBIGuidelines } from "./learnInterface";
abstract class BaseBank {
    //implemented   
    openAccount():
        void {
        console.log(`Open account from abstract class`);
    }
    //un implemented methods  
    abstract interestRate():
        void
}
class SBIBank extends BaseBank implements RBIGuidelines {
    interestRatePolicy():
        void {
        console.log(`Interestrate policy from sbi bank`);
    }
    withDrawMoney():
        void {
        console.log(`With draw money from SBI`);
    }
    interestRate():
        void {
        console.log(`from abstarct concrete implementation class`);
    }
    // openAccount(): void {    //     console.log(`Open account from sbi bank`);            // }
}
const sbiBank = new SBIBank();
 sbiBank.withDrawMoney();
  sbiBank.openAccount(); 
  sbiBank.interestRatePolicy(); 
  sbiBank.interestRate();
