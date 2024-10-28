import { ResponseApi } from "@/data/sources/remote/models/response.model";
import { type TCreateProject, type TEditProject, type TProject } from "@/domain/entities/project/types";

export interface ProjectsRepository {
  getAll(): Promise<ResponseApi<TProject[]>>;
  createProject(data: TCreateProject): Promise<ResponseApi<TProject>>;
  findOne(id: TProject["_id"]): Promise<ResponseApi<TProject>>;
  editProject(data: TEditProject): Promise<ResponseApi<TProject>>;
  deleteProject(id: TProject["_id"]): Promise<ResponseApi<TProject>>
}