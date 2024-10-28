import { ResponseApi } from "@/data/sources/remote/models/response.model";
import { type TaskPayload, type TTask } from "@/domain/entities/task/types";

export interface TasksRepository {
  addTask({ formData, projectId }: TaskPayload): Promise<ResponseApi<TTask>>
}