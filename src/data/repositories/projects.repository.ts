import { AxiosError } from "axios";
import { api } from "../sources/remote/api/api";
import { ErrorResponse } from "../sources/remote/models/error.model";
import { ResponseApi } from "../sources/remote/models/response.model";
import { ProjectsRepository } from "@/domain/repositories/projects.repository";
import { dashboardProjectSchema, projectWithTasksSchema } from "@/domain/entities/project/schema";
import { TCreateProject, TEditProject, TProject, TProjectWithTasks } from "@/domain/entities/project/types";

export class ProjectsRepositoryImpl implements ProjectsRepository {
  async getAll(): Promise<ResponseApi<TProject[]>> {
    try {
      const { data } = await api.get("/projects")
      const response = dashboardProjectSchema.safeParse(data)

      console.log(response)

      if(response.success) {
        return {
          success: true,
          message: "Projects fetched successfully",
          data: response.data
        }
      }

      return {
        success: false,
        message: response.error.message,
        error: response.error.message,
        data: []
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>
      throw new Error(axiosError.response?.data?.message as string)
    }
  }

  async createProject(data: TCreateProject): Promise<ResponseApi<TProject>> {
    try {
      const response = await api.post("/projects", data)
      return {
        success: true,
        message: "Project created successfully",
        data: response.data
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>
      throw new Error(axiosError.response?.data?.message as string)
    }
  }

  async findOne(id: TProject["_id"]): Promise<ResponseApi<TProjectWithTasks>> {
    try {
      const { data } = await api(`/projects/${id}`)

      const response = projectWithTasksSchema.safeParse(data)

      if(response.success) {
        return {
          success: true,
          message: "Project fetched successfully",
          data: response.data
        }
      }

      return {
        success: false,
        message: response.error.message,
        error: response.error.message
      }

    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>
      throw new Error(axiosError.response?.data?.message as string)
    }
  }
  
  async editProject(data: TEditProject): Promise<ResponseApi<TProject>> {
    try {
      const response = await api.patch(`/projects/${data._id}`, data.formData)
      return {
        success: true,
        message: "Project edited successfully",
        data: response.data
      }

    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>
      throw new Error(axiosError.response?.data?.message as string)    
    }
  }

  async deleteProject(id: TProject["_id"]): Promise<ResponseApi<TProject>> {
    try {
      const response = await api.delete(`/projects/${id}`)
      return {
        success: true,
        message: "Project deleted successfully",
        data: response.data
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>
      throw new Error(axiosError.response?.data?.message as string)
    }
  }
}
