import { Doctor } from "./doctor";
import { Nurse } from "./nurse";
import { Staff } from "./staff";

export class App{
    generatePayRoll(staffList:Staff[]):void{
        console.log(`Genarating payroll...`)
        for(const staff of staffList){
            console.log(`${staff.getName()} (${staff.getStaffId()}):Rs.${staff.calculateTotalSalary()}`)
        }
    }

    main():void{
        const doctor1 = new Doctor("D001","Dr.Arjuna",80000, 20);
        const doctor2 = new Doctor("D002","Dr.Naagarjuna",90000, 10);

        const nurse1 = new Nurse("N001","Thankk",75000, 50);
        const nurse2 = new Nurse("N002","Abikaal",85000, 20);

        doctor1.diagnose("Ashthaaf");
        doctor2.diagnose("Thanshikkaakaa");

        nurse1.assist("Dressed wound to Ashthaaf");
        nurse2.assist("Consulting to Thanushikkaakkaa");

        doctor1.updateSalary(-150000);
        doctor2.updateSalary(175000);

        nurse1.updateSalary(110000);
        nurse2.updateSalary(95000);

        const staffList:Staff[] =[doctor1,doctor2,nurse1,nurse2]
        this.generatePayRoll(staffList)
    }
}