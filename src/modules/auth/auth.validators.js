import { z } from 'zod';

export const registerSchema = z.object({
    email: z
    .string()
    .email('Correo electrónico inválido'),
    password: z
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    confirmPassword: z
    .string()
    .min(6, 'La confirmación de la contraseña debe tener al menos 6 caracteres'),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
});

export const loginSchema = z.object({
    email: z
    .string()
    .email('Correo electrónico inválido')
    .toLowerCase(),
    password: z
    .string()
    .min(1, 'La contraseña es obligatoria'),
});