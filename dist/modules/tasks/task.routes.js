"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_js_1 = require("./task.controller.js");
const auth_middleware_js_1 = require("../../middlewares/auth.middleware.js");
const validate_middleware_js_1 = require("../../middlewares/validate.middleware.js");
const task_validator_js_1 = require("./task.validator.js");
const router = (0, express_1.Router)();
router.use(auth_middleware_js_1.authMiddleware); // todas las rutas requieren auth
router.get('/', task_controller_js_1.getAll);
router.post('/', (0, validate_middleware_js_1.validate)(task_validator_js_1.createTaskSchema), task_controller_js_1.create);
router.put('/:id', (0, validate_middleware_js_1.validate)(task_validator_js_1.updateTaskSchema), task_controller_js_1.update);
router.delete('/:id', task_controller_js_1.remove);
router.patch('/:id/toggle', task_controller_js_1.toggle);
exports.default = router;
//# sourceMappingURL=task.routes.js.map