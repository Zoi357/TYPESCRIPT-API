import type { Request, Response, NextFunction } from 'express';
import {Router} from 'express';
import {departmentService} from './department.service';

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', _delete);

export default router;

function getAll(req: Request, res: Response, next: NextFunction): void {
    departmentService.getAll()
        .then(depts => res.json(depts))
        .catch(next);
}

function getById(req: Request, res: Response, next: NextFunction): void {
    departmentService.getById(Number(req.params.id))
        .then(dept => res.json(dept))
        .catch(next);
}

function create(req: Request, res: Response, next: NextFunction): void {
    departmentService.create(req.body)
        .then(() => res.json({ message: 'Department created' }))
        .catch(next);
}

function update(req: Request, res: Response, next: NextFunction): void {
    departmentService.update(Number(req.params.id), req.body)
        .then(() => res.json({ message: 'Department updated' }))
        .catch(next);
}

function _delete(req: Request, res: Response, next: NextFunction): void {
    departmentService.delete(Number(req.params.id))
        .then(() => res.json({ message: 'Department deleted' }))
        .catch(next);
}
