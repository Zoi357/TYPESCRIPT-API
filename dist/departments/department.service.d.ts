import { Department, DepartmentCreationAttributes } from './department.model';
export declare const departmentService: {
    getAll: typeof getAll;
    getById: typeof getById;
    create: typeof create;
    update: typeof update;
    delete: typeof _delete;
};
declare function getAll(): Promise<Department[]>;
declare function getById(id: number): Promise<Department>;
declare function create(params: DepartmentCreationAttributes): Promise<void>;
declare function update(id: number, params: Partial<DepartmentCreationAttributes>): Promise<void>;
declare function _delete(id: number): Promise<void>;
export {};
//# sourceMappingURL=department.service.d.ts.map