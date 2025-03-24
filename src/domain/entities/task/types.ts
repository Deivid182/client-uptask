import { z } from "zod"
import { taskSchema } from "./schema"
import { TProject } from "../project/types"

export type TTask = z.infer<typeof taskSchema>

export type TTaskFormData = Pick<TTask, "name" | "description">

export type TaskPayload = {
  formData: TTaskFormData
  projectId: TProject["id"]
}