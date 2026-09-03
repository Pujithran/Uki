import { BankAccount } from "./bankAcc";

export class CurrentAccount extends BankAccount{
    private static readonly odLimit = 5000;

    constructor (accountNumber:string, holderName:string, balance:number){
        super(accountNumber, holderName, balance);
    }

    public override withdraw(amount: number): void {
        if(this.balance - amount < -(CurrentAccount.odLimit)){
            console.log(`Withdrawal denied. Overdraft limit of Rs.${CurrentAccount.odLimit} has exided.`)
        }
        else{
            this.balance = amount
            console.log(`Withdrew Rs.${amount}. New balance is ${this.balance}`)
        }
    }

    public override getMonthlyUpdates(): void {
        if(this.balance<0){
            console.log(`Current account overdrdrawn by Rs.${Math.abs(this.balance)}. No interest`)
        }
        else{
            console.log(`No interest for current account. Balance remains ${this.balance}`)
        }
    }
}