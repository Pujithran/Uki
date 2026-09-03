import { Staff } from "./staff";

export class Nurse extends Staff{
    private shiftWorked:number;
    private static readonly shiftAllowance = 500;

    constructor(staffId:string, name:string, baseSalary:number, shiftWorked:number){
        super(staffId, name, baseSalary);
        this.shiftWorked = shiftWorked;
    }

    public assist(procedureName:string):void{
        console.log(`Nurse ${this.getName()} is assisting in procedure: ${procedureName}`);
        this.shiftWorked++;
    }

    public override calculateTotalSalary(): number {
        return this.getBaseSalary()+this.shiftWorked*Nurse.shiftAllowance;
    }
}