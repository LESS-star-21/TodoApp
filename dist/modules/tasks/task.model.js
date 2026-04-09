"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    completed: { type: Boolean, default: false },
    dueDate: { type: Date, default: null },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });
exports.Task = (0, mongoose_1.model)('Task', taskSchema);
//# sourceMappingURL=task.model.js.map