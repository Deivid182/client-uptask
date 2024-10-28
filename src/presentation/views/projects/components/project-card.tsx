import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/presentation/components/ui/popover"
import { EllipsisVertical } from "lucide-react";
import { type TProject } from "@/domain/entities/project/types";
import { Button } from "@/presentation/components/ui/button";
import { DashboardProjectsViewModel } from "../dashboard-projects/view.model";

type Props = {
  project: TProject;
};
export default function ProjectCard({ project }: Props) {

  const { mutate } = DashboardProjectsViewModel()

  return (
    <li key={project._id} className="flex justify-between gap-x-6 px-5 py-10">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto space-y-2">
          <Link
            to={`/projects/${project._id}`}
            className="text-gray-600 cursor-pointer hover:underline text-3xl font-bold"
          >
            {project.projectName}
          </Link>
          <p className="text-sm text-gray-400">Cliente: {project.clientName}</p>
          <p className="text-sm text-gray-400">{project.description}</p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-x-6">
        <Popover>
          <PopoverTrigger asChild className="cursor-pointer">
            <EllipsisVertical />
          </PopoverTrigger>
          <PopoverContent side="top">
            <div className="flex flex-col gap-2">
              <Link to={`/projects/${project._id}`} className='block px-3 py-1 text-sm leading-6 text-gray-900'>
                Ver Proyecto
              </Link>
              <Link to={`/projects/${project._id}/edit`} className='block px-3 py-1 text-sm leading-6 text-gray-900'>
                Editar Proyecto
              </Link>
              <Button onClick={() => mutate(project._id)} variant='destructive' className='w-full'>Eliminar Proyecto</Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </li>
  );
}
