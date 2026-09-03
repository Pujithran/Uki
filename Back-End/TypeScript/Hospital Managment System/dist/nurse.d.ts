import { Staff } from "./staff";
export declare class Nurse extends Staff {
    private shiftWorked;
    private static readonly shiftAllowance;
    constructor(staffId: string, name: string, baseSalary: number, shiftWorked: number);
    assist(procedureName: string): void;
    calculateTotalSalary(): number;
}
//# sourceMappingURL=nurse.d.ts.map