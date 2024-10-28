import { AxiosError } from "axios";
import { TasksRepository } from "@/domain/repositories/tasks.repository";
import { TTask, TaskPayload } from "@/domain/entities/task/types";
import { ResponseApi } from "../sources/remote/models/response.model";
import { ErrorResponse } from "../sources/remote/models/error.model";
import { api } from "../sources/remote/api/api";

export class TasksRepositoryImpl implements TasksRepository {
  async addTask({ formData, projectId }: TaskPayload): Promise<ResponseApi<TTask>> {
    try {
      const { data } = await api.post(`/projects/${projectId}/tasks`, formData)
      return {
        data,
        success: true,
        message: "Task created successfully",
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>
      throw new Error(axiosError.response?.data?.message as string)
    }
  }
}
