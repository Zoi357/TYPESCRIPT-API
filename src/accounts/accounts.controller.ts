import type { Request, Response, NextFunction } from 'express';
import {Router} from 'express';
import {accountService} from './account.service';

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', _delete);

export default router;

function getAll(req: Request, res: Response, next: NextFunction): void {
    accountService.getAll()
        .then(accounts => res.json(accounts))
        .catch(next);
}

function getById(req: Request, res: Response, next: NextFunction): void {
    accountService.getById(Number(req.params.id))
        .then(account => res.json(account))
        .catch(next);
}

function create(req: Request, res: Response, next: NextFunction): void {
    accountService.create(req.body)
        .then(() => res.json({ message: 'Account created' }))
        .catch(next);
}

function update(req: Request, res: Response, next: NextFunction): void {
    accountService.update(Number(req.params.id), req.body)
        .then(() => res.json({ message: 'Account updated' }))
        .catch(next);
}

function _delete(req: Request, res: Response, next: NextFunction): void {
    accountService.delete(Number(req.params.id))
        .then(() => res.json({ message: 'Account deleted' }))
        .catch(next);
}
