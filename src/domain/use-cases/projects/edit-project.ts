import { TEditProject } from "@/domain/entities/project/types";
import { ProjectsRepositoryImpl } from "@/data/repositories/projects.repository";

const { editProject } = new ProjectsRepositoryImpl();

export const EditProjectUseCase = async (data: TEditProject) => {
  return await editProject(data);
}