"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_service_1 = require("./employee.service");
const router = (0, express_1.Router)();
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', _delete);
exports.default = router;
function getAll(req, res, next) {
    employee_service_1.employeeService.getAll()
        .then(employees => res.json(employees))
        .catch(next);
}
function getById(req, res, next) {
    employee_service_1.employeeService.getById(Number(req.params.id))
        .then(employee => res.json(employee))
        .catch(next);
}
function create(req, res, next) {
    employee_service_1.employeeService.create(req.body)
        .then(() => res.json({ message: 'Employee created' }))
        .catch(next);
}
function update(req, res, next) {
    employee_service_1.employeeService.update(Number(req.params.id), req.body)
        .then(() => res.json({ message: 'Employee updated' }))
        .catch(next);
}
function _delete(req, res, next) {
    employee_service_1.employeeService.delete(Number(req.params.id))
        .then(() => res.json({ message: 'Employee deleted' }))
        .catch(next);
}
//# sourceMappingURL=employees.controller.js.map