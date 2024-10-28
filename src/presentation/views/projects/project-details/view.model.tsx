import { useProject } from "@/presentation/hooks/use-project"
import { type TProject } from "@/domain/entities/project/types"
import { useMutation } from "@tanstack/react-query"
import { AddTaskUseCase } from "@/domain/use-cases/tasks/add-task"
import { toast } from "sonner"
import { TTaskFormData } from "@/domain/entities/task/types"
import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { createTaskSchema } from "@/domain/entities/task/schema"
import { zodResolver } from "@hookform/resolvers/zod"
export const ProjectDetailsViewModel = (projectId: TProject["_id"]) => {

  const { data, isLoading, error, isError } = useProject(projectId)
  const navigate = useNavigate()

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const newTask = !!queryParams.get('newTask')
  // const { projectId} = useParams<Params>() 

  const form = useForm<TTaskFormData>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      name: '',
      description: '',
    }
  })

  const { mutate } = useMutation({
    mutationFn: AddTaskUseCase,
    onSuccess: (data) => {
      toast.success(data.message)
      navigate(location.pathname, { replace: true})
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })
  
  const onSubmit = (data: TTaskFormData) => {
    mutate({projectId, formData: data})
    form.reset()
    // queryParams.delete('newTask')
    navigate(location.pathname, { replace: true})
  }

  const onOpenChange = () => navigate(location.pathname, { replace: true})

  const onOpen = () => navigate(location.pathname + '?newTask=true')
  
  return {data, isLoading, error, isError, mutate, onSubmit, form, newTask, onOpenChange, onOpen}
}