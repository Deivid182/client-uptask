import Modal from "./modal"
import { Button } from "../ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { type TTaskFormData } from "@/domain/entities/task/types"
import { UseFormReturn } from "react-hook-form"

type Props = {
  onSubmit: (data: TTaskFormData) => void
  open: boolean
  onOpenChange: (open: boolean) => void
  onOpen: () => void
  form: UseFormReturn<TTaskFormData>
}

export default function AddTaskModal({ onSubmit, open, onOpenChange, form, onOpen }: Props) {

  return (
    <>
      <Button onClick={onOpen}>Add Task</Button>
      <Modal
        title="Add task"
        description="Add a new task to this project"
        open={open}
        onOpenChange={onOpenChange}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-xl mx-auto">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name task" {...field} />
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
                    <Input placeholder="Description task" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={form.formState.isSubmitting} type="submit">Submit</Button>
          </form>
        </Form>
      </Modal>
    </>
  )
}
