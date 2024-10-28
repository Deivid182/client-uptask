import { ProjectsRepositoryImpl } from "@/data/repositories/projects.repository";

const { getAll } = new ProjectsRepositoryImpl();

export const GetAllProjectsUseCase = async () => {
  return await getAll();
}