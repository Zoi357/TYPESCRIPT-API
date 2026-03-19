import { Model, Optional } from 'sequelize';
import type { Sequelize } from 'sequelize';
export interface AccountAttributes {
    id: number;
    username: string;
    passwordHash: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface AccountCreationAttributes extends Optional<AccountAttributes, 'id' | 'createdAt' | 'updatedAt'> {
}
export declare class Account extends Model<AccountAttributes, AccountCreationAttributes> implements AccountAttributes {
    id: number;
    username: string;
    passwordHash: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default function (sequelize: Sequelize): typeof Account;
//# sourceMappingURL=account.model.d.ts.map