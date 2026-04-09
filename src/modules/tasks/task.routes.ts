import { Router } from 'express';
import { getAll, create, update, remove, toggle } from './task.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { validate } from '../../middlewares/validate.middleware';
import { createTaskSchema, updateTaskSchema } from './task.validator';

const router = Router();
router.use(authMiddleware); // todas las rutas requieren auth

router.get('/',          getAll);
router.post('/',         validate(createTaskSchema), create);
router.put('/:id',       validate(updateTaskSchema), update);
router.delete('/:id',    remove);
router.patch('/:id/toggle', toggle);

export default router;