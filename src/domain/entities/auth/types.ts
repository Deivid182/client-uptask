import { z } from "zod";
import { loginUserSchema, responseLoginUserSchema } from "./schema";

export type LoginUserFormData = z.infer<typeof loginUserSchema>
export type LoginUserResponse = z.infer<typeof responseLoginUserSchema>
export type LoginUserResponseData = LoginUserResponse["data"]