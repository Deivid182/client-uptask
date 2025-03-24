import { z } from "zod";

export const baseResponseSchema = z.object({
  success: z.boolean().default(false),
  message: z.string().default(""),
  path: z.string().default(""),
  statusCode: z.number().default(200),
  timestamp: z.string().default(""),
})