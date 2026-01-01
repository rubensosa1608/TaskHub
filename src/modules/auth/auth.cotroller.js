import AuthService from './auth.service.js';
import {loginSchema, registerSchema} from './auth.validators.js';
import { signToken, verifyToken } from '../../utils/jwt.js';

export class AuthController {

    async register(req, res, next) {
        try {
            const {error, value} = registerSchema.validate(req.body);

            if (error) {
                const er = new Error('Los datos de registro no son válidos reviselos e intente de nuevo');
                er.status = 400;
                throw er;
            }

            const { email, password } = value;
            const existingUser = await AuthService.findUserByEmail(email);

            if (existingUser) {
                const er = new Error('El correo electrónico ya está en uso');
                er.status = 409;
                throw er;
            }

            const newUser = await AuthService.createUser(email, password);
            res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
            
        } catch (err) {
            next(err);
        }
    }

    async login(req, res, next) {
        try {
            const {error, value} = loginSchema.validate(req.body);
            
            if (error) {
                const er = new Error('Los datos de inicio de sesión no son válidos reviselos e intente de nuevo');
                er.status = 400;
                throw er;
            }

            const { email, password } = value;
            const user = await AuthService.findUserByEmail(email);

            const passwordsMatch = await AuthService.comparePasswords(password, user.password);
            const token = signToken(user);

            // Mejoras de seguridad para la cookie del token
            // res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'Strict' });

            if (!passwordsMatch) {
                const er = new Error('Correo electrónico o contraseña incorrectos');
                er.status = 401;
                throw er;
            }

            res.status(200).json({ message: 'Inicio de sesión exitoso', user: { id: user.id, email: user.email }, token });

        } catch (err) {
            next(err);
        }
    }
}