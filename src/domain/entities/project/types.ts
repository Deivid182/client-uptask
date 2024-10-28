
import { z } from "zod";
import { projectSchema, createProjectSchema } from "./schema";

export type TProject = z.infer<typeof projectSchema>;
export type TCreateProject = z.infer<typeof createProjectSchema>;

export type ProjectFormData = Pick<TCreateProject, "clientName" | "projectName" | "description">;
export type EditProjectFormData = Pick<TProject, "clientName" | "projectName" | "description">;
export type TEditProject = {
  _id: TProject["_id"];
  formData: ProjectFormData
};