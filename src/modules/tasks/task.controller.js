
import { ca } from 'zod/locales';
import * as taskValidator from './task.validators.js'

export class TaskController {

    constructor(TaskService) {
        this.TaskService = TaskService;
        
        this.createTask = this.createTask.bind(this);
        this.getAllTasks = this.getAllTasks.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.getTaskById = this.getTaskById.bind(this);
    }

        
    async createTask (req, res) {

        try {
            const result = taskValidator.createTaskSchema.safeParse(req.body);
            
            if (!result.success) {
              const er = new Error(
              result.error.errors.map(e => e.message).join(', ')
            );
            er.status = 400;
            throw er;
          }

            const { title, description, priority, limit_date, user_id } = result.data;
            
            const newTask = await this.TaskService.createTask({
                title,
                description,
                priority,
                limit_date,
                user_id
            });

            res.status(201).json({
                message: 'Tarea creada exitosamente',
                task: newTask
            });

        } catch (err) {
            next(err);
        }


    }

    async getAllTasks (req, res) {

        try {
            const idUser = req.params.idUser;

            const tasks = await this.TaskService.getAllTasks( idUser );

            res.status(200).json({
                message: 'Tareas obtenidas exitosamente',
                tasks: tasks
            });

        } catch (err) {
            next(err);
        }

    }

    async updateTask (req, res ) {

    }
    async  deleteTask (req, res) {

    }

    async getTaskById (req, res) {

    }
        
}

