export class BankAccount {
    private accountNumber: string;
    private holderName: string;
    protected balance: number;

    constructor(accountNumber: string, holderName: string, balance: number){
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }

    
    public getAccountNumber():string{
        return this.accountNumber;
    }

    public getHolderName():string{
        return this.holderName;
    }

    public getBalance():number{
        return this.balance;
    }

    public deposite(amount:number):void{
        if(amount<=0){
            console.log(`Deposit amount must be positive.`);
        }
        this.balance+=amount;
        console.log(`Deposited Rs.${amount}. New balance is Rs.${this.balance}`);
    }

    public withdraw(amount:number):void{
        if(amount<=0){
            console.log(`Withdraw amount must be positive.`)
            return;
        }
        if(amount>this.balance){
            console.log(`Insufficiant balance.`)
        }
        this.balance-=amount;
        console.log(`Withdrew Rs.${amount}. New balance is Rs.${this.balance}.`);
    }

    public getMonthlyUpdates():void{
        console.log(`It's standard account. No Monthly update rule applied`)
    }
}