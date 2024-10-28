import { TCreateProject } from "@/domain/entities/project/types";
import { ProjectsRepositoryImpl } from "@/data/repositories/projects.repository";

const { createProject } = new ProjectsRepositoryImpl();

export const CreateProjectUseCase = async (data: TCreateProject) => {
  return await createProject(data);
}