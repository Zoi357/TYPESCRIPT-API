"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.departmentService = void 0;
const db_1 = require("../_helpers/db");
exports.departmentService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete,
};
async function getAll() {
    return await db_1.db.Department.findAll();
}
async function getById(id) {
    const dept = await db_1.db.Department.findByPk(id);
    if (!dept)
        throw new Error('Department not found');
    return dept;
}
async function create(params) {
    await db_1.db.Department.create(params);
}
async function update(id, params) {
    const dept = await getById(id);
    await dept.update(params);
}
async function _delete(id) {
    const dept = await getById(id);
    await dept.destroy();
}
//# sourceMappingURL=department.service.js.map