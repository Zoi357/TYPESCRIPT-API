"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountService = void 0;
const db_1 = require("../_helpers/db");
exports.accountService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete,
};
async function getAll() {
    return await db_1.db.Account.findAll();
}
async function getById(id) {
    const account = await db_1.db.Account.findByPk(id);
    if (!account)
        throw new Error('Account not found');
    return account;
}
async function create(params) {
    await db_1.db.Account.create(params);
}
async function update(id, params) {
    const account = await getById(id);
    await account.update(params);
}
async function _delete(id) {
    const account = await getById(id);
    await account.destroy();
}
//# sourceMappingURL=account.service.js.map