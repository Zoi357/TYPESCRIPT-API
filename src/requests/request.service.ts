import {db} from '../_helpers/db';
import {Request as ReqModel, RequestCreationAttributes} from './request.model';

export const requestService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete,
};

async function getAll(): Promise<ReqModel[]> {
    return await db.Request.findAll();
}

async function getById(id:number): Promise<ReqModel> {
    const req = await db.Request.findByPk(id);
    if (!req) throw new Error('Request not found');
    return req;
}

async function create(params: RequestCreationAttributes): Promise<void> {
    await db.Request.create(params);
}

async function update(id: number, params: Partial<RequestCreationAttributes>): Promise<void> {
    const req = await getById(id);
    await req.update(params);
}

async function _delete(id: number): Promise<void> {
    const req = await getById(id);
    await req.destroy();
}
