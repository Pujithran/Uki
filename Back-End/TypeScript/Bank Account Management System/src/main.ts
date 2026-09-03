import { BankAccount } from "./bankAcc";
import { CurrentAccount } from "./currentAcc";
import { SavingsAccount } from "./savingsAcc";

function processMonthEnd(account: BankAccount[]):void{
    for (const acc of account){
        console.log(`Account: ${acc.getAccountNumber()}, ${acc.getHolderName()}`);
        acc.getMonthlyUpdates();
    }
}

const savings = new SavingsAccount("SA001", "Jack Sparrow", 5000)
const current = new CurrentAccount("CA001", "Harry Potter", 3000)

savings.deposite(2500)
savings.withdraw(1000)

current.deposite(1000)
current.withdraw(4000)

const allAccount: BankAccount[]=[savings,current]
processMonthEnd(allAccount)