import { type VerifyUserFormData } from "@/domain/entities/auth";
import { AuthRepositoryImpl } from "@/data/repositories/auth.repository";

const authRepositoryImpl = new AuthRepositoryImpl();

export const VerifyUserUseCase = async (data: VerifyUserFormData) => {
  return await authRepositoryImpl.verifyUser(data);
}