import { removeTask } from "@/actions/task-actions"
import { Button } from "./ui/button"

interface Props {
    taskId: number
}
export const TaskButtonDelete = ({taskId }: Props) => {

    return (
        <form action={removeTask}>
            <input type="hidden" name="taskId" value={taskId} />
            <Button variant={'destructive'}>
                Delete
            </Button>
        </form>
    )
}
