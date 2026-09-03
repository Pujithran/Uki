import { Staff } from "./staff";
export declare class Doctor extends Staff {
    private consultationCount;
    private static readonly consultationFee;
    constructor(staffId: string, name: string, baseSalary: number, consultationCount: number);
    diagnose(patientNmae: string): void;
    calculateTotalSalary(): number;
}
//# sourceMappingURL=doctor.d.ts.map