
import { z } from "zod";
import { projectSchema, createProjectSchema } from "./schema";
import { TTask } from "../task/types";

export type TProject = z.infer<typeof projectSchema>;
export type TProjectWithTasks = TProject & { tasks: TTask[] };
export type TCreateProject = z.infer<typeof createProjectSchema>;

export type ProjectFormData = Pick<TCreateProject, "clientName" | "projectName" | "description">;
export type EditProjectFormData = Pick<TProject, "clientName" | "projectName" | "description">;
export type TEditProject = {
  id: TProject["id"];
  formData: ProjectFormData
};
