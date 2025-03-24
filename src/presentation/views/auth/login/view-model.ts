import { LoginUserFormData, loginUserSchema } from "@/domain/entities/auth";
import { LoginUserUseCase } from "@/domain/use-cases/auth/login-user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function LoginUserViewModel () {

  const form = useForm<LoginUserFormData>({
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const navigate = useNavigate()
  const { mutate } = useMutation({
    mutationFn: LoginUserUseCase,
    onSuccess: () => {
      toast.success("Logged in successfully");
      form.reset()
      navigate("/projects");
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  async function onSubmit(data: LoginUserFormData) {
    console.log(data)
    mutate(data)
  }

  return {
    onSubmit,
    form
  }
}