import { Navigate, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/presentation/components/ui/form"
import { Input } from "@/presentation/components/ui/input"
import { EditProjectFormData } from "@/domain/entities/project/types"
import { Button } from "@/presentation/components/ui/button"
import { editProjectSchema } from "@/domain/entities/project/schema"
import { EditProjectViewModel } from "./view.model"
import { useEffect } from "react"
import { toast } from "sonner"

type Params = {
  projectId: string
}

export default function EditProjectView() {
  const { projectId } = useParams<Params>()

  const { data, isLoading, isError, error, onSubmit, status } = EditProjectViewModel(projectId!)
  const form = useForm<EditProjectFormData>({
    resolver: zodResolver(editProjectSchema),
    defaultValues: {
      clientName: "",
      projectName: "",
      description: "",
    },
  })

  useEffect(() => {
    if (data && data.data) {
      form.setValue("clientName", data.data.clientName)
      form.setValue("projectName", data.data.projectName)
      form.setValue("description", data.data.description)
    }
  }, [data, form])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    toast.error(error?.message)
    return <Navigate to="/projects" />
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-xl mx-auto">
        <FormField
          control={form.control}
          name="projectName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ProjectName</FormLabel>
              <FormControl>
                <Input placeholder="Some Project" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="clientName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ClientName</FormLabel>
              <FormControl>
                <Input placeholder="Some Client" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Some description" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={form.formState.isSubmitting || status === "pending"} type="submit">Submit</Button>
      </form>
    </Form>
  )
}
