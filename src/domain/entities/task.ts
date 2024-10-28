import { TaskStatus } from "./task-status"

export interface Task {
  _id: string
  project: string
  name: string
  description: string
  status: TaskStatus
  createdAt: Date
  updatedAt: Date
}