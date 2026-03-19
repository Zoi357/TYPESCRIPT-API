"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const request_service_1 = require("./request.service");
const router = (0, express_1.Router)();
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', _delete);
exports.default = router;
function getAll(req, res, next) {
    request_service_1.requestService.getAll()
        .then(reqs => res.json(reqs))
        .catch(next);
}
function getById(req, res, next) {
    request_service_1.requestService.getById(Number(req.params.id))
        .then(r => res.json(r))
        .catch(next);
}
function create(req, res, next) {
    request_service_1.requestService.create(req.body)
        .then(() => res.json({ message: 'Request created' }))
        .catch(next);
}
function update(req, res, next) {
    request_service_1.requestService.update(Number(req.params.id), req.body)
        .then(() => res.json({ message: 'Request updated' }))
        .catch(next);
}
function _delete(req, res, next) {
    request_service_1.requestService.delete(Number(req.params.id))
        .then(() => res.json({ message: 'Request deleted' }))
        .catch(next);
}
//# sourceMappingURL=requests.controller.js.map