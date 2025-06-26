import TaskCard from "../featuers/tasks/components/TaskCard";
import TasksForm from "../featuers/tasks/components/TaskForm";
import { gql, useQuery } from "@apollo/client";
import { Task } from "../featuers/tasks/types";
import { GET_TASKS } from "../featuers/tasks/graphql/queries";

export default function Tasks() {
    const { loading, error, data } = useQuery<{ findAll: Task[] }>(GET_TASKS);

    if (loading) return <p>جاري التحميل...</p>;
    if (error) return <p>خطأ: {error.message}</p>;

    return (
        <div>
            <TasksForm />
            <hr />
            {data?.findAll.map((task: Task) => (
                <TaskCard task={task} key={task.id} />
            ))}
        </div>
    )
}