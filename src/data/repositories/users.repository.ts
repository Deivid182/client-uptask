import { AxiosError } from "axios";
import { api } from "../sources/remote/api/api";
import { ErrorResponse } from "../sources/remote/models/error.model";
import { ResponseApi } from "../sources/remote/models/response.model";
import { UsersRepository } from "@/domain/repositories/users.repository";
import { CreateUserFormData, CreateUserResponseData, responseCreateUserSchema } from "@/domain/entities/user";

export class UsersRepositoryImpl implements UsersRepository {
  async registerUser(values: CreateUserFormData): Promise<ResponseApi<CreateUserResponseData>> {
    try {
      const { data } = await api.post("/users", values)

      const user = responseCreateUserSchema.parse(data)

      return {
        success: user.success,
        message: user.message,
        path: user.path,
        statusCode: user.statusCode,
        timestamp: new Date(user.timestamp),
        data: user.data
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>
      throw new Error(axiosError.response?.data.data.response.message)
    }
  }
}