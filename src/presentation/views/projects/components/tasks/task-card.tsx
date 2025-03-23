import { TTask } from "@/domain/entities/task/types"
import { Popover, PopoverContent } from "@/presentation/components/ui/popover"
import { PopoverTrigger } from "@radix-ui/react-popover"
import { EllipsisVertical } from "lucide-react"
import { Button } from "@/presentation/components/ui/button"

type Props = {
  task: TTask
}

export default function TaskCard({ task }: Props) {
  return (
    <li className="p-3 bg-white border border-slate-300 flex justify-between gap-3 items-start">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto space-y-2">
          <Button variant='ghost' className="text-sm text-gray-400">{task.name}</Button>
          <p className="text-sm text-gray-400 px-4">{task.description}</p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-x-6">
        <Popover>
          <PopoverTrigger asChild className="cursor-pointer">
            <EllipsisVertical />
          </PopoverTrigger>
          <PopoverContent side="top">
            <div className="flex flex-col gap-2">
              <Button onClick={() => {}} variant='destructive' className='w-full'>View</Button>
              <Button onClick={() => {}} variant='destructive' className='w-full'>Edit</Button>
              <Button onClick={() => {}} variant='destructive' className='w-full'>Delete</Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </li>
  )
}
