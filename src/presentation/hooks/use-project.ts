import { useQuery } from "@tanstack/react-query"
import { type TProject } from "@/domain/entities/project/types"
import { FindOneProjectUseCase } from "@/domain/use-cases/projects/find-one-project"

export const useProject = (projectId: TProject["_id"]) => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => FindOneProjectUseCase(projectId),
  })

  return {
    data,
    isLoading,
    error,
    isError
  }
}