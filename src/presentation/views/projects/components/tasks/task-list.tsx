import { TTask } from "@/domain/entities/task/types"
import TaskCard from "./task-card"

type Props = {
  tasks: TTask[]
}

type TGroupedTasks = {
  [key: string]: TTask[]
}

const initilGroupedTasks: TGroupedTasks = {
  PENDING: [],
  ON_HOLD: [],
  IN_PROGRESS: [],
  UNDER_REVIEW: [],
  COMPLETED: []
}

const statusDictionary: Record<string, string> = {
  PENDING: 'Pending',
  ON_HOLD: 'On Hold',
  IN_PROGRESS: 'In Progress',
  UNDER_REVIEW: 'Under Review',
  COMPLETED: 'Completed'
}

const statusColor: Record<string, string> = {
  PENDING: 'border-green-300',
  ON_HOLD: 'border-yellow-300',
  IN_PROGRESS: 'border-blue-300',
  UNDER_REVIEW: 'border-red-300',
  COMPLETED: 'border-gray-300'
}

export default function TaskList({ tasks }: Props) {

  const groupedTasks = tasks.reduce((acc, task) => {
    let currentGroup = acc[task.status] ? [...acc[task.status]] : [];
    currentGroup = [...currentGroup, task]
    return { ...acc, [task.status]: currentGroup };
}, initilGroupedTasks);

  // console.log(groupedTasks)

  return (
    <>
      <h2 className="text-5xl font-black my-10">Tareas</h2>

      <div className='flex gap-5 overflow-x-scroll 2xl:overflow-auto pb-32'>
        {Object.entries(groupedTasks).map(([status, tasks]) => (
          <div key={status} className='min-w-[300px] 2xl:min-w-0 2xl:w-1/5'>
            <h3 className={`text-3xl py-2 font-black border-b-4 ${statusColor[status]}` }>{statusDictionary[status]}</h3>
            <ul className='mt-5 space-y-5'>
              {tasks.length === 0 ? (
                <li className="text-gray-500 text-center pt-3">No Hay tareas</li>
              ) : (
                tasks.map(task => <TaskCard key={task._id} task={task} />)
              )}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
