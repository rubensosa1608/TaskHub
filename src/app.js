import eps from "express";
import setupSwagger from './config/swagger.js';
export const app = eps();
import { taskRouter } from "./modules/tasks/task.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

app.use(eps.json());

app.use('/tasks', taskRouter);

// Swagger documentation setup
setupSwagger(app);

// Error handling middleware
app.use(errorHandler);