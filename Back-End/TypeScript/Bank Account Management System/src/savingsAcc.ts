import { BankAccount } from "./bankAcc"

export class SavingsAccount extends BankAccount{
    private static readonly minBalance = 1000;
    private static readonly interestRate = 0.02;

    constructor (accountNumber:string, holderName:string, balance:number){
        super(accountNumber, holderName, balance);
        console.log("Savings Account has been Created;");
    }

    public override withdraw(amount: number):void {
        if(this.balance-amount<SavingsAccount.minBalance){
            console.log(`Withdrawal denied. Savings account must be maintained a minimum balance of Rs.${SavingsAccount.minBalance}`);
            return;
        }
        else{
            super.withdraw(amount);
        }
    }

    public override getMonthlyUpdates(): void{
        const interest =this.balance*SavingsAccount.minBalance;
        this.balance+=interest;
        console.log(`The interest amount is Rs.${interest}. And the new balance is ${this.balance}`);
    }
}