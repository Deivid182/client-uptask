import { z } from "zod";
import { taskSchema } from "../task/schema";
import { baseResponseSchema } from "../response";

export const projectSchema = z.object({
  id: z.string().default(""),
  clientName: z.string().min(2, { message: "Client name is required" }).max(100),
  projectName: z.string().min(2, { message: "Project name is required" }).max(100),
  description: z.string().min(2, { message: "Description is required" }),
  createdAt: z.string().default(""),
  updatedAt: z.string().default(""),
});

export const projectWithTasksSchema = projectSchema.extend({ tasks: z.array(taskSchema) })

export const createProjectSchema = projectSchema.omit({ id: true, createdAt: true, updatedAt: true });

export const editProjectSchema = projectSchema.omit({ id: true, createdAt: true, updatedAt: true });

export const responseDashboardProjectSchema = baseResponseSchema.extend({
  data: z.array(projectSchema)
}) 

export const responseCreateProjectSchema = baseResponseSchema.extend({
  data: projectSchema
})


export const responseProjectWithTasksSchema = baseResponseSchema.extend({
  data: projectWithTasksSchema
})

export const responseEditProjectSchema = baseResponseSchema.extend({
  data: editProjectSchema
})

export const responseDeleteProjectSchema = baseResponseSchema.extend({
  data: projectSchema
})