"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleTask = exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasks = void 0;
const task_model_1 = require("./task.model");
const getTasks = (userId) => task_model_1.Task.find({ user: userId }).sort({ createdAt: -1 });
exports.getTasks = getTasks;
const createTask = (userId, data) => task_model_1.Task.create({ ...data, user: userId });
exports.createTask = createTask;
const updateTask = (taskId, userId, data) => task_model_1.Task.findOneAndUpdate({ _id: taskId, user: userId }, data, { new: true });
exports.updateTask = updateTask;
const deleteTask = (taskId, userId) => task_model_1.Task.findOneAndDelete({ _id: taskId, user: userId });
exports.deleteTask = deleteTask;
const toggleTask = async (taskId, userId) => {
    const task = await task_model_1.Task.findOne({ _id: taskId, user: userId });
    if (!task)
        throw new Error('Tarea no encontrada');
    task.completed = !task.completed;
    return task.save();
};
exports.toggleTask = toggleTask;
//# sourceMappingURL=task.service.js.map