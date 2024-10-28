import { type TProject } from "@/domain/entities/project/types"
import ProjectCard from "./project-card"
type Props = {
  data: TProject[]
}
export default function ProjectList({ data }: Props) {
  return (
    <ul role="list" className="divide-y divide-gray-100 border border-gray-100 mt-10 bg-white shadow-lg">
      {data.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </ul>
  )
}
