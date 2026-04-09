"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggle = exports.remove = exports.update = exports.create = exports.getAll = void 0;
const taskService = __importStar(require("./task.service"));
const getAll = async (req, res) => {
    const tasks = await taskService.getTasks(req.userId);
    res.json(tasks);
};
exports.getAll = getAll;
const create = async (req, res) => {
    try {
        const task = await taskService.createTask(req.userId, req.body);
        res.status(201).json(task);
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
};
exports.create = create;
const update = async (req, res) => {
    try {
        const task = await taskService.updateTask(String(req.params.id), req.userId, req.body);
        if (!task) {
            res.status(404).json({ message: 'Tarea no encontrada' });
            return;
        }
        res.json(task);
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
};
exports.update = update;
const remove = async (req, res) => {
    const task = await taskService.deleteTask(String(req.params.id), req.userId);
    if (!task) {
        res.status(404).json({ message: 'Tarea no encontrada' });
        return;
    }
    res.json({ message: 'Tarea eliminada' });
};
exports.remove = remove;
const toggle = async (req, res) => {
    try {
        const task = await taskService.toggleTask(String(req.params.id), req.userId);
        res.json(task);
    }
    catch (e) {
        res.status(404).json({ message: e.message });
    }
};
exports.toggle = toggle;
//# sourceMappingURL=task.controller.js.map