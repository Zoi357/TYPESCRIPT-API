import { Request as ReqModel, RequestCreationAttributes } from './request.model';
export declare const requestService: {
    getAll: typeof getAll;
    getById: typeof getById;
    create: typeof create;
    update: typeof update;
    delete: typeof _delete;
};
declare function getAll(): Promise<ReqModel[]>;
declare function getById(id: number): Promise<ReqModel>;
declare function create(params: RequestCreationAttributes): Promise<void>;
declare function update(id: number, params: Partial<RequestCreationAttributes>): Promise<void>;
declare function _delete(id: number): Promise<void>;
export {};
//# sourceMappingURL=request.service.d.ts.map