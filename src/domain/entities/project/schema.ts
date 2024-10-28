import { z } from "zod";

export const projectSchema = z.object({
  _id: z.string().default(""),
  clientName: z.string().min(2, { message: "Client name is required" }).max(100),
  projectName: z.string().min(2, { message: "Project name is required" }).max(100),
  description: z.string().min(2, { message: "Description is required" }),
});

export const createProjectSchema = projectSchema.omit({ _id: true });
export const editProjectSchema = projectSchema.omit({ _id: true });

export const dashboardProjectSchema = z.array(
  projectSchema.pick({ _id: true, clientName: true, projectName: true, description: true })
);