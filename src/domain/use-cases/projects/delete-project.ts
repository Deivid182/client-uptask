import { TEditProject } from "@/domain/entities/project/types";
import { ProjectsRepositoryImpl } from "@/data/repositories/projects.repository";

const { deleteProject } = new ProjectsRepositoryImpl();

export const DeleteProjectUseCase = async (id: TEditProject["_id"]) => {
  return await deleteProject(id);
}