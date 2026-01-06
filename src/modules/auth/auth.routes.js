import { Router } from 'express';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';

export const authRouter = Router();
const AuthService = new AuthService();
const authController = new AuthController(AuthService);

authRouter.post('/register', authController.register)
authRouter.post('/login', authController.login)