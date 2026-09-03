"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const staff_1 = require("./staff");
class Doctor extends staff_1.Staff {
    consultationCount;
    static consultationFee = 1000;
    constructor(staffId, name, baseSalary, consultationCount) {
        super(staffId, name, baseSalary);
        this.consultationCount = consultationCount;
    }
    diagnose(patientNmae) {
        console.log(`Dr.${this.getName} is diagnosing Patient: ${patientNmae}`);
        this.consultationCount++;
    }
    calculateTotalSalary() {
        return this.getBaseSalary() + this.consultationCount * Doctor.consultationFee;
    }
}
exports.Doctor = Doctor;
//# sourceMappingURL=doctor.js.map