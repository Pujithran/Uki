export class Staff{
    private staffId : string;
    private name : string;
    private baseSalary : number;

    constructor(staffId:string, name:string, baseSalary:number){
        this.staffId = staffId;
        this.name = name;
        this.baseSalary = baseSalary;
    }

    public getStaffId() : string{
        return this.staffId;
    }

    public getName() : string{
        return this.name;
    }

    public getBaseSalary() : number{
        return this.baseSalary;
    }

    public updateSalary(newSalary:number):void{
        if(newSalary<=0){
            console.log(`Invalid salary update for ${this.name}, value must be positive.`);
        }
        else{
            this.baseSalary = newSalary;
            console.log(`${this.name}'s base salary update to Rs.${this.baseSalary}.`);
        }
    }

    public calculateTotalSalary(): number{
        return this.baseSalary;
    }
    
}