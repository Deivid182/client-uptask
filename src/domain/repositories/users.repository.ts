import { ResponseApi } from "@/data/sources/remote/models";
import { CreateUserFormData, CreateUserResponseData } from "../entities/user";

export interface UsersRepository {
  registerUser(data: CreateUserFormData): Promise<ResponseApi<CreateUserResponseData>>
}