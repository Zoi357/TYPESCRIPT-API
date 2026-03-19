"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const department_service_1 = require("./department.service");
const router = (0, express_1.Router)();
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', _delete);
exports.default = router;
function getAll(req, res, next) {
    department_service_1.departmentService.getAll()
        .then(depts => res.json(depts))
        .catch(next);
}
function getById(req, res, next) {
    department_service_1.departmentService.getById(Number(req.params.id))
        .then(dept => res.json(dept))
        .catch(next);
}
function create(req, res, next) {
    department_service_1.departmentService.create(req.body)
        .then(() => res.json({ message: 'Department created' }))
        .catch(next);
}
function update(req, res, next) {
    department_service_1.departmentService.update(Number(req.params.id), req.body)
        .then(() => res.json({ message: 'Department updated' }))
        .catch(next);
}
function _delete(req, res, next) {
    department_service_1.departmentService.delete(Number(req.params.id))
        .then(() => res.json({ message: 'Department deleted' }))
        .catch(next);
}
//# sourceMappingURL=departments.controller.js.map