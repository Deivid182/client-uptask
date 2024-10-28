import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { FindOneProjectUseCase } from "@/domain/use-cases/projects/find-one-project"
import { EditProjectUseCase } from "@/domain/use-cases/projects/edit-project"
import { EditProjectFormData } from "@/domain/entities/project/types"

export const EditProjectViewModel = (projectId: string) => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => FindOneProjectUseCase(projectId),
  })
  const queryClient = useQueryClient()

  const navigate = useNavigate()

  const { mutate, status } = useMutation({
    mutationFn: EditProjectUseCase,
    onSuccess: (data) => {

      queryClient.invalidateQueries({queryKey: ["projects"]})
      queryClient.invalidateQueries({queryKey: ["project", projectId]})

      navigate("/projects")
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  const onSubmit = (data: EditProjectFormData) => {
    mutate({_id: projectId, formData: data})
  }

  return {
    data,
    isLoading,
    error,
    isError,
    onSubmit,
    status
  }
}