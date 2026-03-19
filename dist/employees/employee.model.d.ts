import { Model, Optional } from 'sequelize';
import type { Sequelize } from 'sequelize';
export interface EmployeeAttributes {
    id: number;
    firstName: string;
    lastName: string;
    departmentId?: number;
    accountId: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface EmployeeCreationAttributes extends Optional<EmployeeAttributes, 'id' | 'createdAt' | 'updatedAt'> {
}
export declare class Employee extends Model<EmployeeAttributes, EmployeeCreationAttributes> implements EmployeeAttributes {
    id: number;
    firstName: string;
    lastName: string;
    departmentId?: number;
    accountId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default function (sequelize: Sequelize): typeof Employee;
//# sourceMappingURL=employee.model.d.ts.map