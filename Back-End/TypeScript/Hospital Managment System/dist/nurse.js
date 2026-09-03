"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nurse = void 0;
const staff_1 = require("./staff");
class Nurse extends staff_1.Staff {
    shiftWorked;
    static shiftAllowance = 500;
    constructor(staffId, name, baseSalary, shiftWorked) {
        super(staffId, name, baseSalary);
        this.shiftWorked = shiftWorked;
    }
    assist(procedureName) {
        console.log(`Nurse ${this.getName()} is assisting in procedure: ${procedureName}`);
        this.shiftWorked++;
    }
    calculateTotalSalary() {
        return this.getBaseSalary() + this.shiftWorked * Nurse.shiftAllowance;
    }
}
exports.Nurse = Nurse;
//# sourceMappingURL=nurse.js.map