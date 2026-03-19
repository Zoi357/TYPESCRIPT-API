import { DataTypes, Model, Optional } from 'sequelize';
import type { Sequelize } from 'sequelize';

export interface RequestAttributes {
    id: number;
    employeeId?: number;
    type: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface RequestCreationAttributes extends Optional<RequestAttributes, 'id' | 'employeeId' | 'createdAt' | 'updatedAt'> {}

export class Request
extends Model<RequestAttributes, RequestCreationAttributes>
implements RequestAttributes {

    public id!: number;
    public employeeId?: number;
    public type!: string;
    public status!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof Request {
    Request.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            employeeId: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: 'pending',
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        } as any,
        {
            sequelize,
            modelName: 'Request',
            tableName: 'requests',
            timestamps: true,
        },
    );
    return Request;
}
