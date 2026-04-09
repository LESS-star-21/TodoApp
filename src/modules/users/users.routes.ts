import { Router } from 'express';
import { getAll, getById } from './users.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';

const router = Router();
router.use(authMiddleware);

router.get('/', getAll);
router.get('/:id', getById);

export default router;