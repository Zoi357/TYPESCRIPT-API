import { Employee, EmployeeCreationAttributes } from './employee.model';
export declare const employeeService: {
    getAll: typeof getAll;
    getById: typeof getById;
    create: typeof create;
    update: typeof update;
    delete: typeof _delete;
};
declare function getAll(): Promise<Employee[]>;
declare function getById(id: number): Promise<Employee>;
declare function create(params: EmployeeCreationAttributes): Promise<void>;
declare function update(id: number, params: Partial<EmployeeCreationAttributes>): Promise<void>;
declare function _delete(id: number): Promise<void>;
export {};
//# sourceMappingURL=employee.service.d.ts.map