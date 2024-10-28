import { buttonVariants } from "@/presentation/components/ui/button"
import { Link } from "react-router-dom"
import ProjectList from "../components/project-list"
import DashboardSkeleton from "@/presentation/components/loaders/dashboard-skeleton"
import { DashboardProjectsViewModel } from "./view.model"
export default function DashboardView() {

  const { data, isLoading } = DashboardProjectsViewModel()
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold">Projects</h1>
      <Link to="/projects/create" className={buttonVariants({ variant: "default" })}>Create project</Link>
      {
        isLoading ? (
          <DashboardSkeleton />
        ) : !data?.data?.length ? (
          <p>No projects found</p>
        ) : (
          <ProjectList data={data.data} />
        )
      }
    </div>
  )
}
