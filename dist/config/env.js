"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
exports.ENV = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI || 'mongodb+srv://toDo:toDotest@cluster0.4vodx3w.mongodb.net/todoapp',
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '24h',
};
//# sourceMappingURL=env.js.map