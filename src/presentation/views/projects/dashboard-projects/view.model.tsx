import { GetAllProjectsUseCase } from "@/domain/use-cases/projects/get-all-projects"
import { DeleteProjectUseCase } from "@/domain/use-cases/projects/delete-project"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const DashboardProjectsViewModel = () => {

  const { data, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => GetAllProjectsUseCase(),
  })

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: DeleteProjectUseCase,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["projects"] })

      toast.success(data.message)
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  return {
    data,
    isLoading,
    error,
    mutate
  }
}