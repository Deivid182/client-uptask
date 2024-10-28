import { z } from "zod";

export const taskStatusSchema = z.enum(["PENDING", "ON_HOLD", "IN_PROGRESS", "UNDER_REVIEW", "COMPLETED"]);

export const taskSchema = z.object({
  _id: z.string().default(""),
  name: z.string().min(2, { message: "Name is required" }).max(100),
  description: z.string().min(2, { message: "Description is required" }),
  project: z.string().default(""),
  status: taskStatusSchema.default("PENDING"),
}); 

export const createTaskSchema = taskSchema.omit({ _id: true, project: true });