import { Model, Optional } from 'sequelize';
import type { Sequelize } from 'sequelize';
export interface UserAttributes {
    id: number;
    email: string;
    passwordHash: string;
    title: string;
    firstName: string;
    lastName: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    isVerified: boolean;
}
export interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt' | 'isVerified'> {
}
export declare class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    id: number;
    email: string;
    passwordHash: string;
    title: string;
    firstName: string;
    lastName: string;
    role: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    isVerified: boolean;
}
export default function (sequelize: Sequelize): typeof User;
//# sourceMappingURL=user.model.d.ts.map