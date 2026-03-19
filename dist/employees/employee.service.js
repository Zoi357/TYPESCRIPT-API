"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeService = void 0;
const db_1 = require("../_helpers/db");
exports.employeeService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete,
};
async function getAll() {
    return await db_1.db.Employee.findAll();
}
async function getById(id) {
    return await getEmployee(id);
}
async function create(params) {
    // Check if account exists
    const account = await db_1.db.Account.findByPk(params.accountId);
    if (!account) {
        throw new Error('Account not found');
    }
    await db_1.db.Employee.create(params);
}
async function update(id, params) {
    const employee = await getEmployee(id);
    await employee.update(params);
}
async function _delete(id) {
    const employee = await getEmployee(id);
    await employee.destroy();
}
async function getEmployee(id) {
    const employee = await db_1.db.Employee.findByPk(id);
    if (!employee) {
        throw new Error('Employee not found');
    }
    return employee;
}
//# sourceMappingURL=employee.service.js.map