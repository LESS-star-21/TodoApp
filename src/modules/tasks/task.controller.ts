import { Response } from 'express';
import { AuthRequest } from '../../middlewares/auth.middleware';
import * as taskService from './task.service';

export const getAll = async (req: AuthRequest, res: Response): Promise<void> => {
  const tasks = await taskService.getTasks(req.userId!);
  res.json(tasks);
};

export const create = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const task = await taskService.createTask(req.userId!, req.body);
    res.status(201).json(task);
  } catch (e: any) { res.status(400).json({ message: e.message }); }
};

export const update = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const task = await taskService.updateTask(String(req.params.id), req.userId!, req.body);
    if (!task) { res.status(404).json({ message: 'Tarea no encontrada' }); return; }
    res.json(task);
  } catch (e: any) { res.status(400).json({ message: e.message }); }
};

export const remove = async (req: AuthRequest, res: Response): Promise<void> => {
  const task = await taskService.deleteTask(String(req.params.id), req.userId!);
  if (!task) { res.status(404).json({ message: 'Tarea no encontrada' }); return; }
  res.json({ message: 'Tarea eliminada' });
};

export const toggle = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const task = await taskService.toggleTask(String(req.params.id), req.userId!);
    res.json(task);
  } catch (e: any) { res.status(404).json({ message: e.message }); }
};