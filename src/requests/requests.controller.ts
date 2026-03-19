import type { Request, Response, NextFunction } from 'express';
import {Router} from 'express';
import {requestService} from './request.service';

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', _delete);

export default router;

function getAll(req: Request, res: Response, next: NextFunction): void {
    requestService.getAll()
        .then(reqs => res.json(reqs))
        .catch(next);
}

function getById(req: Request, res: Response, next: NextFunction): void {
    requestService.getById(Number(req.params.id))
        .then(r => res.json(r))
        .catch(next);
}

function create(req: Request, res: Response, next: NextFunction): void {
    requestService.create(req.body)
        .then(() => res.json({ message: 'Request created' }))
        .catch(next);
}

function update(req: Request, res: Response, next: NextFunction): void {
    requestService.update(Number(req.params.id), req.body)
        .then(() => res.json({ message: 'Request updated' }))
        .catch(next);
}

function _delete(req: Request, res: Response, next: NextFunction): void {
    requestService.delete(Number(req.params.id))
        .then(() => res.json({ message: 'Request deleted' }))
        .catch(next);
}
