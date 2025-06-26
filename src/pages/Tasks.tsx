import { useEffect } from "react";
import { AppDispatch, RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../featuers/tasks/tasksSlice";
import TaskCard from "../featuers/tasks/components/TaskCard";
import TasksForm from "../featuers/tasks/components/TaskForm";

export default function Tasks() {
    const tasks = useSelector((state: RootState) => state.tasks);
    const dispath = useDispatch<AppDispatch>();
    useEffect(() => {
        dispath(fetchTasks())
    }, [dispath])

    return (
        <div>
            <TasksForm />
            <hr />
            {tasks.tasks.map(task => (
                <TaskCard task={task} key={task.id} />
            ))}
        </div>
    )
}