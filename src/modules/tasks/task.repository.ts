import { Task } from './task.model';

export const findTasksByUser = (userId: string) =>
  Task.find({ user: userId }).sort({ createdAt: -1 });

export const createTask = (userId: string, data: object) =>
  Task.create({ ...data, user: userId });

export const findAndUpdateTask = (taskId: string, userId: string, data: object) =>
  Task.findOneAndUpdate({ _id: taskId, user: userId }, data, { new: true });

export const findAndDeleteTask = (taskId: string, userId: string) =>
  Task.findOneAndDelete({ _id: taskId, user: userId });

export const findTaskById = (taskId: string, userId: string) =>
  Task.findOne({ _id: taskId, user: userId });