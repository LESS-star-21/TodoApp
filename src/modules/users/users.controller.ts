import { Response } from 'express';
import { AuthRequest } from '../../middlewares/auth.middleware';
import * as usersService from './users.service';

export const getAll = async (_req: AuthRequest, res: Response): Promise<void> => {
  try {
    const users = await usersService.getUsers();
    res.json(users);
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
};

export const getById = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const user = await usersService.getUserById(String(req.params.id));
    if (!user) { res.status(404).json({ message: 'Usuario no encontrado' }); return; }
    res.json(user);
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
};