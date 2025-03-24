import { LoginUserFormData } from "@/domain/entities/auth";
import { AuthRepositoryImpl } from "@/data/repositories/auth.repository";

const authRepositoryImpl = new AuthRepositoryImpl();

export const LoginUserUseCase = async (data: LoginUserFormData) => {
  return await authRepositoryImpl.loginUser(data);
}