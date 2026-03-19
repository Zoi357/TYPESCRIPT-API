import {db} from '../_helpers/db';
import {Account, AccountCreationAttributes} from './account.model';

export const accountService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete,
};

async function getAll(): Promise<Account[]> {
    return await db.Account.findAll();
}

async function getById(id:number): Promise<Account> {
    const account = await db.Account.findByPk(id);
    if (!account) throw new Error('Account not found');
    return account;
}

async function create(params: AccountCreationAttributes): Promise<void> {
    await db.Account.create(params);
}

async function update(id: number, params: Partial<AccountCreationAttributes>): Promise<void> {
    const account = await getById(id);
    await account.update(params);
}

async function _delete(id: number): Promise<void> {
    const account = await getById(id);
    await account.destroy();
}
