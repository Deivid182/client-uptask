import { VerifyUserFormData, verifyUserSchema } from "@/domain/entities/auth";
import { VerifyUserUseCase } from "@/domain/use-cases/auth/verify-user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function VerifyUserViewModel () {

  const form = useForm<VerifyUserFormData>({
    resolver: zodResolver(verifyUserSchema),
    defaultValues: {
      token: "",
    },
    mode: "onChange",
  });

  const navigate = useNavigate()
  const { mutate } = useMutation({
    mutationFn: VerifyUserUseCase,
    onSuccess: (data) => {
      toast.success(data.message);
      form.reset()
      navigate("/auth/login");
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  async function onSubmit(data: VerifyUserFormData) {
    mutate(data)
  }

  return {
    onSubmit,
    form
  }
}