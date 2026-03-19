import { Model, Optional } from 'sequelize';
import type { Sequelize } from 'sequelize';
export interface RequestAttributes {
    id: number;
    employeeId?: number;
    type: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface RequestCreationAttributes extends Optional<RequestAttributes, 'id' | 'employeeId' | 'createdAt' | 'updatedAt'> {
}
export declare class Request extends Model<RequestAttributes, RequestCreationAttributes> implements RequestAttributes {
    id: number;
    employeeId?: number;
    type: string;
    status: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default function (sequelize: Sequelize): typeof Request;
//# sourceMappingURL=request.model.d.ts.map