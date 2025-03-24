import { AxiosError } from "axios";
import { api } from "../sources/remote/api/api";
import { ErrorResponse } from "../sources/remote/models/error.model";
import { ResponseApi } from "../sources/remote/models/response.model";
import { ProjectsRepository } from "@/domain/repositories/projects.repository";
import { responseDashboardProjectSchema, responseCreateProjectSchema, responseProjectWithTasksSchema, responseEditProjectSchema, responseDeleteProjectSchema } from "@/domain/entities/project";
import { TCreateProject, TEditProject, TProject, TProjectWithTasks } from "@/domain/entities/project/types";

export class ProjectsRepositoryImpl implements ProjectsRepository {
  async getAll(): Promise<ResponseApi<TProject[]>> {
    try {
      const { data } = await api.get("/projects")
      const response = responseDashboardProjectSchema.parse(data)

      return {
        success: response.success,
        message: response.message,
        data: response.data,
        path: response.path,
        statusCode: response.statusCode,
        timestamp: new Date(response.timestamp)
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>
      throw new Error(axiosError.response?.data?.message as string)
    }
  }

  async createProject(data: TCreateProject): Promise<ResponseApi<TProject>> {
    try {
      const response = await api.post("/projects", data)

      const project = responseCreateProjectSchema.parse(response.data)

      return {
        success: project.success,
        message: project.message,
        data: response.data,
        path: project.path,
        statusCode: project.statusCode,
        timestamp: new Date(project.timestamp)
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>
      throw new Error(axiosError.response?.data?.message as string)
    }
  }

  async findOne(id: TProject["id"]): Promise<ResponseApi<TProjectWithTasks>> {
    try {
      const { data } = await api(`/projects/${id}`)
      const response = responseProjectWithTasksSchema.parse(data)
      return {
        success: response.success,
        message: response.message,
        data: response.data,
        path: response.path,
        statusCode: response.statusCode,
        timestamp: new Date(response.timestamp)
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>
      throw new Error(axiosError.response?.data?.message as string)
    }
  }
  
  async editProject(data: TEditProject): Promise<ResponseApi<TProject>> {
    try {
      const response = await api.patch(`/projects/${data.id}`, data.formData)
      const project = responseEditProjectSchema.parse(response.data)
      return {
        success: project.success,
        message: project.message,
        data: response.data,
        path: project.path,
        statusCode: project.statusCode,
        timestamp: new Date(project.timestamp)
      }

    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>
      throw new Error(axiosError.response?.data?.message as string)    
    }
  }

  async deleteProject(id: TProject["id"]): Promise<ResponseApi<TProject>> {
    try {
      const response = await api.delete(`/projects/${id}`)

      const project = responseDeleteProjectSchema.parse(response.data)
      
      return {
        success: project.success,
        message: project.message,
        data: response.data,
        path: project.path,
        statusCode: project.statusCode,
        timestamp: new Date(project.timestamp)
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>
      throw new Error(axiosError.response?.data?.message as string)
    }
  }
}
