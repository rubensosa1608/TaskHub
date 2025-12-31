import { Router } from 'express'
import * as taskController from './task.controller.js';

export const taskRouter = Router()

taskRouter.get('/:id', taskController.getTaskById)
taskRouter.get('/', taskController.getAllTasks)
taskRouter.post('/', taskController.createTask)
taskRouter.put('/:id', taskController.updateTask)
taskRouter.delete('/:id', taskController.deleteTask)
