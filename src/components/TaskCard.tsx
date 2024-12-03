import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import clsx from 'clsx'
import { buttonVariants } from './ui/button'
import { Task } from '@prisma/client'
import { TaskButtonDelete } from './TaskButtonDelete'
import Link from 'next/link'

interface Props {
    task: Task;
}
const TaskCard = ({ task }: Props) => {
    return (
        <Card key={task.id} className="w-[350px] ">
            <CardHeader className='items-center flex justify-between flex-row'>
                <CardTitle >
                    {task.name}
                </CardTitle>
                <Badge className={clsx({
                    'bg-red-500': task.priority === 'high',
                    'bg-yellow-500': task.priority === 'medium',
                    'bg-green-500': task.priority === 'low',
                    'bg-blue-500': task.priority === 'urgent',
                })}>
                    {task.priority}
                </Badge>
            </CardHeader>
            <CardContent className='border-t-4 '>
                <p className='my-2'>
                    {task.description}
                </p>
                <span className="text-slate-600">
                    {new Date(task.createdAt).toLocaleDateString()}
                </span>
            </CardContent>
            <CardFooter className='flex justify-end gap-x-2'>
                <TaskButtonDelete taskId={task.id} />
                <Link
                    href={`/tasks/${task.id}/edit`}
                    className={buttonVariants({ variant: "secondary" })}
                >
                    Edit
                </Link>
            </CardFooter>
        </Card>
    )
}

export default TaskCard