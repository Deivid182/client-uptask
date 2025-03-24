import { UsersRepositoryImpl } from "@/data/repositories/users.repository";
import { CreateUserFormData } from "@/domain/entities/user";

const usersRepositoryImpl = new UsersRepositoryImpl();

export const RegisterUserUseCase = async (data: CreateUserFormData) => {
  return await usersRepositoryImpl.registerUser(data);
}