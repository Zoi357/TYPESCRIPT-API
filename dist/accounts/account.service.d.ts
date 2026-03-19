import { Account, AccountCreationAttributes } from './account.model';
export declare const accountService: {
    getAll: typeof getAll;
    getById: typeof getById;
    create: typeof create;
    update: typeof update;
    delete: typeof _delete;
};
declare function getAll(): Promise<Account[]>;
declare function getById(id: number): Promise<Account>;
declare function create(params: AccountCreationAttributes): Promise<void>;
declare function update(id: number, params: Partial<AccountCreationAttributes>): Promise<void>;
declare function _delete(id: number): Promise<void>;
export {};
//# sourceMappingURL=account.service.d.ts.map