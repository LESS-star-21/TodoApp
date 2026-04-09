"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const auth_model_1 = require("./auth.model");
const bcrypt_1 = require("../../libs/bcrypt");
const jwt_1 = require("../../libs/jwt");
const registerUser = async (name, email, password) => {
    const exists = await auth_model_1.User.findOne({ email });
    if (exists)
        throw new Error('El email ya está registrado');
    const hashed = await (0, bcrypt_1.hashPassword)(password);
    const user = await auth_model_1.User.create({ name, email, password: hashed });
    return { token: (0, jwt_1.generateToken)(user.id), user: { id: user.id, name, email } };
};
exports.registerUser = registerUser;
const loginUser = async (email, password) => {
    const user = await auth_model_1.User.findOne({ email });
    if (!user)
        throw new Error('Credenciales inválidas');
    const valid = await (0, bcrypt_1.comparePassword)(password, user.password);
    if (!valid)
        throw new Error('Credenciales inválidas');
    return { token: (0, jwt_1.generateToken)(user.id), user: { id: user.id, name: user.name, email } };
};
exports.loginUser = loginUser;
//# sourceMappingURL=auth.service.js.map