import { ProjectFormData } from "@/domain/entities/project/types";
import { CreateProjectUseCase } from "@/domain/use-cases/projects/create-project";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CreateProjectViewModel = () => {

  const navigate = useNavigate()
  const { mutate } = useMutation({
    mutationFn: CreateProjectUseCase,
    onSuccess: () => {
      toast.success("Project created successfully", {
        onAutoClose: () => navigate("/projects"),
      });
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  async function onSubmit(data: ProjectFormData) {

    console.log(data)
    mutate(data)
  }

  return {
    onSubmit
  }
}

export default CreateProjectViewModel