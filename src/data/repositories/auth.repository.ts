import { AxiosError } from "axios";
import { api } from "../sources/remote/api/api";
import { ErrorResponse } from "../sources/remote/models/error.model";
import { ResponseApi } from "../sources/remote/models/response.model";
import { AuthRepository } from "@/domain/repositories/auth.repository";
import { responseLoginUserSchema, type LoginUserFormData, LoginUserResponseData } from "@/domain/entities/auth";

export class AuthRepositoryImpl implements AuthRepository {
  async loginUser(values: LoginUserFormData): Promise<ResponseApi<LoginUserResponseData>> {
    try {
      const { data } = await api.post("/auth/login", values)

      const auth = responseLoginUserSchema.parse(data)

      return {
        success: auth.success,
        message: auth.message,
        path: auth.path,
        statusCode: auth.statusCode,
        timestamp: new Date(auth.timestamp),
        data: auth.data
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>
      throw new Error(axiosError.response?.data.data.response.message)
    }
  }
}