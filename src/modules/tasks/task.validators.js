import * as z from "zod";

// Esquema para crear una task
export const createTaskSchema = z.object({
  title: z.string().min(1, "El título es obligatorio"),
  description: z.string().optional(),
  priority: z.string(),
  limit_date: z.date(),
  user_id: z.int()
});

// Esquema para actualizar una task
export const updateTaskSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  priority: z.string(),
  limit_date: z.date().optional(),
  user_id: z.int()
});