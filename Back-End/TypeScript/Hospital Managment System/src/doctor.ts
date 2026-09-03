import { Staff } from "./staff";

export class Doctor extends Staff{
    private consultationCount:number;
    private static readonly consultationFee = 1000;
    
    constructor(staffId:string, name:string, baseSalary:number, consultationCount:number){
        super(staffId, name, baseSalary);
        this.consultationCount = consultationCount;
    }

    public diagnose(patientNmae:string):void{
        console.log(`Dr.${this.getName()} is diagnosing Patient: ${patientNmae}`);
        this.consultationCount++;
    }

    public override calculateTotalSalary(): number {
        return this.getBaseSalary()+this.consultationCount*Doctor.consultationFee;
    }
}