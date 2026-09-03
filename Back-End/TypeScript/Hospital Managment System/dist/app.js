"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const doctor_1 = require("./doctor");
const nurse_1 = require("./nurse");
class App {
    generatePayRoll(staffList) {
        console.log(`Genarating payroll...`);
        for (const staff of staffList) {
            console.log(`${staff.getName()} (${staff.getStaffId()}):Rs.${staff.calculateTotalSalary()}`);
        }
    }
    main() {
        const doctor1 = new doctor_1.Doctor("D001", "Dr.Arjuna", 80000, 20);
        const doctor2 = new doctor_1.Doctor("D002", "Dr.Naagarjuna", 90000, 10);
        const nurse1 = new nurse_1.Nurse("N001", "Thankk", 75000, 50);
        const nurse2 = new nurse_1.Nurse("N002", "Abikaal", 85000, 20);
        doctor1.diagnose("Ashthaaf");
        doctor2.diagnose("Thanshikkaakaa");
        nurse1.assist("Dressed wound to Ashthaaf");
        nurse2.assist("Consulting to Thanushikkaakkaa");
        doctor1.updateSalary(-150000);
        doctor2.updateSalary(175000);
        nurse1.updateSalary(110000);
        nurse2.updateSalary(95000);
        const staffList = [doctor1, doctor2, nurse1, nurse2];
        this.generatePayRoll(staffList);
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map