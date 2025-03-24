import { z } from "zod";
import { baseResponseSchema } from "../response";

export const loginUserSchema = z.object({
  email: z.string().email({ message: "Invalid email" }).min(2, { message: "Email is required" }).max(100),
  password: z.string().min(2, { message: "Password is required" }).max(100),
})

export const responseUserFound = z.object({
  accessToken: z.string().default(""),
  id: z.string().default(""),
  name: z.string().default(""),
  email: z.string().default(""),
  createdAt: z.string().default(""),
  updatedAt: z.string().default(""),
  verified: z.boolean().default(false)
})

export const responseLoginUserSchema = baseResponseSchema.extend({
  data: responseUserFound
})

