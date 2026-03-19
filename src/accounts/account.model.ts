import { DataTypes, Model, Optional } from 'sequelize';
import type { Sequelize } from 'sequelize';

export interface AccountAttributes {
    id: number;
    username: string;
    passwordHash: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface AccountCreationAttributes extends Optional<AccountAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Account
extends Model<AccountAttributes, AccountCreationAttributes>
implements AccountAttributes {

    public id!: number;
    public username!: string;
    public passwordHash!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof Account {
    Account.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            passwordHash: {
                type: DataTypes.STRING,
                allowNull: false,
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
            modelName: 'Account',
            tableName: 'accounts',
            timestamps: true,
        },
    );
    return Account;
}
