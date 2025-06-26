import { useDispatch } from "react-redux";
import { Task } from "../types";
import { AppDispatch } from "../../../app/store";
import { deleteTask, updateTask } from "../tasksSlice";
import React, { useState } from "react";

export default function TaskCard({ task }: { task: Task }) {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch<AppDispatch>()

    const handleDelete = () => {
        dispatch(deleteTask(task.id))
    }

    const handleComplete = () => {
        dispatch(updateTask({ id: task.id, completed: !task.completed }))
    }

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const onSubmitTitle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(updateTask({ id: task.id, title }))
        setTitle('')
    }

    return (
        <div>

            <h1>{task.title}</h1>
            <p>Completed : {task.completed ? "Yes" : "NO"}</p>
            <p>Created At : {task.createdAt.toLocaleString()}</p>
            <div>
                <form onSubmit={onSubmitTitle}>
                    <input value={title} onChange={handleTitle} />
                    <button type="submit">Update</button>
                </form>
            </div>
            <div>
                <button onClick={handleDelete}>Delete</button>
                <input type={"checkbox"} checked={task.completed} onChange={handleComplete} />
            </div>
        </div>
    )
}