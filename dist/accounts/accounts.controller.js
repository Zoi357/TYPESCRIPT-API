"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const account_service_1 = require("./account.service");
const router = (0, express_1.Router)();
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', _delete);
exports.default = router;
function getAll(req, res, next) {
    account_service_1.accountService.getAll()
        .then(accounts => res.json(accounts))
        .catch(next);
}
function getById(req, res, next) {
    account_service_1.accountService.getById(Number(req.params.id))
        .then(account => res.json(account))
        .catch(next);
}
function create(req, res, next) {
    account_service_1.accountService.create(req.body)
        .then(() => res.json({ message: 'Account created' }))
        .catch(next);
}
function update(req, res, next) {
    account_service_1.accountService.update(Number(req.params.id), req.body)
        .then(() => res.json({ message: 'Account updated' }))
        .catch(next);
}
function _delete(req, res, next) {
    account_service_1.accountService.delete(Number(req.params.id))
        .then(() => res.json({ message: 'Account deleted' }))
        .catch(next);
}
//# sourceMappingURL=accounts.controller.js.map