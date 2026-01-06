import eps from "express";
import setupSwagger from './config/swagger.js';
export const app = eps();
import { taskRouter } from "./modules/tasks/task.routes.js";
import { authRouter } from './modules/auth/auth.routes.js';
import { errorHandler } from "./middlewares/error.middleware.js";
import { authMiddleware } from "./middlewares/auth.middleware.js";

app.use(eps.json());

// Rutas de autenticación
app.use('/auth', authRouter);

// Rutas protegidas de tareas
app.use('/tasks', authMiddleware, taskRouter);

// Swagger documentation setup
setupSwagger(app);

// Error handling middleware
app.use(errorHandler);