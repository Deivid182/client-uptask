import { ResponseApi } from "@/data/sources/remote/models";
import type { LoginUserFormData, LoginUserResponseData } from "@/domain/entities/auth";

export interface AuthRepository {
  loginUser(data: LoginUserFormData): Promise<ResponseApi<LoginUserResponseData>>
}