import { z } from "zod";
import { baseResponseSchema } from "../response";

export const createUserSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }).max(100),
  email: z.string().email({ message: "Invalid email" }).min(2, { message: "Email is required" }).max(100),
  password: z.string().min(2, { message: "Password is required" }).max(100),
})

export const responseCreateUserSchema = baseResponseSchema.extend({
  data: z.object({
    id: z.string().default(""),
    name: z.string().default(""),
    email: z.string().default(""),
    createdAt: z.string().default(""),
    verified: z.boolean().default(false),
    updatedAt: z.string().default(""),
  })
})

