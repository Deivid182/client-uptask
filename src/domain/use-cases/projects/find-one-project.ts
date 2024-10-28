import { ProjectsRepositoryImpl } from "@/data/repositories/projects.repository";
import { TProject } from "@/domain/entities/project/types";

const { findOne } = new ProjectsRepositoryImpl();

export const FindOneProjectUseCase = async (id: TProject["_id"]) => {
  return await findOne(id);
}