import { z } from "zod";
import { baseResponseSchema } from "./schema";

export type BaseResponse = z.infer<typeof baseResponseSchema>;