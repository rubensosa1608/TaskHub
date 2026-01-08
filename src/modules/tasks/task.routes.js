import { Router } from 'express'
import { TaskController } from './task.controller.js';
import { TaskService } from './task.service.js';

export const taskRouter = Router()
const TaskServiceI = new TaskService();
const TaskControllerI = new TaskController(TaskServiceI);

taskRouter.get('/:id', TaskControllerI.getTaskById)
taskRouter.get('/', TaskControllerI.getAllTasks)
taskRouter.post('/', TaskControllerI.createTask)
taskRouter.put('/:id', TaskControllerI.updateTask)
taskRouter.delete('/:id', TaskControllerI.deleteTask)
