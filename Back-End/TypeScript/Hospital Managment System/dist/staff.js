"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
class Staff {
    staffId;
    name;
    baseSalary;
    constructor(staffId, name, baseSalary) {
        this.staffId = staffId;
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getStaffId() {
        return this.staffId;
    }
    getName() {
        return this.name;
    }
    getBaseSalary() {
        return this.baseSalary;
    }
    updateSalary(newSalary) {
        if (newSalary <= 0) {
            console.log(`Invalid salary update for ${this.name}, value must be positive.`);
        }
        else {
            this.baseSalary = newSalary;
            console.log(`${this.name}'s base salary update to Rs.${this.baseSalary}.`);
        }
    }
    calculateTotalSalary() {
        return this.baseSalary;
    }
}
exports.Staff = Staff;
//# sourceMappingURL=staff.js.map