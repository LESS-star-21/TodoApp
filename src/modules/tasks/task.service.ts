import * as taskRepository from './task.repository';

export const getTasks = (userId: string) =>
  taskRepository.findTasksByUser(userId);

export const createTask = (userId: string, data: object) =>
  taskRepository.createTask(userId, data);

export const updateTask = (taskId: string, userId: string, data: object) =>
  taskRepository.findAndUpdateTask(taskId, userId, data);

export const deleteTask = (taskId: string, userId: string) =>
  taskRepository.findAndDeleteTask(taskId, userId);

export const toggleTask = async (taskId: string, userId: string) => {
  const task = await taskRepository.findTaskById(taskId, userId);
  if (!task) throw new Error('Tarea no encontrada');
  task.completed = !task.completed;
  return task.save();
};