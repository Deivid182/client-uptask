import { z } from "zod";
import { baseResponseSchema } from "../response";

export const taskStatusSchema = z.enum(["PENDING", "ON_HOLD", "IN_PROGRESS", "UNDER_REVIEW", "COMPLETED"]);

export const taskSchema = z.object({
  id: z.string().default(""),
  name: z.string().min(2, { message: "Name is required" }).max(100),
  description: z.string().min(2, { message: "Description is required" }),
  projectId: z.string().default(""),
  status: taskStatusSchema.default("PENDING"),
  createdAt: z.string().default(""),
  updatedAt: z.string().default(""),
}); 

export const createTaskSchema = taskSchema.omit({ id: true, projectId: true, createdAt: true, updatedAt: true, status: true });

export const responseCreateTaskSchema = baseResponseSchema.extend({
  data: taskSchema
})