"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
exports.default = default_1;
const sequelize_1 = require("sequelize");
class Account extends sequelize_1.Model {
}
exports.Account = Account;
function default_1(sequelize) {
    Account.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        passwordHash: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
    }, {
        sequelize,
        modelName: 'Account',
        tableName: 'accounts',
        timestamps: true,
    });
    return Account;
}
//# sourceMappingURL=account.model.js.map