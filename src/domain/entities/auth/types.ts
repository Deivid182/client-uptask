import { z } from "zod";
import { loginUserSchema, responseLoginUserSchema, verifyUserSchema, responseVerifyUserSchema } from "./schema";

export type LoginUserFormData = z.infer<typeof loginUserSchema>
export type LoginUserResponse = z.infer<typeof responseLoginUserSchema>
export type LoginUserResponseData = LoginUserResponse["data"]

export type VerifyUserFormData = z.infer<typeof verifyUserSchema>
export type VerifyUserResponse = z.infer<typeof responseVerifyUserSchema>
export type VerifyUserResponseData = VerifyUserResponse["data"]