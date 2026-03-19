import { Model, Optional } from 'sequelize';
import type { Sequelize } from 'sequelize';
export interface DepartmentAttributes {
    id: number;
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface DepartmentCreationAttributes extends Optional<DepartmentAttributes, 'id' | 'description' | 'createdAt' | 'updatedAt'> {
}
export declare class Department extends Model<DepartmentAttributes, DepartmentCreationAttributes> implements DepartmentAttributes {
    id: number;
    name: string;
    description?: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default function (sequelize: Sequelize): typeof Department;
//# sourceMappingURL=department.model.d.ts.map