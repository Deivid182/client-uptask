import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserFormData, createUserSchema } from "@/domain/entities/user";
import { RegisterUserUseCase } from "@/domain/use-cases/users/create-user";

export function RegisterUserViewModel () {

  const form = useForm<CreateUserFormData>({
      resolver: zodResolver(createUserSchema),
      defaultValues: {
        name: "",
        email: "",
        password: "",
      },
      mode: "onChange",
    });

  const navigate = useNavigate()
  const { mutate } = useMutation({
    mutationFn: RegisterUserUseCase,
    onSuccess: () => {
      toast.success("Registered successfully");
      navigate("/projects");
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  async function onSubmit(data: CreateUserFormData) {
    mutate(data)
  }

  return {
    form,
    onSubmit
  }
}