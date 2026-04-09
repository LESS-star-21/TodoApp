"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_js_1 = require("./config/database.js");
const env_1 = require("./config/env");
const start = async () => {
    await (0, database_js_1.connectDB)();
    app_1.default.listen(env_1.ENV.PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${env_1.ENV.PORT}`);
    });
};
start();
//# sourceMappingURL=server.js.map