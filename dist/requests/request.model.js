"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
exports.default = default_1;
const sequelize_1 = require("sequelize");
class Request extends sequelize_1.Model {
}
exports.Request = Request;
function default_1(sequelize) {
    Request.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        employeeId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        type: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            defaultValue: 'pending',
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
        modelName: 'Request',
        tableName: 'requests',
        timestamps: true,
    });
    return Request;
}
//# sourceMappingURL=request.model.js.map