"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestService = void 0;
const db_1 = require("../_helpers/db");
exports.requestService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete,
};
async function getAll() {
    return await db_1.db.Request.findAll();
}
async function getById(id) {
    const req = await db_1.db.Request.findByPk(id);
    if (!req)
        throw new Error('Request not found');
    return req;
}
async function create(params) {
    await db_1.db.Request.create(params);
}
async function update(id, params) {
    const req = await getById(id);
    await req.update(params);
}
async function _delete(id) {
    const req = await getById(id);
    await req.destroy();
}
//# sourceMappingURL=request.service.js.map