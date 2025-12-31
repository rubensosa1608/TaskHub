import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),

  PORT: z
    .string()
    .regex(/^\d+$/, 'PORT debe ser un número')
    .transform(Number)
    .default('3000'),

  DATABASE_URL: z.string().url(),

  JWT_SECRET: z.string().min(10, 'JWT_SECRET demasiado corto'),
  JWT_EXPIRES_IN: z.string().default('1d'),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('❌ Variables de entorno inválidas');
  console.error(parsedEnv.error.format());
  process.exit(1);
}

export const env = parsedEnv.data;
