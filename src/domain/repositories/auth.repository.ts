import { ResponseApi } from "@/data/sources/remote/models";
import type { LoginUserFormData, LoginUserResponseData, VerifyUserFormData, VerifyUserResponseData } from "@/domain/entities/auth";

export interface AuthRepository {
  loginUser(data: LoginUserFormData): Promise<ResponseApi<LoginUserResponseData>>
  verifyUser(data: VerifyUserFormData): Promise<ResponseApi<VerifyUserResponseData>>
}