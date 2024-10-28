import { TasksRepositoryImpl } from "@/data/repositories/tasks.repository";
import { TaskPayload } from "@/domain/entities/task/types";

const { addTask } = new TasksRepositoryImpl();

export const AddTaskUseCase = async (data: TaskPayload) => {
  return await addTask(data);
}