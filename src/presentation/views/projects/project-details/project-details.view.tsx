import { Navigate, useParams } from "react-router-dom"
import { toast } from "sonner"
import { ProjectDetailsViewModel } from "./view.model"
import AddTaskModal from "@/presentation/components/modals/add-task-modal"

type Params = {
  projectId: string
}

export default function EditProjectView() {
  const { projectId } = useParams<Params>()

  const { data, isError, error, onSubmit, onOpen, onOpenChange, form, newTask } = ProjectDetailsViewModel(projectId!)

  if (isError) {
    toast.error(error?.message)
    return <Navigate to="/projects" />
  }

  if(data?.data) {
    return (
      <div className="space-y-5">
        <h1 className="text-5xl font-black">{data.data.projectName}</h1>
        <p className="text-2xl font-light text-gray-500 ">{data.data.description}</p>
        <nav className="flex gap-4">
          <AddTaskModal
            onSubmit={onSubmit}
            form={form}
            onOpen={onOpen}
            onOpenChange={onOpenChange}
            open={newTask}
          />
        </nav>
      </div>
    )
  }

}
