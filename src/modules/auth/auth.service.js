import { prisma } from './lib/prisma.js';
import { hashPassword, comparePassword } from '../utils/bcrypt.js';

export class AuthService {

    async createUser(email, password) {

        const emailExists = await prisma.users.findUnique({
            where: { email }
        });

        if (emailExists) {
            const error = new Error('Email already in use');
            error.status = 409;
            throw error;
        }   

        const hashedPassword = await hashPassword(password);

        const newUser = await prisma.users.create({
            data: {
                email: email,
                password: hashedPassword
            },
            select: {
                id: true,
                email: true
            }
        })

        return { user: newUser, created: true };
        
    }

    async findUserByEmail(email) {
        const user = await prisma.users.findUnique({
            where: { email }
        });

        return user;
    }

    async comparePasswords(plainPassword, hashedPassword) {
    
        return await comparePassword(plainPassword, hashedPassword);
    }

    async 

}