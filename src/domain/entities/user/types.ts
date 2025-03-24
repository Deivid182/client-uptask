import { z } from "zod";
import { createUserSchema, responseCreateUserSchema } from "./schema";

export type CreateUserFormData = z.infer<typeof createUserSchema>
export type CreateUserResponse = z.infer<typeof responseCreateUserSchema>
export type CreateUserResponseData = z.infer<typeof responseCreateUserSchema>["data"]